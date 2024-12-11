const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
const memberSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  linkedIn: { type: String, required: true },
  image: { type: String, required: true },
  role: { type: String, required: true },
});
memberSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Member", memberSchema);
