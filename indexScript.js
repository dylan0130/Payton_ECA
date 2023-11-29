let nameOfElement;
nameOfElement = "demo";

function changeText(){
  document.getElementById(nameOfElement).innerHTML = "lol";
  console.log(nameOfElement);
}

function printToConsole(input) {
    window.alert(input);
}
