const Contact = require("../../models/contact");

const { HttpError } = require("../../helpers");

const getContactsById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    next(HttpError(404, "Not found"));
  }
  res.json(result);
};

module.exports = getContactsById;
