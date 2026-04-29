const BASEURL = "https://pokeapi.co/api/v2/"
const form = document.querySelector(".js-search-form")
console.log(form);
const input = document.querySelector(".form-control")
console.log(input);

const container = document.querySelector(".js-card-container")



form.addEventListener("submit", onSearchBtn)

function onSearchBtn(e) {
    e.preventDefault()
    const id = input.value
    console.log(Number(id));
    if (Number.isNaN(Number(id))) {
        alert("Enter a Number")
        return 
    }
    fetchPokemonById(id)
    .then(data => {
    console.log(data.abilities[0].ability.name);
    renderPokemon(data)
})
.catch(error => {
    console.log(error);
    
        alert("Oops, not found")
})
.finally(() => {
    form.reset()
})
}

function fetchPokemonById(id) {
    return fetch(`${BASEURL}pokemon/${id}`)
.then(resp => {
    if (!resp.ok) {
        throw new Error(resp.status)
    }
    return resp.json()
})
}

function renderPokemon(pokemon) {
    const markup = `<div class="card">
            <div class="card-img-top">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            </div>
            <div class="card-body">
                <h2 class="card-title">Ім'я: ${pokemon.name}</h2>
                <p class="card-text">Вага: ${pokemon.weight}</p>
                <p class="card-text">Зріст: ${pokemon.height}</p>
                <p class="card-text"><b>Вміння</b></p>
                <ul class="list-group"></ul>
            </div>
        </div>`
        console.log(markup);

        container.innerHTML = markup
}
