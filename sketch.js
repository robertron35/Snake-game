var snake;
var scl = 20;
var food;
var lastPress;

function setup(){ 
    let canvas = createCanvas(600, 600);
    canvas.position((windowWidth - width) / 2, (windowHeight - height -200) / 2);
    snake = new Snake();
    frameRate(10);
    pickLocation();
    buttonUP = createButton('△');
    buttonUP.position((windowWidth / 2) - 25, (windowHeight / 2) + 240);
    buttonUP.mousePressed(simulateKeyPressUP);
    buttonUP.style('width', '80px');
    buttonUP.style('height', '50px');
    buttonDOWN = createButton('▽');
    buttonDOWN.position((windowWidth / 2) - 25, (windowHeight / 2) + 300);
    buttonDOWN.mousePressed(simulateKeyPressDOWN);
    buttonDOWN.style('width', '80px');
    buttonDOWN.style('height', '50px');
    buttonRIGHT = createButton('▷');
    buttonRIGHT.position((windowWidth / 2) + 65, (windowHeight / 2) + 300);
    buttonRIGHT.mousePressed(simulateKeyPressRIGHT);
    buttonRIGHT.style('width', '80px');
    buttonRIGHT.style('height', '50px');
    buttonLEFT = createButton('◁');
    buttonLEFT.position((windowWidth / 2) - 115, (windowHeight / 2) + 300);
    buttonLEFT.mousePressed(simulateKeyPressLEFT);
    buttonLEFT.style('width', '80px');
    buttonLEFT.style('height', '50px');
}

function simulateKeyPressUP() {
    if(lastPress != 'D'){
        lastPress = 'U';
        snake.dir(0, -1);
    }
}

function simulateKeyPressDOWN() {
    if(lastPress != 'U'){
        lastPress = 'D';
        snake.dir(0, 1);
    }
}

function simulateKeyPressRIGHT() {
    if(lastPress != 'L'){
        lastPress = 'R';
        snake.dir(1, 0);
    }
}

function simulateKeyPressLEFT() {
    if(lastPress != 'R'){
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

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed(){
    if(keyCode == UP_ARROW && lastPress != 'D'){
        lastPress = 'U';
        snake.dir(0, -1);
    }
    else if(keyCode == DOWN_ARROW && lastPress != 'U'){
        lastPress = 'D';
        snake.dir(0, 1);
    }
    else if(keyCode == RIGHT_ARROW && lastPress != 'L'){
        lastPress = 'R';
        snake.dir(1, 0);
    }
    else if(keyCode == LEFT_ARROW && lastPress != 'R'){
        lastPress = 'L';
        snake.dir(-1, 0);
    }
}