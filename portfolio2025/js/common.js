
//02.scrolla.js
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false,
    })
})

//splitting
$(function(){Splitting();})


/* menu */


let header = document.querySelector('.header');
let hambNav = document.querySelector('.hambNav');
let body = document.body;
hambNav.addEventListener('click', function(e){
    e.preventDefault();
    const isOpen = header.classList.contains('fixed');
    if(isOpen){
        header.classList.remove('fixed');
        body.classList.remove('no-scroll');
    }else{
        header.classList.add('fixed');
        body.classList.add('no-scroll');
    }
})

let preScroll = 0;
window.addEventListener('scroll', function(){
    let headScrollY = window.scrollY;
    if(preScroll < headScrollY){
        header.classList.remove('scroll')
    }else{
        header.classList.add('scroll')
    }
    preScroll = headScrollY
})