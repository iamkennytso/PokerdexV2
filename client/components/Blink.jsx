import React from 'react';

const blink = (props) => {
  return <div id="blink" style = {{ 'animationName': props.type }} />
}

export default blink;