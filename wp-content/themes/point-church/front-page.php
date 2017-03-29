<?php get_header(); ?>

<?php /*<section id="home-intro" class="photo promo" data-photo="<?php bloginfo('stylesheet_directory');?>/images/home-intro-bg.jpg">
	<div class="image-filter"></div>
	<div class="wrapper">
		<h2>
			<dl>
				<dt>The Point Church</dt>
				<dd>Pointing People to Jesus</dd>
			</dl>
		</h2>
	</div>
</section> */?>

<section id="home-kcco" class="photo promo section" data-photo="<?php bloginfo('stylesheet_directory');?>/images/kcco-bg.jpg">
	<div class="image-filter"></div>
	<div class="wrapper">
		<h3 class="section__header" id="kcco-text">Keep Calm and Carry On</h3>
		<p>Have you ever wondered how to keep calm &amp; carry on in the midst of life's terrible circumstances? Join us this Sunday to hear people share their personal keep calm and carry on stories. We will also be giving away FREE Keep Calm and Carry On shirts to all of our guests during this series.  Click below to find a location near you.</p>
		<div class="buttons">
			<a href="#home-locations" class="button">Find a campus</a>
		</div>
	</div>
</section>

<section id="home-welcome" class="section" data-image="/wp-content/themes/point-church/images/worship-bg-600.jpg">
	<div class="wrapper">
		<h3 class="section__header">Welcome</h3>
		<p>The Point Church is a movement of churches across the Triangle with one mission. We are all about pointing people to Jesus.  We want to help people take their next steps with him—no matter where they are in their faith. So there’s no need to dress up, pretend to be perfect, or worry about your past. We just want you to experience Jesus.</p>
		<div class="buttons">
			<a href="<?php echo bloginfo('url'); ?>/about/beliefs-baptism" class="button">Beliefs</a>
			<a href="<?php echo bloginfo('url'); ?>/about/staff" class="button">Staff</a>
		</a>
	</div>
</section>

<section id="home-worship" class="photo section">
	<div class="image-filter"></div>
	<div class="wrapper">
		<h3 class="section__header">Worship</h3>
		<h4 class="section__header-desc">Dynamic. Passionate. Diverse.</h4>
		<p>We design our Sunday worship services to help everyone experience the presence of God. The music is dynamic and high quality with a variety of worship styles and cultures represented. The goal of our worship is help people develop a passionate pursuit of Jesus.</p>
		<!--<div class="buttons">
			<a href="#" class="button">Times & Locations</a>
			<a href="#" class="button">What to Expect</a>
		</div>-->
	</div>
</section>

<section id="home-kids" class="section">
	<div class="wrapper">
		<div class="text-wrapper">
			<h3 class="section__header">Kids</h3>
			<h4 class="section__header-desc">Engaging. Secure. Intentional.</h4>
			<p>We believe families are our first mission field and place a high priority on making sure your kids have an awesome experience. Not only will they be safe and secure, Kid Point uses age-appropriate teaching styles to point your kids to Jesus. Your kids will be begging to come back.</p>
			<div class="buttons">
				<a href="<?php echo bloginfo('url'); ?>/ministries/kidpoint" class="button">Family Ministries</a>
				<!-- Kid Point & Students -->
			</div>
		</div>
		<span class="paint-splatter">
			<span id="orange"></span>
			<span id="green"></span>
			<span id="pink"></span>
			<span id="purple"></span>
			<span id="pink2"></span>
		</span>
	</div>
</section>

<section id="home-sermons" class="photo section">
	<div class="image-filter"></div>
	<div class="wrapper">
		<h3 class="section__header">Teaching</h3>
		<h4 class="section__header-desc">Compelling. Practical. Biblical.</h4>
		<p>Each message teaches the truths of the Bible in a compelling and meaningful way you can apply to your life.  You will experience live teaching at each of our campuses from dynamic local pastors. Click below to hear teaching from a campus close to you. </p>
		<div class="buttons">
			<a href="http://pointchurchsermons.com" class="button">Listen to a Message</a>
			<!--Latest Message & Series Archive -->
		</div>
	</div>
</section>

<section id="home-locations" class="section">
	<div class="wrapper">
		<h3 class="section__header">Explore a Campus</h3>
		<h4 class="section__header-desc">A Movement in Many Locations.</h4>
		<p>Experience the the intimacy of a local church combined with power of collaboration resulting in a movement across the Triangle. At each of our campuses you will receive live in person teaching and engaging worship.</p>
		<ul class="locations">

			<a href="<?php bloginfo('url'); ?>/locations/apex">
				<li class="apex">
					<dl>
						<dt>Apex</dt>
						<dd>9:15am &amp; 11am</dd>
					</dl>
				</li>
			</a>
			<a href="<?php bloginfo('url'); ?>/locations/cary">
				<li class="cary">
					<dl>
						<dt>Cary</dt>
						<dd>9:15am &amp; 11am</dd>
					</dl>
				</li>
			</a>
			<a href="<?php bloginfo('url'); ?>/locations/chapel-hill">
				<li class="chapel-hill">
					<dl>
						<dt>Chapel Hill</dt>
						<dd>10am</dd>
					</dl>
				</li>	
			</a>
			<a href="<?php bloginfo('url'); ?>/locations/espanol">
				<li class="espanol">
					<dl>
						<dt>Español</dt>
						<dd>4pm</dd>
					</dl>
				</li>
			</a>
			<a href="<?php bloginfo('url'); ?>/locations/fuquay-varina">
				<li class="fuquay">
					<dl>
						<dt>Fuquay</dt>
						<dd>August 2017</dd>
					</dl>
				</li>
			</a>
			<a href="<?php bloginfo('url'); ?>/locations/north-raleigh">
				<li class="n-raleigh">
					<dl>
						<dt>N. Raleigh</dt>
						<dd>9:15am &amp; 11am</dd>
					</dl>
				</li>	
			</a>
			<a href="<?php bloginfo('url'); ?>/locations/south-raleigh">
				<li class="s-raleigh">
					<dl>
						<dt>S. Raleigh</dt>
						<dd>9:15 &amp; 11am</dd>
					</dl>
				</li>	
			</a>
		</ul>

		<!--<div class="buttons">
			<a href="#" class="button" id="map-expand">Find Campus Closest to Me</a>
		</div>-->
	</div>
</section>

<section id="map-canvas"></section>

<section id="home-leadership" class="photo">
	<div class="image-filter"></div>
	<div class="wrapper">
		<h3 class="section__header">Leadership</h3>
		<p>The Point Church is not built around the personality of one person but operates with a team of leaders devoted to pointing people to Jesus.</p>
		<div class="buttons">
			<a href="<?php echo bloginfo('url'); ?>/about/staff/leadership-team" class="button">Meet Our Team</a>
		</div>
	</div>
</section>

<section id="home-whatif" class="photo">
	<div class="image-filter"></div>
	<div class="wrapper">
		<img src="<?php echo get_template_directory_uri(); ?>/images/whatif-logo.png" />
		<p>What if we could go from 6 to 10 healthy campuses over the next 2 years?</p>
		<div class="buttons">
			<a href="<?php echo bloginfo('url'); ?>/whatif" class="button">Learn More</a>
		</div>
	</div>
</section>




<?php get_footer(); ?>
