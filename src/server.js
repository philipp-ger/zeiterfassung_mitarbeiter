const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Database init (side effect)
require('./db/database');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from existing public folder
app.use(express.static(path.join(__dirname, '../public')));

// Routes
const employeeRoutes = require('./routes/employeeRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/api', employeeRoutes);
app.use('/api/admin', adminRoutes);

// Page Routes (Legacy - will be replaced by React later)
// Mitarbeiter-View
app.get('/time', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/employee.html'));
});

// Admin-Login Page
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/admin-login.html'));
});

// Admin-Dashboard
app.get('/admin/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/admin-dashboard.html'));
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`
╔════════════════════════════════════════════════╗
║          InnTime läuft auf Port ${PORT}           ║
║  http://0.0.0.0:${PORT}                         ║
║                                                ║
║  API Modularisiert & Optimiert                 ║
╚════════════════════════════════════════════════╝
    `);
});
