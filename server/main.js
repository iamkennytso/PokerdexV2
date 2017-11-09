const express = require('express');
// const bodyParser = require('body-parser')
// const request = require('request')
let app = express();
let port = process.env.PORT || 1203
// let apiCall = require('./apiHelper')


app.use(express.static(__dirname + '/../public'));
// app.use(bodyParser.json())
app.listen(port, function() {
	console.log(`<('.'<) Server's up on your birthday port!`);
})

// app.post('/pokemon', function(req,res){
//   let id = req.body.id;
//   let pokeInfo = apiCall.pokeInfo(id, (body) => {
//     res.send(body)
//   });
// })
