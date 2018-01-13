function invert() {
    setInterval(() => {
        if(direction == 0){
            direction = 1;
            console.log(direction);
        }
        else if(direction == 1){
            direction = 0;
            console.log(direction);
        }
    }, delay)
}
function Ball(){
    for(let i = 0; i < 2; i++){
        if(ball.x > paddle[i].x - radius && ball.x < paddle[i].x + paddle[i].width + radius && ball.y > paddle[i].y - paddle[i].height/2 - radius && ball.y < paddle[i].y + paddle[i].height/2 + radius){
            ball.dx = -ball.dx
        }
    }
    if(ball.x < 0 || ball.x > canvas.width){
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