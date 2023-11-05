const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const contactSchema = new Schema(
  {
    name: { type: String, required: [true, "Put contact name"] },
    email: { type: String },
    phone: { type: String, required: true },
    favorite: { type: Boolean, default: false },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);
module.exports = Contact;
