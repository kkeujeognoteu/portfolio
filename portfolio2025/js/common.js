
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

let lastScrollTop = 0;
let header = document.querySelector('header');
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

    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // 아래로 스크롤 → 헤더 숨기기
        header.style.top = "-100px";
    } else {
        // 위로 스크롤 → 헤더 보이기
        header.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // for Safari
})



window.addEventListener("scroll", function () {
    
});