import { Router } from "express";
import {
  registerUser,
  updateProfile,
  updateAvatar,
  updateCoverImage,
  getUserProfile,
  getUserChannelProfile,
  getWatchHistory,
} from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { updatePassword } from "../controllers/user.controller.js";

import {
  logoutUser,
  refereshAccessToken,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

//secure routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refereshAccessToken);
router.route("/update-password").put(verifyJWT, updatePassword);
router.route("/update-profile").put(verifyJWT, updateProfile);
router.route("/update-avatar").patch(verifyJWT, upload.single("avatar"), updateAvatar);
router.route("/update-cover-image").put(verifyJWT, upload.single("coverImage"), updateCoverImage);
router.route("/user-details").get(verifyJWT, getUserProfile);

router.route("/c/:username").get(verifyJWT,getUserChannelProfile);
router.route("/watch-history").get(verifyJWT, getWatchHistory);



export default router;
