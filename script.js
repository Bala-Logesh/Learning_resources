const topics = [
 'Agile Methodology',
 'SQL and NoSQL',
 'Unix',
 'Web Development',
 'Softwares',
 'Miscellaneous',
]

const filter = document.querySelector('#filter')

for (let i = 0; i < topics.length; i++){
    let element = document.createElement('option')
    element.textContent = topics[i];
    element.value = topics[i];
    filter.appendChild(element);
}

const handleChange = () => {
    console.log(filter.options[filter.selectedIndex].value)
}