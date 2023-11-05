const { ctrlWrapper } = require("../../helpers");
const getContacts = require("./getContacts");
const getContactsById = require("./getContactsById");
const addContact = require("./addContact");
const uppdateContact = require("./uppdateContact");
const uppdateFavorite = require("./uppdateFavorite");
const deleteContact = require("./deleteContact");

module.exports = {
  getContacts: ctrlWrapper(getContacts),
  getContactsById: ctrlWrapper(getContactsById),
  addContact: ctrlWrapper(addContact),
  uppdateContact: ctrlWrapper(uppdateContact),
  uppdateFavorite: ctrlWrapper(uppdateFavorite),
  deleteContact: ctrlWrapper(deleteContact),
};
