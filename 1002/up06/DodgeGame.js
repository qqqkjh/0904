
//장애물닿으면 게임오버추가
//
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
var tempMissile4 = {x:0 , y:600 , go_x:1, go_y:-1} //x,y생성위치 go_x,y 그림중심점 ? 곱해서 움직임

//피할이미지

var imgMissile = new Image();
imgMissile.src = "img/missile.png"

var intervalID;

var arrMissiles = new Array();

function onGameStart(){
    GameState = GAME_STATE_GAME;
    
    intervalID = setInterval(MoveMissile, 100);  //setInterval 0.1초간격(100)으로 해당함수 반복하기 기능   

    //총알위치추가
   arrMissiles.push({x:0 , y:0 , go_x:1, go_y:1});
   arrMissiles.push({x:800 , y:0 , go_x:-1, go_y:1});
   arrMissiles.push({x:800 , y:600 , go_x:-1, go_y:-1});
   arrMissiles.push({x:0 , y:600 , go_x:1, go_y:-1});
   
   
   // tempMissile1 = {x:0 , y:0 , go_x:1, go_y:1}
    // tempMissile2 = {x:800 , y:0 , go_x:-1, go_y:1}
    // tempMissile3 = {x:800 , y:600 , go_x:-1, go_y:-1}
    // tempMissile4 = {x:0 , y:600 , go_x:1, go_y:-1} //게임시작시 시작단계에서 장애물 초기화
}

function onGameOver(){
    GameState = GAME_STATE_OVER;
    clearInterval(intervalID);
}

function onReady(){
    GameState = GAME_STATE_READY;
    intPlayerX = 350;
    intPlayerY = 250;
    //추가
    while(arrMissiles.length !=0){
        arrMissiles.pop();
    }
}




//장애물 닿는 판정 트루 펄스 ?
function IsCollisionWithPlayer(x,y){
    if( (intPlayerX+55) > (x + 5) && (intPlayerX + 5) < (x + 25) 
      &&(intPlayerY + 5) < (y + 25) && (intPlayerY +55) > (y + 5) ){return true;}


      return false;
    }


function MoveMissile(){
    //for문으로 간략화
    for(var i = 0; i< arrMissiles.length; i++){
        arrMissiles[i].x += arrMissiles[i].go_x * 3;
        arrMissiles[i].y += arrMissiles[i].go_y * 3;
        if(IsCollisionWithPlayer(arrMissiles[i].x, arrMissiles[i].y)){
            onGameOver(); //아마 반복 초기화 일시정지? ? 함수로 대체되었다
        }
    
    }




    // tempMissile1.x += tempMissile1.go_x * 3;
    // tempMissile1.y += tempMissile1.go_y * 3;
    // if(IsCollisionWithPlayer(tempMissile1.x, tempMissile1.y)){
    //     onGameOver(); //아마 반복 초기화 일시정지? ? 함수로 대체되었다
    // }

    // tempMissile2.x += tempMissile2.go_x * 3;
    // tempMissile2.y += tempMissile2.go_y * 3;
    // if(IsCollisionWithPlayer(tempMissile2.x, tempMissile2.y)){
    //     onGameOver(); 
    // }

    // tempMissile3.x += tempMissile3.go_x * 3;
    // tempMissile3.y += tempMissile3.go_y * 3;
    // if(IsCollisionWithPlayer(tempMissile3.x, tempMissile3.y)){
    //     onGameOver();
    // }

    // tempMissile4.x += tempMissile4.go_x * 3;
    // tempMissile4.y += tempMissile4.go_y * 3;
    // if(IsCollisionWithPlayer(tempMissile4.x, tempMissile4.y)){
    //     onGameOver();
    // }

    drawScreen();
}



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
        for(var i = 0; i< arrMissiles.length; i++){
            Context.drawImage(imgMissile, arrMissiles[i].x, arrMissiles[i].y);
        }
        //코드의 간략화

        // Context.drawImage(imgMissile , tempMissile1.x , tempMissile1.y);
        // Context.drawImage(imgMissile , tempMissile2.x , tempMissile2.y);
        // Context.drawImage(imgMissile , tempMissile3.x , tempMissile3.y);
        // Context.drawImage(imgMissile , tempMissile4.x , tempMissile4.y);

    }
    else if(GameState == GAME_STATE_OVER){
        for(var i = 0; i< arrMissiles.length; i++){
            Context.drawImage(imgMissile, arrMissiles[i].x, arrMissiles[i].y);
        }
       
        // Context.drawImage(imgMissile , tempMissile1.x , tempMissile1.y);
        // Context.drawImage(imgMissile , tempMissile2.x , tempMissile2.y);
        // Context.drawImage(imgMissile , tempMissile3.x , tempMissile3.y);
        // Context.drawImage(imgMissile , tempMissile4.x , tempMissile4.y);
        
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
          // GameState = GAME_STATE_GAME; 함수로 뺄꺼임
            onGameStart();
          //drawScreen();
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
            //GameState = GAME_STATE_READY; 함수로 따로뺄꺼임 
            onReady(); 

        }
        }
        drawScreen();
    }  
   
    
