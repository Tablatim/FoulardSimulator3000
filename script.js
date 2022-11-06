colors = ["#FFCC00", "#ff0000", "#0000FF", "#000000"]
backgroundColor = "dimgrey"

function draw(d="") {
    let color0 = document.querySelector("#color0");
    color0.value = colors[0]
    color0.style.backgroundColor = color0.value;
    color0.addEventListener("input", updateAll, false);
    let color1 = document.querySelector("#color1");
    color1.value = colors[1]
    color1.style.backgroundColor = color1.value;
    color1.addEventListener("input", updateAll, false);
    let color2 = document.querySelector("#color2");
    color2.value = colors[2]
    color2.style.backgroundColor = color2.value;
    color2.addEventListener("input", updateAll, false);
    let color3 = document.querySelector("#color3");
    color3.value = colors[3]
    color3.style.backgroundColor = color3.value;
    color3.addEventListener("input", updateAll, false);


    // Get checkbox Value
    let bordure = document.querySelector("#bordure");
    bordure = bordure.checked
    let lisere = document.querySelector("#lisere");
    lisere = lisere.checked
    let lisere2 = document.querySelector("#lisere2");
    lisere2 = lisere2.checked

    let canvas = document.querySelector("#canvas");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    if(d==""){
        context.fillStyle = "transparent";
    } else {
        context.fillStyle = "white";
    }
        
    context.fillRect(0, 0, canvas.width, canvas.height);

    const factor = 2

    let height = 175*factor * Math.cos(Math.PI / 6);

    // FOND
    H = height +20*factor
    context.beginPath();
    context.moveTo(50*factor, H);
    context.lineTo(350*factor, H);
    context.lineTo(200*factor, H - height);
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = '#666666';
    context.stroke();
    context.fillStyle = colors[0];
    context.fill();

    //BORDURE
    if(bordure) {
        diff = 0
        context.beginPath();
        context.moveTo(50*factor  + diff -10, H +10);
        context.lineTo(200*factor , H - height + diff);
        context.lineTo(350*factor - diff +10, H +10);
        
        context.lineWidth = 10;
        context.strokeStyle = colors[1];
        context.stroke();
        color1.style.display = ""
    } else {
        color1.style.display = "none"
    }

    //LISERE
    if(lisere) {
        diff = 15
        context.beginPath();
        context.moveTo(50*factor  + diff -10, H +10);
        context.lineTo(200*factor, H - height + diff);
        context.lineTo(350*factor - diff +10, H +10);
        
        context.lineWidth = 5;
        context.strokeStyle = colors[2];
        context.stroke();
        color2.style.display = ""
    } else {
        color2.style.display = "none"
    }

    //LISERE 2
    if(lisere2) {
        diff = 28
        context.beginPath();
        context.moveTo(50*factor  + diff -10, H +10);
        context.lineTo(200*factor, H - height + diff);
        context.lineTo(350*factor - diff +10, H +10);
        
        context.lineWidth = 5;
        context.strokeStyle = colors[3];
        context.stroke();
        color3.style.display = ""
    } else {
        color3.style.display = "none"
    }

    //Rectangle en bas
    
    context.beginPath();
        context.moveTo(0*factor, H+2);
        context.lineTo(400*factor, H+2);
        context.lineTo(400*factor, H+40);
        context.lineTo(0*factor, H+40);
        context.closePath();
    if(d=="") {
        context.fillStyle = backgroundColor;
        context.fill();
        context.lineWidth = 4;
        context.strokeStyle = backgroundColor;
    } else {
        context.fillStyle = "white";
        context.fill();
        context.lineWidth = 4;
        context.strokeStyle = "white";
    }
    context.stroke();

    
    // document.write('<img src="'+img+'"/>');
}

function updateAll(event) {
    let color0 = document.querySelector("#color0");
    colors[0] = color0.value;
    color0.style.backgroundColor = color0.value;
    let color1 = document.querySelector("#color1");
    colors[1] = color1.value;
    color1.style.backgroundColor = color1.value;
    let color2 = document.querySelector("#color2");
    colors[2] = color2.value;
    color2.style.backgroundColor = color2.value;
    let color3 = document.querySelector("#color3");
    colors[3] = color3.value;
    color3.style.backgroundColor = color3.value;
    draw()
}

function openImage() {
    let canvas = document.querySelector("#canvas");
    let context = canvas.getContext("2d");
    draw(3)
    var img    = canvas.toDataURL("image/png");
    var win = window.open("");
    win.document.write('<title>Image Export</title>');
    win.document.write('<iframe src="' + img  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen> </iframe>');
    
    draw()
}
