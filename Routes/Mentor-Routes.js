const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const mentorControllers = require("../Controllers/Mentor-Controllers");
const imageUpload = require("../Middleware/image-upload");
const checkAuth = require("../Middleware/check-auth");

router.get("/get/all/mentors", mentorControllers.getAllMentors);
router.get("/get/mentor/byid/:id", mentorControllers.getMentorById);
router.post(
  "/create/mentor",
  // checkAuth("Mentor"),
  imageUpload.single("image"),
  [
    check("firstName").isLength({ min: 2, max: 255 }),
    check("lastName").isLength({ min: 2, max: 255 }),
    check("title").isLength({ min: 2, max: 255 }),
    check("description").isLength({ min: 2, max: 255 }),
    check("role").isLength({ min: 1, max: 255 }),
    check("mobile").isNumeric().isLength({ min: 10, max: 10 }),
    check("email").isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  mentorControllers.createMentor
);
router.post("/login", mentorControllers.login);
router.patch(
  "/update/mentor/byid/:id",
  imageUpload.single("image"),
  // checkAuth("Mentor"),
  mentorControllers.updateMentorById
);

router.patch(
  "/update/password/byemail/:email",
  // checkAuth("Mentor"),
  mentorControllers.forgotPassword
);
router.patch(
  "/update/image/byid/:id",
  // checkAuth("Mentor"),
  imageUpload.single("image"),
  mentorControllers.updateImageById
);
router.delete(
  "/delete/mentor/byid/:id",
  // checkAuth("Mentor"),
  mentorControllers.deleteMentor
);
module.exports = router;
