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

exports.testData = (req, res) => {
  res.send(formatData(testData))
}
exports.testData2 = (req, res) => {
  const obj = {};
  obj.flavor = testData2.flavor_text_entries.filter(text => text.language.name === 'en')
  obj.genus = testData2.genera.filter(poke => poke.language.name === 'en')
  res.send(obj)
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
      res.send(formatData(payload.data))
  })
}

// exports.flavorPoke = (req, res) => {
//   axios.get(`http://pokeapi.co/api/v2/pokemon-species/${searchID}`)
//     .then(payload => {

//     })
// }
