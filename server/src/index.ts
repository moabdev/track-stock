import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

/* ROUTE IMPORTS */
import dashboardRoutes from "./routes/dashboard.route";
import productRoutes from "./routes/product.route";
import userRoutes from "./routes/user.route";
import expenseRoutes from "./routes/expense.route";
import authRoutes from "./routes/auth.route";

/* CONFIGURATIONS */
dotenv.config();

const app = express();

/* MIDDLEWARE */
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/dashboard", dashboardRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/expenses", expenseRoutes);
app.use("/auth", authRoutes);

/* SERVER */
const port = Number(process.env.PORT) || 8000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});