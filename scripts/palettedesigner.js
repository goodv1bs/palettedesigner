let defaultPalette = true;
let defaultColor = '#61ca61';
const $swatchElement = '<div class="swatch-container"><input class="color-id-readout" type="color" value=""></div>'

function createSwatch() { // Create new swatch by composing the elements required
  // compose the element
  let newSwatchItem = document.createElement('li');
  newSwatchItem.innerHTML = $swatchElement;
  // set the default color
  $(newSwatchItem).find('input').attr('value', defaultColor);
  // set the data attribute
  newSwatchItem.setAttribute('data-swatchid','1');
  // and finally send it to the color list
  $(".color-palette .color-list").append(newSwatchItem);
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
  });
});