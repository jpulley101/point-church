<?php /* Template Name: News Template */ ?>

<?php

// create a new cURL resource
$ch = curl_init();

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_USERPWD, "joshmobley:DW%0J2xKu^Uny%K");
curl_setopt($ch, CURLOPT_URL, "https://point.ccbchurch.com/api.php?srv=individual_calendar_listing&id=1&date_start=2017-01-01");
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  

// grab URL and pass it to the browser
$results = curl_exec($ch);

// close cURL resource, and free up system resources
curl_close($ch);


$parser = xml_parser_create;
$events = xml_parse($parser, $results);

print_r( $events );

?>

<?php get_header(); ?>

<?php include('template-page-header.php'); ?>

<section id="news">

    <div class="wrapper">

        <div class="news-feed">
            <h3 class="section-head">News</h3>

            <?php 
                $newsPosts = new WP_Query([
                    'post_type' => 'post',
                    'posts_per_page' => 5
                ]);
            ?>

            <?php while ( $newsPosts -> have_posts() ) : $newsPosts->the_post(); ?>

                <h4><?php the_title(); ?></h4>
                <?php the_excerpt(); ?>

            <?php endwhile;
                wp_reset_postdata();
            ?>

        </div>

        <div class="events-feed">
            <h3 class="section-head">Events</h3>
            <p class="status">Loading events from CCB...</p>
            <?php 
              foreach( $events as $event ){
                print_r( $event );
                echo '<br/><br/>';
              }
            ?>
        </div>

    </div>

</section>




<?php get_footer(); ?>