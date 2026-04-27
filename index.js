const BASEURL = "https://pokeapi.co/api/v2/"

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