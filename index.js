const express = require('express')
const app = express()
const port = 4502
var Gpio = require('onoff').Gpio; //require onoff to control GPIO
var RelayPin = new Gpio(26, 'out'); //declare GPIO4 an output

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/on', (req, res) => {
    console.log('on!');
    RelayPin.writeSync(1)
});

app.get('/off', (req, res) => {
    console.log('off!');
    RelayPin.writeSync(0)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))