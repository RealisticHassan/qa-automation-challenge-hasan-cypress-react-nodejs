import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Demo API',
      version: '1.0.0',
      description: 'Node.js API converted from .NET',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Path to files with JSDoc comments
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
