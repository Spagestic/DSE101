// Content

var $body = $("body");
var $panels = $(".panels");
var $panel = $(".panel");
var $navTrigger = $("#nav-trigger");
var $panelDesc = $panel.find(".description");
var $panelLink = $panel.find("a");
var $teasers = $(".teasers");
var $teaser = $(".teaser");
var animatingClass = "js-animating";
var selectedClass = "js-selected";
var panelAnim = new TimelineLite({paused: true});

// On panel click
$panelLink.on("click", function (e) {
  e.preventDefault();
  var $selectedPanel = $(this).parent();

  $navTrigger.addClass(animatingClass);
  $teasers.addClass(animatingClass);

  $(this)
    .parent().addClass(selectedClass)
    .parents('ul').addClass(animatingClass);
  
  panelAnim.play();
});

// On nav trigger click
$navTrigger.on("click", function (e) {
  e.preventDefault();

  $(this).removeClass(animatingClass);
  $teasers.removeClass(animatingClass);

  $panelLink
    .parent().removeClass(selectedClass)
    .parents('ul').removeClass(animatingClass);
  
  panelAnim.reverse(0.9);
});

// Panel animation
panelAnim.to($panels, 0.5, {
  height: "30vh", 
  ease: Cubic.easeOut,
}, 0.4)
  .from($panelDesc, 0.5, {
  y: '-=12',
  autoAlpha: 0,
  ease: Cubic.easeOut,
}, 0.8)
  .staggerFrom($teaser, 0.4, {
  y: '+=40',
  autoAlpha: 0,
  ease: Cubic.easeOut,
}, 0.1, "-=0.2");