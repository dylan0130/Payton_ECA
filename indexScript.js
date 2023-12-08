let nameOfElement;
nameOfElement = "demo";

// Código en español
alert("Welcome pookie");

// English code
console.log("hi pookies");

function changeText(){
  document.getElementById(nameOfElement).innerHTML = "...let me be your coffee pot.";
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
const date = new Date();
let day = day.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

let fullDate = '${month}-${day}-${year}'
console.log(fullDate)
