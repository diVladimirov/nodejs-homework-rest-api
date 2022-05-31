const { Conflict } = require("http-errors");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { User } = require("../../models");

const signup = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({
    email,
    password: hashPassword,
    avatarURL,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription: newUser.subscription,
        avatarURL,
      },
    },
  });
};

module.exports = signup;
