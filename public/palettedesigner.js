let defaultPalette = false;
let defaultColor = '#61ca61';
let swatches = [];
// base html
const $swatchElement = '<div class="swatch-container"><div class="color-picker-wrapper"><label>test</label><input class="color-id-readout" type="color" value="#61ca61"></div></div>';
//unique identifier for each swatch
let swatchId = 0;
/*
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
*/
function uniqueIdGenerator(amountOfSwatches) {
  swatchId = amountOfSwatches.length;
  swatchId++;
  return swatchId.toString();
}

function modeSwitcher() {
  $("body").toggleClass("dark-theme light-theme");
  $(".mode-icon i").toggleClass("fa-moon fa-sun");
}

// Create new swatch by composing the elements required
function createSwatch(colorToInject) { 
  let usedColor;
  if (colorToInject == null) {
    usedColor = defaultColor;
  }
  else {
    usedColor = colorToInject;
  }
  // compose the element
  let newSwatchItem = document.createElement('li');
  newSwatchItem.innerHTML = $swatchElement;
  // set the data attribute
  newSwatchItem.setAttribute('data-swatchid', uniqueIdGenerator(swatches));
  // get all the elements we need to manipulate
  let newestSwatch = $(newSwatchItem).find('.swatch-container');
  let colorLabel = $(newSwatchItem).find('label');
  let colorInput = $(newSwatchItem).find('input');
  // set the default color of the new swatch
  colorInput.attr('value', usedColor);
  newestSwatch.css('backgroundColor', usedColor);
  colorLabel.html(usedColor);
  // bind the backgrund color of the swatch and the label readout to the value of the color picker
  colorInput.on("change", () => {
    newestSwatch.css('backgroundColor', colorInput.val());
    colorLabel.html(colorInput.val());
  });
  // and finally send it to the color list
  $('.color-palette .color-list').append(newSwatchItem);
  swatches.push(newestSwatch);
}

$(document).ready(() => {
  // init new palette
  if(defaultPalette === true) {
    createSwatch();
  }
  // load it from the whatever
  else {
    fetch('./mockdata/palette.json')
      .then((response) => response.json())
      .then((data) => {
        for(color of data.colors) {
          createSwatch(color);
        }
       });
      //then((data) => console.log(data.colors.swatch1));
  } 

  //add swatch button
  $('.add-swatch-container').on('click', () => {
   createSwatch();
  })

  //add switch mode button
  $(".mode-icon").on("click", modeSwitcher);
  $("body").toggleClass("dark-theme");
});

