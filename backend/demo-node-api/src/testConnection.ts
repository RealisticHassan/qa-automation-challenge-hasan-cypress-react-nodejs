import sql from 'mssql/msnodesqlv8';
import config from './db/sqlConfig'; // adjust path if needed

async function test() {
  try {
    const pool = await sql.connect(config);
    console.log('Connected to SQL Server!');
    await pool.close();
  } catch (err) {
    console.error('Full error object:', err);
  // Log all own properties of the error object
  console.error('Error properties:');
  for (const key of Object.getOwnPropertyNames(err)) {
    console.error(`${key}:`, (err as any)[key]);
    }
  }
}

test();
