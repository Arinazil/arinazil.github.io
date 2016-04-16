document.getElementById("nav01").innerHTML =
"<nav>"+
  "<li><a href='http://www.arinazil.co.uk'>Home</a></li>"+
  "<li><a href='http://www.arinazil.co.uk/news'>News</a></li>"+
  "<li><a href='http://www.arinazil.co.uk/contact'>Contact</a></li>"+
  "<li><a href='http://www.arinazil.co.uk/about'>About</a></li>"+
  "<li class='dropdown'>"+
    "<a href='http://www.arinazil.co.uk/games' class='dropbtn'>Games</a>"+
    "<div class='dropdown-content'>"+
      "<a href='http://www.arinazil.co.uk/games/banished'>Banished</a>"+
    "</div>"+
  "</li>"+
  "<li class='dropdown'>"+
    "<a href='http://www.arinazil.co.uk/gallery' class='dropbtn'>Galleries</a>"+
    "<div class='dropdown-content'>"+
      "<a href='http://www.arinazil.co.uk/gallery/banished1'>Banished 1</a>"+
    "</div>"+
  "</li>"+
  "<li><a href='http://www.arinazil.co.uk/testing'>Testing</a></li>";
"</nav>";

$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("#nav ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
});