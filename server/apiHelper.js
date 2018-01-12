const axios  = require ('axios');
const testData = require('./testData.js')
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
  if (data.types[1]) obj.type2=data.types[1].type.name.toUpperCase()
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

exports.searchPoke = (req, res) => {
  let searchID;
  if (isNaN(Number(req.body.searchTerm))) {
    searchID = pokeNumber(req.body.searchTerm)
  } else {
    searchID = req.body.searchTerm
  }
  axios.get(`http://pokeapi.co/api/v2/pokemon/${searchID}`)
    .then(response => {
      console.log(response.data.name)
      res.send(formatData(response.data))
  })
}

// let pokeAbilObj = pokeAbilInfo(body.abilities)
// async problems, outta scope
// pokeAbilInfo = (abil, cb) => {
//   let abilityX = 0;
//   obj = {}
//   abil.forEach( (x) => {
//     var abilityOptions = {
//       "uri":x.ability.url,
//       "method": "GET",
//       "headers": {
//         "content-type": "application/json",
//         "cache-control": "no-cache",
//         "postman-token": "405a8e18-63f9-3fdc-f9c7-8f630445da85"
//       },
//       "json":true
//     }
//     request(abilityOptions, (err, res, body) => {
//       var temp = `ability${abilityX}Name`
//       console.log(`ability${abilityX}Name`)
//       obj[temp] = body.name;
//       console.log(body.name)
//       temp = `ability${abilityX}Descript`
//       console.log(`ability${abilityX}Descript`)
//       obj[temp] = body.effect_entries[0].short_effect
//       console.log(body.effect_entries[0].short_effect)
//       abilityX++
//     })
//   })
//   console.log('inner', obj)
//   return obj;
// }

