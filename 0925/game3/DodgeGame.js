
window.addEventListener("load",drawScreen,false);
window.addEventListener("keydown",onkeydown,true);


var GAME_STATE_READY = 0;
var GAME_STATE_GAME = 1;
var GAME_STATE_OVER = 2;

var GameState= GAME_STATE_READY;

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

    Context.fillStyle = "#ffffff";
    Context.font = '50px Arial';
    Context.textBaseline = "top";


    if(GameState == GAME_STATE_READY){
        Context.fillText("준비",330,180);
    }
    else if(GameState == GAME_STATE_GAME){

    }
    else if(GameState == GAME_STATE_OVER){
        Context.fillText("게임오버",330,180);
        intPlayerX =350;
        intPlayerY =250;
    }
}



function onkeydown(e){

    if(GameState == GAME_STATE_READY){
        if(e.keyCode ==13) //엔터
        {
            GameState = GAME_STATE_GAME;
            drawScreen();
        }
    }
    else if(GameState == GAME_STATE_GAME){
    switch(e.keyCode){
        case 37: //왼쪽방향키
            intPlayerX-=5;
            if(intPlayerX<=0){
                intPlayerX=0;
                GameState = GAME_STATE_OVER
                
            }
        break    
        
        case 39: //오른쪽방향키
            intPlayerX+=5;
            if(intPlayerX>=740){
                intPlayerX=740;
                GameState = GAME_STATE_OVER
                
            }
        break    
    
        case 38: //위방향키
            intPlayerY-=5;
            if(intPlayerY<=0){
                intPlayerY=0;
                GameState = GAME_STATE_OVER
               
            }
        break    
    
        case 40: //아래방향키
        intPlayerY+=5;
        if(intPlayerY>=540){
            intPlayerY=540;
            GameState = GAME_STATE_OVER
             
        }
        break    
    };
    }
    //게임오버
    else if(GameState == GAME_STATE_OVER){
        
       
        if(e.keyCode ==13) //엔터
        {
            GameState = GAME_STATE_READY;

        }
        }
        drawScreen();
    }  
   
    
