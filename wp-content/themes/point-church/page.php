<?php get_header(); ?>

<?php if ( have_posts() ) : ?>

  <div class="featured-image" style="background-image:url(<?php echo the_post_thumbnail_url(); ?>);">
  </div>

	<?php if (get_field('featured_video') != null) : ?>
    <section class="wrapper">
	  		<div class="featured-video"><iframe src="//player.vimeo.com/video/<?php the_field('featured_video'); ?>" width="650" height="370" frameborder="0"></iframe></div>
	  </section>
  <?php endif; ?>


<?php while ( have_posts() ) : the_post(); ?>
  <section class="section dynamic-content">
    <div class="wrapper">
    <h1><?php the_title(); ?></h1>
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
