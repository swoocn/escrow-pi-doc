import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { swaggerOptions } from "./config/swagger";
import escrowRoutes from "./routes/escrow.routes";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Swagger setup
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
app.use("/api/escrow", escrowRoutes);

app.listen(PORT, () => {
  console.log(`🚀 EscrowPi API running on http://localhost:${PORT}`);
  console.log(`📘 Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
