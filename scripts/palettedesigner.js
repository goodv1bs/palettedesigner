let defaultPalette = true;
let defaultColor = '#61ca61';
const $swatchElement = '<div class="swatch-container"><input class="color-id-readout" type="color" value=""></div>';
//unique identifier for each swatch
let swatchId = 0;
let initial = true;
function createSwatch() { // Create new swatch by composing the elements required
  // compose the element
  let newSwatchItem = document.createElement('li');
  newSwatchItem.innerHTML = $swatchElement;
  // set the default color and id of the input element
  $(newSwatchItem).find('input').attr('value', defaultColor);
  // set the data attribute
  newSwatchItem.setAttribute('data-swatchid', uniqueIdGenerator());
  // and finally send it to the color list
  $(".color-palette .color-list").append(newSwatchItem);
  
}
function uniqueIdGenerator() {
  swatchId++;
  return swatchId.toString();
}



$(document).ready(function() {
  // init new palette
  if(defaultPalette === true) {
    createSwatch();
  }
  else {
    // load palette idk how yet
  } 

  //add swatch button
  $(".add-swatch-container").on("click", function () {
   createSwatch();
  })

  //add switch mode button
  $(".mode-icon").on("click", modeSwitcher);
  $("body").toggleClass("dark-theme");
});

function modeSwitcher() {
  $("body").toggleClass("dark-theme light-theme");
}


/*// stores the state of dark mode
let darkMode = true;
function modeSwitcher(){
  // stores the new properties of each 
  const darkPalette = {"--body-bg":"#0e0e12","--bg-selector-color":"#535369","--top-bar-color":"#424254","--plus-icon-color":"#fff"};
  const lightPalette = {"--body-bg":"#FAFAF7","--bg-selector-color":"#CDE7FA","--top-bar-color":"#E0E0BA","--plus-icon-color":"#000"};
  if (darkMode === true) {
    // button properties switch the icon to sun
    $("#mode-icon i").toggleClass(["fa-moon", "fa-sun"]);
    // switch darkMode variable to false
    darkMode = false;
    // swap css properties 
    $(":root").css(lightPalette);
  }
  if (darkMode === false) {
    // button properties switch the icon to moon
    $("#mode-icon i").toggleClass(["fa-moon","fa-sun"]);
    // switch darkMode variable to true
    darkMode = true;
    // swap css properties
    $(":root").css(darkPalette); 
  }
};*/