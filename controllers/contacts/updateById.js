const contactsOperation = require("../../models/contacts");
const { NotFound } = require("http-errors");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await contactsOperation.updateContact(
    contactId,
    req.body
  );
  if (!updatedContact) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: { updatedContact },
  });
};

module.exports = updateById;
