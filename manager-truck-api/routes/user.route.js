const express = require('express')
const userRoute = express.Router();

// User Models
let UserModel = require('../models/User');

// Get Data All
userRoute.route('/').get((req, res) => {
  UserModel.find((error, data) => {
    if (error) {
        return next(error);
    } else {
      res.json(data);
    }
  })
})

// Create User Data
userRoute.route('/create-user').post((req, res, next) => {
    UserModel.create(req.body, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
    })
})

module.exports = userRoute;