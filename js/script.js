const characterList = document.getElementById('character-list')
let numeroPagina = 1
const pagina = document.getElementById('pagina')
const prevPage = document.getElementById('prev-page')
const nextPage = document.getElementById('next-page')
console.log(numeroPagina)


function actualiza() { 
    fetch('https://rickandmortyapi.com/api/character/?page=' + numeroPagina)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Algo ha fallado')
        }
        return response.json();
    })
    .then((data) => {
        let informacion = data
        let personajes = informacion.results 
        for (let i = 0; i < personajes.length; i++) {
            let character = `
            <div class="personaje">
            <img src="${personajes[i].image}" alt="imagen de ${personajes[i].name}">
            <p><b>Name: </b>${personajes[i].name}</p>
            <p><b>Species: </b>${personajes[i].species}</p>
            </div>
            `
            characterList.innerHTML += character
        }
    });
    pagina.textContent += `Pagina ${numeroPagina}`
}
actualiza()
nextPage.addEventListener('click', () =>{
    numeroPagina = numeroPagina + 1;
    console.log(numeroPagina)
    actualiza()
})

prevPage.addEventListener('click', () =>{
    numeroPagina = numeroPagina - 1;
    console.log(numeroPagina)
    actualiza()
})

