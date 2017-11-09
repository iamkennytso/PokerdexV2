// import React from 'react';
// import Radar from 'react-d3-radar';

// const convertStatsToOneSet = stat => ({
//   key: 'points',
//   label: stat.Pokemonname,
//   values: {
//     hp: stat.Pokemonhp,
//     speed: stat.Pokemonspeed,
//     attack: stat.Pokemonattack,
//     defense: stat.Pokemondefense,
//     spattack: stat.Pokemonspecialattack,
//     spdefense: stat.Pokemonspecialdefense
//   },
// });

// const Chart = (props) => {
//   const dataSet = convertStatsToOneSet(props.stats)
//   const data = {
//     variables: [
//       {key: 'hp', label: 'Hp'},
//       {key: 'attack', label: 'Attack'},
//       {key: 'defense', label: 'Defense'},
//       {key: 'speed', label: 'Speed'},
//       {key: 'spdefense', label: 'Special Defense'},
//       {key: 'spattack', label: 'Special Attack'},
//     ],
//     sets: [
//       dataSet
//     ]
//   }

// return (
//   <div>
//     <Radar 
//       width={300}
//       height={300}
//       padding={50}
//       domainMax={255}
//       data={data}
//     />
//   </div>
// )
// }

// export default Chart;