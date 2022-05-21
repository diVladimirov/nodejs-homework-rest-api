const { NotFound } = require("http-errors");
const contactsOperation = require("../../models/contacts");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const removedContact = await contactsOperation.removeContact(contactId);
  if (!removedContact) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: { removedContact },
  });
};

module.exports = removeById;
