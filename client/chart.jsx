import React from 'react';
import {Radar} from 'react-chartjs-2';

// const convertStatsToOneSet = stats => ({
//   key: 'points',
//   label: stats.name,
//   values: {
//     hp: stats.hp,
//     speed: stats.speed,
//     attack: stats.attack,
//     defense: stats.defense,
//     spattack: stats['special-attack'],
//     spdefense: stats['special-defense']
//   },
// });

const Chart = (props) => {
  // const dataSet = convertStatsToOneSet(props.stats)
  // const data = {
  //   variables: [
  //     {key: 'hp', label: 'Hp'},
  //     {key: 'attack', label: 'Attack'},
  //     {key: 'defense', label: 'Defense'},
  //     {key: 'speed', label: 'Speed'},
  //     {key: 'spdefense', label: 'Special Defense'},
  //     {key: 'spattack', label: 'Special Attack'},
  //   ],
  //   sets: [
  //     dataSet
  //   ]
  // }
  const data = {
    labels: ['HP', 'Attack', 'Defense', 'Speed', 'Sp. Atk', 'Sp. Def'],
    datasets: [
      {
        label: props.stats.name,
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [props.stats.hp, props.stats.attack, props.stats.defense, props.stats.speed, 
          props.stats['special-attack'], props.stats['special-defense']]
      },
    ]
  };
  const options = {
    legend:{display:false},
    maintainAspectRatio: false,
    scale:{
      ticks: {
        min: 0,
        max: 255,
        stepSize:50
      }
    }
  }
return (
  <div>
    <Radar 
      width={300}
      height={300}
      data={data}
      options={options}
    />
  </div>
)
}

export default Chart;