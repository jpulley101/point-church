export class Menu {

  constructor () {

    let button     = '.off-canvas-control, .off-canvas-click-blocker';
    let selector   = '.off-canvas';
      
    $( button ).on( 'click', function(){
      Menu.toggleMenu( selector );
    });

  }

  static toggleMenu( selector ) {

    if( $( selector ).hasClass('open') ){ 
      this.hideMenu( selector ); 
    }else{ 
      this.showMenu( selector ); 
    }

  }

  static hideMenu( selector ) {
    $(selector).removeClass('open');
    $('body').removeClass('off-canvas-open');
  }

  static showMenu( selector ) {
    $(selector).addClass('open');
    $('body').addClass('off-canvas-open');
  }

}