// JavaScript source code
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
// Title
c.font = "50px Comic Sans MS";
c.fillStyle = "blue";
c.fillText("Peacefull Place",550,350);
//Sun
c.beginPath();
c.arc(120, 150, 90, 0, Math.PI * 2, false);
c.fillStyle = " #f1c40f ";
c.fill();
c.closePath();

//cloud
for (var x = 0; x < canvas.width; x = x + 450) {
    c.beginPath();
    c.ellipse(450 + x, 140, 95, 50, Math.PI * 2, 0, 2 * Math.PI, true);
    c.ellipse(450 + x, 140, 65, 60, Math.PI * 2, 0, 2 * Math.PI, true);
    c.fillStyle = " #f4f6f7 ";
    c.fill();
    c.closePath();

}

// Ground color
c.fillStyle = " #82e0aa";
c.fillRect(0, 700, window.innerWidth, innerHeight);

// Mountain
c.beginPath();
c.moveTo(1800, 700);
c.lineTo(1600, 300);
c.lineTo(1400, 700);
c.strokeStyle = " #bfc9ca ";
c.fillStyle = "#bfc9ca";
c.fill();
c.stroke();
// ice cap
c.beginPath();
c.moveTo(1626, 350);
c.lineTo(1600, 375);
c.lineTo(1575, 350);
c.lineTo(1600, 300);
c.strokeStyle = "#f4f6f7";
c.stroke();
c.fillStyle = "#f4f6f7";
c.fill();

// 2 Mountain 
c.beginPath();
c.moveTo(1450, 595);
c.lineTo(1350, 455);
c.lineTo(1210, 700);
c.lineTo(1450, 700);
c.strokeStyle = "#bfc9ca";
c.stroke();
c.fillStyle = " #bfc9ca ";
c.fill();
c.closePath();
// ice cap #2
c.beginPath();
c.moveTo(1350, 455);
c.lineTo(1383, 500);
c.lineTo(1360, 524);
c.lineTo(1320, 504);
c.strokeStyle = "#f4f6f7";
c.stroke();
c.fillStyle = " #f4f6f7";
c.fill();
c.closePath();
//grass

for (var i = 0; i <= window.innerWidth; i = i + 20) {
    var x = i + 20

    c.fillStyle = " #196f3d "
    c.fillRect(x, 690, 2, 20);
    c.fillRect(x, 750, 2, 20);
    c.fillRect(x, 810, 2, 20);
    c.fillRect(x, 870, 2, 20);
}

// House 
c.fillStyle = "#935116 ";
c.fillRect(20, 640, 550, 240);

//roof
c.beginPath()
c.moveTo(14, 660);
c.lineTo(50, 450);
c.lineTo(540, 450);
c.lineTo(575, 660);
c.stroke();
c.fillStyle = "#f05405 ";
c.fill();
c.closePath();

//windows
c.beginPath();
c.moveTo(70, 700);
c.lineTo(140, 700);
c.lineTo(140, 750);
c.lineTo(70, 750);
c.fillStyle = " #000000 ";
c.fill();
c.closePath();

// windows 2 
c.beginPath();
c.moveTo(180, 700);
c.lineTo(250, 700);
c.lineTo(250, 750);
c.lineTo(180, 750);
c.fillStyle = " #000000 ";
c.fill();
c.closePath();

// window 3
c.beginPath();
c.moveTo(290, 700);
c.lineTo(360, 700);
c.lineTo(360, 750);
c.lineTo(290, 750);
c.fillStyle = " #000000 ";
c.fill();
c.closePath();

//window 4
c.beginPath();
c.moveTo(400, 700);
c.lineTo(470, 700);
c.lineTo(470, 750);
c.lineTo(400, 750);
c.fillStyle = " #000000 ";
c.fill();
c.closePath();

// tree bark
c.fillStyle = "  #633003 "
c.fillRect(900, 660, 40, 90);
// tree leef
c.beginPath();
c.arc(919, 630, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill()
c.beginPath();
c.arc(895, 624, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill();
c.beginPath();
c.arc(940, 624, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill();
c.beginPath();
c.arc(920, 600, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill();



// tree bark
c.fillStyle = "  #633003 "
c.fillRect(1150, 670, 40, 90);
// tree leef
c.beginPath();
c.arc(1170, 640, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill()
c.beginPath();
c.arc(1150, 634, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill();
c.beginPath();
c.arc(1190, 634, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill();
c.beginPath();
c.arc(1170, 610, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill();


// tree bark
c.fillStyle = "  #633003 "
c.fillRect(1600, 770, 40, 90);
// tree leef
c.beginPath();
c.arc(1620, 745, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill()
c.beginPath();
c.arc(1590, 734, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill();
c.beginPath();
c.arc(1645, 734, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill();
c.beginPath();
c.arc(1620, 705, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill();


// tree bark
c.fillStyle = "  #633003 "
c.fillRect(1350, 840, 40, 90);
// tree leef
c.beginPath();
c.arc(1370, 815, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill()
c.beginPath();
c.arc(1350, 810, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill();
c.beginPath();
c.arc(1385, 810, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill();
c.beginPath();
c.arc(1370, 790, 40, 0, Math.PI * 2, false);
c.fillStyle = "  #145a32 ";
c.fill();

//full moon
c.beginPath();
c.arc(1455, 420, 40, 0, Math.PI * 2, false);
c.fillStyle = "rgba(180,180,180,0.4)";
c.fill();
