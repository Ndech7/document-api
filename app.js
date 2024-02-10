import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Global Middlewares
app.use(cors());
app.use(express.json());

// Server start
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server listening at Port ${port}`);
  });
}

export default app;
