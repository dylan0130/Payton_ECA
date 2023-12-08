let nameOfElement;

let date1 = new Date("9/11/23");
let date2 = new Date();

// To calculate the time difference of two dates
let Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
let Difference_In_Days = 
	Math.round(Difference_In_Time / (1000 * 3600 * 24));let nameOfElement;
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
// To display the final no. of days (result)

function Days() {
// To display the final no. of days (result)
window.alert ("It's been " +  Difference_In_Days + " days");
}
