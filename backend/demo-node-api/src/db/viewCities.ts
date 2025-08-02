import { connectDB } from './sqlite';

async function viewUsers() {
  const db = await connectDB();

  try {
    const users = await db.all('SELECT * FROM City');
    console.log('All Cities:');
    console.table(users);
  } catch (err) {
    console.error('Error reading cities:', err);
  } finally {
    await db.close();
  }
}

viewUsers();
