window.onload = function() {
    var element = document.getElementById("board");
    var c = element.children;
    var statusel = document.getElementById("status");
    var newgamebtn = document.getElementsByClassName("btn")[0];
    var state = true;
    
    for (let i = 0; i < c.length; i++) {
        c[i].classList.add("square");
//        
        c[i].onmouseover = function()  {
            onhovering(c[i],state);
            //state = !state;
        };
//        
        c[i].onmouseleave = function() {
            leavehovering(c[i]);
            if(awinner(c,statusel) == 1){
                element.style.pointerEvents = "none"; 
            }
        }
        c[i].onclick = function() {
            console.log('helloooo');
            addclass(c[i],state);
            c[i].classList.remove("hover");
            state = !state;

        }
    
        newgamebtn.onclick = function () {
            state = newgame(c,statusel)
            element.style.pointerEvents = "auto"; 

        };
    }

};

// FUNCTIONS


function leavehovering(c) {
    c.classList.remove("hover");

}

function onhovering(c,state){
    console.log(c.innerHTML);
    if(c.innerHTML == "X" || c.innerHTML == "O"){
        c.innerHTML = c.innerHTML;
    } else {
        c.classList.add("hover");
     
    }
    return state;     
 }
function addclass(c,state) {
    
    if(state){
        if(c.innerHTML == "X" || c.innerHTML == "O"){
        c.innerHTML = c.innerHTML;
    }else{
       
        c.classList.add("X");
        c.innerHTML='X'; 
    }
                
    } else {
         if(c.innerHTML == "X" || c.innerHTML == "O"){
        c.innerHTML = c.innerHTML;
    }else{
         c.classList.add("O");
        c.innerHTML='O';
        
    }
       
        
    }

}


function newgame(c,status) {
    
    for (let i = 0; i < c.length; i++) {
        c[i].innerHTML = "";
        c[i].classList.remove("X");
        c[i].classList.remove("O");
        status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");
//        c[i].onclick=
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