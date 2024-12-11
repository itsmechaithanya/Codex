const { validationResult } = require("express-validator");
const HttpError = require("../Middleware/http-error");
const Member = require("../Models/Member");

const createMember = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Invalid inputs passed, please try again",
      errors: errors.array(),
    });
  }
  const { firstName, lastName, email, title, description, linkedIn, role } =
    req.body;
  try {
    existingMember = await Member.findOne({ email: email.toLowerCase() });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong fetching the data, please try again",
      500
    );
    return next(error);
  }
  if (existingMember) {
    const error = new HttpError("Email already exists, please try again", 500);
    return next(error);
  }
  const createdMember = new Member({
    firstName,
    lastName,
    email: email.toLowerCase(),
    title,
    description,
    linkedIn,
    role,
    image: req.file.path,
  });
  try {
    await createdMember.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while creating the member, please try again",
      500
    );
    return next(error);
  }
  res.status(201).json({
    message: "Member created successfully",
  });
};
const getAllMembers = async (req, res, next) => {
  let members;
  try {
    members = await Member.find({});
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while fetching the data, please try again",
      500
    );
    return next(error);
  }
  res.status(200).json({ members: members });
};
const getMembersByRole = async (req, res, next) => {
  let members;
  const role = req.params.role;
  try {
    members = await Member.find({ role: role });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while fetching the data, please try again",
      500
    );
    return next(error);
  }
  res.status(200).json({ members: members });
};
const getMemberById = async (req, res, next) => {
  let member;
  const id = req.params.id;
  try {
    member = await Member.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while fetching the data, please try again",
      500
    );
    return next(error);
  }
  res.json({ member: member });
};
const updateMemberById = async (req, res, next) => {
  let member;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed, please try again", 422);
    return next(error);
  }
  const id = req.params.id;
  const { firstName, lastName, email, title, description, linkedIn, role } =
    req.body;
  try {
    member = await Member.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while fetching data, please try again",
      500
    );
    return next(error);
  }
  if (!member) {
    const error = new HttpError("Member not found, please try again", 500);
    return next(error);
  }
  if (req.file) {
    member.image = req.file.path;
  } else {
    member.image = member.image;
  }
  member.firstName = firstName ? firstName : member.firstName;
  member.lastName = lastName ? lastName : member.lastName;
  member.email = email ? email.toLowerCase() : member.email;
  member.title = title ? title : member.title;
  member.description = description ? description : member.description;
  member.linkedIn = linkedIn ? linkedIn : member.linkedIn;
  member.role = role ? role : member.role;
  try {
    await member.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Something went wrong while updating the data, please try again",
      500
    );
    return next(error);
  }
  res.status(200).json({ member: member });
};
const updateImageById = async (req, res, next) => {
  const id = req.params.id;
  let member;
  try {
    member = await Member.findById(id);
  } catch (err) {
    const error = new HttpError("Something wrong while fetching the member");
    return next(error);
  }
  if (!member) {
    const error = new HttpError("Member not found");
    return next(error);
  }
  member.image = req.file.path;
  try {
    member.save();
  } catch (err) {
    const error = new HttpError("Error occured while saving the member");
    return next(error);
  }
  res.status(201).json({ message: "Member updated successfully" });
};
const deleteMember = async (req, res, next) => {
  const id = req.params.id;
  let member;
  try {
    member = await Member.findOne({ _id: id });
    if (!member) {
      const error = new HttpError("No member found, please try again", 500);
      return next(error);
    }
    const imagePath = member.image;

    await member.deleteOne();
    res.status(200).json({ message: "Member successfully deleted" });
    fs.unlink(imagePath, (err) => {
      console.log(err);
    });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while deleting the member, please try again",
      500
    );
    return next(error);
  }
};

exports.createMember = createMember;
exports.getAllMembers = getAllMembers;
exports.getMembersByRole = getMembersByRole;
exports.getMemberById = getMemberById;
exports.updateMemberById = updateMemberById;
exports.updateImageById = updateImageById;
exports.deleteMember = deleteMember;
