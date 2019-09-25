
window.addEventListener("load",drawScreen,false);
window.addEventListener("keydown",onkeydown,true);

var imgBackground = new Image();
imgBackground.src = "img/background.png";
imgBackground.addEventListener("load",drawScreen,false);

var imgPlayer = new Image();
imgPlayer.src = "img/player.png";
imgPlayer.addEventListener("load", drawScreen,false);

var intPlayerX = 350;
var intPlayerY = 250;

function drawScreen(){

    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0,0,800,600);

    Context.drawImage(imgBackground,0,0);
    Context.drawImage(imgPlayer, intPlayerX,intPlayerY);

}

function onkeydown(e){
    switch(e.keyCode){
        case 37: //왼쪽방향키
            intPlayerX-=5;
            if(intPlayerX<0){
                intPlayerX=0;
            }
        break    
        
        case 39: //오른쪽방향키
            intPlayerX+=5;
            if(intPlayerX>740){
                intPlayerX=740;
            }
        break    
    
        case 38: //위방향키
            intPlayerY-=5;
            if(intPlayerY<0){
                intPlayerY=0;
            }
        break    
    
        case 40: //아래방향키
        intPlayerY+=5;
        if(intPlayerY>540){
            intPlayerY=540;
        }
        break    
    };


drawScreen();
}