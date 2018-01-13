import React from 'react';
import {Radar} from 'react-chartjs-2';

const Chart = (props) => {
  const data = {
    labels: ['HP', 'Attack', 'Defense', 'Speed','Sp. Def', 'Sp. Atk', ],
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
          props.stats['special-defense'], props.stats['special-attack']]
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