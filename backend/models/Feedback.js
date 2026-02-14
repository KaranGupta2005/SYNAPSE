import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema(
  {
    sessionId: {
      type: Schema.Types.ObjectId,
      ref: "Session",
      required: true,
      index: true
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },

    comment: {
      type: String,
      trim: true,
      maxlength: 500
    },

    tags: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

feedbackSchema.index({ sessionId: 1, createdAt: -1 });
feedbackSchema.index({ userId: 1, rating: 1 });

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;
