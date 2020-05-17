const pages = document.querySelectorAll('.page');


pages.forEach(page=>{
    page.addEventListener('click',function(){
        console.log('something');
        page.classList.toggle('openPage');
    });
});