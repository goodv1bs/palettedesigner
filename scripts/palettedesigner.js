let defaultPalette = true;
let defaultColor = '#61ca61';
const $swatchElement = '<div class="swatch-container"><input class="color-id-readout" type="color" value=""></div>';
//unique identifier for each swatch
let swatchId = 0;

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

function modeSwitcher() {
  $("body").toggleClass("dark-theme light-theme");
  $(".mode-icon i").toggleClass("fa-moon fa-sun");
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

