import React from 'react';
import {Radar} from 'react-chartjs-2';
import typeColor from './../util/typeColor.js'

const Chart = (props) => {
  const data = {
    labels: ['HP', 'Attack', 'Defense', 'Speed','Sp. Def', 'Sp. Atk'],
    datasets: [{
      label: props.stats.name,
      backgroundColor: typeColor(props.type)[0], //red
      borderColor: typeColor(props.type)[1], //blue
      pointBackgroundColor: typeColor(props.type)[2], //green
      pointBorderColor: '#fff', //yellow
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#000', 
      data: [props.stats.hp, props.stats.attack, props.stats.defense, props.stats.speed, 
        props.stats['special-defense'], props.stats['special-attack']]
    }]
  };
  const options = {
    legend: { display:false },
    maintainAspectRatio: false,
    scale: {
      ticks: {
        min: 0,
        max: 255,
        stepSize:50
      }
    }
  }
  return (
    <Radar 
      width={300}
      height={300}
      data={data}
      options={options}
    />
  )
}

export default Chart;