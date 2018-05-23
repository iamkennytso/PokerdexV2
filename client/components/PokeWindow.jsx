import React from 'react';
import {Radar} from 'react-chartjs-2';
import Chart from './Chart.jsx'

const view = (props) => {  
  const spriteLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  return (
    <div id="pokeData">
      { props.page == 1 ? 
      <div>
        ID: {props.pokemon.ID} Name: {props.pokemon.name}  <br/>
        Hgt: {props.pokemon.height} m  &nbsp; 
        Wgt: {props.pokemon.weight} kg <br/>
        Type 1: {props.pokemon.type1}  <br/>
        Type 2: {props.pokemon.type2}  <br/> <br/> <br/>
        {/* <Chart stats={props.pokemon}/> <br/> */}
        HP: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.pokemon.hp}  <br/>
        Speed: &nbsp;&nbsp;&nbsp;{props.pokemon.speed} <br/>
        Attack: &nbsp;&nbsp;{props.pokemon.attack}  <br/>
        Defense: &nbsp;{props.pokemon.defense}  <br/>
        Spec Atk: {props.pokemon['special-attack']}  <br/>
        Spec Def: {props.pokemon['special-defense']}  <br/><br/><br/>
        Abilities: <br/>
        {props.pokemon.abl1Name} <br/>
        {props.pokemon.abl2Name} <br/>
        {props.pokemon.abl3Name} <br/>
      </div>
      : props.page == 2 ? 
      <div>
        ID: {props.pokemon.ID} Name: {props.pokemon.name}  <br/>
        Genus: {props.pokemon.genus} <br/>
        Habitat: {props.pokemon.habitat} <br/>
        Body Shape: <img src={`imgs/shapes/${props.pokemon.shape}.png`} alt={props.pokemon.shape} /> <br/><br/>
        {props.pokemon.flavor}
        <div id="evoDiv">
          {props.pokemon.chain[0] ? 
          <div> {props.pokemon.chain[0].map(evo => {
            return <img onClick={() => props.search(evo)} key={evo} src={`${spriteLink}${evo}.png`} alt={evo}/>
          } )} </div> 
          : null}
          {props.pokemon.chain[1] ? 
          <div> {props.pokemon.chain[1].map(evo => {
            return <img onClick={() => props.search(evo)} key={evo} src={`${spriteLink}${evo}.png`} alt={evo}/>
          } )} </div> 
          : null}
          {props.pokemon.chain[2] ? 
          <div> {props.pokemon.chain[2].map(evo => {
            return <img onClick={() => props.search(evo)} key={evo} src={`${spriteLink}${evo}.png`} alt={evo}/>
          } )} </div> 
          : null}
        </div>
      </div> 
      : <div id="statsRadar"><Chart stats={props.pokemon}/></div> }
  </div>
  )
}

export default view;