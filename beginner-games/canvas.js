// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

var game_text;
var game;
var ai_height = canvas.height / 2;
var direction = 0;
var delay = 3000;

function BallRandomizer(value){
    let i = Math.random() - 0.5
    if (i > 0){
        return value;
    }
    else if(i <= 0){
        return -value;
    }
}
var speed = 10
ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    dx: BallRandomizer(speed),
    dy: BallRandomizer(speed)
}
var radius = canvas.height/100
var ai = {y: ball.y}
var score = {
    player: 0,
    ai: 0
}

window.onload = function() {
    game_text = 1; // 0 prevents html spam, 1 lists 'games', 2 lists all the games available, 3 plays pong and lists 'games', 4 plays breakout and lists 'games', etc.
    game = 0; // 0 = no game, 1 = pong, 2 = breakout
}

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
    speed = 10
})

addEventListener('click', event => {
    console.log(event)
})

addEventListener('keyup', event => {
    if (event.code == 'Escape'){
        game = 0;
    }
})
// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// Objects
/*function Object(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
	this.update = function() {
		this.draw()
	}

	this.draw = function() {
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
		c.fillStyle = this.color
		c.fill()
		c.closePath()
	}
}*/
var paddle = [];
function Paddle(x, y, width, height, type) {
    if(type == 1){
        
    }
    if(y >= height / 2 && y <= canvas.height - (height / 2)){
        c.fillRect(x, y - (height / 2), width, height)
    }
    else if(y < height / 2){
        c.fillRect(x, 0, width, height)
    }
    else{
        c.fillRect(x, canvas.height - height, width, height)
    }
    paddle[type] = {
        x: x,
        y: y,
        width: width,
        height: height
    }
}

// Implementation
let objects

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    Paddle(10, mouse.y, 10, canvas.height / 10, 0)
    if (game_text == 1 || game_text > 2){
        document.getElementById('tag-id').innerHTML = "<h2><a href='#' onclick='game_text = 2;'>Games</a></h2>"
        if (game_text != 1){
            game = game_text - 2
            console.log(game)
        }
        game_text = 0;
        ball = {
        x: canvas.width/2,
        y: canvas.height/2,
        dx: BallRandomizer(speed),
        dy: BallRandomizer(speed)
        }
    }
    if (game_text == 2) {
       document.getElementById('tag-id').innerHTML = "<h2><a href='#' onclick='game_text = 3;'>Pong</a></h2><h2><a href='#' onclick='game_text = 4;'>Breakout</a></h2>" 
        game_text = 0;
    }
    
    if (game == 1){
        Paddle(canvas.width - 20, ai.y, 10, canvas.height / 10, 1)
        c.font = '30px Monospace'
        c.fillText(score.player, 25, canvas.height - 15)
        c.fillText(score.ai, canvas.width - 45, canvas.height - 15)
        c.font = '20px Monospace'
        c.fillText("Press the ESC key to end the game", canvas.width / 2 - 184, canvas.height - 15)
        Ball()
        Ai()
    }
    if (game == 2){
        Ball()
    }
}
animate();