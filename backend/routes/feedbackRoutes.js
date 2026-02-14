import express from "express";
import {
  submitFeedback,
  getSessionFeedback,
  getUserFeedback,
} from "../controllers/feedbackController.js";
import { userAuth } from "../middlewares/authMiddleware.js";
import { validateFeedback } from "../middlewares/validate.js";
import { wrapAsync } from "../middlewares/wrapAsync.js";

const router = express.Router();

// All feedback routes require authentication
router.use(userAuth);

// Feedback management
router.post("/", validateFeedback, wrapAsync(submitFeedback));
router.get("/session/:sessionId", wrapAsync(getSessionFeedback));
router.get("/user", wrapAsync(getUserFeedback));

export default router;
