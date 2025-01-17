const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
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
