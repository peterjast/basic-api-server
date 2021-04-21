'use strict';

const express = require('express');

const Clothes = require('../models/clothes.js');
const clothes = new Clothes();

const router = express.Router();

// RESTful routes

router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

// RESTful route handlers

function getClothes(req, res) {
  let getAllClothes = clothes.read();
  res.status(200).json(getAllClothes);
}

function getOneClothes(req, res) {
  const id = parseInt(req.params.id);
  let clothing = clothes.read(id);
  res.status(200).json(clothing);
}

function createClothes(req, res) {
  let content = req.body;
  let createdClothes = clothes.create(content);
  res.status(201).json(createdClothes);
}

function updateClothes(req, res) {
  const id = parseInt(req.params.id);
  let content = req.body;
  let updatedClothes = clothes.update(id, content);
  res.status(200).json(updatedClothes);
}

function deleteClothes(req, res) {
  const id = parseInt(req.params.id);
  let deletedClothes = clothes.delete(id);
  res.status(204).json(deletedClothes);
}

module.exports = router;