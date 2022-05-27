const { Contact } = require("../../models");

const add = async (req, res) => {
  const { _id } = req.user;
  const contactToAdd = await Contact.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: "success",
    code: 201,
    data: { contactToAdd },
  });
};

module.exports = add;
