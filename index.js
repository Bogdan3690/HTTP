const BASEURL = "https://pokeapi.co/api/v2/"
const form = document.querySelector(".js-search-form")
console.log(form);
const input = document.querySelector(".form-control")
console.log(input);


form.addEventListener("submit", onSearchBtn)

function onSearchBtn(e) {
    e.preventDefault()
    const id = input.value
    console.log(Number(id));
    if (Number.isNaN(Number(id))) {
        alert("Enter a Number")
        return 
    }
}

function fetchPokemonById(params) {
    
}

fetch(`${BASEURL}pokemon/ditto`)
.then(resp => {
    if (!resp.ok) {
        throw new Error(resp.status)
    }
    return resp.json()
})
.then(data => {
    console.log(data.abilities[0].ability.name);
    
})
.catch(error => {
    console.log(error);
    
})