// MAIN.JS
import $ from "jquery";
import { CampusMap } from "campus-map";
import { Header } from "header";
import { Menu } from "menu";

$(document).ready(() => {

  const _header = new Header();
  const _menu = new Menu();

  /*
  If ($("body").hasClass("home")) { const homeMap = new HomepageMap; }
  */

  if ($("body").hasClass("locations")) {

    const _campusMap = new CampusMap();

  }

});
