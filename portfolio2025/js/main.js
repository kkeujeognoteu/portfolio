
$(function(){

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
    let upTxt = document.querySelectorAll('.upTxt')
    let aboutT1 = gsap.timeline({
        scrollTrigger:{
            trigger:'.aboutMe',
            scrub:0.5,
            pin:true,
            start:'top top',
            end: 'bottom top',
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
        }
    });

    //todo
    //circle
    gsap.timeline({
        scrollTrigger:{
            trigger : '.circleBox',
            start:'20%% 50%',
            end: '30% 0%',
            scrub:1,
        }
    })

    .fromTo('.circle',{width:'0',height:'0',duration:5, ease:'elastic',top:'1'},{width:'2500px',height:'2500px',duration:5, top:'10%'},0)

    /* my work */
    gsap.timeline({
        scrollTrigger:{
            trigger:'.portfolio',
            start:'0% 100%',
            end:'20% 20%',
            scrub:1
        }
    })

    .fromTo('.portfolio .portTitle .portA',{x:'-100%'},{x:'0%', ease:'none', duration:5},0)
    .fromTo('.portfolio .portTitle .portB',{x:'100%'},{x:'0%', ease:'none', duration:5},0)
 
    .fromTo('.portfolio .portC', {y:'-100%'},{x:'0%', ease:'none'},0)

    gsap.timeline({
        scrollTrigger:{
            trigger:'.portBox ul',
            start:'0% 100%',
            end:'0% 100%',
            scrub:1,
        }
    })

    //배경에 색상 변경
    .to('.contain',{backgroundColor:'#222222', color:'#000', ease:'none', duration:5},0)
    //title 글자 position:fixed 적용
    .to('.portfolio .portTitle',{position:'fixed', ease:'none', left:'0', top:'0', width: '100%', zIndex:'1'},0)
    .to('.portfolio .portC',{position:'fixed',left:'50%', bottom:'23%',zIndex:'2', ease:'none'},0)
    
    //list card 부드럽게 올라가기
    .fromTo('.portBox ul',{margin:'0 auto'},{margin:'100vh auto 0', position:'relative', zIndex:'1'},0)

    gsap.timeline({
        scrollTrigger:{
            trigger:'.portBox',
            start:'100% 50%',
            end:'90% 0%',
            scrub:1,
        }
    })
    .to('.contain',{backgroundColor:'#000', color:'#fff', ease:'none', duration:5},0)
    .to('.portfolio .portTitle .portA',{x:'-100%', ease:'none', duration:5},0)
    .to('.portfolio .portTitle .portB',{x:'100%', ease: 'none', duration:5},0)
    .to('.portfolio .portC',{x:'100%',position:'fixed', width: '100%', zIndex:'2', ease:'none'},0)

    
    /* main work js */
    const taskLists = document.querySelectorAll('.mainTaskList');

    taskLists.forEach((item) => {
        item.addEventListener('mouseenter', () => {
        taskLists.forEach((el) => el.classList.remove('active')); // 모두 비활성화
        item.classList.add('active'); // 현재 hovered 요소만 활성화
        });

        item.addEventListener('mouseleave', () => {
        // 마우스를 벗어나면 전체 비활성화하거나 초기화 원한다면 아래 사용
        // taskLists.forEach((el) => el.classList.remove('active'));
        });
        taskLists[0].classList.add('active'); // 첫 번째 항목 활성화
    });
})

