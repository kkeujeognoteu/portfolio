
//02.scrolla.js
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false,
    })
})

//splitting
$(function(){Splitting();})


//02. header  영역 스크롤 방향 이벤트
$(function(){
    var prevScrollTop = 0;
    document.addEventListener("scroll", function(){
        var nowScrollTop = $(window).scrollTop();

        if(nowScrollTop > prevScrollTop){
            $('.header').addClass('active')
        }else{
            $('.header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })

    // 서브페이지에 스크롤시 이벤트가 실행되는 것을 막는다
    if(!$('.subPg').length){
        $(window).on('scroll', function(){
            $('.navBox').removeClass('active')
        })

    }
});

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


