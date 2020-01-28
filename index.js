const express = require('express')
const app = express()
const port = 3000
var Gpio = require('onoff').Gpio; //require onoff to control GPIO
var RelayPin = new Gpio(26, 'out'); //declare GPIO4 an output

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/on', (req, res) => LEDPin.writeSync(1))

app.get('/off', (req, res) => LEDPin.writeSync(0))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))