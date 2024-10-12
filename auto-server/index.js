const createAuthServer = require('auto-auth-server');

const config = {
  port: 5000,
  mongoUri: 'mongodb://localhost:27017/login',
  authFields: ['email', 'password'],
  fields: ['email', 'password'],
  jwtSecretKey: 'mySuperSecretKey123',
};

// Start the server
createAuthServer(config);