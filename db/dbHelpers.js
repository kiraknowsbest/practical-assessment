// TODO: import db
const mongoose = require('mongoose')

// define your pokemon schema (recommended fields: name, number, height, weight)
const PokemonSchema = mongoose.Schema();

// define the Collection and Schema associated with a Pokemon Model
const PokemonModel = mongoose.model();

module.exports.insertPokemon = function () {}

module.exports.findPokemon = function () {}
