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
app.get('/testData2', apiCall.testData2)
app.get('/testData3', apiCall.testData3)
app.post('/search', apiCall.searchPoke) 