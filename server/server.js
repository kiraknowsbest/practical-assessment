const express = require('express')
const bodyParser = require('body-parser')

const server = express();

server.use(express.static(__dirname + '/../client/dist'));
server.use(bodyParser.urlencoded({ extended: true}))

server.get('/', function (req, res) {
	res.send('index.html')
})

server.listen('3000', function () {
	console.log('listening on port 3k...')
})
