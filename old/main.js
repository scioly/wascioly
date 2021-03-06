var all = function() {
	$('#html').html('<meta property="og:image" content="http://www.soinc.org/sites/default/files/imagecache/Medium/Medals2013SciOly1500.jpg"/><meta property="og:title" content="Washington Science Olympiad"/><meta property="og:description" content="You\'ve found the home for Washington Science Olympiad (WSO). The Board of Directors wish to welcome you to our state site, which is part of the national Science Olympiad program. Each year we strive to increase the quality of K-12 science education by providing learning opportunities and hosting regional and state tournaments. We\'re looking forward to another great year of helping to improve science education throughout Washington state."/><script src="smoothscroll.js"></script><link href="animate.css" rel="stylesheet"><link href=\'https://fonts.googleapis.com/css?family=Lato:400,600,700,500,300\' rel=\'stylesheet\' type=\'text/css\'>');
	$('#favicon').html('<link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192"  href="icons/android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png"><link rel="manifest" href="icons/manifest.json"><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png"><meta name="theme-color" content="#ffffff">');
	$('#nav').html('<ul class="nav"><li class="nav-main"><a class="head-only" href="index.html" class="smoothscroll">Home</a></li><li class="nav-main"><a class="head" href="events.html" class="smoothscroll">Events</a><ul><li><a href="events.html#tournaments" class="smoothscroll">> Tournaments</a></li><li><a href="events.html#workshops" class="smoothscroll">> Meetings & Workshops</a></li><li><a href="events.html#scores" class="smoothscroll">> Scores</a></li></ul></li><li class="nav-main"><a class="head" href="contribute.html" class="smoothscroll">Contribute</a><ul><li><a href="contribute.html#donate" class="smoothscroll">> Donate</a></li><li><a href="contribute.html#volunteer" class="smoothscroll">> Volunteer</a></li><li><a href="contribute.html#coach" class="smoothscroll">> Coach</a></li></ul></li><li class="nav-main"><a class="head" href="board.html" class="smoothscroll">Board of Directors</a><ul><li><a href="board.html#who" class="smoothscroll">> Whos Who?</a></li><li><a href="board.html#nominations" class="smoothscroll">> Board Nominations</a></li><li><a href="board.html#emeritus" class="smoothscroll">> Emeritus Board Members</a></li><li><a href="board.html#laws" class="smoothscroll">> State By-Laws</a></li></ul></li><li class="nav-main"><a class="head-only" href="register.html" class="smoothscroll">Register</a></li></ul>');
	$('#contact').html('<div class="content" style="background-color: rgb(220, 220, 220)"><table style="margin: 0 auto; width: 100%"><td style="vertical-align: top; width: 170px"><img src="images/logo.png" width="140px"></td><td style="vertical-align: top; font-size: 15px; font-weight: 100"><span style="font-weight: 500">Sue Murphy, State Director, Washington Science Olympiad</span></br>E-mail: <a href="mailto:statedirector@washingtonscienceolympiad.com">statedirector@washingtonscienceolympiad.com</a></br>Fax: (509) 359-6867 - Phone: (509) 359-6809</br>Address: 15112 W 3rd Addn. Rd., Cheney, WA 99004</td></table></div>');
}

var nav = function() {
	$('.nav > li').bind('mouseover', function() {
		$(this).find('ul').css('visibility', 'visible');
	});
	$('.nav > li').bind('mouseout', function() {
		$(this).find('ul').css('visibility', 'hidden');
	});				
}

var main = function() {
	$('.main').css('height', $(window).innerHeight()*.88);
	$('.main h1').css('padding',$ (window).innerHeight()*0.19 + ' 0 ' + $(window).innerHeight()*0.12 + ' 0');
}

var page = function() {
	if($('.feature').html() != "") {
		$('.page .feature').css('padding-bottom', '25');
		$('.page .feature').css('margin-top', '-5');
	}
}

var schedule = function() {
	$('.schedule .x, .schedule .y').attr('title', 'Click to toggle schedule rotation');
	if($('.schedule td').html() != "") {
		$(this).css('background-color', 'rgb(45, 100, 45)');
		$(this).css('color', 'white');
	}
	$('.schedule .x, .schedule .y').hover(function() {
		$(this).css('cursor', 'hand');
	});
	$('.schedule .x').click(function() {
		$('.schedule .x').html('X');
		$('.schedule .y').html('');
	});
	$('.schedule .y').click(function() {
		$('.schedule .y').html('Y');
		$('.schedule .x').html('');
	});
}

$(document).ready(all);
$(document).ready(nav);
$(document).ready(main);
$(document).ready(page);
$(document).ready(schedule);

$(window).resize(main);