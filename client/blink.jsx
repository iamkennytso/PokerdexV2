import React from 'react';

const Blink = (props) => {
  var type = props.type  
  return (
    <div id="blink" style = {{ 'animationName': type }} />
  )
}

export default Blink;