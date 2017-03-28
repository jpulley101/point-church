// MAIN.JS

import { Header } from 'header';
import { Menu } from 'menu';
import { HomepageMap } from 'homepage-map';
import { CampusMap } from 'campus-map';
import $ from 'jquery';

$(document).ready( function() {

  let header = new Header;
  let menu = new Menu;
  if($('body').hasClass('home')){ let homeMap = new HomepageMap; }
  if($('body').hasClass('locations')){ let campusMap = new CampusMap; }
  
});