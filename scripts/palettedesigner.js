let defaultPalette = true;
let defaultColor = '#61ca61';
let swatches = [];
// base html
const $swatchElement = '<div class="swatch-container"><div class="color-picker-wrapper"><label>test</label><input class="color-id-readout" type="color" value="#61ca61"></div></div>';
//unique identifier for each swatch
let swatchId = 0;

function createSwatch() { // Create new swatch by composing the elements required
  // compose the element
  let newSwatchItem = document.createElement('li');
  newSwatchItem.innerHTML = $swatchElement;
  // set the data attribute
  newSwatchItem.setAttribute('data-swatchid', uniqueIdGenerator());
  // get all the elements we need to manipulate
  let newestSwatch = $(newSwatchItem).find('.swatch-container');
  let colorLabel = $(newSwatchItem).find('label');
  let colorInput = $(newSwatchItem).find('input');
  // set the default color of the new swatch
  colorInput.attr('value', defaultColor);
  // bind the backgrund color of the swatch and the label readout to the value of the color picker
  colorInput.on("change", () => {
    newestSwatch.css('backgroundColor', colorInput.val());
    colorLabel.html(colorInput.val());
  });
  // and finally send it to the color list
  $('.color-palette .color-list').append(newSwatchItem);
  swatches.push(newestSwatch);
}

function uniqueIdGenerator() {
  swatchId++;
  return swatchId.toString();
}

function modeSwitcher() {
  $("body").toggleClass("dark-theme light-theme");
  $(".mode-icon i").toggleClass("fa-moon fa-sun");
}

$(document).ready(() => {
  // init new palette
  if(defaultPalette === true) {
    createSwatch();
  }
  else {
    // load palette idk how yet
  } 

  //add swatch button
  $('.add-swatch-container').on('click', () => {
   createSwatch();
  })

  //add switch mode button
  $(".mode-icon").on("click", modeSwitcher);
  $("body").toggleClass("dark-theme");
});

