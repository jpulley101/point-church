import $ from "jquery";

export class Section {

  constructor () {

    this.photos = $(".section.photo");
    
    Section.setBackgroundImages(".photo.section");

  }

  static setBackgroundImages ( selector ) {
    
    $(selector).each( function buildScriptTags() {

        $(this).prepend(
          `<style>
            #` + $(this).attr("id") + `{ 
              background-image: url(` + $(this).data("image") + `);
            }
          </style>`
        );

    });

  }

}
