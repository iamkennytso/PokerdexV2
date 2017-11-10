import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Chart from './chart.jsx'
import Blink from './blink.jsx'
import ChangeType1 from './changeType1.jsx'
import ChangeType2 from './changeType2.jsx'
import fire from './firebase.jsx'
import Auth from './auth.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {name:'Mehchu', type1:'meh', type2: 'meh'},
      searchTerm: '',
      blink: ''
    }
    this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.changeType1 = this.changeType1.bind(this)
    this.changeType2 = this.changeType2.bind(this)
  }

  componentDidMount() {
    axios.get('/testData')
    .then((response)=> {
      console.log(response)
      this.setState({
        pokemon: response.data,
        blink: response.data.type1
      })
    })
  }

  onChangeSearchTerm(e) {
    this.setState({ searchTerm: e.target.value })
  }

  changeType1 () {
    this.setState({
      blink: this.state.pokemon.type1
    })
  }
  changeType2 () {
    this.setState({
      blink: this.state.pokemon.type2
    }) 
  }

  handleSearch(e) {
    e.preventDefault();
    axios.post('/search', { searchTerm: this.state.searchTerm })
      .then(response => {
        this.setState({ pokemon: response.data })
      })
  }

  render () {
    return (
      <div id="pokemonPage">
        <Blink type={this.state.blink} />
        <img id="pokedex" src = "imgs/pokedex.png" alt="pokedex"></img>  
        <div id="pokeData">
          ID: {this.state.pokemon.ID} Name: {this.state.pokemon.name}  <br/>
          Hgt: {this.state.pokemon.height} m  
          Wgt: {this.state.pokemon.weight} kg <br/>
          Type 1: {this.state.pokemon.type1}  <br/>
          Type 2: {!this.state.pokemon.type2 ? null : this.state.pokemon.type2}  <br/>
          <Chart stats={this.state.pokemon}/> <br/>
          HP: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.pokemon.hp}  <br/>
          Speed: &nbsp;&nbsp;&nbsp;{this.state.pokemon.speed} <br/>
          Attack: &nbsp;&nbsp;{this.state.pokemon.attack}  <br/>
          Defense: &nbsp;{this.state.pokemon.defense}  <br/>
          Spec Atk: {this.state.pokemon['special-attack']}  <br/>
          Spec Def: {this.state.pokemon['special-defense']}  <br/>
          {/* Abilities: {this.state.pokemon.abl1} {this.state.pokemon.abl2} {this.state.pokemon.abl3} */}
        </div>
        <div id="searchFormDiv">
          <form id="searchForm" onSubmit = {this.handleSearch}>
            <input type="text" id="searchTerm" onChange={this.onChangeSearchTerm} placeholder="Pikachu" />
          </form>
        </div>
        <img 
          id="pokeSprite" 
          src={this.state.pokemon.sprite} 
          alt="Sprite of Pokemon" />
        <ChangeType1 func={this.changeType1} />
        <ChangeType2 func={this.changeType2} />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));