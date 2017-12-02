let express = require('express')
let app = express()

app.get('/', (request, response) => {
  //How to send an .html file to my server
  response.send('Hello')
})

app.listen('3000', () => {
  console.log('express is listening on port 3000')
})

