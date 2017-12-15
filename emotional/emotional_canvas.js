// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth - 5
canvas.height = innerHeight - 5

// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

var emotion;

var happy_emoji = new Image();
var sad_emoji = new Image();
var angry_emoji = new Image();
var fearful_emoji = new Image();
var disgusted_emoji = new Image();
happy_emoji.src = 'http://al-taiclub.com/images/crying-emoji-clipart-17.png'
sad_emoji.src = 'https://cdn.shopify.com/s/files/1/1061/1924/products/Sad_Face_Emoji_large.png?v=1480481055'
angry_emoji.src = 'https://cdn.shopify.com/s/files/1/1061/1924/products/Very_Angry_Emoji_7f7bb8df-d9dc-4cda-b79f-5453e764d4ea_large.png?v=1480481058'
fearful_emoji.src = 'https://i.pinimg.com/originals/31/fb/09/31fb09b4799d8d5ba2821d93303517b5.png'
disgusted_emoji.src = 'http://www.pngall.com/wp-content/uploads/2016/06/Unamused-Face-Emoji-PNG.png'

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth - 5
    canvas.height = innerHeight - 5

    init()
})

addEventListener('click', () => {
    if(mouse.y > 200 && mouse.y < 300){
       if (mouse.x > canvas.width / 20 && mouse.x < canvas.width / 20 + 100) {
           emotion = 'happy'
       }
        else if (mouse.x > canvas.width / 4 && mouse.x < canvas.width / 4 + 100){
            emotion = 'sad'
        }
        else if(mouse.x > canvas.width / 2 - canvas.width / 30 && mouse.x < canvas.width / 2 - canvas.width / 30 + 100){
            emotion = 'angry'
        }
        else if(mouse.x > canvas.width / 1.55 && mouse.x < canvas.width / 1.55 + 100){
            emotion = 'scared'
        }
        else if(mouse.x > canvas.width / 1.2 && mouse.x < canvas.width / 1.2 + 100){
            emotion = 'disgusted'
        }
    }
    console.log(emotion)
    
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
function Object(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
	Object.prototype.update = function() {
		this.draw()
	}

	Object.prototype.draw = function() {
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
		c.fillStyle = this.color
		c.fill()
		c.closePath()
	}
}

// Implementation
let objects
function init() {
    objects = []

    for (let i = 0; i < 400; i++) {
        // objects.push();
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    c.drawImage(happy_emoji, canvas.width / 20, 200, 100, 100);
    c.drawImage(sad_emoji, canvas.width / 4, 200, 100, 100);
    c.drawImage(angry_emoji, canvas.width / 2 - canvas.width / 30, 200, 100, 100)
    c.drawImage(fearful_emoji, canvas.width / 1.55, 200, 100, 100)
    c.drawImage(disgusted_emoji, canvas.width / 1.2, 200, 100, 100);
    
    if (emotion == 'happy'){
        c.fillStyle = 'rgba(255, 255, 100, 1)'
        c.fillRect(0, 350, canvas.width, canvas.height - 250)
    }
    if (emotion == 'sad'){
        c.fillStyle = 'rgba(148,0,211, 1)'
        c.fillRect(0, 350, canvas.width, canvas.height - 250)
    }
    if (emotion == 'angry'){
        c.fillStyle = 'rgba(255, 0, 0, 1)'
        c.fillRect(0, 350, canvas.width, canvas.height - 250)
    }
    if (emotion == 'scared'){
        c.fillStyle = 'rgba(0, 0, 0, 1)'
        c.fillRect(0, 350, canvas.width, canvas.height - 250)
    }
    if(emotion == 'disgusted'){
        c.fillStyle = '#A3C00F'
        c.fillRect(0, 350, canvas.width, canvas.height - 250)
    }
    // objects.forEach(object => {
    //  object.update();
    // });
}

init()
animate()
