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

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

var img = new Image();
img.src = '/medicinewheel/stickmen/meditate.png'
var frame = 0;
var frameStart = performance.now();

var quote = new Image();
quote.src = 'http://quotesnew.com/wp-content/uploads/2017/05/25-inspirational-spiritual-quotes-that-will-brighten-your-life-839517.jpg'

var quote2 = new Image();
quote2.src = 'https://i.pinimg.com/736x/9b/87/a0/9b87a0a8c6de93af68c2abf959e5c59e--spiritual-meditation-meditation-quotes.jpg'

var alerts = [
    "chakra universel: la balance de mon spiritualité est très important. Je peux connecter plus avec mon spiritualité par méditer, prier, ou si je n'ai pas de temp seulement apprecier tout que la vie offert. ",
    "chakra 3e oeil: chakra gorge est de parler, mais chakra de 3e oeil est d'écouter. C'est aussi de voie <<entre des lignes>> et d'utiliser la 3e oeil de voie comment la monde est vraiment. Je dois écouter les autres plus et penser dans un plus grand perspectif. Juger les personnes pour ce qu'il est, au lieu d'un stéreotype. Si je seulement documenter cela, ça peut aider beaucoup a voie le monde plus positivement. ",
    "chakra gorge: Je dois parler plus mes pensées. Je suis un introverti. Si je peux concentrer à parler mes petit pensées (à raison), ou seulement parler avec moi-même, je peux balancer cette chakra et finalement parler avec milles de personnes comme un chef. Un très bon citation qu'un homme m'a dit est: <<essayer d'être réjeter un foi chaque jour. Tu vas voir comment difficile cela est.>>",
    "chakra coeur: Je dois aimer les choses avec mon coeur. Maintenant, je n'ai pas très soins au autre. Pour balancer cela, je dois aider moi-même un peu, je dois aimer moi-même. Après je peux faire cela, je dois aimer plus les personnes proche a moi, comme ma famille. Fais des petits choses, comme aider avec la maison et diser à ils que j'aime beaucoup. Un coeur parfait doit pratiquer, mais après la pratique, je veux aimer le monde. ",
    "chakra plexus solaire: cette chakra controle le petit voie, un instinct. Pour aider avec ce chakra, je dois apprendre ce que cette voie dit et juger si c'est vrai ou si c'est faux. Pour faire cela, je besoin de parler avec les personnes qui sont très proche à moi de cette instinct et avoir de guidance. ",
    'chakra sacré: ',
    "chakra racine: je doit créer un fondation pour ma vie. Gradulement, je dois créer des racines de mon spiritualité. Si je document se que je pense et si j'accepte plus des réligions et ses idées, ça peux donne-moi un très bon base pour mon vie spirituel"
]

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

addEventListener('click', () => {
    if(mouse.x > canvas.width / 2 - 8 && mouse.x < canvas.width / 2 + 8 && mouse.y > 300 - 8 && mouse.y < 300 + 8){
        window.alert(alerts[0])
    }
        
    for(let i = 0; i < 48; i++){
        if(mouse.x > chakra_array[i].x - 8 && mouse.x < chakra_array[i].x + 8 && mouse.y > chakra_array[i].y - 8 && mouse.y < chakra_array[i].y + 8){
            window.alert(alerts[Math.ceil(i / 8)])
        }
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
var chakra_array = [];
function Chakra(x, y, radius, color, i) {
    this.x = canvas.width / 2
    this.y = 300
    this.radius = radius
    this.color = color
    this.radians = i * Math.PI / 4
    this.newx = 0;
    this.newy = 0;
	this.update = function() {
        if(y==0){this.radians += 1 / x}else{this.radians -= 1 / x}
        this.newx = this.x + Math.cos(this.radians) * x
        this.newy = this.y + Math.sin(this.radians) * x
		this.draw()
        chakra_array[i] = {x: this.newx, y: this.newy}
	}

	this.draw = function() {
        c.lineWidth=1
		c.beginPath()
		c.arc(this.newx, this.newy, this.radius, 0, Math.PI * 2, false)
		c.fillStyle = this.color
		c.fill()
        c.stroke()
		c.closePath()
	}
}



// Implementation
let chakras
function init() {
    chakras = []
    for(let i = 0; i < 8; i++){
    chakras.push(new Chakra(30, 0, 8, 'purple', i))    
    }
    for(let i = 8; i < 16; i++){
    chakras.push(new Chakra(50, 1, 8, 'blue', i))    
    }
    for(let i = 16; i < 24; i++){
    chakras.push(new Chakra(80, 0, 8, 'green', i))    
    }
    for(let i = 24; i < 32; i++){
    chakras.push(new Chakra(100, 1, 8, 'yellow', i))    
    }
    for(let i = 32; i < 40; i++){
    chakras.push(new Chakra(120, 0, 8, 'orange', i))    
    }
    for(let i = 40; i < 48; i++){
    chakras.push(new Chakra(140, 1, 8, 'red', i))    
    }
}

var increment = 0;
var y = 0;
// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    // stickfigure test
    increment += 0.05
    y = Math.sin(increment) * 30 + 540
    c.drawImage(img, canvas.width / 2 - 75, y , 150, 150)
    
    // ground
    c.strokeStyle='black'
    c.lineWidth=10
    c.beginPath();
    c.moveTo(0, 750);
    c.lineTo(canvas.width, 750);
    c.stroke();
    
    c.fillStyle = 'white'
    c.lineWidth=1
    c.beginPath();
    c.arc(canvas.width / 2 , 300, 16, 0, Math.PI * 2, false);
    c.fill();
    c.stroke();
    chakras.forEach(chakra => {
        chakra.update();
    })
    // objects.forEach(object => {
    //  object.update();
    // });
    if (canvas.width > 1300){
    c.drawImage(quote, canvas.width - 380, 200, 350, 350)
    c.drawImage(quote2, 40, 200, 350, 350) 
    }
}

init()
animate()
console.log(chakra_array)