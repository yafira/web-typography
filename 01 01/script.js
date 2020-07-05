let font
let graphic

function preload() {
    font = loadFont("assets/spacegrotesk-medium.otf")
}

function setup() {
    createCanvas(500, 500);


    graphic = createGraphics(500, 500)


    graphic.fill("#e21fb1")
    graphic.textFont(font)
    graphic.textSize(400)
    graphic.textAlign(CENTER, CENTER)
    graphic.text("01", width / 2, height / 2)
}

function draw() {
    background("#fbfcc0")

    let val = sin(frameCount * 0.05) * 250

    copy(graphic, 0, 0, 500, 500, 0, 0, 250 + val, 500)
    copy(graphic, 0, 0, 500, 500, 250 + val, 0, 250 - val, 500)
} 