import Session from "../models/Session.js";
import Event from "../models/Event.js";
import ExpressError from "../middlewares/expressError.js";

export const startSession = async (req, res) => {
  const userId = req.user._id;
  const { contextSnapshot } = req.body;

  // Check if user has an active session
  const activeSession = await Session.findOne({
    userId,
    status: "active"
  });

  if (activeSession) {
    throw new ExpressError(400, "User already has an active session");
  }

  // Create new session
  const newSession = await Session.create({
    userId,
    contextSnapshot: contextSnapshot || {},
    status: "active"
  });

  // Log session start event
  await Event.create({
    sessionId: newSession._id,
    userId,
    eventType: "session_start",
    data: { contextSnapshot }
  });

  res.status(201).json({
    message: "Session started successfully",
    session: {
      id: newSession._id,
      status: newSession.status,
      createdAt: newSession.createdAt
    }
  });
};

export const endSession = async (req, res) => {
  const userId = req.user._id;
  const { sessionId } = req.params;

  const session = await Session.findOne({
    _id: sessionId,
    userId
  });

  if (!session) {
    throw new ExpressError(404, "Session not found");
  }

  if (session.status === "ended") {
    throw new ExpressError(400, "Session already ended");
  }

  session.status = "ended";
  await session.save();

  // Log session end event
  await Event.create({
    sessionId: session._id,
    userId,
    eventType: "session_end",
    data: {}
  });

  res.status(200).json({
    message: "Session ended successfully",
    session: {
      id: session._id,
      status: session.status,
      duration: session.updatedAt - session.createdAt
    }
  });
};

export const getActiveSession = async (req, res) => {
  const userId = req.user._id;

  const activeSession = await Session.findOne({
    userId,
    status: "active"
  });

  if (!activeSession) {
    return res.status(200).json({
      message: "No active session",
      session: null
    });
  }

  res.status(200).json({
    session: {
      id: activeSession._id,
      status: activeSession.status,
      generatedParams: activeSession.generatedParams,
      contextSnapshot: activeSession.contextSnapshot,
      createdAt: activeSession.createdAt
    }
  });
};

export const getUserSessions = async (req, res) => {
  const userId = req.user._id;
  const { limit = 10, skip = 0 } = req.query;

  const sessions = await Session.find({ userId })
    .sort({ createdAt: -1 })
    .limit(parseInt(limit))
    .skip(parseInt(skip));

  const total = await Session.countDocuments({ userId });

  res.status(200).json({
    sessions: sessions.map(s => ({
      id: s._id,
      status: s.status,
      createdAt: s.createdAt,
      updatedAt: s.updatedAt
    })),
    pagination: {
      total,
      limit: parseInt(limit),
      skip: parseInt(skip)
    }
  });
};
