import Joi from "joi";

export const userSignUpSchema = Joi.object({
  fullname: Joi.string().min(3).max(100).trim().required().messages({
    "string.min": "Full name must be at least 3 characters",
    "string.max": "Full name must be at most 100 characters",
    "any.required": "Full name is required",
  }),
  email: Joi.string().email().trim().lowercase().required().messages({
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters",
    "any.required": "Password is required",
  }),
}).options({ abortEarly: false });

export const userLoginSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required().messages({
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters",
    "any.required": "Password is required",
  }),
}).options({ abortEarly: false });

export const locationUpdateSchema = Joi.object({
  lat: Joi.number().min(-90).max(90).required().messages({
    "number.min": "Latitude must be between -90 and 90",
    "number.max": "Latitude must be between -90 and 90",
    "any.required": "Latitude is required",
  }),
  lng: Joi.number().min(-180).max(180).required().messages({
    "number.min": "Longitude must be between -180 and 180",
    "number.max": "Longitude must be between -180 and 180",
    "any.required": "Longitude is required",
  }),
}).options({ abortEarly: false });

export const sessionStartSchema = Joi.object({
  contextSnapshot: Joi.object().optional().messages({
    "object.base": "Context snapshot must be an object",
  }),
}).options({ abortEarly: false });

export const feedbackSchema = Joi.object({
  sessionId: Joi.string().required().messages({
    "any.required": "Session ID is required",
    "string.empty": "Session ID cannot be empty",
  }),
  rating: Joi.number().min(1).max(5).required().messages({
    "number.min": "Rating must be between 1 and 5",
    "number.max": "Rating must be between 1 and 5",
    "any.required": "Rating is required",
  }),
  comment: Joi.string().max(500).optional().messages({
    "string.max": "Comment must be at most 500 characters",
  }),
  tags: Joi.array().items(Joi.string()).optional().messages({
    "array.base": "Tags must be an array of strings",
  }),
}).options({ abortEarly: false });
