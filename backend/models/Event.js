import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
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

    eventType: {
      type: String,
      required: true,
      enum: ["session_start", "session_end", "feedback", "context_update", "parameter_change"]
    },

    data: {
      type: Schema.Types.Mixed,
      default: {}
    }
  },
  { timestamps: true }
);

eventSchema.index({ sessionId: 1, createdAt: -1 });
eventSchema.index({ userId: 1, eventType: 1 });

const Event = mongoose.model("Event", eventSchema);
export default Event;
