let punkti = 0;

let red = 0;
let green = 0;
let blue = 0;

let diameter = 200;
let clickerButton = document.getElementById('button')
let scoreDisplay = document.getElementById('score')


function OnButtonClick(){
    punkti += 1;
    clickerButton.innerHTML = punkti;
    
    red = getRandomInt(256);
    green = getRandomInt(256);
    blue = getRandomInt(256);

    let rgbCode = 'rgb(' + red.toString() + ',' + green.toString() + ',' + blue.toString() + ')';
    clickerButton.style.backgroundColor = rgbCode;

    diameter -= 5;

    clickerButton.style.width = diameter.toString() + 'px';
    clickerButton.style.height = diameter.toString() + 'px';

    if (diameter <= 5 ){
        scoreDisplay.innerHTML = 'You Won!!'
}



}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}


