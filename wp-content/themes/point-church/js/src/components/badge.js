export class Badge {

  constructor () {

    Badge.alignLabel(".badge .label");


  }

  static alignLabel ( selector ){

    $(selector).each( function setAlignment() {

      console.log( $(this).width() );

    });

  }

}
