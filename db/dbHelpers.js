const db = require('./index.js')
const mongoose = require('mongoose')

// define your pokemon schema (recommended fields: name, number, height, weight)
const PokemonSchema = mongoose.Schema({
	name: String,
	id: Number,
	height: Number,
	weight: Number,
	type: String
});

// define the Collection and Schema associated with a Pokemon Model
const PokemonModel = mongoose.model('pokemon', PokemonSchema);

module.exports.insertPokemon = function (obj, cb) {
	var pokeObj = {}
	pokeObj.name = obj.name.toString()
	pokeObj.id = parseInt(obj.id)
	pokeObj.height = parseInt(obj.height)
	pokeObj.weight = parseInt(obj.weight)
	var instance = new PokemonModel(pokeObj)
	instance.save(function (err, res) {
		cb(err, res)
	})
}

module.exports.findPokemon = function (number, cb) {
	PokemonModel.findOne({id: parseInt(number)}, function (err, res) {
		if (err) {
			console.error(err)
			cb(err, null)
		} else {
			console.log(res)
			cb(null, res)
		}
	})
}
