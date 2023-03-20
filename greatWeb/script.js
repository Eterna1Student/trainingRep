let offset = 0;
const sliderLine = document.querySelector('.slider-line');



document.querySelector('.prev').addEventListener('click', function () {
    offset = offset - 685;
    if (offset < 0) {
        offset = 685;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.next').addEventListener('click', function(){
    offset = offset + 685;
    if (offset > 685) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

