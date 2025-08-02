import { Request, Response } from 'express';
import { connectDB } from '../db/sqlite';

export const loginUser = async (req: Request, res: Response) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res.status(400).json({ message: 'Email and password are required!' });
  }

  try {
    const db = await connectDB();

    const user = await db.get(
      `SELECT * FROM Users WHERE email = ? AND password = ?`,
      [Email, Password]
    );

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};
