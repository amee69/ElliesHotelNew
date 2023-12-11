// User info
const nameInput = document.getElementById("nameCustomer");
const emailInput = document.getElementById("emailCustomer");
const numberInput = document.getElementById("numberCustomer");
// DOM elements
const roomTypeInput = document.getElementById("roomType");
const chooseBranchInput = document.getElementById("branchChoose");
const roomQuantityInput = document.getElementById("roomQuantity");
const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const fivePlusNoInput = document.getElementById("childMeal");
const extraBedInput = document.getElementById("bed");
const extraRequirements = document.getElementById("viewType");
const wifiCheck = document.getElementById("wifi")
// Adventure DOM elements
const guideInput = document.getElementsByName("guide");
const promoCodeInput = document.getElementById("promoCode");
const bookNowButton = document.getElementById("bookNowButton");
const bookAdventureButton = document.getElementById("bookAdventurebutton");
const checkLoyaltyButton = document.getElementById("checkLoyaltyButton");
const addFavouriteButton = document.getElementById("favourite");
const checkPromoButton = document.getElementById("promoCodeButton");
// Current booking & overall booking DOMs
const currentBookingOutput = document.getElementById("currentBooking");
const totalCostCurrentOutput = document.getElementById("currentBookingCost");
const overallBookingOutput = document.getElementById("overallBookingOutput");
const overallBookingCostOutput = document.getElementById("overallBookingCost");
//dom elements for adventure section people//
const adventureSelect = document.getElementById("adventureType")
const numAdultsLocalIn = document.getElementById("numAdultsLocal");
const numChildrenLocalAboveIn = document.getElementById("numChildrenLocalAbove");
const numChildrenLocalBelowIn = document.getElementById("numChildrenLocalBelow");
const numAdultsForeignIn = document.getElementById("numAdultsForeign");
const numChildrenForeignIn = document.getElementById("numChildrenForeign");

const addButton = document.getElementById("addBooking");
const viewButton = document.getElementById("viewFavourite")

// Variables
let nameCus;
let emailCus
let numberCus;
let room;
let total;
let extraCost;
let costOfRoom;
let guideCost;
let bedCost;
let localAdult;
let localAbove;
let localBelow;
let foreignAdult;
let foreignKid;
let childMeal;
let noDay;
let bedInfo;
let roomInfo;
let adventureInfo;
let guideInfoAdult;
let guideInfoKids;
let wifiInfo ;
let loyaltyValue;
let promoValid;
let viewTypevar;
let chosenBranch;
let overAllCost;
let duration;

function initialize() {
  nameCus = "";
  emailCus = "";
  numberCus = "";
  total = 0;
  room = "";
  costOfRoom = 0;
  extraCost = 0;
  guideCost = 0; 
  guideInfoAdult=""
  guideInfoKids=""
  bedCost = 0;
  foreignAdult = 0;
  foreignKid = 0;
  localAbove = 0;
  localBelow = 0;
  localAdult = 0;
  childMeal = 0;
  noDay = 1;
  viewTypevar = "";
  adventureInfo = "";
  promoValid = "";
  wifiInfo = "";
  loyaltyValue=0;
  chosenBranch = "";
  overAllCost = 0;
  duration = 0;
  


}

// Add event listeners
nameInput.addEventListener("input", nameInputFunction);
emailInput.addEventListener("input", emailInputFunction);
numberInput.addEventListener("input",numberInputFunction);

chooseBranchInput.addEventListener("change",chooseBranchInputFunction);
roomTypeInput.addEventListener("change", roomTypeFunction);
roomQuantityInput.addEventListener("input", roomQuantityInputFunction);
extraRequirements.addEventListener("change", viewFunction );
wifiCheck.addEventListener("change", wifiFunction);
guideInput.forEach((item) => item.addEventListener("change", guideFunction));
bookNowButton.addEventListener("click", finalizeBookingFunction);
bookAdventureButton.addEventListener("click", bookAdventureFunction);
checkPromoButton.addEventListener("click", checkPromoFunction);
checkLoyaltyButton.addEventListener("click", checkLoyaltyButtonFunction);
addFavouriteButton.addEventListener("click",addFavouriteButtonFunction);
extraBedInput.addEventListener("input", bedFunction);
fivePlusNoInput.addEventListener("input", kidMealFunction);

checkIn.addEventListener("input", durationFunction);
checkOut.addEventListener("input", durationFunction);

adventureSelect.addEventListener("change",AdventureFunction )

// Adventure event listener for people quantity
numAdultsLocalIn.addEventListener("input", numAdultsLocalFunction);
numChildrenLocalAboveIn.addEventListener("input", numChildrenLocalAboveFunction);
numChildrenLocalBelowIn.addEventListener("input", numChildrenLocalBelowFunction);

numAdultsForeignIn.addEventListener("input", numAdultsForeignFunction);
numChildrenForeignIn.addEventListener("input", numChildrenForeignFunction);
addButton.addEventListener("click",addButtonFunction);
viewButton.addEventListener("click", viewfavouriteFunction);





function chooseBranchInputFunction(){
  if (chooseBranchInput.value == "SriLanka") {
  
    chosenBranch = "SriLankan Branch"
  } else if (chooseBranchInput.value  == "India") {
    
    chosenBranch = "Indian Branch";
  } 

  refreshOutPut()

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }

  

}






function roomQuantityInputFunction(){
  refreshOutPut()

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
}


function checkLoyaltyButtonFunction(){
  alert(`Your Loyalty Points: ${loyaltyValue}`)
}


function wifiFunction(){
  if(this.checked){
    wifiInfo = "+WiFi"
  }
  else{
    wifiInfo = "NO WiFi Added"
  }
  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
}

function numberInputFunction(){
  numberCus = numberInput.value
  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{
  }
  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
}


function emailInputFunction(){
  emailCus = emailInput.value
  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
}


function nameInputFunction(){
  nameCus = nameInput.value
 currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{
  }
  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
}


function checkPromoFunction(){
  if(promoCodeInput.value === "Promo123"){
    alert("Promo Code Applied Successfully!")
    total =(((costOfRoom *roomQuantityInput.value)   +bedCost+childMeal) * duration)+ ( guideCost + localAdult + localAbove + foreignAdult + foreignKid)- ((((costOfRoom *roomQuantityInput.value)   +bedCost+childMeal) * duration)+ ( guideCost + localAdult + localAbove + foreignAdult + foreignKid) * duration)*0.05;
    totalCostCurrentOutput.innerText = ` Rs.${total} (Promo Code Applied)`;
  }
  else if(promoCodeInput.value===""){
    alert("No promo code was entered ");
  }
  else{
    alert("Promo Code Not Valid :( ");
  }
  event.preventDefault();
  

}



function AdventureFunction(){
  if (this.value.toLowerCase() === "diving") {
    adventureInfo = "Diving Adventure";
  } else if (this.value.toLowerCase() === "turtle") {
    adventureInfo = "Turtle Hatchery Adventure";
  } else {
    adventureInfo = "Swimming Pool";
  }

  

  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
}



function durationFunction() {
  noDay = Math.abs(new Date(checkOut.value) - new Date(checkIn.value));
  duration = ((Math.ceil(noDay / (1000 * 60 * 60)))/24);
  refreshOutPut()

  durationString = duration.toString();
  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }
  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
}



function kidMealFunction() {
  childMeal = fivePlusNoInput.value * 5000;
  refreshOutPut()
  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
}



function numAdultsLocalFunction() {
  localAdult = numAdultsLocalIn.value * 5000;

  refreshOutPut()

  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  } 
}



function numChildrenLocalAboveFunction() {
  localAbove = numChildrenLocalAboveIn.value * 2000;
  refreshOutPut()

  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \n$Above 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
}



function numChildrenLocalBelowFunction() {

  localBelow = numChildrenLocalBelowIn.value

  localAbove = numChildrenLocalAboveIn.value * 2000;
  refreshOutPut()

  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${localBelow}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }
  

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
}


function numAdultsForeignFunction() {
  foreignAdult = numAdultsForeignIn.value * 10000;
  refreshOutPut()

  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
}


function numChildrenForeignFunction() {
  foreignKid = numChildrenForeignIn.value * 5000;
  refreshOutPut()

   currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
}

function roomTypeFunction() {
  if (roomTypeInput.value.toLowerCase() === "single") {
    costOfRoom = 25000;
    room = "single";
    roomInfo = "Single Room";
  } else if (roomTypeInput.value.toLowerCase() === "double") {
    costOfRoom = 35000;
    room = "double";
    roomInfo = "Double Room";
  } else {
    costOfRoom = 40000;
    room = "triple";
    roomInfo = "Triple Room";
  }

  refreshOutPut()

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }
  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value} \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }
}

function viewFunction() {
  if (this.value.toLowerCase() === "pool") {
    viewInfo = "Pool View";
  } else if (this.value.toLowerCase() === "garden") {
    viewinfo = "Garden View";
  } else {
    viewInfo = "City View";
  }

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }

  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds:${fivePlusNoInput.value}  \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }
}


function guideFunction() {
  let guideType = this.value.toLowerCase();

  if (guideType === "adult") {
    if (this.checked) {
      guideCost += 1000;
      guideInfoAdult = "Adult Guide Included"
    } else {
      guideCost -= 1000;
      guideInfoAdult="Adult Guide NOT TAKEN";
    }
  } else {
    if (this.checked) {
      guideCost += 500;
      guideInfoKids = "Kids Guide Included"
    } else {
      guideCost -= 500;
      guideInfoKids= ",Kids Guide NOT TAKEN";
    }
  }

  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }

  refreshOutPut()

  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \nAbove 5 year olds: ${fivePlusNoInput.value}  \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }
}

function bedFunction() {
  bedCost = extraBedInput.value * 8000;
  bedInfo = ` ${extraBedInput.value} bed's included`;

  refreshOutPut();
  
  if(roomQuantityInput.value>3){
    loyaltyValue = ((roomQuantityInput.value-3)*20)
  }

  currentBookingOutput.innerText = `Name: ${nameCus} \nEmail: ${emailCus} \nNumber: ${numberCus}\nBranch: ${chosenBranch}\nRoom Type: ${roomTypeInput.value}\nRoom Quantity: ${roomQuantityInput.value}\nExtra Bed(s): ${extraBedInput.value} \nView: ${extraRequirements.value} \nDuration: ${duration} day(s) \n${fivePlusNoInput.value} below 5 year olds \n${wifiInfo}`

  if(adventureSelect.value !==""){
    currentBookingOutput.innerText += ` \n\nAdventure: ${adventureInfo} \nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: ${guideInfoAdult} ${guideInfoKids}`
  }
  else{

  }
}
 

function finalizeBookingFunction() {
  

  alert("Thank you for your booking \n See you soon!")
  document.getElementById("bookingForm").reset();
  totalCostCurrentOutput.innerText = "Pick Your Room and Date!";
  currentBookingOutput.innerText = ":)"
  overallBookingCostOutput.innerText = "0"
  loyaltyValue=0;
  localStorage.removeItem("currentCost");
  localStorage.removeItem("overAllCost");
 

  //Removing 
   localStorage.removeItem("Customer_name");
   localStorage.removeItem("Email");
   localStorage.removeItem("Number");
   localStorage.removeItem("Chosen_branch");
   localStorage.removeItem("Room_type");
   localStorage.removeItem("Room_quantity");
   localStorage.removeItem("Duration");
   localStorage.removeItem("No.Children_5_plus");
   localStorage.removeItem("Extra_bed");
   localStorage.removeItem("WiFi");
   localStorage.removeItem("View");
   localStorage.removeItem("Adventure_type");
   localStorage.removeItem("Local Adults");
   localStorage.removeItem("Local_children_Below5");
   localStorage.removeItem("Local_children_Above5");
   localStorage.removeItem("Foreign_Adult");
   localStorage.removeItem("Foreign_Kid");
   localStorage.removeItem("Adult_Guide",);
   localStorage.removeItem("Kids_Guide");
   localStorage.removeItem("Loyalty_points");

   overallBookingOutput.innerText = "(Add Another Booking)";
   overAllCost = 0;

}


function bookAdventureFunction() {
  if (adventureSelect.value.toLowerCase() === "diving") {
    
    adventureInfo = "Diving Adventure";
    alert(`Thank You For Booking The Adventure\nAdventure: ${adventureInfo}\n\nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: \n${guideInfoAdult} ${guideInfoKids}`);
  document.getElementById("bookingForm").reset();
  totalCostCurrentOutput.innerText = "Pick Your Room and Date!";
  currentBookingOutput.innerText = ":)"
  loyaltyValue=0;
  } else if (adventureSelect.value.toLowerCase() === "turtle") {

    alert(`Thank You For Booking The Adventure\nAdventure: ${adventureInfo}\n\nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: \n${guideInfoAdult} ${guideInfoKids}`);
  document.getElementById("bookingForm").reset();
  totalCostCurrentOutput.innerText = "Pick Your Room and Date!";
  currentBookingOutput.innerText = ":)"
  loyaltyValue=0;
    adventureInfo = "Turtle Hatchery Adventure";
  } else if(adventureSelect.value.toLowerCase()==="Swimming") {

    alert(`Thank You For Booking The Adventure\nAdventure: ${adventureInfo}\n\nLocals Adults: ${numAdultsLocalIn.value}\nLocal Children Above 5 Years:${numChildrenLocalAboveIn.value} \nLocal Children Below 5 Years: ${numChildrenLocalBelowIn.value}\n\nForeign Adult: ${numAdultsForeignIn.value}\nForeign Children: ${numChildrenForeignIn.value} \nGuides: \n${guideInfoAdult} ${guideInfoKids}`);
  document.getElementById("bookingForm").reset();
  totalCostCurrentOutput.innerText = "Pick Your Room and Date!";
  currentBookingOutput.innerText = ":)"
  loyaltyValue=0;
    adventureInfo = "Swimming Pool";
  }
  else{
    alert("NO adventure taken")
  }
  
}

function addFavouriteButtonFunction(){
   //Local Storage Saving//
   localStorage.setItem("Customer_name_favourite",nameCus);
   localStorage.setItem("Email_favourite",emailCus);
   localStorage.setItem("Number_favourite",numberCus);
   localStorage.setItem("Chosen_branch_favourite",chooseBranchInput.value)
   localStorage.setItem("Room_type_favourite", roomTypeInput.value);
   localStorage.setItem("Room_quantity_favourite", roomQuantityInput.value);
   localStorage.setItem("Duration_favourite",duration);
   localStorage.setItem("No.Children_5_plus_favourite",fivePlusNoInput.value);
   localStorage.setItem("Extra_bed_favourite",extraBedInput.value);
   localStorage.setItem("WiFi_favourite",wifiInfo);
   localStorage.setItem("View_favourite",extraRequirements.value);
   localStorage.setItem("Adventure_type_favourite",adventureInfo);
   localStorage.setItem("Local_Adults_favourite",numAdultsLocalIn.value);
   localStorage.setItem("Local_children_Below5_favourite",numChildrenLocalBelowIn.value);
   localStorage.setItem("Local_children_Above5_favourite",numChildrenLocalAboveIn.value);
   localStorage.setItem("Foreign_Adult_favourite",numAdultsForeignIn.value);
   localStorage.setItem("Foreign_Kid_favourite",numChildrenForeignIn.value);
   localStorage.setItem("Adult_Guide_favourite",guideInfoAdult);
   localStorage.setItem("Kids_Guide_favourite",guideInfoKids);
   localStorage.setItem("Loyalty_points_favourite",loyaltyValue);

   alert('Added Current Booking To Favourite');

   event.preventDefault()
 
}

function viewfavouriteFunction(){
  alert(`Your Favourite : \n${localStorage.getItem("Customer_name_favourite")} \n${localStorage.getItem("Email_favourite")} 
  \nNumber:${localStorage.getItem("Number_favourite")} \nBranch:${localStorage.getItem("Chosen_branch_favourite")} \nRoom Type:${localStorage.getItem("Room_type_favourite")}
  \n$No.Of Rooms:${localStorage.getItem("Room_quantity_favourite")} \nNo. Of Days:${localStorage.getItem("Duration_favourite")} Day(s) \nNo.Children(5+):${localStorage.getItem("No.Children_5_plus_favourite")} 
  \nNo.Extra Bed(s):${localStorage.getItem("Extra_bed_favourite")} \nWifi: ${localStorage.getItem("WiFi_favourite")}
  \nView Type:${localStorage.getItem("View_favourite")} \nAdventure:${localStorage.getItem("Adventure_type_favourite")}\
  \nAdult(Local):${localStorage.getItem("Local_Adults_favourite")} \nChildren(local&-5):${localStorage.getItem("Local_children_Below5_favourite")} 
  \nChildren(local&+5):${localStorage.getItem("Local_children_Above5_favourite")} \nAdult(Foreigner):${localStorage.getItem("Foreign_Adult_favourite")}
  \nKid(Foreigner):${localStorage.getItem("Foreign_Kid_favourite")}  \nGuide(Adult):${localStorage.getItem("Adult_Guide_favourite")}
  \nGuide(Kids):${localStorage.getItem("Kids_Guide_favourite")} \nLoyalty Points:${localStorage.getItem("Loyalty_points_favourite")}`);
}







function addButtonFunction(){
   localStorage.setItem("Customer_name",nameCus);
   localStorage.setItem("Email",emailCus);
   localStorage.setItem("Number",numberCus);
   localStorage.setItem("Chosen_branch",chooseBranchInput.value)
   localStorage.setItem("Room_type", roomTypeInput.value);
   localStorage.setItem("Room_quantity", roomQuantityInput.value);
   localStorage.setItem("Duration",duration);
   localStorage.setItem("No.Children_5_plus",fivePlusNoInput.value);
   localStorage.setItem("Extra_bed",extraBedInput.value);
   localStorage.setItem("WiFi",wifiInfo);
   localStorage.setItem("View",extraRequirements.value);
   localStorage.setItem("Adventure_type",adventureInfo);
   localStorage.setItem("Local Adults",numAdultsLocalIn.value);
   localStorage.setItem("Local_children_Below5",numChildrenLocalBelowIn.value);
   localStorage.setItem("Local_children_Above5",numChildrenLocalAboveIn.value);
   localStorage.setItem("Foreign_Adult",numAdultsForeignIn.value);
   localStorage.setItem("Foreign_Kid",numChildrenForeignIn.value);
   localStorage.setItem("Adult_Guide",guideInfoAdult);
   localStorage.setItem("Kids_Guide",guideInfoKids);
   localStorage.setItem("Loyalty_points",loyaltyValue);
   
   localStorage.setItem("overAllCost",overAllCost);
  overAllCost = parseFloat(localStorage.getItem("overAllCost")) || 0 ;
  overAllCost += total;
  overallBookingCostOutput.innerText = `Rs.${overAllCost}`

  localStorage.removeItem("currentCost");
  localStorage.removeItem("overAllCost");


  
  overallBookingOutput.innerText += `\n${localStorage.getItem("Customer_name")}'s Booking:\nBranch: ${localStorage.getItem("Chosen_branch")} \nRoom Type: ${localStorage.getItem("Room_type")}\nContacts:${localStorage.getItem("Number")}  \nDuration:${localStorage.getItem("Duration")} Day(s) \nCost:${ total}\n======================================================== ` 


   document.getElementById("bookingForm").reset();
  totalCostCurrentOutput.innerText = "Pick Your Room and Date!";
  currentBookingOutput.innerText = ":)"
  loyaltyValue=0;

}





function refreshOutPut(){

  total = (((costOfRoom *roomQuantityInput.value)   +bedCost+childMeal) * duration)+ ( guideCost + localAdult + localAbove + foreignAdult + foreignKid);
  totalCostCurrentOutput.innerText = ` Rs.${total}`;

  localStorage.setItem("currentCost", total);
  
}



// Initialize on page load
initialize();


   
//toggle button javascript responsive

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
   

toggleButton.addEventListener("click",() =>{
  navbarLinks.classList.toggle("active")

})
   
   
   
   
   
  