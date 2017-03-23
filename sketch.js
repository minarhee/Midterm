var bg;
var fish1X = -100;
var fish1Y = 100;
var fish2X = 0;
var fish2Y = 200;
var fish3X = 200;
var fish3Y = 0;
var fish4X = -100;
var fish4Y = 100;
var fish5X = 200;
var fish5Y = 300;
var waveCounter = 0;
var foodX;
var foodY;
var release = false;

function setup() {
    bg = loadImage("Underwater-Aquarium-Background.jpg");
    createCanvas(1000, 500);
    noStroke();
    img = loadImage("fish1.png");
    img2 = loadImage("fish4.png");
    img3 = loadImage("fish3.png");
    img4 = loadImage("fish5.png");
    img5 = loadImage("fish8.png");
}

function draw() {
    //water background color
    imageMode(CORNERS);
    background(bg);
    imageMode(CENTER);
    //fish1
    fish1X++;
    fish1Y++;
    if (fish1X > width && fish1Y > height) {
        fish1X = -100;
        fish1Y = -100;
    }
    image(img, fish1X, fish1Y, img.width / 6, img.height / 6);
    //fish2
    fish2X++;
    // -10, 10 controls hieght of wave
    fish2Y = 200 + map(sin(waveCounter), -1, 1, -10, 10);
    //speed
    waveCounter = waveCounter + 0.03;
    if (fish2X > width || fish2Y > height) {
        fish2X = -500;
        fish2Y = 200;
    }
    image(img2, fish2X, fish2Y, img.width / 6, img.height / 6);
    //fish 3
    fish3X++;
    fish3Y++;
    if (fish3X > width && fish3Y > height) {
        fish3X = 500;
        fish3Y = -1000;
    }
    image(img3, fish3X, fish3Y, img.width / 6, img.height / 6);
    //fish 4
    fish4X++;
    // -10, 10 controls hieght of wave
    fish4Y = 300 + map(sin(waveCounter), -1, 1, -10, 50);
    //speed
    waveCounter = waveCounter + 0.04;
    if (fish4X > width || fish4Y > height) {
        fish4X = -600;
        fish4Y = 200;
    }
    image(img4, fish4X, fish4Y, img.width / 6, img.height / 6);
    //fish 5
    fish5X++;
    // -10, 10 controls hieght of wave
    fish5Y = 300 + map(sin(waveCounter), -1, 1, -10, 10);
    //speed
    waveCounter = waveCounter + 0.03;
    if (fish5X > width || fish5Y > height) {
        fish5X = -400;
        fish5Y = 300;
    }
    image(img5, fish5X, fish5Y, img.width / 6, img.height / 6);
    //FOOD STUFF
    if (release == false) {
        //if realse is false
        // follow my mouse
        foodX = mouseX;
        foodY = mouseY;
    }
    else {
        // if release is true
        // make food drop
        foodY++;
        var fish2Food = dist(foodX, foodY, fish2X, fish2Y);
        console.log(fish2Food);
        if (fish2Food < 80) {
            release = false;
        }
    }
    if (foodY > height) {
        release = false;
    }
    fill(139, 69, 19);
    ellipse(foodX, foodY, 20, 20);
}

function mousePressed() {
    release = true;
}