/**
 * @swagger
 * tags:
 *   name: City
 *   description: City management API
 */

/**
 * @swagger
 * /city/save:
 *   post:
 *     summary: Create or update a city
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CityId:
 *                 type: integer
 *                 example: 1
 *               CityCode:
 *                 type: string
 *                 example: CT001
 *               CityName:
 *                 type: string
 *                 example: New York
 *               CityDescription:
 *                 type: string
 *                 example: Major city in the USA
 *               IsActive:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: City saved successfully
 */

/**
 * @swagger
 * /city/delete:
 *   post:
 *     summary: Delete a city
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CityId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: City deleted successfully
 */

/**
 * @swagger
 * /city/all:
 *   get:
 *     summary: Get all cities
 *     tags: [City]
 *     responses:
 *       200:
 *         description: List of cities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

/**
 * @swagger
 * /city/by-id:
 *   post:
 *     summary: Get a city by ID
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CityId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: City found
 *       404:
 *         description: City not found
 */








import express from 'express';
import {
  saveCity,
  deleteCity,
  getAllCities,
  getCityById
} from '../controllers/cityController';

const router = express.Router();

router.post('/city/save', saveCity);
router.post('/city/delete', deleteCity);
router.get('/city/all', getAllCities);
router.post('/city/by-id', getCityById);

export default router;
