const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const sendResponse = require("../utils/responseHandler");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendResponse(res, 400, false, "Email already in use");
    }
    const hashedPassword = await bcrypt.hash(password, bcrypt.genSalt);
    const user = new User({ userName, email, password: hashedPassword });
    await user.save();
    return sendResponse(res, 201, true, "User registered successfully", {
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    console.error("Response Error: ", error.message);
    return sendResponse(res, 500, false, "Server Error");
  }
};
