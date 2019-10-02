
window.addEventListener("load",drawScreen,false);
window.addEventListener("keydown",onkeydown,true);


var GAME_STATE_READY = 0; //준비
var GAME_STATE_GAME = 1; //게임중
var GAME_STATE_OVER = 2; //게임오버

var GameState= GAME_STATE_READY;

var imgBackground = new Image();
imgBackground.src = "img/background.png";
imgBackground.addEventListener("load",drawScreen,false);

var imgPlayer = new Image();
imgPlayer.src = "img/player.png";
imgPlayer.addEventListener("load", drawScreen,false);

//좌표자체를 미리지정 이변수를이용해 좌표값을 다룰예정
var intPlayerX = 350;
var intPlayerY = 250;

//피할것추가

var tempMissile1 = {x:0 , y:0 , go_x:1, go_y:1}
var tempMissile2 = {x:800 , y:0 , go_x:-1, go_y:1}
var tempMissile3 = {x:800 , y:600 , go_x:-1, go_y:-1}
var tempMissile4 = {x:0 , y:600 , go_x:1, go_y:-1} //x,y생성위치 go_x,y 움직임 ?

//피할이미지

var imgMissile = new Image();
imgMissile.src = "img/missile.png"



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

        Context.drawImage(imgMissile , tempMissile1.x , tempMissile1.y);
        Context.drawImage(imgMissile , tempMissile2.x , tempMissile2.y);
        Context.drawImage(imgMissile , tempMissile3.x , tempMissile3.y);
        Context.drawImage(imgMissile , tempMissile4.x , tempMissile4.y);

    }
    else if(GameState == GAME_STATE_OVER){
        Context.fillText("게임오버",330,180); //글자띄우기 알아두자
        intPlayerX =350;
        intPlayerY =250;
    }
}



function onkeydown(e){
    //겜시작
    if(GameState == GAME_STATE_READY){
        if(e.keyCode ==13) //13은 엔터
        {
            GameState = GAME_STATE_GAME;
            drawScreen();
        }
    }
    //게임중
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
   
    
