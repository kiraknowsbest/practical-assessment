// Request docs: https://www.npmjs.com/package/request
const request = require('request')
const axios = require('axios')

// request
const fetchPokemonData = function (id, cb) {
	request(`https://pokeapi.co/api/v2/pokemon/${id}`, function (err, response, body) {
		if (err) {
			console.error('error from pokeAPI')
			cb(err, null)
		} else {
			cb(null, JSON.parse(body))
		}
	})
}

// axios
// const fetchPokemonData = function (id, cb) {
// 	axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
// 		.then(function (res) {
// 			console.log('res in fetchPokemon: ', res.data)
// 			cb(null, res.data)
// 		})
// 		.catch(function (err) {
// 			console.log('err in fetchPokemon: ', err)
// 			cb(err, null)
// 		})
// }

module.exports.fetchPokemonData = fetchPokemonData
