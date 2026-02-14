import Feedback from "../models/Feedback.js";
import Session from "../models/Session.js";
import Event from "../models/Event.js";
import ExpressError from "../middlewares/expressError.js";

export const submitFeedback = async (req, res) => {
  const userId = req.user._id;
  const { sessionId, rating, comment, tags } = req.body;

  // Verify session exists and belongs to user
  const session = await Session.findOne({
    _id: sessionId,
    userId
  });

  if (!session) {
    throw new ExpressError(404, "Session not found");
  }

  // Create feedback
  const feedback = await Feedback.create({
    sessionId,
    userId,
    rating,
    comment: comment || "",
    tags: tags || []
  });

  // Log feedback event
  await Event.create({
    sessionId,
    userId,
    eventType: "feedback",
    data: { rating, comment, tags }
  });

  res.status(201).json({
    message: "Feedback submitted successfully",
    feedback: {
      id: feedback._id,
      rating: feedback.rating,
      createdAt: feedback.createdAt
    }
  });
};

export const getSessionFeedback = async (req, res) => {
  const userId = req.user._id;
  const { sessionId } = req.params;

  // Verify session belongs to user
  const session = await Session.findOne({
    _id: sessionId,
    userId
  });

  if (!session) {
    throw new ExpressError(404, "Session not found");
  }

  const feedback = await Feedback.find({ sessionId }).sort({ createdAt: -1 });

  res.status(200).json({
    feedback: feedback.map(f => ({
      id: f._id,
      rating: f.rating,
      comment: f.comment,
      tags: f.tags,
      createdAt: f.createdAt
    }))
  });
};

export const getUserFeedback = async (req, res) => {
  const userId = req.user._id;
  const { limit = 10, skip = 0 } = req.query;

  const feedback = await Feedback.find({ userId })
    .sort({ createdAt: -1 })
    .limit(parseInt(limit))
    .skip(parseInt(skip));

  const total = await Feedback.countDocuments({ userId });

  res.status(200).json({
    feedback: feedback.map(f => ({
      id: f._id,
      sessionId: f.sessionId,
      rating: f.rating,
      comment: f.comment,
      tags: f.tags,
      createdAt: f.createdAt
    })),
    pagination: {
      total,
      limit: parseInt(limit),
      skip: parseInt(skip)
    }
  });
};
