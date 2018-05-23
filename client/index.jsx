import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import Blink from './components/Blink.jsx'
import PokeSprite from './components/PokeSprite.jsx'
import PokeWindow from './components/PokeWindow.jsx'
import ChangeType from './components/changeType.jsx'
import SearchBar from './components/SearchBar.jsx'
import fire from './firebase.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {name:'Hello World', type1:'Loading', type2: 'Test Data'},
      blink: '',
      page: 1
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.changeType1 = this.changeType1.bind(this)
    this.changeType2 = this.changeType2.bind(this)
  }

  componentDidMount() {
    axios.get('/testData')
      .then((payload)=> {
        this.setState({
          pokemon: payload.data,
          blink: payload.data.type1
        })
        axios.get('/testData2')
          .then((payload2) => {
            this.setState({
              pokemon: Object.assign(this.state.pokemon, payload2.data)
            })
          })
      })
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
  handleSearch(term) {
    this.setState({ pokemon: {sprite: "imgs/loading.gif"} })
    console.log(term)
    axios.post('/search', { searchTerm: term })
      .then(response => {
        axios.post()
        this.setState({ 
          pokemon: response.data,
          blink: response.data.type1
        })
      })
  }
  render () {
    return (
      <div id="pokemonPage">
        <Blink type={this.state.blink} />
        <img id="pokedex" src = "imgs/pokedex.png" alt="pokedex"></img> 
        <PokeSprite sprite={this.state.pokemon.sprite} page={this.state.page} />
        <PokeWindow pokemon={this.state.pokemon} page={this.state.page}/>
        <SearchBar search={this.handleSearch} /> 
        <div id="bouncingPokeball">
          <img id="bouncingPokeball" src="imgs/bounce.gif" alt="search" />
        </div>
        <ChangeType func={this.changeType1} id='changeType1'/>
        <ChangeType func={this.changeType2} id='changeType2'/>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));