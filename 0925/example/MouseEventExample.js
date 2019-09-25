window.addEventListener("load",drawScreen, false);
window.addEventListener("mousemove",onMouseMove,false);
window.addEventListener("mousedown",onMouseDown,false);
window.addEventListener("mouseup", onMouseUp,false);


var imgIcon = new Image();
imgIcon.src ="img/icon.png";
imgIcon.addEventListener("load",drawScreen,false);



var bMouseClicked =false;
var intMouseX = 60;
var intMouseY = 60;
var strMouseStatus = "None";

var movesaveX;
var movesaveY;





function drawScreen(){
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0,0,800,600);

    Context.drawImage(imgIcon,intMouseX,intMouseY);

    Context.fillStyle = "#ffffff";
    Context.font = '25px Arial';
    Context.textBaseline = "top";
    Context.fillText("발생한 마우스 포인터 :" +strMouseStatus,5,5);
    Context.fillText("마우스 좌표 : x :" + intMouseX + "y :" + intMouseY );
}


function onMouseMove(e){

    strMouseStatus = "Move!";

    if(bMouseClicked){
        var theCanvas =document.getElementById("GameCanvas");
        intMouseX =e.clientX - theCanvas.offsetLeft;
        intMouseY =e.clientY - theCanvas.offsetTop;
    
        drawScreen();
        movesaveX = intMouseX;
        movesaveY = intMouseY;
    }

}

function onMouseDown(e){

    strMouseStatus = "Down!";

    var theCanvas = document.getElementById("GameCanvas");
    intMouseX =e.clientX - theCanvas.offsetLeft;  
    intMouseY =e.clientY - theCanvas.offsetTop;


    bMouseClicked = true;
    
    drawScreen();

}



function onMouseUp(e){

    strMouseStatus = "Up!";

    bMouseClicked = false;
    drawScreen();
    intMouseX = 0;
    intMouseY = 0;//좌표용

   
}
