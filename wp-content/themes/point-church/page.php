<?php get_header(); ?>

<?php if ( have_posts() ) : ?>

  <section class="section">
    <div class="wrapper">
	  <?php	if(get_field('featured_video') != null){
			echo '<div class="featured-video"><iframe src="//player.vimeo.com/video/'.get_field('featured_video').'" width="650" height="370" frameborder="0"></iframe></div>';
		} ?>
    </div>
	<section>

<?php while ( have_posts() ) : the_post(); ?>
  <section class="section dynamic-content">
    <div class="wrapper">
		<?php the_content(); ?>
    </div>
  </section>

<?php endwhile; ?>

<?php else : ?>
  <section class="section">
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
  </section>
<?php endif; ?>


<?php get_footer(); ?>
