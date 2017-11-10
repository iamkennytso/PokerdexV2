const express = require('express');
const bodyParser = require('body-parser')
const compress = require('compression')
let app = express();
let port = process.env.PORT || 1203
let apiCall = require('./apiHelper')

app.use(express.static(__dirname + '/../public'));
app.use(compress())
app.use(bodyParser.json())
app.listen(port, function() {
	console.log(`<('.'<) Server's up on your birthday port!`);
})

app.get('/testData', apiCall.testData)
app.post('/search', apiCall.searchPoke) 