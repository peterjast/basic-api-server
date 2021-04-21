'use strict';

const express = require('express');

const Food = require('../models/food.js');
const food = new Food();

const router = express.Router();

// RESTful routes

router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

// RESTful route handlers

function getFood(req, res) {
  let getAllClothes = food.read();
  res.status(200).json(getAllClothes);
}

function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  let oneFood = food.read(id);
  res.status(200).json(oneFood);
}

function createFood(req, res) {
  let content = req.body;
  let createdFood = food.create(content);
  res.status(201).json(createdFood);
}

function updateFood(req, res) {
  const id = parseInt(req.params.id);
  let content = req.body;
  let updatedFood = food.update(id, content);
  res.status(200).json(updatedFood);
}

function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  let deletedFood = food.delete(id);
  res.status(204).json(deletedFood);
}

module.exports = router;