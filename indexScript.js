let nameOfElement;
nameOfElement = "demo";

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
