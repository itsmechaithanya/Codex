const HttpError = require("../Middleware/http-error");
const { validationResult } = require("express-validator");
const Mentor = require("../Models/Mentor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const createMentor = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Invalid inputs passed, please try again",
      errors: errors.array(),
    });
  }
  const {
    firstName,
    lastName,
    email,
    password,
    mobile,
    title,
    description,
    linkedIn,
  } = req.body;
  let existingMentor;
  try {
    existingMentor = await Mentor.findOne({ email: email.toLowerCase() });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong fetching the data, please try again",
      500
    );
    return next(error);
  }
  if (existingMentor) {
    const error = new HttpError("Email already exists, please try again", 500);
    return next(error);
  }
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while encrypting the password, please try again",
      500
    );
    return next(error);
  }

  const image = req.file.path;
  const createdMentor = new Mentor({
    firstName,
    lastName,
    email: email.toLowerCase(),
    password: hashedPassword,
    image,
    title,
    description,
    linkedIn,
    role: "Mentor",
    mobile,
  });
  try {
    await createdMentor.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while creating mentor, please try again",
      500
    );
    return next(error);
  }
  let token;
  try {
    token = jwt.sign(
      {
        userId: createdMentor.id,
        email: createdMentor.email,
        role: createdMentor.role,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while creating the JWT token, please try again",
      500
    );
    return next(error);
  }
  res.status(201).json({
    userId: createdMentor.id,
    email: createdMentor.email,
    role: createdMentor.role,
    token: token,
  });
};
const getAllMentors = async (req, res, next) => {
  let mentors;
  try {
    mentors = await Mentor.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while fetching the data, please try again",
      500
    );
    return next(error);
  }
  res.json({ mentors: mentors });
};
const getMentorById = async (req, res, next) => {
  let mentor;
  const id = req.params.id;
  try {
    mentor = await Mentor.findOne({ _id: id }, "-password");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while fetching the data, please try again",
      500
    );
    return next(error);
  }
  res.json({ mentor: mentor });
};
const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingMentor;
  try {
    existingMentor = await Mentor.findOne({ email: email.toLowerCase() });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while verification of the mentor, please try again",
      500
    );
    return next(error);
  }
  if (!existingMentor) {
    const error = new HttpError("Invalid email, please try again", 401);
    return next(error);
  }
  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingMentor.password);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while verification of the password, please try again",
      500
    );
    return next(error);
  }
  if (!isValidPassword) {
    const error = new HttpError("Invalid crudentials, please try again", 401);
    return next(error);
  }
  let token;
  try {
    token = jwt.sign(
      {
        userId: existingMentor.id,
        email: existingMentor.email,
        role: existingMentor.role,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while fetching the JWT token, please try again",
      500
    );
    return next(error);
  }
  res.status(200).json({
    userId: existingMentor.id,
    email: existingMentor.email,
    role: existingMentor.role,
    token: token,
  });
};
const forgotPassword = async (req, res, next) => {
  const email = req.params.email;

  const { password, newPassword, confirmPassword } = req.body;

  let existingMentor;
  try {
    existingMentor = await Mentor.findOne({ email: email.toLowerCase() });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while verifying the mentor, please try again",
      500
    );
    return next(error);
  }

  if (!existingMentor) {
    const error = new HttpError("Invalid email, please try again", 401);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingMentor.password);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while verifying the password, please try again",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError("Invalid credentials, please try again", 401);
    return next(error);
  }
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(newPassword, 12);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while encrypting the password, please try again",
      500
    );
    return next(error);
  }

  // Update the password
  existingMentor.password = hashedPassword;

  try {
    // Save the updated mentor document
    await existingMentor.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while updating the password, please try again",
      500
    );
    return next(error);
  }

  res.status(200).json({
    message: "Password updated successfully",
  });
};
const updateMentorById = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed, please try again", 422);
    return next(error);
  }
  const id = req.params.id;

  const {
    firstName,
    lastName,
    password,
    mobile,
    title,
    description,
    linkedIn,
    email
  } = req.body;
  let mentor;
  try {
    mentor = await Mentor.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while fetching the data, please try again",
      500
    );
    return next(error);
  }
  if (!mentor) {
    const error = new HttpError("No mentor found, please try again", 500);
    return next(error);
  }
  let hashedPassword;
  let updatedPassword;
  if (password == null) {
    updatedPassword = mentor.password;
  } else {
    try {
      hashedPassword = await bcrypt.hash(password, 12);
      updatedPassword = hashedPassword;
    } catch (err) {
      const error = new HttpError(
        "Something went wrong while encrypting the password, please try again",
        500
      );
      return next(error);
    }
  }
  if (req.file) {
    mentor.image = req.file.path;
  }
  (mentor.email = email ? email : mentor.email),
  (mentor.firstName = firstName ? firstName : mentor.firstName),
    (mentor.lastName = lastName ? lastName : mentor.lastName),
    (mentor.password = updatedPassword),
    (mentor.mobile = mobile ? mobile : mentor.mobile),
    (mentor.role = "Mentor"),
    (mentor.title = title ? title : mentor.title);
  mentor.description = description ? description : mentor.description;
  mentor.linkedIn = linkedIn ? linkedIn : mentor.linkedIn;

  try {
    await mentor.save();
  } catch (err) {
    console.log(err)
    const error = new HttpError(
      "Something went wrong while the updation of mentor, please try again",
      500
    );
    return next(error);
  }
  try {
    token = jwt.sign(
      { userId: mentor.id, email: mentor.email, role: mentor.role },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
  } catch (err) {
    
    const error = new HttpError(
      "Something went wrong while fetching the JWT token, please try again",
      500
    );
    return next(error);
  }
  res.status(200).json({
    userId: mentor.id,
    email: mentor.email,
    role: mentor.role,
    token: token,
  });
};
const updateImageById = async (req, res, next) => {
  const id = req.params.id;
  let mentor;
  try {
    mentor = await Mentor.findById(id);
  } catch (err) {
    const error = new HttpError("Something wrong while fetching the mentor");
    return next(error);
  }
  if (!mentor) {
    const error = new HttpError("Mentor not found");
    return next(error);
  }
  mentor.image = req.file.path;
  try {
    mentor.save();
  } catch (err) {
    const error = new HttpError("Error occured while saving the mentor");
    return next(error);
  }
  res.status(200).json({ message: "Mentor updated successfully" });
};
const deleteMentor = async (req, res, next) => {
  const id = req.params.id;
  let mentor;
  try {
    mentor = await Mentor.findOne({ _id: id });
    if (!mentor) {
      const error = new HttpError("no mentor found, please try again", 500);
      return next(error);
    }
    const imagePath = mentor.image;

    await mentor.deleteOne();
    res.status(200).json({ message: "Mentor successfully deleted" });
    fs.unlink(imagePath, (err) => {
      console.log(err);
    });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while deleting the mentor, please try again",
      500
    );
    return next(error);
  }
};
exports.createMentor = createMentor;
exports.getMentorById = getMentorById;
exports.getAllMentors = getAllMentors;
exports.login = login;
exports.updateMentorById = updateMentorById;
exports.updateImageById = updateImageById;
exports.forgotPassword = forgotPassword;
exports.deleteMentor = deleteMentor;
