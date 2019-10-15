window.onload = function() {
      var element = document.getElementById("board");
      var c = element.children;
      var i;
      for (i = 0; i < c.length; i++) {
          c[i].classList.add("square");
        
      }
      c[0].onmouseover = function()  {onhovering(c[0]);};
      c[0].onmouseleave = function() {leavehovering(c[0]);};
      c[1].onmouseover = function()  {onhovering(c[1]);};
      c[1].onmouseleave = function() {leavehovering(c[1]);};
      c[2].onmouseover = function()  {onhovering(c[2]);};
      c[2].onmouseleave = function() {leavehovering(c[2]);}; 
      c[3].onmouseover = function()  {onhovering(c[3]);};
      c[3].onmouseleave = function() {leavehovering(c[3]);};
      c[4].onmouseover = function()  {onhovering(c[4]);};
      c[4].onmouseleave = function() {leavehovering(c[4]);};
      c[5].onmouseover = function()  {onhovering(c[5]);};
      c[5].onmouseleave = function() {leavehovering(c[5]);};
      c[6].onmouseover = function()  {onhovering(c[6]);};
      c[6].onmouseleave = function() {leavehovering(c[6]);};
      c[7].onmouseover = function()  {onhovering(c[7]);};
      c[7].onmouseleave = function() {leavehovering(c[7]);}; 
      c[8].onmouseover = function()  {onhovering(c[8]);};
      c[8].onmouseleave = function() {leavehovering(c[8]);};
     
};

function leavehovering(c) {
    c.classList.remove("hover");
 c.onclick = null;

}
 function onhovering(c){
      console.log(c.innerHTML);
    if(c.innerHTML == "X" || c.innerHTML == "O"){
        c.innerHTML = c.innerHTML;}
     else{
    
            if(c.className === "square hover"){
                          c.onclick = function() {
                    addclass(c);

                               c.classList.remove("hover");

                }  
                    }else if( c.className == "square X hover"){
                       c.onclick = function() {
                    addclass(c);
                            c.classList.remove("hover");

                    }
                    }else if( c.className == "square O hover"){
                       c.onclick = function() {
                    addclass(c);
                            c.classList.remove("hover");

                    }}
                    else{
                        c.classList.add("hover");

                       c.onclick = function() {
                    addclass(c);
                      c.classList.remove("hover");

                        }
                    }  
            
  
        }
     
 }
function addclass(c) {
    if(c.className === "square X"){
                c.classList.remove("X");
                c.classList.add("O");
                c.innerHTML='O';
                
            } else if(c.className=== "square O"){
                c.classList.remove("O");
                c.classList.add("X");
                c.innerHTML='X';
        
            }
            else{
                 c.classList.add("X");
                c.innerHTML='X';
            }
}


