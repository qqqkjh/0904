var imgWarrior = new Image(); //이미지 객체생성
imgWarrior.src = "warrior.png" // 실제 이미지 소스 위치입력
imgWarrior.addEventListener("load", drawScreen, false);  //이벤트리스너로 이벤트명,이벤트로 불러올함수명,기본값펄스 월래있는 이벤트는 그걸 불러오고 없는 이벤트는 새로 이벤트명을 생성함?
//이경우 함수를 불러오는 load 이벤트를 발생시켯음을 알수있다
//그리고 로드 이벤트에 드로우스크린함수를 연결시켜줌 예를들어 click이벤트였으면 클릭해야 해당 연결된 함수가 실행 load의경우 즉시 바로 실행 

//이미지 객체를 imgWarrior에 저장하고 src 를 진짜 이미지와 연결후 이벤트 리스너의 로드 ,함수호출,기본값펄스
//true 이면, Capturing 방식으로 이벤트가 전달되며, false 이며, Bubling 방식으로 이벤트가 전달된다. 기본값은 false이다.



function drawScreen() {
    var theCanvas = document.getElementById("GameCanvas")//아이디부여 호출떄이용
    var Context = theCanvas.getContext("2d"); //캔버스의 기능중 랜더링타입정의 이경우는 2d로 지정해줬음을 알수있다 그걸 Context에 저장 (필드부여)

    Context.fillSytle = "#000000";
    Context.fillSytle(0, 0, 000, 600);  //랜더링값을 결정

    Context.drawImage(imgWarrior, 0, 0) //그릴 그림이저장된변수(필드)와 좌표x,y설정 
}

