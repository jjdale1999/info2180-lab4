window.onload = function() {
      var element = document.getElementById("board");
      var c = element.children;
      var i;
      for (i = 0; i < c.length; i++) {
          c[i].classList.add("square");

      }
       c[0].onclick = function() {
            addclass(0,c);
        }
       c[1].onclick = function() {
            addclass(1,c);
        }
       c[2].onclick = function() {
            addclass(2,c);
        }
       c[3].onclick = function() {
            addclass(3,c);
        }
       c[4].onclick = function() {
            addclass(4,c);
        }
       c[5].onclick = function() {
            addclass(5,c);
        }
       c[6].onclick = function() {
            addclass(6,c);
        }
       c[7].onclick = function() {
            addclass(7,c);
        }
       c[8].onclick = function() {
            addclass(8,c);
        }
   

};


 
function addclass(i,c) {
    if(c[i].className === "square X"){
                c[i].classList.remove("X");
                c[i].classList.add("O");
                c[i].innerHTML='O';
                
            } else if(c[i].className=== "square O"){
                c[i].classList.remove("O");
                c[i].classList.add("X");
                c[i].innerHTML='X';
        
            }
            else{
                 c[i].classList.add("X");
                c[i].innerHTML='X';
            }
}

