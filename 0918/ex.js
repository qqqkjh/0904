var my_job = prompt("입력값", "학생");

switch (my_job) {
    case "사장":
        money = 10100000;
        break;
    case "알바":
        money = 100000;
        break;
    case "학생":
        money = 90000;
        break;
    default:
        money = 99;
    };

    document.writeln("");
    document.writeln("나의현재 금액은"+money);

