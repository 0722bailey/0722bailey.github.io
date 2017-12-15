// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth - 5
canvas.height = window.innerHeight - 5

const alerts = [
    "La produit fini est une balance de tout les aspects mentale. Dans cette balance, je suis un personne parfait dans mes rêves qui est très intelligent et qui change le monde artistique et mentalistique. Je visionner un CEO d'un grand companie electronique, ou un artiste qui jouer devant des milles de personnes.",
    
    "Pour avoir un aspect mentale balancé dans mon vie personnelle, je doit avoir plus des connaissances. Si j'utilise mon cerveaux beaucoup et si j'apprend plus des choses, ça donne mon cerveau des choses a faire, et ça prolongé mon mémoir pour longetemps.",
    
    "Mon aspet mentale doit être organizer pour être balancé, alors je doit pratique l'organization. Le cerveau est très complexe, et la vie est très complexe, alors si j'organize mes pensées et mon vie, je peux balancé un peu plus. ",
    
    "Pour être content dans ma vie mental, je dois suiver mes passions. Je suiver mes passions maintenant un petit peu, mais avec les autres distractions dans la vie c'est difficile de faire tout mes passions. Si je peux prendre la balance parfait de ce que je dois faire et ce que je veux faire, je peux avoir de balance dans ma vie mentale",
    
    "Plus des Connaissances: Connaisser par les autres. ",
    
    "Plus des Connaissances: Résoudre des problemes! Je peux commencer petit et finisser grand. Il y a beaucoup des problemes qui je doit utiliser mon cerveau pour résoudre. Si je résoudre des problèmes petit, je peux améliorer cette difficulté, et résoudre des problèmes plus et plus grand!",
    
    "Plus des Connaissances: Faire des choses très nouveaux",
    "Meilleur Organization: Organizer mon schédule de vie.  ",
    "Meilleur Organization: Fait plus des choses que je doit fait au futur maintenant",
    "Meilleur Organization: Aide avec l'organization des autres. ",
    "Suiver Mes Passions: fait des passions artistique",
    "Suiver Mes Passions: fait des passions mentalistique",
    "Suiver Mes Passions: devenir un expert dans un seul passion",
    "Plus des Connaissances: ",
    "Plus des Connaissances: ",
    "Plus des Connaissances: ",
    "Plus des Connaissances: ",
    "Plus des Connaissances: ",
    "Plus des Connaissances: ",
    "Plus des Connaissances: ",
    "Plus des Connaissances: ",
    "Plus des Connaissances: ",
    "Meilleur Organization: ",
    "Meilleur Organization: ",
    "Meilleur Organization: ",
    "Meilleur Organization: ",
    "Meilleur Organization: ",
    "Meilleur Organization: ",
    "Meilleur Organization: ",
    "Meilleur Organization: ",
    "Meilleur Organization: ",
    "Suiver Mes Passions: ",
    "Suiver Mes Passions: ",
    "Suiver Mes Passions: ",
    "Suiver Mes Passions: ",
    "Suiver Mes Passions: ",
    "Suiver Mes Passions: ",
    "Suiver Mes Passions: ",
    "Suiver Mes Passions: ",
    "Suiver Mes Passions: ",
];


// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

var quote = new Image();
quote.src = 'http://img.picturequotes.com/2/44/43701/half-the-game-is-mental-the-other-half-is-being-mental-quote-1.jpg'

var quote2 = new Image();
quote2.src = 'http://quotespics.net/wp-content/uploads/2016/07/Albert-Einstein-amzing-intelligence-quote.png'

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('click', event => {
    for (var i = 0; i < 40; i++){
        if (mouse.x > rectangles[i].x - rectangles[i].size / 2 && mouse.x < rectangles[i].x + rectangles[i].size / 2 && mouse.y > rectangles[i].y - rectangles[i].size / 4 && mouse.y < rectangles[i].y + rectangles[i].size / 4){
            window.alert(alerts[i]);
            }
    }
});

addEventListener('resize', () => {
    canvas.width = window.innerWidth - 5
    canvas.height = window.innerHeight - 5

    init()
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
}

// Rectangle function
var rectangles = [];
function Rectangle(x, y, size, i){
    c.fillStyle='white'
    c.beginPath();
    c.moveTo(x - size/2, y + size/4);
    c.lineTo(x + size/2, y + size/4);
    c.lineTo(x + size/2, y - size/4);
    c.lineTo(x - size/2, y - size/4);
    c.closePath();
    c.stroke();
    c.fill();
    rectangles[i] = {x: x, y: y, size: size}
    c.fillStyle='black'
    if(i > 12){c.font='10px Monospace'}else{c.font='15px Monospace'}
    if (i > 3){
        if (i % 3 == 0){c.fillText(3, x, y);} 
        else{c.fillText(i%3, x, y)}
    }
    
}


// Implementation
var objects
function init() {
    objects = []

    for (var i = 0; i < 2; i++) {
        objects.push(new Object(canvas.width / 2, canvas.height / 2, 30, 'blue'));
    }
}
var increments = 0;
// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    for(var i = 13; i < 40; i++){
        c.beginPath();
        c.moveTo(canvas.width / 2 - 324 + (81 * (Math.ceil(i / 3) - 5)), 550, 64);
        c.lineTo(canvas.width / 2 -390  + (30 * (i - 13)), 625, 25);
        c.stroke();
        Rectangle(canvas.width / 2 -390  + (30 * (i - 13)), 625, 25, i);
    }
    for(var i = 4; i < 13; i++){
        c.beginPath();
        c.moveTo(canvas.width / 2 -243 + (243 * (Math.ceil(i / 3)-2)), 450)
        c.lineTo(canvas.width / 2 - 324 + (81 * (i - 4)), 550);
        c.stroke();
        Rectangle(canvas.width / 2 - 324 + (81 * (i - 4)), 550, 64, i);
    }
    for(var i = 1; i < 4; i++){
        c.beginPath();
        c.moveTo(canvas.width / 2, 300);
        c.lineTo(canvas.width / 2 - 243 + 243* (i - 1), 450);
        c.stroke();
        Rectangle(canvas.width / 2 -243 + (243* (i - 1)), 450, 128, i);
    }
    
    Rectangle(canvas.width / 2, 300, 256, 0);
    if (canvas.width > 1300){
        c.drawImage(quote, canvas.width - 360, 200, 310, 400)
        c.drawImage(quote2, 40, 200, 310, 400) 
    }    
}

init()
animate()
console.log(rectangles)
