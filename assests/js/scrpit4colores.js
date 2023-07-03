let first= document.getElementById("1");
let second= document.getElementById("2");
let third= document.getElementById("3");
let fourth= document.getElementById("4");
let fifth= document.getElementById("key")

let cambiarColor = (move) => {
    move.target.style.backgroundColor = "black"
};



function createDiv(color){
    let newDiv= document.createElement("div")
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}

function createDiv2(color){
    let newDiv2= document.createElement("div")
    newDiv2.style.display = "flex";
    newDiv2.style.alignItems = "center";
    newDiv2.style.justifyContent = "center";
    newDiv2.style.width = "200px";
    newDiv2.style.height = "200px";
    newDiv2.style.backgroundColor = color;
    document.body.appendChild(newDiv2);
}

function createDiv3(color){
    let newDiv3= document.createElement("div")
    newDiv3.style.display = "flex";
    newDiv3.style.alignItems = "center";
    newDiv3.style.justifyContent = "center";
    newDiv3.style.width = "200px";
    newDiv3.style.height = "200px";
    newDiv3.style.alignItems = "center";
    newDiv3.style.backgroundColor = color;
    document.body.appendChild(newDiv3);
}

first.addEventListener("click", cambiarColor);
second.addEventListener("click", cambiarColor);
third.addEventListener("click", cambiarColor);
fourth.addEventListener("click", cambiarColor);


document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        fifth.style.backgroundColor = "pink";
    } else if(event.key === "s") {
        fifth.style.backgroundColor = "orange";
    } else if (event.key === "d") {
        fifth.style.backgroundColor = "skyblue"; 
    } else if (event.key === "q"){
        createDiv("skyblue");
    } else if (event.key === "w"){
        createDiv2("orange");
    }else if (event.key === "e"){
        createDiv3("brown");
    }
      
})














        
    
    








    