// swagger/swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Auto Spot API",
      version: "1.0.0",
      description: "API documentation for Auto Spot project",
    },
    servers: [
      {
        url: "http://localhost:5000", // ✅ change if needed
      },
    ],
  },
  apis: ["./routes/*.js"], // 👈 Swagger will scan all route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
