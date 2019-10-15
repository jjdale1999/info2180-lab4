window.onload = function() {
      var element = document.getElementById("board");
      var c = element.children;
    var statusel = document.getElementById("status");
      var i;
      for (i = 0; i < c.length; i++) {
          c[i].classList.add("square");
        
      }
      c[0].onmouseover = function()  {onhovering(c[0]);};
      c[0].onmouseleave = function() {leavehovering(c[0]);awinner(c,statusel);};
      c[1].onmouseover = function()  {onhovering(c[1]);};
      c[1].onmouseleave = function() {leavehovering(c[1]);awinner(c,statusel);};
      c[2].onmouseover = function()  {onhovering(c[2]);};
      c[2].onmouseleave = function() {leavehovering(c[2]); awinner(c,statusel);}; 
      c[3].onmouseover = function()  {onhovering(c[3]);};
      c[3].onmouseleave = function() {leavehovering(c[3]);awinner(c,statusel);};
      c[4].onmouseover = function()  {onhovering(c[4]);};
      c[4].onmouseleave = function() {leavehovering(c[4]);awinner(c,statusel);};
      c[5].onmouseover = function()  {onhovering(c[5]);};
      c[5].onmouseleave = function() {leavehovering(c[5]);awinner(c,statusel);};
      c[6].onmouseover = function()  {onhovering(c[6]);};
      c[6].onmouseleave = function() {leavehovering(c[6]);awinner(c,statusel);};
      c[7].onmouseover = function()  {onhovering(c[7]);};
      c[7].onmouseleave = function() {leavehovering(c[7]);awinner(c,statusel);}; 
      c[8].onmouseover = function()  {onhovering(c[8]);};
      c[8].onmouseleave = function() {leavehovering(c[8]);awinner(c,statusel);};
    
    var btn = document.getElementsByClassName("btn")[0];
    btn.onclick = function () {newgame(c,statusel)};
    
    
    
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


function newgame(c,status) {
    for (let i = 0; i < c.length; i++) {
            c[i].innerHTML = "";
            c[i].classList.remove("X");
            c[i].classList.remove("O");
            c[i].onclick = function () {whenClicked(children[i], i)};
        status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");
        }
        
    }

function awinner(c,status){
    if(c[0].innerHTML == "X" && c[1].innerHTML == "X" && c[2].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");       
    }else if (c[0].innerHTML == "O" && c[1].innerHTML == "O" && c[2].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
        
    }else if (c[3].innerHTML == "O" && c[4].innerHTML == "O" && c[5].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";       
        status.classList.add("you-won");
    }else if (c[3].innerHTML == "X" && c[4].innerHTML == "X" && c[5].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";        
        status.classList.add("you-won");
    }else if (c[6].innerHTML == "O" && c[7].innerHTML == "O" && c[8].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";         
        status.classList.add("you-won");
    }else if (c[6].innerHTML == "X" && c[7].innerHTML == "X" && c[8].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";        
        status.classList.add("you-won");
    }else if (c[1].innerHTML == "O" && c[4].innerHTML == "O" && c[7].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";         
        status.classList.add("you-won");
    }else if (c[1].innerHTML == "X" && c[4].innerHTML == "X" && c[7].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";         
        status.classList.add("you-won");
    }
     else if (c[2].innerHTML == "X" && c[5].innerHTML == "X" && c[8].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";       
         status.classList.add("you-won");
    }else if (c[2].innerHTML == "O" && c[5].innerHTML == "O" && c[8].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";     
        status.classList.add("you-won");
    } else if (c[0].innerHTML == "X" && c[3].innerHTML == "X" && c[6].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";     
        status.classList.add("you-won");
    }else if (c[0].innerHTML == "O" && c[3].innerHTML == "O" && c[6].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";     
        status.classList.add("you-won");
    } else if (c[0].innerHTML == "X" && c[4].innerHTML == "X" && c[8].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";       
        status.classList.add("you-won");
    }else if (c[0].innerHTML == "O" && c[4].innerHTML == "O" && c[8].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";     
        status.classList.add("you-won");
    } else if (c[2].innerHTML == "X" && c[4].innerHTML == "X" && c[6].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";       
        status.classList.add("you-won");
    }else if (c[2].innerHTML == "O" && c[4].innerHTML == "O" && c[6].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";      
        status.classList.add("you-won");
    }
}