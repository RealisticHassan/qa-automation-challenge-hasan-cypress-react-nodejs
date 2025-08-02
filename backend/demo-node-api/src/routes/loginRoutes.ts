/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Login API
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Email:
 *                 type: string
 *                 example: admin@email.com
 *               Password:
 *                 type: string
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Bad Request - missing email or password
 *       401:
 *         description: Unauthorized - invalid credentials
 *       500:
 *         description: Server error
 */


import express from 'express';
import { loginUser } from '../controllers/loginController';

const router = express.Router();

router.post('/login', loginUser);

export default router;
