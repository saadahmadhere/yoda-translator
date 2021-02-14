let txtInput= document.querySelector("#text-input");
let button = document.querySelector(".btn");

let outputDiv = document.querySelector(".output-class");

function getURL(text){
    return "https://api.funtranslations.com/translate/yoda.json"+"?text="+text;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("You've reached maximum request limit")
}

document.querySelector(".btn").addEventListener("click",function(){

    let text = txtInput.value //taking input from text area

    fetch(getURL(text))
    .then(response=>response.json())
    .then(json=>outputDiv.innerHTML = (json.contents.translated))
    .catch(errorHandler)
    


})

