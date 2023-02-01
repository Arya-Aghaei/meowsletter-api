import express from "express";
import controller from "../controllers/newsletter";
import { newsletterSchema } from "../schemas/newsletterSchema";

const router = express.Router();

router.post("/newsletter", newsletterSchema, controller.addNewsletter);

export = router;
