
var list=document.querySelector('.top-poke');

async function getCoderData() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    var coderData = await response.json();
    console.log(pokeData);

    for(let index=0; index< pokeData.results.length; index++){
        console.log(pokeData.results[index].name);
        var listItem=document.createElement('li');
        listItem.innerText=pokeData.results[index].name;
        list.appendChild(listItem);
}   
    
getPokeData();
var pokeImg = document.querySelector('.poke')


async function getPokeOfTheDay() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    var coderData = await response.json();
    console.log(pokeData.sprites);
    console.log(pokeData.sprites.front_shiny);
    pokeImg.src = pokeData.sprites.front_shiny;
}
getPokeOfTheDay();
