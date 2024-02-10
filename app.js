import express from "express";
import cors from "cors";

import libraryRoutes from "./library/routes/library.routes.js";

const app = express();
const port = 3000;

// Global Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/library", libraryRoutes);

// Server start
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server listening at Port ${port}`);
  });
}

export default app;
