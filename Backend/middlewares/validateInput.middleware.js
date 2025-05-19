const { validateResult } = require("express-validator");

exports.validateInput = (req, res, next) => {
  const errors = validateResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};
