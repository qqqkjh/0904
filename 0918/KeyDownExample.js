
window.addEventListener("load", darwScreen,false)
window.addEventListener("keydown", onkeydown,false)
window.addEventListener("keyup", onkeyup,false)

var strKeyEventType ="None";
var strKeyEventValue ="None";


function darwScreen(){
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    Context.fillSytle = "#000000";
    Context.fillRect(0, 0, 800, 600);  //랜더링값을 결정
    Context.fillSytle = "#ffffff"; //글자색이 검정색됨
    Context.font = '25px d2coding'; //폰트크기및 폰트지정
    Context.textBaseline ="top";
    Context.fillText("입력된 키" + strKeyEventValue, 5,5)
    Context.fillText("키입력 상태" + strKeyEventType, 5,30)

}

function onkeydown(e){
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    darwScreen();
}

function onkeyup(e){
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    darwScreen();
}