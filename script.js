function init() {
    var canvas = document.getElementById('mycanvas');
    pen = canvas.getContext('2d');
    cs = 6;
    W=canvas.style.width='100vw' ;
    H=canvas.style.height='100vh' ;
    snake = {
        init_length: 5,
        color: "white",
        cells: [],
        direction: 'right',
        createSnake: function () {
        for(let i=this.init_length; i>=0; i--){
            this.cells.push({x:i,y:0});
        }
        },
        drawSnake: function () {
        for(let i=0;i<this.cells.length;i++){
            pen.fillStyle=this.color;
        pen.fillRect(this.cells[i].x*cs, this.cells[i].y*cs, cs-2, cs-2);
        }
        },
        updateSnake: function () {
        headX=this.cells[0].x;
        headY=this.cells[0].y;
        this.cells.pop();
        X=headX+1;
        Y=headY;
        this.cells.unshift({x:X, y:Y});
        }
    }

    snake.createSnake();
}

function draw() {
    pen.clearRect(0, 0, W, H);
    snake.drawSnake();
}


function update() {
    snake.updateSnake();
}

function loop() {
    draw();
    update();
}

init();
var f = setInterval(loop, 500);
