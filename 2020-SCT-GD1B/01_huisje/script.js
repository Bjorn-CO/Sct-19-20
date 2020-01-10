// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen

context.beginPath()
context.fillStyle = "green";
context.moveTo(2000,100);
context.lineTo(2000,600);
context.lineTo(0,600);
context.lineTo(0,100);
context.closePath();
context.stroke();
context.fill();

context.beginPath()
context.lineStyle = "white";
context.fillStyle = "white";
context.moveTo(200,500);
context.lineTo(600,600);
context.lineTo(600,400);
context.lineTo(200,300);
context.closePath();
context.stroke();
context.fill();

context.beginPath()
context.lineStyle = "white";
context.fillStyle = "white";
context.moveTo(600,600);
context.lineTo(800,500);
context.lineTo(800,300);
context.lineTo(700,200);
context.lineTo(600,400);
context.closePath();
context.stroke();
context.fill();

context.beginPath()
context.lineStyle = "white";
context.fillStyle = "white";
context.moveTo(200,300);
context.lineTo(600,400);
context.closePath();
context.stroke();

context.beginPath()
context.fillStyle = "black";
context.moveTo(2000,600);
context.lineTo(2000,800);
context.lineTo(0,800);
context.lineTo(0,600);
context.closePath();
context.stroke();
context.fill();

context.beginPath()
context.fillStyle = "red";
context.lineStyle = "red";
context.moveTo(600,400);
context.lineTo(700,200);
context.lineTo(300,100);
context.lineTo(200,300);
context.closePath();
context.stroke();
context.fill();

context.beginPath()
context.fillStyle = "blue";
context.lineStyle = "blue";
context.moveTo(2000,00);
context.lineTo(2000,100);
context.lineTo(0,100);
context.lineTo(0,00);
context.closePath();
context.stroke();
context.fill();


