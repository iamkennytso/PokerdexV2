const axios  = require ('axios');
const testData = require('./testData.js')
const testData2 = require('./testData2.js')
const pokeNumber = require('./pokeNumber.js')

const formatData = (data) => {
  const obj = {};
  let abilCount = 0
  obj.name = data.name.replace(/\w\S*/g, (txt)=>{return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()});;
  obj.ID = data.id;
  obj.sprite = data.sprites.front_default
  if (data.sprites.front_female) obj.sprite2 = data.sprites.front_female
  obj.height = (data.height / 10)
  obj.weight = (data.weight / 10)
  obj.type1 = data.types[0].type.name.toUpperCase()
  if (data.types[1]) obj.type2 = data.types[1].type.name.toUpperCase()
  data.stats.map( (x)=> {
    name = x.stat.name
    obj[name] = x.base_stat;
  })
  if(data.abilities[0]){
      data.abilities.forEach( (abil) => {
      var temp = `abl${++abilCount}Name`
      obj[temp] = abil.ability.name.toUpperCase()
    })
  }
  return obj;
}

const formatData2 = (data) => {
  const obj = {};
  if(data.flavor_text_entries.filter(text => text.language.name === 'en' && text.version.name === 'moon')[0]){
    obj.flavor = data.flavor_text_entries.filter(text => text.language.name === 'en' && text.version.name === 'moon')[0]['flavor_text']
  } else {
    obj.flavor = data.flavor_text_entries.filter(text => text.language.name === 'en' && text.version.name === 'x')[0]['flavor_text']
  }
  obj.genus = data.genera.filter(poke => poke.language.name === 'en')[0].genus
  return obj
}

exports.testData = (req, res) => {
  res.send(formatData(testData))
}
exports.testData2 = (req, res) => {
  res.send(formatData2(testData2))
}

exports.searchPoke = (req, res) => {
  let searchID;
  if (isNaN(Number(req.body.searchTerm))) {
    searchID = pokeNumber(req.body.searchTerm)
  } else {
    searchID = req.body.searchTerm
  }
  axios.get(`http://pokeapi.co/api/v2/pokemon/${searchID}`)
    .then(payload => {
      console.log(`Received ${payload.data.name} data`)
      axios.get(`http://pokeapi.co/api/v2/pokemon-species/${searchID}`)
        .then(payload2 => {
          console.log(formatData2(payload2.data))
          console.log()
          res.send(Object.assign(formatData(payload.data), formatData2(payload2.data)))
        })
      
  })
}

// exports.flavorPoke = (req, res) => {
//   axios.get(`http://pokeapi.co/api/v2/pokemon-species/${searchID}`)
//     .then(payload => {
//       const obj = {};
//       obj.flavor = payload.flavor_text_entries.filter(text => text.language.name === 'en' && text.version.name === 'moon')[0]['flavor_text']
//       obj.genus = payload.genera.filter(poke => poke.language.name === 'en')[0].genus
//       res.send(obj)
//     })
// }
