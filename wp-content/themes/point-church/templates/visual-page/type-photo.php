<?php

  $image = $section['image'];
  responsive_images ('#section-' . $sectionCount, $image);

  echo
  '<section id="section-' . $sectionCount . '" class="' . $type . ' section">
  	<div class="wrapper">
  		<h3 class="section__header">' . $title . '</h3>
		  <h4 class="section__header-desc">' . $subtitle . '</h4>
  		<p>' . $content . '</p>
  		<div class="buttons">' . $buttonContent . '</div>
  	</div>
  </section>';

  ?>
