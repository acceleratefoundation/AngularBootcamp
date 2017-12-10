let express = require('express')
let app = express()
let MongoClient = require('mongodb').MongoClient

app.use('/', express.static('app'))

app.get('/api/heroes', (request, response) => {
  response.json(
    [
      {
        title: 'Thor',
        image: '/images/thor-thumb.png',
        description: 'As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he\'s quite smart and compassionate.',
        link: 'http://marvel.com/universe/Thor_(Thor_Odinson)#axzz502Le2EeS',
        linkText: 'More Info on Thor'
      },
      {
        title: 'Hulk',
        image: '/images/hulk-thumb.png',
        description: 'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk.',
        link: 'http://marvel.com/universe/Hulk_(Bruce_Banner)#axzz502Le2EeS',
        linkText: 'More Info on Hulk'
      }
    ]
  )
})

app.set('port', process.env.PORT || process.env.VCAP_APP_PORT || 3000)

// Start server
let server = app.listen(app.get('port'), function() {
  console.log(`Express is running on port ${app.get('port')}`)
})
