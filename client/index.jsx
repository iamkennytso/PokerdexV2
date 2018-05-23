import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import Blink from './components/Blink.jsx'
import PokeSprite from './components/PokeSprite.jsx'
import PokeWindow from './components/PokeWindow.jsx'
import ChangeType from './components/ChangeType.jsx'
import SearchBar from './components/SearchBar.jsx'
import LeftD from './components/LeftDButton.jsx'
import RightD from './components/RightDButton.jsx'
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
      .then(payload1 => {
        this.setState({
          blink: payload1.data.type1
        })
        axios.get('/testData2')
          .then(payload2 => {
            axios.get('/testData3')
              .then(payload3 => {
                this.setState({
                  pokemon: Object.assign(payload1.data, payload2.data, payload3.data)
                })
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
    this.setState({ pokemon: {sprite: "imgs/loading.gif", chain:[], shape: "loading"} })
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
        <img id="pokedex" src="imgs/pokedex.png" alt="pokedex"></img> 
        <PokeSprite sprite={this.state.pokemon.sprite} page={this.state.page} />
        <PokeWindow pokemon={this.state.pokemon} page={this.state.page} search={this.handleSearch}/>
        <SearchBar search={this.handleSearch} /> 
        <ChangeType func={this.changeType1} id='changeType1'/>
        <ChangeType func={this.changeType2} id='changeType2'/>
        <LeftD curr={this.state.page} page={(page) => this.setState({page})} />
        <RightD curr={this.state.page} page={(page) => this.setState({page})} />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));