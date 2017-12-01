export default class App {
  constructor() {
    document.body.style.background = 'url("/images/background.png") no-repeat center center fixed'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'

    let content = document.getElementById('content')

    let title = document.createElement('h1')
    title.style.color = '#dddddd'
    title.append('Jarvis Web Project')

    content.append(title)

  }
}

let app = new App()
window.app = app

