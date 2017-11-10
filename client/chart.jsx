import React from 'react';
import Radar from 'react-d3-radar';

const convertStatsToOneSet = stats => ({
  key: 'points',
  label: stats.name,
  values: {
    hp: stats.hp,
    speed: stats.speed,
    attack: stats.attack,
    defense: stats.defense,
    spattack: stats['special-attack'],
    spdefense: stats['special-defense']
  },
});

const Chart = (props) => {
  const dataSet = convertStatsToOneSet(props.stats)
  const data = {
    variables: [
      {key: 'hp', label: 'Hp'},
      {key: 'attack', label: 'Attack'},
      {key: 'defense', label: 'Defense'},
      {key: 'speed', label: 'Speed'},
      {key: 'spdefense', label: 'Special Defense'},
      {key: 'spattack', label: 'Special Attack'},
    ],
    sets: [
      dataSet
    ]
  }

return (
  <div>
    <Radar 
      width={300}
      height={300}
      padding={50}
      domainMax={255}
      data={data}
    />
  </div>
)
}

export default Chart;