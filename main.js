screen_width = 0;
screem_height = 0;

apple = "";
speak_data = "";

to_number = "";


function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;

    canvas = createCanvas(900, 600);
    canvas.center();

}


function preload() {
    loadImage('apple.png');
}

function draw() {
    if (draw_apple == "set") {
        for (let i = 1; <= to_number; i++) {
            x = math.floor(Math.random() * 700);
            y = math.floor(math.random() * 400);
            image(loadImage, x, y, 20, 50, 50, );
            document.getElement("status").innerHTML = to_number + "Apples drawn";
        }
    }




    recognition.onresult = function (event) {
        console.log(event);
        var content = event.results[0][0].transcript;
        document.getElementById("status").innerHTML = "The speech has been recognized as: " + content;
        to_number = Number(content);
        if (Number.isInteger(to_number)) {
            document.getElementById("status").innerHTML = "Started Drawing Apple";
            draw_apple = "set";
        }
    }