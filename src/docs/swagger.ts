import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blagues API",
      version: "1.0.0",
      description: "API pour gérer des blagues Carambar & Co",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1/blagues",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // ← ici Swagger ira lire les commentaires JSDoc
};

export const swaggerSpec = swaggerJsdoc(options);
