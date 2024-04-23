import data from './data.js';

const engines = Object.values(data)

function main() {

  const root = document.querySelector('#root')
const section = document.createElement("section")
const h1 = document.createElement('h1');
const div = document.createElement('div')
const section2 = document.createElement("section")


  section.className = "intro"


  h1.className = "intro__header"
  h1.innerText = "Visualized and Clarified by AI."

  root.append(section)
  section.append(h1)

 section2.className = "container"
  root.append(section2)

  for (const element of engines){
    const title = element.title
    const image = element.image
    const text = element.text
    const card = document.createElement("div");
    card.className = "card"
    const cardhHeader = document.createElement("div");
    cardhHeader.className = 'card__header'
    cardhHeader.innerText = title
    const cardBody = document.createElement("div");
    cardBody.className = "card__body";
    const cardBodyImage = document.createElement("div");
    cardBodyImage.className = "card__body__image"
    const img = document.createElement("img")
    img.src = image
    img.alt = data[element]
    const cardBodyText = document.createElement("div");
    cardBodyText.innerText = text
    
    section2.append(card)
    card.append(cardhHeader)
    card.append(cardBody)
   cardBody.append(cardBodyImage)
   cardBodyImage.append(img)
   cardBody.append(cardBodyText)

  }








}

main();
