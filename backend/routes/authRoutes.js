import express from "express";
import {
  signup,
  login,
  logout,
  refreshToken,
  completeOnboarding,
  getCurrentUser,
} from "../controllers/authController.js";
import { userAuth } from "../middlewares/authMiddleware.js";
import {
  validateUserSignUp,
  validateUserLogin,
} from "../middlewares/validate.js";
import { wrapAsync } from "../middlewares/wrapAsync.js";

const router = express.Router();

/* auth */
router.post("/signup", validateUserSignUp, wrapAsync(signup));
router.post("/login", validateUserLogin, wrapAsync(login));
router.post("/refresh", wrapAsync(refreshToken));
router.post("/logout", userAuth, wrapAsync(logout));

/* user info */
router.get("/me", userAuth, wrapAsync(getCurrentUser));

/* onboarding */
router.post("/onboarding/complete", userAuth, wrapAsync(completeOnboarding));

export default router;
