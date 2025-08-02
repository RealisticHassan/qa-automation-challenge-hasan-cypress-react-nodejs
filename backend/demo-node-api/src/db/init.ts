import { connectDB } from './sqlite';

async function setup() {
  const db = await connectDB();

  // Step 1: Create Users table if not exists
  await db.exec(`
    CREATE TABLE IF NOT EXISTS Users (
      userId INTEGER PRIMARY KEY AUTOINCREMENT,
      userName TEXT NOT NULL,
      fName TEXT NOT NULL,
      isActive INTEGER NOT NULL DEFAULT 1,
      password TEXT NOT NULL,
      email TEXT NOT NULL,
      phoneNumber TEXT NOT NULL
    );
  `);

  console.log('Users table created (if not already)');

  // Step 2: Insert a hardcoded user
  await db.run(
    `INSERT INTO Users (userName, fName, isActive, password, email, phoneNumber)
     VALUES (?, ?, ?, ?, ?, ?)`,
    ['demoUser', 'Demo', 1, 'pass123', 'demo@example.com', '1234567890']
  );

  console.log('Inserted hardcoded user');

  // Step 3: Create City table if not exists
  await db.exec(`
    CREATE TABLE IF NOT EXISTS City (
      CityId INTEGER PRIMARY KEY AUTOINCREMENT,
      CityCode TEXT NOT NULL,
      CityName TEXT NOT NULL,
      CityDescription TEXT,
      IsActive INTEGER NOT NULL DEFAULT 1
    );
  `);

  console.log('City table created (if not already)');

  await db.close();
}

setup();
