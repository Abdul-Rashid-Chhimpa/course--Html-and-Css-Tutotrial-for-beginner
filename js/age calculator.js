function age() {
    var d = document.getElementById("date").value;
    var m = document.getElementById("month").value;
    var y = document.getElementById("year").value;
    var date = new Date();
    var d1 = date.getDate();
    var m1 = 1 + date.getMonth();
    var y1 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d > d1) {
        d1 = d1 + month[m1 - 1];
        m1 = m1 - 1;
    }
    if (m > m1) {
        m1 = m1 + 12;
        y1 = y1 - 1;
    }
    var d = d1 - d;
    var m = m1 - m;
    var y = y1 - y;
    document.getElementById("age").innerHTML =
        "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}