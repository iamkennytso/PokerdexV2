import React from 'react'

const sprite = (props) => {
  return (
    <div id="pokeSprite">
      {props.page === 3 ? null : <img src={props.sprite} height='96px' width='96px' alt="PokeSprite"  /> }
    </div>
  )
}

export default sprite