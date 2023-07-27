// Hi 
// Avarnjot Here,
// I have created a webpage which is a replica of a small
// Smoothie Store where one can buy and pay for the smoothie 
// easily and effortlessly.
// ____________________________________________________

// Created some variables to store the value byName
let smoothie = document.getElementsByName('smoothie');
let sizeElements = document.getElementsByName('size');
let topping = document.getElementsByName('topping');
let quantity = document.getElementsByName('quantity');

// This function get the value of size(small, medium, large) from inputs
function checkSize() {
  let selectedSize;
  // here, loop iterates through the inputs(3) and the one which is
  // checked would be selected and its value will be stores as size.
  for (let i = 0; i < sizeElements.length; i++) {
    if (sizeElements[i].checked) {
      selectedSize = sizeElements[i].value;
      break;
    }
  }
  return selectedSize;
}

// This function get the value of topping from inputs
function checktopping() {
  let selectedTopping;
  // here, loop iterates through the inputs(5) and the one which is
  // checked would be selected and its value will be stores as topping.
  for (let i = 0; i < topping.length; i++) {
    if (topping[i].checked) {
      selectedTopping = topping[i].value;
      break;
    }
  }
  return selectedTopping;
}

// This function get the value of smoothie from inputs where I have used
// images to depict the input and value attribute of image is used in the if-else condition
// to calculate and store the price of smoothie selected 
function selectedSmoothie() {
  let smoothies = document.getElementsByName('smoothie');
  let price = 0;

  for (let i = 0; i < smoothies.length; i++) {
    if (smoothies[i].checked) {

      let selectedSmoothie = smoothies[i].value;

      if (selectedSmoothie === "Lime") {
        price = 1.23;
      }
      else if (selectedSmoothie === "Grape") {
        price = 2.65;
      }
      else if (selectedSmoothie === "Milkshake") {
        price = 2.50;
      }
      else if (selectedSmoothie === "Orange") {
        price = 1.10;
      }
      else if (selectedSmoothie === "Strawberry") {
        price = 0.90;
      }
      else if (selectedSmoothie === "cocktail") {
        price = 2.90;
      }
      else if (selectedSmoothie === "Nuts") {
        price = 1.35;
      }
      else if (selectedSmoothie === "soda") {
        price = 3.50;
      }
      break;
    }
  }

  return price;
}

// This function stores the value obtained from the input of sizes
// size which is selected, and its price fixed is returned.
function calculatePriceOfSize() {
  let sizePrice = 0;

  switch (checkSize()) {
    case 'Small':
      sizePrice = 5;
      break;
    case 'Medium':
      sizePrice = 10;
      break;
    case 'Large':
      sizePrice = 15;
      break;
    default:
      sizePrice = 0;
      break;
  }
  return sizePrice;
}

// This function stores the value obtained from the input of topping
// topping which is selected, and its fixed price is returned.
function calculatePriceOfTopping() {
  let toppingPrice = 0;

  switch (checktopping()) {
    case 'topping1':
      toppingPrice = 1;
      break;
    case 'topping2':
      toppingPrice = 1.30;
      break;
    case 'topping3':
      toppingPrice = 2.50;
      break;
    case 'topping4':
      toppingPrice = 1.25;
      break;
    case 'topping5':
      toppingPrice = 3;
      break;
    default:
      toppingPrice = 0;
      break;
  }
  return toppingPrice;
}

// Here the function stores value of quantity selected and 
// return the value obtained.
function priceWithQuantity() {
  let quantityInput = +quantity[0].value;

  return quantityInput;
}


// this function is used to display image in a definite div when the function is used in onclick.
function showImg(imgs) {
  var image = document.getElementById("img_to_be_shown");

  // here a block of code in which I added a if condition which states that
  // if the image is selected then it will add a border around it OR if we
  // try to select another image, then the border on previous image will be removed

  var selected = document.querySelector(".selected-img");
  if (selected) {
    selected.classList.remove("selected-img");
  }

  imgs.classList.add("selected-img");

  // src of the image is targeted which clicked
  image.src = imgs.src;
  // to change the title/alt of the image c
  var imgTitle = document.getElementById('title');
  imgTitle.innerHTML = imgs.alt;
}

// here is the final function used which collaborated all the functions and return bill
function price() {
  let total = (calculatePriceOfTopping() + calculatePriceOfSize() + selectedSmoothie()) * priceWithQuantity();
  document.getElementById('result').innerHTML = "<b>Your Total for the Order is $" + total.toFixed(2) + "</b><br> Enjoy Your SmOOOOOthie!";
}
