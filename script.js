import data from './data.js'

const topics = [
 'Agile Methodology',
 'SQL and NoSQL',
 'Unix',
 'Web Development',
 'Softwares',
 'Miscellaneous',
]

const filter = document.querySelector('#filter')
const cards = document.querySelector('#cards')

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

for (let i = 0; i < topics.length; i++) {
 let element = document.createElement('option')
 element.textContent = topics[i]
 element.value = topics[i]
 filter.appendChild(element)
}

const handleChange = () => {
 console.log(filter.options[filter.selectedIndex].value)
}
