import http from "http";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import routes from "./routes/newsletter";
import { config } from "dotenv";
import cors from "cors";
/** Config the environments from .env file */
config();

const router: Express = express();

/** Logging */
router.use(morgan("dev"));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** CONFIGURING CROSS ORIGIN */
router.use(cors());

/** Routes */
router.use("/", routes);

/** Error handling */
router.use((req: Request, res: Response) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 8085;
//avoid running the server when testing
if (process.env.NODE_ENV !== "test") {
  httpServer.listen(PORT, () =>
    console.log(`The server is running on port ${PORT}`)
  );
}

export default router;
