const Contact = require("../../models/contact");

const { HttpError } = require("../../helpers");

const uppdateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    next(HttpError(404, "Not found"));
  }
  res.json(result);
};

module.exports = uppdateFavorite;
