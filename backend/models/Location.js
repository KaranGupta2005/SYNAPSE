import mongoose, { Schema } from "mongoose";

const locationSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    coordinates: {
      lat: {
        type: Number,
        required: true,
        min: -90,
        max: 90
      },
      lng: {
        type: Number,
        required: true,
        min: -180,
        max: 180
      }
    },

    accuracy: {
      type: Number,
      default: null
    },

    source: {
      type: String,
      enum: ["gps", "ip", "manual"],
      default: "gps"
    }
  },
  { timestamps: true }
);

locationSchema.index({ userId: 1, createdAt: -1 });
locationSchema.index({ "coordinates.lat": 1, "coordinates.lng": 1 });

const Location = mongoose.model("Location", locationSchema);
export default Location;
