<?php

register_nav_menus( array(
	'global_nav' => 'Global Navigation',
) );

add_theme_support( 'post-thumbnails' );

add_action( 'init', 'staff_post_type' );
function staff_post_type() {
  register_post_type( 'staff',
    array(
      'labels' => array(
        'name' => __( 'Staff' ),
        'singular_name' => __( 'Staff Member' )
      ),
      'public' => true,
      'has_archive' => false,
    )
  );
}

add_action( 'init', 'events_post_type' );
function events_post_type() {
  register_post_type( 'events',
    array(
      'labels' => array(
        'name' => __( 'Events' ),
        'singular_name' => __( 'Event' )
      ),
      'public' => true,
      'has_archive' => true,
    )
  );
}

function remove_content_editor() {

    remove_post_type_support( 'staff' , 'editor' );
    remove_post_type_support( 'events', 'editor' );

}

add_action( 'init', 'remove_content_editor' );

add_image_size( 'small', 320, 320 );
add_image_size( 'med-large', 800, 800 );
add_image_size( 'x-large', 1600, 1600 );
add_image_size( 'phone', 320, 400, true );

function responsive_images ($selector, $imageObj) {

  $phoneImage = $imageObj['sizes']['phone'];
  $medImage = $imageObj['sizes']['medium'];
  $largeImage = $imageObj['sizes']['large'];
  $xlargeImage = $imageObj['sizes']['x-large'];
  $mediaQueries = array(
    '500'  => $medImage,
    '800'  => $largeImage,
    '1600' => $xlargeImage
  );

  echo '<style>';
  echo $selector . '{';
  echo 'background-image: url(' . esc_url( $phoneImage ) . ');';
  echo '}';
  foreach( $mediaQueries as $px => $url ){
    echo '@media screen and (min-width: ' . esc_html( $px ) . 'px){';
    echo esc_html( $selector ) . '{';
    echo 'background-image: url(' . esc_url( $url ) . ');';
    echo '}';
    echo '}';
  }
  echo '</style>';

}

// ALERT BAR SETTINGS

include_once('includes/alert-bar.php');

?>
