const contactsOperation = require("../../models/contacts");

const getAll = async (req, res) => {
  const contacts = await contactsOperation.listContacts();
  res.json({
    status: "success",
    code: 200,
    data: { contacts },
  });
};

module.exports = getAll;
