

const express = require('express')

const app = express();


app.get('/', function(req, res) {
  res.send(`<h1>Hi dear</h1>`)
})

app.get('/bye', function(req,res) {
  res.send(`<h2>Am saying goodbye</h2>`)
})

app.get('/dogs' , function(req, res) {
  res.send(`
  <li>Dob 1</li>
  <li>Dog 2</li>
  `)
})

app.get('*', function(req, res) {
  res.send('This is generic for nodefinite path')
})

app.listen(3000, function() {
  console.log('Lisening on port 3000')
})