import $ from "jquery";

export class Header {

  constructor () {

    const stop = Math.round($(window).scrollTop());
    const introBottom = $("body").offset().top;

    $(window).on("scroll", () => {

      if (stop > introBottom) {

        Header.addVisibility(".header");

      } else {

        Header.removeVisibility(".header");

      }

    });

  }

  static addVisibility (selector) {

    $(selector).addClass("past-intro");

  }

  static removeVisibility (selector) {

    $(selector).removeClass("past-intro");

  }

}
