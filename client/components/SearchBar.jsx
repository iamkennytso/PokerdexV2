import React from 'react';

class searchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
    this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this)
  }
  onChangeSearchTerm(e) {
    console.log('hello')
    this.setState({ searchTerm: e.target.value })
  }
  render(){
    return (
      <div id="searchFormDiv">
        <form id="searchForm" onSubmit = {
          (e) => {
            e.preventDefault()
            this.props.search(this.state.searchTerm)
          }
        }>
          <input type="text" id="searchTerm" onChange={(e) => this.onChangeSearchTerm(e)} placeholder="Pikachu" />
        </form>
      </div>  
    )
  }
  
}

export default searchBar;