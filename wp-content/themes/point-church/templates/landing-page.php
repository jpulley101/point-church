<?php
/* Template Name: Landing Page */
get_header(); ?>

<?php //style="background-image: url(<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID) ););" ?>
<div class="section" >
	<div class="wrapper">
		<h1 class="section__header"><?php the_title(); ?></h1>

    <div class="badges">

      <?php
      $query= new WP_Query();
      $pageQuery = $query->query(array('post_type' => 'page', 'posts_per_page' => '-1'));
      $children = get_page_children( $post->ID, $pageQuery );

      foreach( $children as $page ) :
      ?>

      <a class="badge" href="<?php echo get_the_permalink( $page->ID ); ?>">
        <img src="http://placehold.it/200x200" />
        <h5 class="badge__title"><?php echo $page->post_title; ?></h5>
      </a>

      <?php endforeach; ?>

    </div>

	</div>

</div>


<?php get_footer(); ?>
