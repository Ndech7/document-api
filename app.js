import express from "express";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import libraryRoutes from "./library/routes/library.routes.js";

const app = express();
const port = 3000;

// swagger definiton
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./library/routes/*.js"],
};

// Global Middlewares
app.use(cors());
app.use(express.json());
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSDoc(swaggerSpec))
);

// Routes
app.use("/library", libraryRoutes);

// Server start
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server listening at Port ${port}`);
  });
}

export default app;
