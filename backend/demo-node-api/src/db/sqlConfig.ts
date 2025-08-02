import sql from 'mssql/msnodesqlv8';

const config: sql.config = {
  server: 'localhost', // or your server name
  database: 'demoDb',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
    trustServerCertificate: true
  }
};

export default config;
