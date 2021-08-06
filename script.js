import { data, topics } from './data.js'

const filter = document.querySelector('#filter')
const cards = document.querySelector('#cards')

// Function for populating the cards
const populateCards = (data) => {
    for (let i = 0; i < data.length; i++) {
     const item = data[i]

     let ulElement = document.createElement('ul')
     for (let i = 0; i < item.links.length; i++) {
      let liElement = document.createElement('li')

      let aElement = document.createElement('a')
      aElement.href = item.links[i].link
      aElement.target = '_blank'
      aElement.innerText = item.links[i].name
      liElement.appendChild(aElement)
      ulElement.appendChild(liElement)
     }

     let h2Element = document.createElement('h2')
     h2Element.innerText = item.topic

     let divElement = document.createElement('div')
     divElement.classList.add('card')
     divElement.id = item.topic

     divElement.appendChild(h2Element)
     divElement.appendChild(ulElement)

     cards.appendChild(divElement)
    }
}

// Function for populating the select
const populateSelect = () => {
    for (let i = 0; i < topics.length; i++) {
     let element = document.createElement('option')
     element.textContent = topics[i]
     element.value = topics[i]
     filter.appendChild(element)
    }
}

// Function to remove all the child elements
const removeAllChildren = (parent) => {
    while (parent.firstChild) {
     parent.removeChild(parent.firstChild)
    }
} 

// Invoking the functions
populateSelect()
populateCards(data)

// Function to handle the select menu change
const handleChange = () => {
    const selected = filter.options[filter.selectedIndex].value
    if (selected === 'All topics') {
     removeAllChildren(cards)
     populateCards(data)
    } else {
     const newData = data.filter(datum => datum.topic === selected)
     removeAllChildren(cards)
     populateCards(newData)
    }
}

filter.addEventListener('change', handleChange)
