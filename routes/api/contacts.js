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

const addValidate = validateBody(schemas.addSchema);
const uppdateFavoriteSchema = validateBody(schemas.updateFavoriteSchema);

router.get("/", authenticate, getContacts);

router.get("/:contactId", authenticate, isValidId, getContactsById);

router.post("/", authenticate, addValidate, addContact);

router.delete("/:contactId", authenticate, isValidId, deleteContact);

router.put("/:contactId", authenticate, isValidId, addValidate, uppdateContact);
router.patch(
  "/:contactId/favorite",
  isValidId,
  authenticate,
  uppdateFavoriteSchema,
  uppdateFavorite
);

module.exports = router;
