fetch('https://rickandmortyapi.com/api/character')
.then(Response => Response.json())
.then(characters => {
    renderCharacter(characters.results)
});

const cardsContainer = document.querySelector('#cards-container');

function renderCharacter(characters){
    characters.forEach(character =>{
        const div = document.createElement('div');
        const div1 = document.createElement('div');
        const img = document.createElement('img');
        const name = document.createElement('h3');
        const species = document.createElement('h3');
        // const like = document.createElement('button');

        div.classList = 'card';
        img.classList = 'card-img';
        // like.classList = 'like';
        div1.classList = 'one-container';

        img.src = character.image;
        name.innerText = ` Name: ${character.name}`;
        species.innerText = `Species: ${character.species}`;
        // like.textContent = 'like';

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(species);
        // div.appendChild(like);
        div1.appendChild(div);
        cardsContainer.appendChild(div1);
    })
    
}
