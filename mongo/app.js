let Marvel = require('./marvel')

let marvel = new Marvel()

marvel.getData((arr) => {
  marvel.insertDocuments(arr)
})

