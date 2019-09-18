alert("hi");
var num = prompt("단입력","100");
for (var i = 1; i <= num; i++) {
    document.writeln("<br><mark>" + i + "단 </mark></br>")

    for (var j = 1; j < 10; j++) {
        if (j <= 1) {
            document.writeln(i + "x" + j + "=" + i * j);
        } else {
            document.writeln("<br>" + i + "x" + j + "=" + i * j);
        }
    }
    document.writeln("<br>");
}


