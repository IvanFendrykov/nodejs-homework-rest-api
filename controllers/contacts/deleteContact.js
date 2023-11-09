const Contact = require("../../models/contact");

const { HttpError } = require("../../helpers");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    next(HttpError(404, "Not found"));
  }
  res.json({
    message: "Delete success",
  });
};
module.exports = deleteContact;
