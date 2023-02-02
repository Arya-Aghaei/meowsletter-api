import { checkSchema } from "express-validator";

export const newsletterSchema = checkSchema({
  email: {
    isEmail: true,
    errorMessage: "Please enter a valid email address",
  },
  language: {
    default: {
      options: "en-gb",
    },
    isIn: {
      options: [["en-gb", "en-us", "de", "fa"]],
      errorMessage:
        "Language must be en-gb (British English), en-us (American English), de (German) or fa (Persian)",
    },
  },
  time: {
    isIn: {
      options: [["MM", "WM", "SE"]],
      errorMessage:
        "Time must be MM (Monday Morning), WM (Wednesday Morning) or SE (Sunday Evening)",
    },
  },
});
