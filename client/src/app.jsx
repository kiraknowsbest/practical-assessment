import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import PokemonList from '../../data/pokemon.js'

class App extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			pokemon: PokemonList,
			selectedPokemon: null
		}
		this.handleClick = this.handleClick.bind(this)
		this.setPokemon = this.setPokemon.bind(this)
		this.unsetPokemon = this.unsetPokemon.bind(this)
	}

	setPokemon (poke) {
		this.setState({
			selectedPokemon: poke
		})
	}

	unsetPokemon () {
		this.setState({
			selectedPokemon: null
		})
	}

	handleClick (e) {
		const name = e.target.innerText
		const id = e.target.id
		const app = this

		// ajax
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3000/poke',
			data: {name: name, id: id},
			success: function (pokemon) {
		   console.log('pokemon: ', pokemon)
		   app.setPokemon(pokemon)
		 },
			error: function (err) {
				console.error('error: ', err)
			}
		})

		// axios
		// axios.post('http://localhost:3000/poke', {name: name, id: id})
		// 	.then(function (res) {
		// 		console.log('pokemon: ', res.data)
		// 		app.setPokemon(res.data)
		// 	})
		// 	.catch(function (err) {
		// 		console.error('error: ', err)
		// 	})

	}

	render () {
		return (
			<div>
				{this.state.selectedPokemon ? (
					<div onClick={this.unsetPokemon}>
						<p>Name: {this.state.selectedPokemon.name}</p>
						<p>Id: {this.state.selectedPokemon.id}</p>
						<p>Height: {this.state.selectedPokemon.height}</p>
						<p>Weight: {this.state.selectedPokemon.weight}</p>
					</div>
				): (
					<div>
						{this.state.pokemon.map(poke => (
							<div onClick={this.handleClick} id={poke.number} key={poke.number}>{poke.name}</div>
						))}
					</div>
				)}
			</div>
		)
	}
}

export default App