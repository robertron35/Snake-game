var snake;
var scl = 20;
var food;
var lastPress;
var total = 0;

function setup(){ 
    let canvas = createCanvas(300, 500);
    canvas.position((windowWidth - width + 30) / 2, (windowHeight - height -200) / 2 + 40);
    snake = new Snake();
    frameRate(10);
    pickLocation();
    buttonUP = createButton('△');
    buttonUP.position((windowWidth / 2) - 25, (windowHeight / 2) + 230);
    buttonUP.mousePressed(simulateKeyPressUP);
    buttonUP.style('width', '80px');
    buttonUP.style('height', '50px');
    buttonDOWN = createButton('▽');
    buttonDOWN.position((windowWidth / 2) - 25, (windowHeight / 2) + 290);
    buttonDOWN.mousePressed(simulateKeyPressDOWN);
    buttonDOWN.style('width', '80px');
    buttonDOWN.style('height', '50px');
    buttonRIGHT = createButton('▷');
    buttonRIGHT.position((windowWidth / 2) + 65, (windowHeight / 2) + 290);
    buttonRIGHT.mousePressed(simulateKeyPressRIGHT);
    buttonRIGHT.style('width', '80px');
    buttonRIGHT.style('height', '50px');
    buttonLEFT = createButton('◁');
    buttonLEFT.position((windowWidth / 2) - 115, (windowHeight / 2) + 290);
    buttonLEFT.mousePressed(simulateKeyPressLEFT);
    buttonLEFT.style('width', '80px');
    buttonLEFT.style('height', '50px');
}

function simulateKeyPressUP() {
    if(lastPress != 'D' || total == 0){
        lastPress = 'U';
        snake.dir(0, -1);
    }
}

function simulateKeyPressDOWN() {
    if(lastPress != 'U' || total == 0){
        lastPress = 'D';
        snake.dir(0, 1);
    }
}

function simulateKeyPressRIGHT() {
    if(lastPress != 'L' || total == 0){
        lastPress = 'R';
        snake.dir(1, 0);
    }
}

function simulateKeyPressLEFT() {
    if(lastPress != 'R' || total == 0){
        lastPress = 'L';
        snake.dir(-1, 0);
    }
}

function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw(){
    background(51);

    if(snake.eat(food)){
        pickLocation();
    }

    snake.lose();
    snake.update();
    snake.show();
    total = snake.total;

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed(){
    if(keyCode == UP_ARROW && (lastPress != 'D' || total == 0)){
        lastPress = 'U';
        snake.dir(0, -1);
    }
    else if(keyCode == DOWN_ARROW && (lastPress != 'U' || total == 0)){
        lastPress = 'D';
        snake.dir(0, 1);
    }
    else if(keyCode == RIGHT_ARROW && (lastPress != 'L' || total == 0)){
        lastPress = 'R';
        snake.dir(1, 0);
    }
    else if(keyCode == LEFT_ARROW && (lastPress != 'R' || total == 0)){
        lastPress = 'L';
        snake.dir(-1, 0);
    }
}