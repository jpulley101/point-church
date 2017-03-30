<?php /* Template Name: Campus Template */ ?>

<?php get_header(); ?>

<?php if ( have_posts() ) : ?>

<?php //include('template-page-header.php'); ?>

<?php while ( have_posts() ) : the_post(); ?>

<section id="campus-welcome" class="section photo full-bleed">
	<div class="wrapper">
    <div class="badge">
      <img src="http://placehold.it/200x200" />
      <h3 class="section__header">
        <?php the_title(); ?>
      </h3>
    </div>
		<?php if(get_field('vimeo_id') != null ){
			echo '<div class="video">';
			echo '<iframe src="https://player.vimeo.com/video/'.get_field('vimeo_id').'?title=0&badge=0&byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>';
			echo '</div>';
		}
		?>
	</div>
</section>

<section class="section">
  <div class="wrapper">
		<?php the_field('welcome_text'); ?>
  </div>
</section>

<?php
	if( get_field('sermons_link') != null){
		$sermonURL = get_field('sermons_link');
	}else{
		$sermonURL = 'http://pointchurchsermons.com';
	}
?>

<section id="campus-sermon" class="photo section" style="background-image: url('<?php the_field('this_weeks_sermon_image'); ?>');">
	<div class="wrapper">
		<h3 class="section__header">Teaching</h3>
		<?php the_field('this_weeks_sermon_text'); ?>
		<div class="buttons">
			<a href="<?php echo esc_url( $sermonURL ); ?>" class="button--white">Listen to Sermons</a>
		</div>
	</div>
</section>

<section id="campus-visit" class="section">
	<div class="wrapper">
		<h3 class="section__header">Plan a Visit</h3>
		<div class="map">
			<div id="campus-map" class="map__canvas" data-lat="<?php the_field('latitude_for_map'); ?>" data-lng="<?php the_field('longitude_for_map'); ?>"></div>

			<div class="map__address">
				<p class="location"><?php the_field('location_address'); ?></p>
				<p class="times"><?php the_field('service_times'); ?></p>
			</div>
		</div><!--.map-->
    <dl>
    	<dt>When do I get there?</dt>
    	<dd><?php the_field('when_do_i_get_there'); ?></dd>
    	<dt>Where do I park?</dt>
    	<dd><?php the_field('where_do_i_park'); ?></dd>
    	<dt>What should I wear?</dt>
    	<dd><?php the_field('what_should_i_wear'); ?></dd>
    	<dt>What do I do with my kids?</dt>
    	<dd><?php the_field('what_do_i_do_with_my_kids'); ?></dd>
    </dl>
		<a class="button u-clear-left" href="mailto:info@pointchurch.com">More questions? Contact us at info@pointchurch.com</a>
	</div>
</section>

<section id="campus-events" class="photo section">
	<div class="wrapper">
		<h3 class="section__header">Upcoming Events</h3>

		<?php

		$campusname = strtolower(get_the_title());

		if($campusname == 'español'){ $campusname = 'espanol'; }

		if(strpos ( $campusname, 'north raleigh') !== false){ $campusname  = 'north raleigh'; }


		$events = new WP_Query( array( 'post_type' => 'events', 'order' => 'ASC'));

		if ( $events->have_posts() ) : ?>



		<?php while ( $events->have_posts() ) : $events->the_post(); ?>


		<?php if( in_array($campusname, get_field('campus_involvment'))): ?>

		<div class="event">
			<a class="event-image" style="background-image: url('<?php the_field('event_thumbnail'); ?>');" href="<?php echo get_the_permalink(); ?>" />
				<span class="short-description"><?php the_field('short_description'); ?></span>
			</a>
		</div>

		<?php else: ?>


		<?php endif; ?>

		<?php endwhile; ?>
	<!-- end of the loop -->

	<!-- pagination here -->

	<?php wp_reset_postdata(); ?>

<?php else : ?>
	<p>There are currently no events scheduled for <?php echo $campusname; ?></p>

<?php endif; ?>
		<?php /*<div class="buttons">
			<a href="<?php echo bloginfo('url'); ?>/events" class="button">See more events at <?php the_title(); ?></a>
		</div>*/ ?>
	</div>
</section>

<section id="campus-staff" class="section">
	<div class="wrapper">
		<h3 class="section__header">The Staff @ <?php the_title(); ?></h3>

		<ul class="staff-list">

		<?php
		$staffList = get_field('staff_list');

		foreach( $staffList as $staff){
			echo '<li>' .
				'<dl>' .
					'<img src="' . get_field('profile_image', $staff['staff_member']->ID) . '" />' .
					'<dt>' . get_the_title($staff['staff_member']->ID) . '</dt>' .
					'<dd>' . get_field('title', $staff['staff_member']->ID) . '</dd>' .
				'</dl>' .
			'</li>';
		}
		?>

		</ul>

	</div>
</section>
<?php /*
<section id="campus-social" class="photo">
	<div class="wrapper">
		<h3 class="section-head">Connect with Us</h3>
		<div class="instagram">
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
			<img src="http://placehold.it/300x180" />
		</div>
		<div class="buttons">
			<a href="#" class="button">Facebook</a>
			<a href="#" class="button">Instagram</a>
			<a href="#" class="button">Twitter</a>
		</div>
	</div>
</section> */?>


<?php endwhile; else : ?>
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>


<?php get_footer(); ?>
