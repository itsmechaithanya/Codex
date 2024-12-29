const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const MemberControllers = require("../Controllers/Member-Controllers");
const imageUpload = require("../Middleware/image-upload");
const checkAuth = require("../Middleware/check-auth");

router.get("/get/all/members", MemberControllers.getAllMembers);
router.get("/get/members/byrole/:role", MemberControllers.getMembersByRole);
router.get("/get/member/byid/:id", MemberControllers.getMemberById);
router.get("/get/subroles", MemberControllers.getSubRoles);
router.post(
  "/create/member",
  checkAuth("Mentor"),
  imageUpload.single("image"),
  [
    check("firstName").isLength({ min: 2, max: 255 }),
    check("lastName").isLength({ min: 2, max: 255 }),
    check("email").isEmail(),
    check("title").isLength({ min: 2, max: 255 }),
    check("description").isLength({ min: 2, max: 255 }),
    check("linkedIn").isLength({ min: 2, max: 255 }),
    check("role").isLength({ min: 1, max: 255 }),
    check("subrole").isLength({ min: 1, max: 255 }).optional(),
  ],
  MemberControllers.createMember
);

router.patch(
  "/update/member/byid/:id",
  imageUpload.single("image"),
  checkAuth("Mentor"),
  MemberControllers.updateMemberById
);

router.patch(
  "/update/image/byid/:id",
  checkAuth("Mentor"),
  imageUpload.single("image"),
  MemberControllers.updateImageById
);
router.delete(
  "/delete/member/byid/:id",
  checkAuth("Mentor"),
  MemberControllers.deleteMember
);
module.exports = router;
