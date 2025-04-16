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
});


let header = document.querySelector('.header');
let hambNav = document.querySelector('.hambNav');
hambNav.addEventListener('click', function(){
    let navBox = document.querySelector('.navBox')
    if(header.className.includes('fixed')){
        header.classList.remove('fixed')
        e.preventDefault();
        //hambNav.classList.remove('on')
    }else{
        header.classList.add('fixed')
        //hambNav.classList.add('on')
    }
})

//02.scrolla.js
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false,
    })
})

//splitting
$(function(){Splitting();})

// 마우스 따라다니는 효과
/*let cursor = document.querySelector('.cursorCircle');
document.addEventListener('mousemove', function(e){
    let mouseX =  e.pageX + 0;
    let mouseY =  e.pageY + 0;

    //let cursor = document.querySelector('.cursorCircle');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
})
*/
// gsap
gsap.registerPlugin(ScrollTrigger);

/* character */
const frameCount = 15;
        offsetValue = 100;
        

gsap.to('.stage', {
    backgroundPosition : (- offsetValue * frameCount * 1.0) + "px center",

    ease: 'steps(' + frameCount + ')',
    scrollTrigger: {
        trigger : '.character',
        start : 'top top',
        end :'+=' + (frameCount * offsetValue),
        pin : true,
        scrub : true,
    }
})

/* about me */
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

function handleScroll(){
    var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    fix(scrollPos)
}

function fix(scrollPos){
    var leftH2 = document.querySelector('.about_L h2');

    if(scrollPos > 200) {
        leftH2.classList.add('on')
    } else {
        leftH2.classList.remove('on')
    }
    if(scrollPos > 3600){
        leftH2.classList.remove('on')
    }
}


let upTxt = document.querySelectorAll('.upTxt')
let aboutT1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.aboutMe',
        pin:true,
        scrub:1,
        start:'top top',
        end: '+=100%',
        //markers:true,
    }
})

gsap.fromTo(upTxt, {
    'background-size':'0% 100%'
},{
    'background-size':'100% 100%',
    scrollTrigger:{
        trigger:'.about_R',
        pinnedContainer:'.about_R',
        start: '60% 60%',
        //markers:true,
        scrub:1,
    }
})

aboutT1.from(upTxt,{'y':'0','duration':'8','ease':'none','stagger':'1'})
aboutT1.to(upTxt,{'y':'0'});

/* works */
let workList = gsap.utils.toArray('.workWrap .workList'); //배열
let scrollTween = gsap.to(workList,{
    xPercent : -100 * (workList.length -4), //리스트의 길이를 기반으로 마지막 요소까지 이동해야 할 거리를 백분율 단위로 계산하는 수식
    ease:'none',
    scrollTrigger: {
        trigger : '.works',
        pin:true,
        scrub: true,
        start:'center center',
        end:'200%',
        //markers: true
    }
});

$(function(){
    
    gsap.timeline({
        scrollTrigger:{
            trigger : '.circleBox',
            start:'20%% 50%',
            end: '30% 0%',
            scrub:1,
        }
    })
    .fromTo('.circle',{width:'0',height:'0',duration:5, ease:'elastic',top:'1'},{width:'2500px',height:'2500px',duration:5, top:'10%'},0)


    gsap.timeline({
        scrollTrigger:{
            trigger:'.portfolio',
            start:'0% 100%',
            end:'0% 20%',
            scrub:1,
           
        }
    })
    .fromTo('.portfolio .portTitle .portA',{x:'-100%'},{x:'0%', ease:'none', duration:5},0)
    .fromTo('.portfolio .portTitle .portB',{x:'100%'},{x:'0%', ease:'none', duration:5},0)
    .fromTo('.portfolio .portC',{x:'100%'},{x:'0%', ease:'none', duration:5},0)

    gsap.timeline({
        scrollTrigger:{
            trigger:'.portBox',
            start:'0% 100%',
            end:'0% 100%',
            scrub:1,
            pin:true
        }
    })

    .to('.contain',{backgroundColor:'#123458', color:'#000', ease:'none', duration:5},0)
    .to('.portfolio .portTitle',{position:'fixed', ease:'none', left:'0', top:'0', width: '100%', height:'100vh', duration:5},0)
 
    .fromTo('.portBox',{margin:'0 auto'},{margin:'100vh auto 0', position:'relative', zIndex:'1', duration:1},0)

    gsap.timeline({
        scrollTrigger:{
            trigger:'.portBox',
            start:'100% 50%',
            end:'100% 0%',
            scrub:1,
        }
    })
    .to('.portfolio .portTitle .portA',{x:'-100%', ease:'none', duration:5},0)
    .to('.portfolio .portTitle .portB',{x:'100%', ease: 'none', duration:5},0)
    .to('.portfolio .portC',{x:'100%', ease: 'none', duration:5},0)
})

