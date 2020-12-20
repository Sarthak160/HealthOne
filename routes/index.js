const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//Homepage
router.get('/', (req, res) => (
  res.render("homepage")
))

// Register/Login Page
router.get('/welcome', forwardAuthenticated, (req, res) => res.render('welcome'));
router.get('/users/Patient', (req, res) => res.render('Patient'));
router.get('/users/Doctor', (req, res) => res.render('Doctor'));




// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);


module.exports = router;
