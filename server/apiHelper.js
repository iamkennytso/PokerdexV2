const axios  = require ('axios');
const testData = require('./testData.js')

const formatData = (data) => {
  const obj = {};
  obj.name = data.name.replace(/\w\S*/g, (txt)=>{return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()});;
  obj.ID = data.id;
  obj.sprite = data.sprites.front_default
  if (data.sprites.front_female !== null) obj.sprite2 = data.sprites.front_female
  obj.height = (data.height / 10)
  obj.weight = (data.weight / 10)
  obj.type1 = data.types[0].type.name.toUpperCase()
  obj.blink = data.types[0].type.name.toUpperCase()
  if (data.types[1] !== undefined) obj.type2=data.types[1].type.name.toUpperCase()
  data.stats.map( (x)=> {
    name = x.stat.name
    obj[name] = x.base_stat;
  })
  return obj;
}

exports.testData = (req, res) => {
  res.send(formatData(testData))
}

exports.searchPoke = (req, res) => {
  console.log(req)
  // axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
}
// exports.pokeInfo = (id, cb) => {
//   console.log('Entered API Call')
//   var options = {
//     "uri":`http://pokeapi.co/api/v2/pokemon/${id}`,
//     "method": "GET",
//     "headers": {
//       "content-type": "application/json",
//       "cache-control": "no-cache",
//       "postman-token": "405a8e18-63f9-3fdc-f9c7-8f630445da85"
//     },
//     "json":true
//   };
//   console.log('Calling API...')
//   request(options, (err, res, body) => {
//     console.log('API responded')
//     let obj = {};
//     let abilCount = 1;
//     console.log(body.abilities)
//     body.abilities.forEach( (abil) => {
//       var temp = `ability${abilCount}Name`
//       obj[temp] = abil.ability.name
//       abilCount++
//     })
//     obj.name = body.name;
//     obj.id = body.id;
//     obj.sprite = body.sprites.front_default
//     if (body.sprites.front_female !== null) obj.sprite2 = body.sprites.front_female
//     obj.height = (body.height / 10)
//     obj.weight = (body.weight / 10)
//     obj.type1 = body.types[0].type.name
//     if (body.types[1] !== undefined) obj.type2=body.types[1].type.name
//     body.stats.map( (x)=> {
//       name = x.stat.name
//       obj[name] = x.base_stat;
//     })
//     cb(obj)
//   })
// }

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

