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
      obj : {text:'hello'}
    }
  }
  componentDidMount() {

  }
  
  render () {
    return (
      <div id="pokemonPage">
        <Blink type={this.state.Pokemonblink} />
        <img id="pokedex" src = "imgs/pokedex.png" alt="pokedex"></img>  
        <div id="pokeData">
          {/* ID: {this.state.obj.PokemonID} Name: {this.state.Pokemonname}  <br></br>
          Hgt: {this.state.Pokemonheight} m  
          Wgt: {this.state.Pokemonweight} kg <br></br>
          Type 1: {this.state.Pokemontype1}  <br></br>
          Type 2: {this.state.Pokemontype2}  <br></br>
          <Chart stats={this.state}/> <br></br>
          HP: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.Pokemonhp}  <br></br>
          Speed: &nbsp;&nbsp;&nbsp;{this.state.Pokemonspeed} <br></br>
          Attack: &nbsp;&nbsp;{this.state.Pokemonattack}  <br></br>
          Defense: &nbsp;{this.state.Pokemondefense}  <br></br>
          Spec Atk: {this.state.Pokemonspecialattack}  <br></br>
          Spec Def: {this.state.Pokemonspecialdefense}  <br></br>
          Abilities: {this.state.Pokemonability1} {this.state.Pokemonability2} {this.state.Pokemonability3} */}
        </div>
        {/* <img id="pokeSprite" src={this.state.Pokemonsprite} alt="pokeSprite"></img>  */}
        <ChangeType1 func={this.changeType1} />
        <ChangeType2 func={this.changeType2} />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));