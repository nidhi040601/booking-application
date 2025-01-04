import jwt from "jsonwebtoken";
import { errorGenerator } from "./errorGenerator.js";

export const verifyToken = (req, res, next) => {
  if (!req.cookies.access_token) {
    return next(errorGenerator(401, "You are not authenticated"));
  }

  jwt.verify(req.cookies.access_token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorGenerator(403, "Token is not valid"));
    }

    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      return next();
    } else {
      return next(errorGenerator(403, "You are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      return next();
    } else {
      return next(errorGenerator(403, "You are not authorized"));
    }
  });
};
