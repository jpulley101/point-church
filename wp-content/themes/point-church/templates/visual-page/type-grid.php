<?php

  $gridContent = '';
  $items = $section['items'];

  foreach( $items as $item ) {
    $gridContent .=
    '<a href="' . $item['link'] . '" class="badge">
      <img src="' . $item['photo'] . '" />
  		<h5 class="badge__title">' . $item['label'] . '</h5>
  		<p class="badge__desc">' . $item['text'] . '</p>
  	</a>';
  }

  echo
  '<section id="section-' . $sectionCount . '" class="' . $type . ' section">
  	<div class="wrapper">
  		<h3 class="section__header">' . $title . '</h3>
		  <h4 class="section__header-desc">' . $subtitle . '</h4>
  		<p>' . $content . '</p>
      <div class="badges">' . $gridContent . '</div>
  		<div class="buttons">' . $buttonContent . '</div>
  	</div>
  </section>';

    ?>
