x = 0;
y = 0;
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("status").innerHTML = "system is listening please speak";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "the speech has been recognized as :" + content;
    if (content == "apple") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "started drawing apple";
        draw_circle = "set";
    }
    
}
function setup() { canvas = createCanvas(900, 600); } function draw() { if (draw_apple == "set") { radius = Math.floor(Math.random() * 100); apple(x, y, radius); document.getElementById("status").innerHTML = "apple is drawn. "; draw_apple = ""; }