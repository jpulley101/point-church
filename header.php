<!DOCTYPE html>
<html>
<head>
	<title><?php bloginfo('name'); ?></title>
	<link type="text/css" rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/style.css" />
	<link type="text/css" rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/stylesheets/screen.css" />
</head>

<body>

	<header>
		<h1><?php bloginfo('name'); ?></h1>

		<nav>
			<?php wp_nav_menu(array('menu' => 'global_nav' )); ?>
		</nav>
	</header>

