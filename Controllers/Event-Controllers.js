const { validationResult } = require("express-validator");
const HttpError = require("../Middleware/http-error");
const Event = require("../Models/Event");

const createEvent = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Invalid inputs passed, please try again",
      errors: errors.array(),
    });
  }
  const { title, description, date, type } = req.body;
  const createdEvent = new Event({
    title,
    description,
    date,
    type,
    image: req.file.path,
  });
  try {
    await createdEvent.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while creating the event, please try again",
      500
    );
    return next(error);
  }
  res.status(201).json({
    message: "Event created successfully",
  });
};
const getAllEvents = async (req, res, next) => {
  let events;
  try {
    events = await Event.find({});
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while fetching the data, please try again",
      500
    );
    return next(error);
  }
  res.status(200).json({ events: events });
};
const getUpcomingEvents = async (req, res, next) => {
  let events;
  try {
    // Get today's date in UTC and set the time to 00:00:00
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    // Find events with a date greater than or equal to today
    events = await Event.find({ date: { $gte: today.toISOString() } });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while fetching the data, please try again",
      500
    );
    return next(error);
  }

  // Return the filtered events
  res.status(200).json({ events });
};
const getEventById = async (req, res, next) => {
  let event;
  const id = req.params.id;
  try {
    event = await Event.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while fetching the data, please try again",
      500
    );
    return next(error);
  }
  res.json({ event: event });
};
const updateEventById = async (req, res, next) => {
  let event;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed, please try again", 422);
    return next(error);
  }
  const id = req.params.id;
  const { title, description, date, type } = req.body;
  try {
    event = await Event.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while fetching data, please try again",
      500
    );
    return next(error);
  }
  if (!event) {
    const error = new HttpError("Event not found, please try again", 500);
    return next(error);
  }
  if (req.file) {
    event.image = req.file.path;
  } else {
    event.image = event.image;
  }
  event.title = title ? title : event.title;
  event.description = description ? description : event.description;
  event.date = date ? date : event.date;
  event.type = type ? type : event.type;
  try {
    await event.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Something went wrong while updating the data, please try again",
      500
    );
    return next(error);
  }
  res.status(200).json({ event: event });
};
const updateImageById = async (req, res, next) => {
  const id = req.params.id;
  let event;
  try {
    event = await Event.findById(id);
  } catch (err) {
    const error = new HttpError("Something wrong while fetching the event");
    return next(error);
  }
  if (!event) {
    const error = new HttpError("Event not found");
    return next(error);
  }
  event.image = req.file.path;
  try {
    event.save();
  } catch (err) {
    const error = new HttpError("Error occured while saving the event");
    return next(error);
  }
  res.status(201).json({ message: "Event updated successfully" });
};
const deleteEvent = async (req, res, next) => {
  const id = req.params.id;
  let event;
  try {
    event = await Event.findOne({ _id: id });
    if (!event) {
      const error = new HttpError("No event found, please try again", 500);
      return next(error);
    }
    const imagePath = event.image;

    await event.deleteOne();
    res.status(200).json({ message: "Event successfully deleted" });
    fs.unlink(imagePath, (err) => {
      console.log(err);
    });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while deleting the event, please try again",
      500
    );
    return next(error);
  }
};

exports.createEvent = createEvent;
exports.getAllEvents = getAllEvents;
exports.getUpcomingEvents = getUpcomingEvents;
exports.getEventById = getEventById;
exports.updateEventById = updateEventById;
exports.updateImageById = updateImageById;
exports.deleteEvent = deleteEvent;
