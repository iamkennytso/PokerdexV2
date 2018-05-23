const axios  = require ('axios');
const testData = require('./testData.js')
const testData2 = require('./testData2.js')
const testData3 = require('./testData3.js')
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
  obj.habitat = data.habitat ? data.habitat.name.charAt(0).toUpperCase() + data.habitat.name.substr(1) : 'Unknown'
  obj.shape = data.shape.name
  obj.genus = data.genera.filter(poke => poke.language.name === 'en')[0].genus
  return obj
}

const sliceID = (string) => {
  string = string.split('')
  string.pop()
  string = string.join('')
  ind = string.lastIndexOf('/')
  return(string.slice(ind+1))
}
const formatData3 = (data) => {
  const obj = {chain:[[],[],[]]};
  obj.chain[0].push(sliceID(data.chain.species.url))
  if(data.chain.evolves_to[0]){
    for (let i = 0; i < data.chain.evolves_to.length; i++){
      obj.chain[1].push(sliceID(data.chain.evolves_to[i].species.url))
      if(data.chain.evolves_to[i].evolves_to[0]){
        for (let j = 0; j < data.chain.evolves_to[i].evolves_to.length; j++){
          obj.chain[2].push(sliceID(data.chain.evolves_to[i].evolves_to[j].species.url))
        }
      }
    }
  }
  return obj
}

exports.testData = (req, res) => {
  res.send(formatData(testData))
}
exports.testData2 = (req, res) => {
  res.send(formatData2(testData2))
}
exports.testData3 = (req, res) => {
  res.send(formatData3(testData3))
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
      axios.get(`http://pokeapi.co/api/v2/pokemon-species/${searchID}`)
        .then(payload2 => {
          axios.get(payload2.data.evolution_chain.url)
            .then(payload3 => {
              res.send(Object.assign(formatData(payload.data), formatData2(payload2.data), formatData3(payload3.data)))
            })
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
