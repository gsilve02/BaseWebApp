var clicks = 0;
function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more
  clicks++;
  $("#demo").html(clicks + " tinas");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#gif").append(`<img class="img-circle" src="/images/tina_dance.gif" />`);
}

