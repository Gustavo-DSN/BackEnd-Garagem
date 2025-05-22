// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
	openapi: "3.0.0",
	info: {
		title: "Documentação catálogo de veículos",
		version: "1.0.0",
		description: "Documentação da API com Swagger",
	},
	servers: [
		{
			url: "http://localhost:3000",
			description: "Servidor local",
		},
	],
};

const options = {
	swaggerDefinition,
	apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
