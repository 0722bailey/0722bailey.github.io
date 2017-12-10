var canvas = document.querySelector('canvas')
    ;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// ordered by y co-ordinates (x, Y, width, height)

c.fillStyle = 'red';
c.fillRect(50, 20, 50, 10);
c.fillRect(40, 30, 90, 10);
c.fillRect(60, 90, 10, 20);
c.fillRect(90, 90, 10, 20);
c.fillRect(60, 110, 40, 10);
c.fillRect(50, 120, 10, 10);
c.fillRect(70, 120, 20, 10);
c.fillRect(100, 120, 10, 10);
c.fillRect(50, 130, 60, 10);
c.fillRect(40, 140, 80, 10);
c.fillRect(40, 150, 30, 10);
c.fillRect(90, 150, 30, 10);

c.fillStyle = 'green'
c.fillRect(40, 40, 30, 10);
c.fillRect(90, 40, 10, 20);
c.fillRect(50, 50, 10, 10);
c.fillRect(30, 50, 10, 20);
c.fillRect(50, 60, 20, 10);
c.fillRect(100, 60, 10, 10);
c.fillRect(30, 70, 20, 10);
c.fillRect(90, 70, 40, 10);
c.fillRect(40, 90, 20, 10);
c.fillRect(70, 90, 20, 20);
c.fillRect(30, 100, 30, 10);
c.fillRect(100, 100, 30, 10)
c.fillRect(20, 110, 40, 10);
c.fillRect(100, 110, 40, 10);
c.fillRect(40, 120, 10, 10);
c.fillRect(110, 120, 10, 10);
c.fillRect(30, 160, 30, 10);
c.fillRect(100, 160, 30, 10);
c.fillRect(20, 170, 40, 10);
c.fillRect(100, 170, 40, 10);

c.fillStyle = 'yellow'
c.fillRect(70, 40, 20, 10);
c.fillRect(100, 40, 10, 10);
c.fillRect(40, 50, 10, 20);
c.fillRect(60, 50, 30, 10);
c.fillRect(100, 50, 30, 10);
c.fillRect(70, 60, 30, 10);
c.fillRect(110, 60, 30, 10);
c.fillRect(50, 70, 40, 10);
c.fillRect(50, 80, 70, 10);
c.fillRect(20, 120, 20, 10);
c.fillRect(60, 120, 10, 10);
c.fillRect(90, 120, 10, 10);
c.fillRect(120, 120, 20, 10);
c.fillRect(20, 130, 30, 10);
c.fillRect(110, 130, 30, 10);
c.fillRect(20, 140, 20, 10);
c.fillRect(120, 140, 20, 10);
