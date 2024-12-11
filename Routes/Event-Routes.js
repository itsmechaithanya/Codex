const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const eventControllers = require("../Controllers/Event-Controllers");
const imageUpload = require("../Middleware/image-upload");
const checkAuth = require("../Middleware/check-auth");

router.get("/get/all/events", eventControllers.getAllEvents);
router.get("/get/upcomingevents", eventControllers.getUpcomingEvents);
router.get("/get/event/byid/:id", eventControllers.getEventById);
router.post(
  "/create/event",
  // checkAuth("Mentor"),
  imageUpload.single("image"),
  [
    check("date").isLength({ min: 2, max: 255 }),
    check("type").isLength({ min: 2, max: 255 }),

    check("title").isLength({ min: 2, max: 255 }),
    check("description").isLength({ min: 2, max: 255 }),
  ],
  eventControllers.createEvent
);

router.patch(
  "/update/event/byid/:id",
  imageUpload.single("image"),
  // checkAuth("Mentor"),
  eventControllers.updateEventById
);

router.patch(
  "/update/image/byid/:id",
  // checkAuth("Mentor"),
  imageUpload.single("image"),
  eventControllers.updateImageById
);
router.delete(
  "/delete/event/byid/:id",
  // checkAuth("Member"),
  eventControllers.deleteEvent
);
module.exports = router;
