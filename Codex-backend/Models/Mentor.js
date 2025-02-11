const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const mentorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  linkedIn: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  role: { type: String, required: true },
});
mentorSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Mentor", mentorSchema);
