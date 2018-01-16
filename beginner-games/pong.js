function Ball(){
    let collision = 2
    if(game == 2){collision = 1}else{collision = 2}
    for(let i = 0; i < collision; i++){
        if(ball.x > paddle[i].x - radius && ball.x < paddle[i].x + paddle[i].width + radius && ball.y > paddle[i].y - paddle[i].height/2 && ball.y < paddle[i].y + paddle[i].height/2){
            ball.dx = -ball.dx
        }
    }
    if (collision == 1){
        console.log(collision)
        if(ball.x > canvas.width - radius){
            ball.dx = -ball.dx
        }
    }
    if(ball.x < 0 || (ball.x > canvas.width && game == 1)){
        if(ball.x < 0){score.ai += 1}else{score.player += 1}
        ball = {
        x: canvas.width/2,
        y: canvas.height/2,
        dx: BallRandomizer(speed),
        dy: BallRandomizer(speed)
        }
    }
    if(ball.y < 0 || ball.y > canvas.height){
        ball.dy = -ball.dy
    }
    ball.x += ball.dx
    ball.y += ball.dy
    c.beginPath();
    c.arc(ball.x, ball.y, radius, 0, Math.PI*2, false);
    c.fillStyle = 'black'
    c.fill();
}

var ball_rest = false
function Ai(){
    if(ball.dx > 0) {
        ball_rest = false;
        if(paddle[1].y < ball.y){
            ai.y += 9
        }
        else{
            ai.y -= 9
        }
    }
}