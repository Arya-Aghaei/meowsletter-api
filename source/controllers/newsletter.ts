import { Request, Response } from "express";
import { validationResult } from "express-validator";

// adding a newsletter
const addNewsletter = async (req: Request, res: Response) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Please fill in all fields correctly!",
      errors: errors.array().map((er) => {
        return {
          field: er.param,
          message: er.msg,
        };
      }),
      status: "NOT_VALID",
      invalidFields: Object.keys(errors.mapped()),
    });
  }

  return res.status(200).json({
    message: "Newsletter added successfully",
    status: "OK",
    data: req.body,
  });
};

export default { addNewsletter };
