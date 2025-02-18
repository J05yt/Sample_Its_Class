document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".boxes").forEach(function (move) {
        move.addEventListener("mousemove", function (e) {
            let x = e.pageX - move.offsetLeft;
            let y = e.pageY - move.offsetTop;

            move.querySelectorAll("section").forEach(function (span) {
                span.style.left = x + "px";
                span.style.top = y + "px";
            });
        });
    });
});