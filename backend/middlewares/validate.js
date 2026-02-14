import {
  userSignUpSchema,
  userLoginSchema,
  locationUpdateSchema,
  sessionStartSchema,
  feedbackSchema,
} from "../Schema.js";
import ExpressError from "./expressError.js";

export const validateUserSignUp = (req, res, next) => {
  const { error } = userSignUpSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    throw new ExpressError(
      400,
      error.details.map((err) => err.message).join(", ")
    );
  }
  next();
};

export const validateUserLogin = (req, res, next) => {
  const { error } = userLoginSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    throw new ExpressError(
      400,
      error.details.map((err) => err.message).join(", ")
    );
  }
  next();
};

export const validateLocationUpdate = (req, res, next) => {
  const { error } = locationUpdateSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    throw new ExpressError(
      400,
      error.details.map((err) => err.message).join(", ")
    );
  }
  next();
};

export const validateSessionStart = (req, res, next) => {
  const { error } = sessionStartSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    throw new ExpressError(
      400,
      error.details.map((err) => err.message).join(", ")
    );
  }
  next();
};

export const validateFeedback = (req, res, next) => {
  const { error } = feedbackSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    throw new ExpressError(
      400,
      error.details.map((err) => err.message).join(", ")
    );
  }
  next();
};
