console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise 1
let favoriteNumber = 77;

const userInput = window.prompt("Enter your favorite number (1-100)");

if(userInput < favoriteNumber) {
  console.log("guess was too low");
} else if (userInput > favoriteNumber) {
  console.log("guess was too high");
} else if (userInput === favoriteNumber) {
  console.log("Congratulations ! ! !");
} else {
  console.log("Please input a valid number");
}


//Exercise 2

const birthMonth = window.prompt("What is your Birth Month:");

switch(birthMonth) {
  case "December":
  case "January":
  case "February":
    console.log("Winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("Spring");
    break;
  case "June":
  case "July": 
  case "August":
    console.log("Summer");
    break;
  case "September": 
  case "October":
  case "November":
    console.log("Fall")
    break;
  default:
    console.log("Please input a valid month");
}

//Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case"01":
   type = "Tank top"
   break;
  case"02":
   type = "T-Shirt"
   break;
  case"03":
   type = "Long Sleeve"
   break;
  case"04":
   type = "Sweat Shirt"
   break;
  default:
  type = "Other";
}
  console.log(type);

switch(colorId){
  case "BK":
   color = "Black";
   break;
  case "BL":
   color = "Blue";
   break;
  case "RD":
   color = "Red";
   break;
  case "PU":
   color = "Purple";
   break;
  default:
  color = "White";
}

switch (sizeId) {
  case"S":
  size = "Small"
  break;
  case"M":
  size = "Medium"
  break;
  case"L":
  size = "Large"
  break;
  case"XL":
  size = "Extra Large"
  break;
  default:
  size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);