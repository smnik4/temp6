const images = document.querySelectorAll('.img-conteiner .image img');

images.forEach((image) => {
    image.onclick = function(){
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = image.getAttribute('src');
        document.querySelector('body').style.overflow = 'hidden';
    };
});
document.querySelector('.popup span').onclick = function(){
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.popup img').src = '';
    document.querySelector('body').style.overflow = 'auto';
};

const sliderline = document.querySelector('.silder__line');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let offset = 0;
let offsetStep = 350;
let maxoffset = images.length * offsetStep - offsetStep;

const goNext = function (){
    offset += offsetStep;
    if(offset > maxoffset){
        offset = 0;
    }
    sliderline.style.right = offset + "px";
};

const goprev = function (){
    offset -= offsetStep;
    if(offset < 0){
        offset = maxoffset;
    }
    sliderline.style.right = offset + "px";
};

nextBtn.onclick = goNext;
prevBtn.onclick = goprev;

let timers = setInterval(goNext,5000);