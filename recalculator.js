//Calculate split
function calculateTip() {
  rent = Number(document.getElementById("rent").value);
  utilities = Number(document.getElementById("utilities").value);
  internet = Number(document.getElementById("internet").value);
  var numOfPeople = document.getElementById("peopleamt").value;
c = rent + utilities + internet
  //validate input
  if (rent === "" || utilities == "" || internet == "") {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople == "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  
  var total = c/ numOfPeople;
  //round to two decimal places
  
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  

  //Display the tip
  document.getElementById("totalsplit").style.display = "block";
  document.getElementById("split").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalsplit").style.display = "none";


//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
