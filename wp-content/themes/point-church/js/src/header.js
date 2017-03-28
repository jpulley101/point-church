export class Header {

  constructor() {

    let stop = Math.round( $(window).scrollTop() );
    let introBottom = $('body').offset().top;
    
    $( window ).on( 'scroll', function() {

      if( stop > introBottom ){
        Header.addVisibility( '.header' );
      }else{
        Header.removeVisibility( '.header' );
      }

    });

  }

  static addVisibility( selector ) {
    $( selector ).addClass( 'past-intro' );
  }

  static removeVisibility( selector ) {
    $( selector ).removeClass( 'past-intro' );
  }

}