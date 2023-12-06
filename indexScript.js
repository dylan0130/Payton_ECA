let nameOfElement;
nameOfElement = "demo";

// Código en español
alert("Welcome pookie");

// English code
console.log("hi pookies");

function changeText(){
  document.getElementById(nameOfElement).innerHTML = "lol";
  console.log(nameOfElement);
}

  let person = {
  firstName:"Dylan",
    Age: 169,
  favoriteColor:"yellow"
};
function printToConsole(input) {
    window.alert(input);
}
function happyDay(){
  person.Age ++;
  window.alert(person.Age);
}
