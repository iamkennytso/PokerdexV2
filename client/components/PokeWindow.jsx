import React from 'react';
import {Radar} from 'react-chartjs-2';
import Chart from './chart.jsx'

const view = (props) => {  
  return (
    <div id="pokeData">
      {props.page == 1 ? 
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
      :
      <Chart stats={props.pokemon}/> }
  </div>
  )
}

export default view;