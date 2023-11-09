const Contact = require("../../models/contact");

const { HttpError } = require("../../helpers");

const uppdateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    next(HttpError(404, "Not found"));
  }
  res.status(201).json(result);
};
module.exports = uppdateContact;
