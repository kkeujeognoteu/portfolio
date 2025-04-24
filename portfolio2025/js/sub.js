

$(document).ready(function () {
    //서브페이지 메인 타이틀
    $('.subTopSlide').addClass('active');
        initGsapScroll();
    });
  
    var titScroll = null;
    
    function resetStyles() {
        $(".sub_port .subTopSlide .subTitle").css({
        top: '',
        left: '',
        transform: '',
        fontSize: ''
        });
    }
    
    function initGsapScroll() {
        if (window.innerWidth >= window.innerHeight) {
            if (titScroll === null) {
                titScroll = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".sub_port .subTopSlide",
                        start: "top top",
                        end: "100% 8%",
                        anticipatePin: true,
                        scrub: 0.5,
                        id:'aboutme',
                        toggleActions: "play none none reverse",
                    }
                });
  
                titScroll
                    .to(".sub_port .subTopSlide .subTitle", {
                        top: '8%',
                        left: '220px',
                        transform: 'translate(0, 0%)',
                        scale: 0.5,
                        zIndex: 9,
                        ease: "none"
                    }, 0)
                    .to(".sub_port .subTopSlide .subTitle", {
                        top: '-10%',                
                        ease: "none",
                        zIndex: 9,
                    }, 1.5)

                    .to(".sub_port .subTopSlide", {
                        // backgroundColor: '#fff',
                        ease: "none",
                        zIndex:9
                    }, 0)
                    
                

                titScroll = gsap.timeline({
                    scrollTrigger: {
                    trigger: ".sub_port .subTopSlide",
                    start: "70% 20%",
                    end: "75% 0%",
                    id:"test",
                    anticipatePin: true,
                    scrub: 0.5,
                    toggleActions: "play none none reverse",
                    pin: false,
                    }
                })
                .to(".sub_port .subTopSlide", {
                    backgroundColor: '#fff',
                    ease: "none",
                    // zIndex:9
                }, 0)
            } else if (titScroll !== null){
                // titScroll.kill(true); // scrollTrigger 포함 제거
                // titScroll = null;
                ScrollTrigger.create({
                    trigger:'.subTopSlide',
                    start:'top top',
                    end:'+=100vh',
                    pinSpacing:false,
                    pin:true,
                })
                resetStyles();
            }
        }
    
    }

    // 반응형 대응을 위해 resize 시 재실행
    window.addEventListener('resize', function () {
        initGsapScroll();
    });

    $(function(){
    // gsap
    gsap.registerPlugin(ScrollTrigger);
      
   
    /* about - infor */
    let aboutTitleList = document.querySelectorAll('.titleList');
    let aboutImg = document.querySelectorAll('.aboutImg')

    let aboutPinT1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.aboutInfo',
            scrub: 0,
            pin: true,
            // pinSpacing:false,
            start: 'top top',
            end: '+=100%',
        }
    });
    aboutPinT1.fromTo(aboutImg,{ x:-1500, opacity:0 }, {x:0, opacity: 0, duration: 0, ease: "power1.out" })
    aboutPinT1.to(aboutImg,{opacity:1, duration:0.5})
    
    // titleList를 아래에서 위로 등장시키는 자연스러운 애니메이션
    aboutPinT1.from(aboutTitleList, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 3 // 오타 수정 + 각 항목 순차적으로 등장
    })


    /* 가로스크롤 */
    const sections = document.querySelectorAll(".sclXTxt"); //내부컨텐츠 있음
    const scrollWrap = document.querySelector(".scrollXWrap"); //실제 가로로 움직일 요소
  
    // 총 가로 이동 거리 계산
    // const totalX = -100 * (sections.length - 0);
    scrollWrap.style.width = `${sections.length * 130}vw`
  
    gsap.to(scrollWrap, {
      xPercent: -150 * (sections.length),
      ease: "none",
      scrollTrigger: {
        trigger: ".aboutScrollX", //전체영역
        start: "top top",
        end: () => `+=${scrollWrap.scrollWidth}`,
        scrub: 1,
        pin: ".scrollXCont", // pin 기준 요소
        anticipatePin: 1,
        id: "horizontalScroll",
      },
    })
    gsap.timeline({
        scrollTrigger:{
            trigger:'.scrollXWrap',
            start: '50% 100%',
            end:() => `+=${scrollWrap.scrollWidth}`,
            scrub:1
        }
    })
    .to(".subPg",{backgroundColor:'#000', ease:'power2.in', duration:1},0)
    
})