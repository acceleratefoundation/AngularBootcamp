let express = require('express')
let app = express()

app.use('/', express.static('app'))

app.set('port', process.env.PORT || process.env.VCAP_APP_PORT || 3000)

// Start server
let server = app.listen(app.get('port'), function() {
  console.log(`Express is running on port ${app.get('port')}`)
})
