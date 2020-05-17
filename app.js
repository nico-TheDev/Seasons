const pages = document.querySelectorAll('.page');


pages.forEach(page=>{
    page.addEventListener('click',function(){
        console.log('something');
        page.classList.toggle('openPage');
    });
});

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`;
});

let sliderCount = 0;

next.addEventListener('click',()=>{
    sliderCount++;
    moveSlide();
});
prev.addEventListener('click',()=>{
    sliderCount--;
    moveSlide();
});

function moveSlide(){
    console.log(sliderCount);

    if (sliderCount === slides.length ){
        sliderCount = 0;
    
    }
    else if(sliderCount < 0){
        sliderCount = slides.length - 1;
    }

    slides.forEach(slide=>{
        slide.style.transform = `translateX(-${sliderCount * 100}%)`
    })
}

// CONTENT BUTTONS

const summerImg = document.querySelectorAll('.summer-photo');
const autumnImg = document.querySelectorAll('.autumn-photo');
const winterImg = document.querySelectorAll('.winter-photo');
const springImg = document.querySelectorAll('.spring-photo');


let count = 0;
let time = 5000;


function changeImg(imgArray){
        count++;
        if (count > imgArray.length - 1){
            count = 0;
        }

        if (count === 0){
            imgArray[0].classList.add('showImg');
            imgArray[1].classList.remove('showImg');
            imgArray[2].classList.remove('showImg');
        }
        else if (count === 1){
            imgArray[1].classList.add('showImg');
            imgArray[0].classList.remove('showImg');
            imgArray[2].classList.remove('showImg');
        }
        else if (count === 2){
            imgArray[2].classList.add('showImg');
            imgArray[1].classList.remove('showImg');
            imgArray[0].classList.remove('showImg');
        }

}

setInterval(function(){changeImg(summerImg)},time);
setInterval(function(){changeImg(autumnImg)},time);