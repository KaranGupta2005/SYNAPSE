import express from "express";
import {
  startSession,
  endSession,
  getActiveSession,
  getUserSessions,
} from "../controllers/sessionController.js";
import { userAuth } from "../middlewares/authMiddleware.js";
import { validateSessionStart } from "../middlewares/validate.js";
import { wrapAsync } from "../middlewares/wrapAsync.js";

const router = express.Router();

// All session routes require authentication
router.use(userAuth);

// Session management
router.post("/start", validateSessionStart, wrapAsync(startSession));
router.post("/:sessionId/end", wrapAsync(endSession));
router.get("/active", wrapAsync(getActiveSession));
router.get("/history", wrapAsync(getUserSessions));

export default router;
