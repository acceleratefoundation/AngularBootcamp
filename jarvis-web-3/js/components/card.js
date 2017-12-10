export default class Card {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    // Create Card
    let card = document.createElement('div')
    card.classList.add('col-6')
    card.style.height = '400px'
    card.style.margin = '1%'
    card.style.cursor = 'pointer'
    card.style.boxShadow = '0px 0px 3px #888888'
    card.style.borderWidth = '2px'
    card.style.borderStyle = 'none'
    card.style.borderColor = 'gold'
    card.style.background  = 'rgba(0, 0, 0, 0.4)'
    card.style.borderRadius = '25px'
    
    // Create Card Header
    let cardHeader = document.createElement('div')
    cardHeader.style.height = '10%'

    // Create Card Title
    let cardTitle = document.createElement('div')
    cardTitle.append(this.options.title)

    cardTitle.style.color = '#dddddd'
    cardTitle.style.margin = 'auto'
    cardTitle.style.textAlign = 'center'
    cardTitle.style.fontWeight = 'bold'
    cardTitle.style.fontSize = '24px'
    cardTitle.style.width = '100%'
    cardHeader.append(cardTitle)

    card.append(cardHeader)

    // Create Card Body
    let cardBody = document.createElement('div')
    cardBody.style.height = '80%'
    cardBody.style.display = 'flex'
    cardBody.style.margin = 'auto'

    let cardImageContainer = document.createElement('div')
    cardImageContainer.style.flex = '.5'

    let cardImage = document.createElement('img')
    cardImage.src = this.options.image
    cardImageContainer.append(cardImage)
    cardBody.append(cardImageContainer)

    // Create Card Description
    let cardDescription = document.createElement('div')
    cardDescription.style.flex = '1'
    cardDescription.append(this.options.description)

    cardDescription.style.color = '#dddddd'
    cardDescription.style.fontSize = '20px'
    cardBody.append(cardDescription)

    card.append(cardBody)

    // Create Card Footer
    let cardFooter = document.createElement('div')
    cardFooter.style.height = '10%'
    cardFooter.style.textAlign = 'center'

    let cardFooterLink = document.createElement('a')
    cardFooterLink.href = this.options.link
    cardFooterLink.append(this.options.linkText)
    cardFooterLink.style.color = '#dddddd'
    cardFooterLink.style.margin = 'auto'
    cardFooterLink.style.fontSize = '18px'

    cardFooter.append(cardFooterLink)

    card.append(cardFooter)

    return card
  } 
  
}
