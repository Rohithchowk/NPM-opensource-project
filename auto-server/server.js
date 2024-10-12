const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const createAuthServer = ({ port, mongoUri, authFields, fields, jwtSecretKey }) => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  // Connect to MongoDB
  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

  // Dynamic Schema Creation
  const schemaDefinition = {};
  fields.forEach(field => {
    schemaDefinition[field] = { type: String, required: true };
  });

  const userSchema = new mongoose.Schema(schemaDefinition);
  const User = mongoose.model('User', userSchema);

  // Signup Route
  app.post('/signup', async (req, res) => {
    try {
      const userData = {};
      fields.forEach(field => {
        if (!req.body[field]) {
          throw new Error(`${field} is required`);
        }
        userData[field] = req.body[field];
      });

      const query = {};
      authFields.forEach(field => {
        if (field !== 'password') {
          query[field] = req.body[field];
        }
      });

      const existingUser = await User.findOne(query);
      if (existingUser) {
        throw new Error('User already exists with the provided credentials');
      }

      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(req.body.password, salt);

      const newUser = new User(userData);
      await newUser.save();

      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Login Route
  app.post('/login', async (req, res) => {
    try {
      // Ensure authFields (e.g., email, password) are provided
      const authData = {};
      authFields.forEach(field => {
        if (!req.body[field]) {
          throw new Error(`${field} is required`);
        }
        authData[field] = req.body[field];
      });

      const query = {};
      authFields.forEach(field => {
        if (field !== 'password') {
          query[field] = req.body[field];
        }
      });

      const user = await User.findOne(query);
      if (!user) {
        throw new Error('Invalid credentials');
      }

      // Compare passwords using bcrypt
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        throw new Error('Invalid password');
      }

      // Generate JWT Token
      const payload = { userId: user._id };
      const token = jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' });

      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Middleware to protect routes
  const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
      const decoded = jwt.verify(token, jwtSecretKey);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).json({ message: 'Invalid token' });
    }
  };

  // Protected Route Example
  app.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route', user: req.user });
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

module.exports = createAuthServer;
