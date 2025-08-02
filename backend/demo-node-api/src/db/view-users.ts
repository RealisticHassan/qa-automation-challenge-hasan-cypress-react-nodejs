import { connectDB } from './sqlite';

async function viewUsers() {
  const db = await connectDB();

  try {
    const users = await db.all('SELECT * FROM City');
    console.log('All Users:');
    console.table(users);
  } catch (err) {
    console.error('Error reading users:', err);
  } finally {
    await db.close();
  }
}

viewUsers();
