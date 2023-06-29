$( document ).ready(function() {
    Coloris({
        defaultColor: document.documentElement.style.getPropertyValue("--swatch-bg"), // idk if this is required
        onChange: (color) => {
          document.documentElement.style.setProperty("--swatch-bg", color); // oh god wow i'm dumb i'll fix in a sec
        }
      });
      
      //add swatch button
      $(".add-swatch-container").on("click", function () {
        $(".color-palette .color-list").append(
          '<li><div class="swatch-container"><input class="color-id-readout" type="text" value="" placeholder="#00000" data-coloris></div></li>'
        );
      });
      
});