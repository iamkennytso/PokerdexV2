import React from 'react';

class leftD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: '',
    }
    this.click = this.click.bind(this)
  }

  click() {
    let newPage = this.props.curr
    newPage === 1 ? newPage = 3 : newPage--
    this.props.page(newPage)
  }

  render(){
    return (
      <div id="leftD" onClick={()=>this.click()} > 
        <img 
        src={`imgs/leftD${this.state.hover === 'left' ? 'Hover' : ''}.png`} 
        onMouseEnter={()=>this.setState({hover:'left'})} 
        onMouseLeave={()=>this.setState({hover:''})} 
        alt="left" /> 
      </div>
    )
  }
  
}

export default leftD;