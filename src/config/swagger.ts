import { env } from "../utils/env";

export const swaggerOptions = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "EscrowPi API Documentation",
      version: "1.0.0",
      description: "Developer Guide for EscrowPi prototype payment solution",
      contact: {
        name: "Map of Pi Team",
        email: "philip@mapofpi.com"
      },
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Local Development Server",
      },
      {
        url: env.PRODUCTION_URL,
        description: "Production server",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // scan for @swagger annotations
};
