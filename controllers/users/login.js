const { Unauthorized } = require("http-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { SECRET_KEY } = process.env;
console.log(SECRET_KEY);

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const passCompare = bcrypt.compareSync(password, user.password);
  if (!user || !passCompare) {
    throw new Unauthorized("Email or password is wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, "JKkbgLKJBKJBv23gv", { expiresIn: "1h" });
  res.json({
    status: "success",
    code: 200,
    data: { token },
  });
};

module.exports = login;
