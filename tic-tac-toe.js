window.onload = function() {
      var element = document.getElementById("board");
      var c = element.children;
      var statusel = document.getElementById("status");
      var newgamebtn = document.getElementsByClassName("btn")[0];
//      var i;
        var state = true;
    
      for (let i = 0; i < c.length; i++) {
          
              c[i].classList.add("square");
        c[i].onmouseover = function()  {
            state = onhovering(c[i],state);
            if (state == true){
                state=false;
            }else if (state == false){
                state=true;
            }};
      c[i].onmouseleave = function() {
          leavehovering(c[i]);
          if(awinner(c,statusel) == 1){
             element.style.pointerEvents = "none"; 
          };
      }
    

    newgamebtn.onclick = function () {state = newgame(c,statusel)
                                    element.style.pointerEvents = "auto"; 

                                     };
    
    
    
}};

// FUNCTIONS


function leavehovering(c) {
    c.classList.remove("hover");
 c.onclick = null;

}
 function onhovering(c,state){
      console.log(c.innerHTML);
    if(c.innerHTML == "X" || c.innerHTML == "O"){
        c.innerHTML = c.innerHTML;}
     else{
                        c.classList.add("hover");

                       c.onclick = function() {
                    state=addclass(c,state);
                      c.classList.remove("hover");

                        }
  
        }
     return state;
     
 }
function addclass(c,state) {
//    if(c.className === "square X"){
//                c.classList.remove("X");
//                c.classList.add("O");
//                c.innerHTML='O';
//                
//            } else if(c.className=== "square O"){
//                c.classList.remove("O");
//                c.classList.add("X");
//                c.innerHTML='X';
//        
//            }
//            else{
//                 c.classList.add("X");
//                c.innerHTML='X';
//            }
       if(state === true){
//                c.classList.remove("X");
                c.classList.add("X");
                c.innerHTML='X';
                c.onclick=null;
                return true;
                
            } else if(state === false){
                c.classList.add("O");
                c.innerHTML='O';
                c.onclick=null;
                return false;
        
            }
//            else{
//                 c.classList.add("X");
//                c.innerHTML='X';
//            }
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
        
    return true;
    }

function awinner(c,status){
    if(c[0].innerHTML == "X" && c[1].innerHTML == "X" && c[2].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");
                        return 1;

    }else if (c[0].innerHTML == "O" && c[1].innerHTML == "O" && c[2].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
                return 1;

    }else if (c[3].innerHTML == "O" && c[4].innerHTML == "O" && c[5].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";       
        status.classList.add("you-won");
                return 1;

    }else if (c[3].innerHTML == "X" && c[4].innerHTML == "X" && c[5].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";        
        status.classList.add("you-won");
                return 1;

    }else if (c[6].innerHTML == "O" && c[7].innerHTML == "O" && c[8].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";         
        status.classList.add("you-won");
                return 1;

    }else if (c[6].innerHTML == "X" && c[7].innerHTML == "X" && c[8].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";        
        status.classList.add("you-won");
                return 1;

    }else if (c[1].innerHTML == "O" && c[4].innerHTML == "O" && c[7].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";         
        status.classList.add("you-won");
                return 1;

    }else if (c[1].innerHTML == "X" && c[4].innerHTML == "X" && c[7].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";         
        status.classList.add("you-won");
         return 1;
    }
     else if (c[2].innerHTML == "X" && c[5].innerHTML == "X" && c[8].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";       
         status.classList.add("you-won");
                         return 1;

    }else if (c[2].innerHTML == "O" && c[5].innerHTML == "O" && c[8].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";     
        status.classList.add("you-won");
                        return 1;

    } else if (c[0].innerHTML == "X" && c[3].innerHTML == "X" && c[6].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";     
        status.classList.add("you-won");
                        return 1;

    }else if (c[0].innerHTML == "O" && c[3].innerHTML == "O" && c[6].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";     
        status.classList.add("you-won");
                        return 1;

    } else if (c[0].innerHTML == "X" && c[4].innerHTML == "X" && c[8].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";       
        status.classList.add("you-won");
                        return 1;

    }else if (c[0].innerHTML == "O" && c[4].innerHTML == "O" && c[8].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";     
        status.classList.add("you-won");
                        return 1;

    } else if (c[2].innerHTML == "X" && c[4].innerHTML == "X" && c[6].innerHTML == "X" ){
        status.innerHTML = "Congratulations! X is the Winner!";       
        status.classList.add("you-won");
                        return 1;

    }else if (c[2].innerHTML == "O" && c[4].innerHTML == "O" && c[6].innerHTML == "O" ){
        status.innerHTML = "Congratulations! O is the Winner!";      
        status.classList.add("you-won");
                        return 1;

    }else{
        return 0;
        
    }
    
   
}