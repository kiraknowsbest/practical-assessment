const express = require('express')
const bodyParser = require('body-parser')
const { fetchPokemonData } = require('./pokeApiHelper.js')
const { insertPokemon, findPokemon } = require('../db/dbHelpers.js')

const server = express();

server.use(express.static(__dirname + '/../client/dist'));
server.use(bodyParser.urlencoded({ extended: true}))

// for axios, need to use bodyParser.json()
server.use(bodyParser.json())

server.get('/', function (req, res) {
	res.send('index.html')
})

server.post('/poke', function (req, res) {
	// check if pokemon exists in database
	findPokemon(req.body.id, function (err, foundPokemon) {
		// if foundPokemon is not null
		if (foundPokemon) {
			// send pokemon back to client
			res.status(200).send(foundPokemon)
		} else {
			// pokemon was NOT in DB
			// call pokeAPI
			fetchPokemonData(req.body.id, function (error, data) {
				// if error, send to client
				if (error) {
					console.error('error from pokeAPI')
					res.status(500).send(error)
				} else {
					// we received the data
					console.log('success from pokeAPI: ', data)
					// we can make the pokemon object
					const pokemonToSave = {
						id: data.id,
						name: data.name,
						height: data.height,
						weight: data.weight
					}
					insertPokemon(pokemonToSave, function (e, d) {
						if (e) {
							// trouble connecting to the db
							res.status(500).send(e)
						} else {
							// pokemon was saved in db
							res.status(200).send(pokemonToSave)
						}
					})
				}
			})	
		}
	})
})

server.listen('3000', function () {
	console.log('listening on port 3k...')
})
