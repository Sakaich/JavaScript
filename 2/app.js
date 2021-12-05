'use strict'

let pokeURL = "https://pokeapi.co/api/v2/pokemon/";

async function getData(url) {
    let response = await fetch(url);
    return await response.json();
}

function makeBlocks(data) {
    for(var elem in data.results) {
        addBlock(data.results[elem].name,data.results[elem].url);
    }
}

document.body.onload = getData(pokeURL).then(data => makeBlocks(data));

var newBox = document.createElement("div");
newBox.className = ("box");
newBox.id = "box1"
document.documentElement.appendChild(newBox);

function addBlock(name,  url) {
    var newBlock = document.createElement("div");
    newBlock.className = ("block");
    newBlock.innerHTML = name;

    var newButton = document.createElement("button");
    newButton.className = ("button");
    newButton.innerHTML = url;

    newBlock.appendChild(newButton);
    
    document.getElementById("box1").appendChild(newBlock);
}

document.documentElement.addEventListener('click',function(go){
    if (go.target.classList.contains('button'))
    getData(go.target.innerHTML).then(data => console.log(data));
  })