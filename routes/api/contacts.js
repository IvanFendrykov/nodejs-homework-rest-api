const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContactsById,
  addContact,
  deleteContact,
  uppdateContact,
  uppdateFavorite,
} = require("../../controllers/contacts/index");

const { validateBody, authenticate, isValidId } = require("../../middlewares");
const schemas = require("../../schemas/index");
const addContactSchema = validateBody(schemas.addSchema);
const favoriteSchema = validateBody(schemas.updateFavoriteSchema)

router.get("/", authenticate, getContacts);

router.get("/:contactId", authenticate, isValidId, getContactsById);

router.post("/", authenticate, addContactSchema, addContact);

router.delete("/:contactId", authenticate, isValidId, deleteContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  addContactSchema,
  uppdateContact
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  authenticate,
  favoriteSchema,
  uppdateFavorite
);

module.exports = router;
