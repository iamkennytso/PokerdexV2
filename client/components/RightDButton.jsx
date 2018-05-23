import React from 'react';

class rightD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: '',
    }
    this.click = this.click.bind(this)
  }

  click() {
    let newPage = this.props.curr
    newPage === 3 ? newPage = 1 : newPage++
    this.props.page(newPage)
  }

  render(){
    return (
      <div id="rightD" onClick={()=>this.click()} > 
        <img 
        src={`imgs/rightD${this.state.hover === 'right' ? 'Hover' : ''}.png`} 
        onMouseEnter={()=>this.setState({hover:'right'})} 
        onMouseLeave={()=>this.setState({hover:''})} 
        alt="right" /> 
      </div>
    )
  }
  
}

export default rightD;