const { BadRequest } = require("http-errors");
const { User } = require("../../models");
const { sendEmail } = require("../../helpers");

const resendingEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw BadRequest("missing required field email");
  }
  const user = await User.findOne({ email });
  if (user.verify) {
    throw BadRequest("Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "Reconfirmation email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Confirm email</a>`,
  };
  await sendEmail(mail);
  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendingEmail;
