// Get Our Ranger Data
const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}

// create Constants to hold DOM Elements
const DOM_Elements = {
    ranger_list: '.ranger-list',
}

// Creation of the Ranger List HTML
const create_list = ( id, names, color, powercoin ) => {
    const html = `<a href ="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${names} ${color} ${powercoin} </a>`;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
}

// Function to Load Data and display HTML 

const load_data = async () => {
    clear_data()
    const rangers = await getData();

    rangers.forEach( element => {if (element["power-coin"]){create_list(element.id, element.name, element.color, element["power-coin"])} else { create_list(element.id, element.name, element.color, element["morp-coin"])}} )
}

const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = '';
}

/* Other DOM Stuff */

console.log(document.getElementsByTagName('h1'))