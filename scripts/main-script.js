// Slider 
var left = document.getElementById("left");
var right = document.getElementById("right");

left.addEventListener('click', goLeft);
right.addEventListener('click', goRight);

var currentSlide = 0;

function goRight(){
    switch(currentSlide){
        case 0:
            document.getElementsByClassName('slide')[0].style.opacity = 0;
            document.getElementsByClassName('slide')[1].style.opacity = 1;
            currentSlide = 1;
        break;
        case 1:
            document.getElementsByClassName('slide')[1].style.opacity = 0;
            document.getElementsByClassName('slide')[2].style.opacity = 1;
            currentSlide = 2;
        break;
        case 2:
            document.getElementsByClassName('slide')[2].style.opacity = 0;
            document.getElementsByClassName('slide')[3].style.opacity = 1;
            currentSlide = 3;
        break;
        case 3:
            document.getElementsByClassName('slide')[3].style.opacity = 0;
            document.getElementsByClassName('slide')[0].style.opacity = 1;
            currentSlide = 0;
        break;
    }
}setInterval(goRight, 6000);

function goLeft(){
    switch (currentSlide) {
        case 0:
            document.getElementsByClassName('slide')[0].style.opacity = 0;
            document.getElementsByClassName('slide')[3].style.opacity = 1;
            currentSlide = 3;
            break;
        case 3:
            document.getElementsByClassName('slide')[3].style.opacity = 0;
            document.getElementsByClassName('slide')[2].style.opacity = 1;
            currentSlide = 2;
            break;
        case 2:
            document.getElementsByClassName('slide')[2].style.opacity = 0;
            document.getElementsByClassName('slide')[1].style.opacity = 1;
            currentSlide = 1;
            break;
        case 1:
            document.getElementsByClassName('slide')[1].style.opacity = 0;
            document.getElementsByClassName('slide')[0].style.opacity = 1;
            currentSlide = 0;
            break;
    }
}