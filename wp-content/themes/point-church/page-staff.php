<?php get_header(); ?>

<?php if ( have_posts() ) : ?>

<?php while ( have_posts() ) : the_post(); ?>

	<section class="section">
		<div class="wrapper">

      <h1 class="section__header"><?php the_title(); ?></h1>

			<div class="badges">

				<?php
				// the query
				$args = array(
					'post_type' => 'staff',
					'posts_per_page' => -1,
					'orderby' => 'title',
					'order' => 'ASC'
				);
				$the_query = new WP_Query( $args ); ?>

				<?php if ( $the_query->have_posts() ) : ?>

					<!-- pagination here -->

					<!-- the loop -->
					<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
						<div class="badge">
							<img src="<?php //echo get_field('profile_image'); ?>http://placehold.it/200x200" />
							<h3 class="badge__title"><?php the_title(); ?></h3>
              <p class="badge__desc"><?php echo get_field('title'); ?></p>
							<p class="badge__desc"><?php echo ucwords( get_field('campus')); ?></dd>
						</div>
					<?php endwhile; ?>
					<!-- end of the loop -->

					<!-- pagination here -->

					<?php wp_reset_postdata(); ?>

				<?php else : ?>
					<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
				<?php endif; ?>

      </div><!--.badges-->

			<div class="buttons">
				<a href="<?php echo bloginfo('url'); ?>/about/staff/leadership-team" class="button">Learn more about our Leadership Team</a>
			</div>


<?php endwhile; ?>
		</div><!--.wrapper-->
	</section><!--.section-->
<?php else : ?>
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>


<?php get_footer(); ?>
