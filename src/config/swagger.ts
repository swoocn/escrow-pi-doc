export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "EscrowPi API Documentation",
      version: "1.0.0",
      description: "Developer Guide for EscrowPi prototype payment solution",
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Local Development Server",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // scan for @swagger annotations
};
