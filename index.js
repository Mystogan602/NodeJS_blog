const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  var a = 5;
  var c = a + 10;
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})