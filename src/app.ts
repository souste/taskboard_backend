import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "This is the taskboard app" }));

import authRoutes from "./routes/authRoutes.js";
import columnsRoutes from "./routes/columnsRoutes.js";
import tasksRoutes from "./routes/tasksRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

app.use("/auth", authRoutes);
app.use("/columns", columnsRoutes);
app.use("/tasks", tasksRoutes);
app.use("/tasks/", commentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
