let main = document.querySelector(".main");

let creatH1 = document.createElement("h1");
let numberBlock = document.createElement("div");
let creatInputLargeNumber = document.createElement("input");
let creatInputLowNumber = document.createElement("input");
let button = document.createElement("button");
let createNumerListShow = document.createElement("div");
let largeLowNmbrShow = "You have entered: ";
let mathSummation = document.createElement("div");
let mathSummationTxt = "Your summation is:-" 

creatH1.innerText = "Math Fun!!";

numberBlock.classList.add("numberBLock");

creatInputLargeNumber.setAttribute("type", "number");
creatInputLargeNumber.setAttribute("placeholder", "Enter large number");
creatInputLargeNumber.classList.add("creatInputLargeNumber");

creatInputLowNumber.setAttribute("type", "number");
creatInputLowNumber.setAttribute("placeholder", "Enter lower number");
creatInputLowNumber.classList.add("creatInputLowNumber");

button.innerText = "Submit"
button.classList.add("sbmtBtn");

createNumerListShow.classList.add("userNumberList");

mathSummation.classList.add("summation");

main.appendChild(creatH1);
main.appendChild(numberBlock);
numberBlock.appendChild(creatInputLargeNumber);
numberBlock.appendChild(creatInputLowNumber);
numberBlock.appendChild(button);
main.appendChild(createNumerListShow);
main.append(mathSummation);


button.addEventListener("click", ()=> {
  let getUserLargNumber = document.querySelector(".creatInputLargeNumber").value;
  let getUserLowNumber = document.querySelector(".creatInputLowNumber").value;
  let showUserInfo = parseInt(getUserLargNumber) + parseInt(getUserLowNumber);
  createNumerListShow.innerText =  largeLowNmbrShow + " The large number is " + getUserLargNumber +  " and " + "Lower number is " +  getUserLowNumber;
  createNumerListShow.style.background = "#00b8ff";
  createNumerListShow.style.border = "1px solid white";

  function summation(x,y){
    return "Your summation is: " + x + y ;
  }
  let subtraction = function(x, y){
    return "Your subtraction is: " + x - y ;
  }
  let multiply = function multiplyFunction(x, y){
    return "Your multiply is: " +  x * y;
    }
    let divide = function(x, y){
      return "Your division is " + x / y;
    }
    let allFunction = [
      summation,
      subtraction,
      multiply,
      divide
    ]
    for(let userInput of allFunction){
      let mathSummation = document.createElement("div");
      mathSummation.classList.add("summation");
      main.appendChild(mathSummation);
     let allResult=  userInput(parseInt(getUserLargNumber) , parseInt(getUserLowNumber));
     mathSummation.innerText = allResult;
    }
})