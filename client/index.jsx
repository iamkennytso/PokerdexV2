import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
// import Chart from './chart.jsx'
import Blink from './blink.jsx'
import ChangeType1 from './changeType1.jsx'
import ChangeType2 from './changeType2.jsx'
import fire from './firebase.jsx'
import Auth from './auth.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon : {name:'Mehchu', type1:'meh', type2: 'meh'},
    }
  }
  componentDidMount() {
    axios.get('/testData')
    .then((response)=> {
      console.log(response)
      this.setState({
        pokemon: response.data
      })
    })
  }

  render () {
    return (
      <div id="pokemonPage">
        <Blink type={this.state.pokemon.blink} />
        <img id="pokedex" src = "imgs/pokedex.png" alt="pokedex"></img>  
        <div id="pokeData">
          ID: {this.state.pokemon.ID} Name: {this.state.pokemon.name}  <br></br>
          Hgt: {this.state.pokemon.height} m  
          Wgt: {this.state.pokemon.weight} kg <br></br>
          Type 1: {this.state.pokemon.type1}  <br></br>
          Type 2: {!this.state.pokemon.type2 ? null : this.state.pokemon.type2}  <br></br>
          {/* <Chart stats={this.state}/> <br></br> */}
          HP: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.pokemon.hp}  <br></br>
          Speed: &nbsp;&nbsp;&nbsp;{this.state.pokemon.speed} <br></br>
          Attack: &nbsp;&nbsp;{this.state.pokemon.attack}  <br></br>
          Defense: &nbsp;{this.state.pokemon.defense}  <br></br>
          Spec Atk: {this.state.pokemon['special-attack']}  <br></br>
          Spec Def: {this.state.pokemon['special-defense']}  <br></br>
          Abilities: {this.state.pokemon.abl1} {this.state.pokemon.abl2} {this.state.pokemon.abl3}
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