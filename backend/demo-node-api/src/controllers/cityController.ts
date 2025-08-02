import { Request, Response } from 'express';
import { connectDB } from '../db/sqlite';
import { City } from '../models/City';

export const saveCity = async (req: Request, res: Response) => {
    const { CityId, CityCode, CityName, CityDescription, IsActive } = req.body;
  
    if (!CityCode || !CityName) {
      return res.status(400).json({ message: 'CityCode and CityName are required.' });
    }
  
    try {
      const db = await connectDB();
  
      // Check if City exists (if CityId is provided)
      const existingCity = await db.get(`SELECT * FROM City WHERE CityId = ?`, [CityId]);
  
      if (existingCity) {
        // Update
        await db.run(
          `UPDATE City SET CityCode = ?, CityName = ?, CityDescription = ?, IsActive = ? WHERE CityId = ?`,
          [CityCode, CityName, CityDescription, IsActive ?? 1, CityId]
        );
      } else {
        // Insert
        await db.run(
          `INSERT INTO City (CityCode, CityName, CityDescription, IsActive)
           VALUES (?, ?, ?, ?)`,
          [CityCode, CityName, CityDescription, IsActive ?? 1]
        );
      }
  
      // Return the latest city (inserted/updated)
      const latestCity = await db.get(`SELECT * FROM City ORDER BY CityId DESC LIMIT 1`);
      await db.close();
      return res.status(200).json(latestCity);
    } catch (err) {
      console.error('Error saving city:', err);
      return res.status(500).json({ message: 'Server error' });
    }
  };

export const deleteCity = async (req: Request, res: Response) => {
  const { CityId } = req.body;
  try {
    const db = await connectDB();
    await db.run(`DELETE FROM City WHERE CityId = ?`, [CityId]);
    res.status(200).json({ message: 'Deleted Successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

export const getAllCities = async (_: Request, res: Response) => {
  try {
    const db = await connectDB();
    const cities = await db.all(`SELECT * FROM City ORDER BY CityId`);
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

export const getCityById = async (req: Request, res: Response) => {
  const { CityId } = req.body;
  try {
    const db = await connectDB();
    const city = await db.get(`SELECT * FROM City WHERE CityId = ?`, [CityId]);
    if (city) {
      res.status(200).json(city);
    } else {
      res.status(404).json({ message: 'City not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};
