<?php
/*
** Template Name: Visual Template
*/
get_header();

$sections = get_field('section'); // get sections custom field
$sectionCount = 0; // counter for ID

foreach ($sections as $section) {

  $type = $section['acf_fc_layout']; // section layout type
  $title = $section['title'];        // section title
  $subtitle = $section['subtitle'];  // section subtitle
  $content = $section['content'];    // section content
  $buttons = $section['buttons'];    // section buttons
  $buttonContent = '';               // placeholder for eventual button markup

  /** BUILD OUT BUTTONS **/
  if ($buttons) :

    foreach ($buttons as $button) :

      if (($type === 'photo') || ($type === 'promo')) :
        $buttonClass = 'button--white';
      else:
        $buttonClass = 'button';
      endif;

      $buttonContent .= '<a href="' . $button['link'] . '" class="' . $buttonClass . '">' .   $button['label'] . '</a>';

    endforeach;

  endif;


  /** TYPE = REGULAR **/
  if ($type === 'regular') { include('visual-page/type-regular.php'); }

  /** TYPE = PHOTO **/
  if ($type === 'photo') { include('visual-page/type-photo.php'); }

  /** TYPE = PROMO **/
  if ($type === 'promo') { include('visual-page/type-promo.php'); }

  /** TYPE = GRID **/
  if ($type === 'grid') { include('visual-page/type-grid.php'); }

  /** INCREMENT COUNTER FOR ID **/
  $sectionCount++;

}

get_footer();
?>
