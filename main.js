let inputdiv = document.querySelector(".inputdiv");
let title = document.createElement("h1");
let divp = document.createElement("h2");
inputdiv.appendChild(title);
let timrcounter = 10;

let cardinterval = setInterval(() => {
    if(timrcounter==0){
        inputdiv.innerHTML="დრო ამოიწურა"
    }
    title.innerHTML = `დარჩენილი დრო: ${timrcounter}`;
    timrcounter -= 1;
}, 1000);
divp.innerHTML = "რას უდრის 8+4?";
inputdiv.appendChild(divp);
let input = document.createElement("input");
inputdiv.appendChild(input);
input.classList.add("input")
let button = document.createElement("button");
button.classList.add("button")
inputdiv.appendChild(button);
button.innerHTML = "comfrom";
button.addEventListener("click",()=>{
    if(input.value==12){
        inputdiv.innerHTML="პასუხი სწორია!"
    }
    else{
        inputdiv.innerHTML="პასუხი არასწორია!"
    }
})