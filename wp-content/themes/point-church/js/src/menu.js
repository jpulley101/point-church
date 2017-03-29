import $ from "jquery";

export class Menu {

  constructor () {

    const button = ".off-canvas-control, .off-canvas-click-blocker";
    const selector = ".off-canvas";

    $(button).on("click", () => Menu.toggleMenu(selector));

  }

  static toggleMenu (selector) {

    if ($(selector).hasClass("open")) {

      this.hideMenu(selector);

    } else {

      this.showMenu(selector);

    }

  }

  static hideMenu (selector) {

    $(selector).removeClass("open");
    $("body").removeClass("off-canvas-open");

  }

  static showMenu (selector) {

    $(selector).addClass("open");
    $("body").addClass("off-canvas-open");

  }

}
