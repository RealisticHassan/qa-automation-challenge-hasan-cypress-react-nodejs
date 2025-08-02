import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const connectDB = async () => {
  return open({
    filename: './dev.db',       // creates a file-based database
    driver: sqlite3.Database,
  });
};
