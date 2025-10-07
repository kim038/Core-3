var hoverArea = document.getElementById('audioone');
var audio = document.getElementById('callone');
hoverArea.onmouseover = function () {
    audio.play();
}
hoverArea.onmouseout = function () {
    audio.pause();
}

