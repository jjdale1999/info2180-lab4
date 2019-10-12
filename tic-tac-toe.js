window.onload = function() {
  var element = document.getElementById("board");
  var c = element.children;
  var i;
  for (i = 0; i < c.length; i++) {
      c[i].classList.add("square");
       
  }
};