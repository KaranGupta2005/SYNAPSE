import mongoose, { Schema } from "mongoose";

const sessionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    status: {
      type: String,
      enum: ["active", "ended"],
      default: "active"
    },

    generatedParams: {
      carrierHz: {
        type: Number,
        default: null
      },
      beatHz: {
        type: Number,
        default: null
      },
      amplitude: {
        type: Number,
        default: null
      }
    },

    contextSnapshot: {
      type: Schema.Types.Mixed,
      default: {}
    }
  },
  { timestamps: true }
);

sessionSchema.index({ userId: 1, status: 1 });
sessionSchema.index({ createdAt: -1 });

const Session = mongoose.model("Session", sessionSchema);
export default Session;
