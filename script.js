function setActive() {
  aObj = document.getElementById('nav01').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++) { 
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='active';
    }
  }
}
window.onload = setActive;

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