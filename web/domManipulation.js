//This is the Goal: <p>This is Geralds paragraph.</p>
//Create a h1 tag and append to the dom that you are sending to your server
let paragraph = document.createElement('p')
paragraph.innerHTML = 'This is a javascript generated paragraph tag'

let body = document.getElementById('content')

body.append(paragraph)



