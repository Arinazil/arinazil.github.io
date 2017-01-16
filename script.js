document.getElementById("nav01").innerHTML =
"<nav>"+
  "<li><a href='https://arinazil.github.io'>Home</a></li>"+
  "<li><a href='https://arinazil.github.io/news'>News</a></li>"+
  "<li><a href='https://arinazil.github.io/contact'>Contact</a></li>"+
  "<li><a href='https://arinazil.github.io/about'>About</a></li>"+
  "<li class='dropdown'>"+
    "<a href='https://arinazil.github.io/games' class='dropbtn'>Games</a>"+
    "<div class='dropdown-content'>"+
      "<a href='https://arinazil.github.io/games/banished'>Banished</a>"+
    "</div>"+
  "</li>"+
  "<li class='dropdown'>"+
    "<a href='https://arinazil.github.io/gallery' class='dropbtn'>Galleries</a>"+
    "<div class='dropdown-content'>"+
      "<a href='https://arinazil.github.io/gallery/banished1'>Banished 1</a>"+
    "</div>"+
  "</li>"+
  "<li><a href='https://arinazil.github.io/testing'>Testing</a></li>";
"</nav>";

$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("#nav ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
});
