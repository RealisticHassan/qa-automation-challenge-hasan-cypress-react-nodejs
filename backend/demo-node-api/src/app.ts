import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import loginRoutes from './routes/loginRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import cityRoutes from './routes/cityRoutes';

dotenv.config();

const app = express();

// Enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Register routes under /api
app.use('/api', loginRoutes);
app.use('/api', cityRoutes);

// Swagger-jsdoc options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Demo API',
      version: '1.0.0',
      description: 'API documentation for Demo project',
    },
    servers: [
      {
        url: 'http://localhost:5000/api', // match your base route
        description: 'Local server',
      },
    ],
  },
  // Path to the API docs (adjust if your routes folder differs)
  apis: ['./src/routes/*.ts'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Setup Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});
