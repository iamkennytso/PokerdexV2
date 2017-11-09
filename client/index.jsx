import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj : {text:'hello'}
    }
  }

  render () {
    return (
    <div>
      <p>HelloHello</p>
    </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));