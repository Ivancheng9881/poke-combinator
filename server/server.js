const express = require('express')
const fs = require('fs')
const app = express()
const port = 5000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api", (req, res) => {
  fs.readFile(__dirname + "/" + "pokedex.json", 'utf8', function(err, data) {
      console.log(data);
      res.end(data);
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})