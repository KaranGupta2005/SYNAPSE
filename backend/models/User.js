import mongoose, { Schema } from "mongoose";

const locationSchema = new Schema(
  {
    lat: {
      type: Number,
      default: null
    },
    lng: {
      type: Number,
      default: null
    },
    updatedAt: {
      type: Date,
      default: null
    }
  },
  { _id: false }
);

const refreshTokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: "30d"
    }
  },
  { _id: false }
);

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100
    },

    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
      select: false,
      minlength: 6
    },

    isOnboarded: {
      type: Boolean,
      default: false
    },

    lastKnownLocation: {
      type: locationSchema,
      default: null
    },

    refreshTokens: {
      type: [refreshTokenSchema],
      default: []
    }
  },
  { timestamps: true }
);

userSchema.index({ "refreshTokens.token": 1 });

const User = mongoose.model("User", userSchema);
export default User;
