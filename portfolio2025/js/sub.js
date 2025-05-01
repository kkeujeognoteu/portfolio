

$(document).ready(function () {
    //서브페이지 메인 타이틀
    $('.subTopSlide').addClass('active');
    initGsapScroll();
});

var titScroll = null;

function resetStyles() {
    $(".subPg .subTopSlide .subTitle").css({
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
                    trigger: ".subPg .subTopSlide",
                    start: "top top",
                    end: "100% 8%",
                    anticipatePin: true,
                    scrub: 0.5,
                    id:'aboutme',
                    toggleActions: "play none none reverse",
                }
            });

            titScroll
                .to(".subPg .subTopSlide .subTitle", {
                    top: '8%',
                    left: '220px',
                    transform: 'translate(0, 0%)',
                    scale: 0.5,
                    zIndex: 9,
                    ease: "none"
                }, 0)
                .to(".subPg .subTopSlide .subTitle", {
                    top: '-10%',                
                    ease: "none",
                    zIndex: 9,
                }, 1.5)

                .to(".subPg .subTopSlide", {
                    // backgroundColor: '#fff',
                    ease: "none",
                    zIndex:9
                }, 0)
                
            titScroll = gsap.timeline({
                scrollTrigger: {
                trigger: ".subPg .subTopSlide",
                start: "70% 20%",
                end: "75% 0%",
                id:"test",
                anticipatePin: true,
                scrub: 0.5,
                toggleActions: "play none none reverse",
                pin: false,
                }
            })
            .to(".subPg .subTopSlide", {
                backgroundColor: '#fff',
                ease: "none",
                // zIndex:9
            }, 0)
        } else if (titScroll !== null){
            titScroll.kill(true); // scrollTrigger 포함 제거
            titScroll = null;
            ScrollTrigger.create({
                trigger:'.subTopSlide',
                start:'top top',
                end:'+=100vh',
                pinSpacing:false,
                pin:true,
            })
            resetStyles();
        }
    } else if(window.innerWidth < 1080){
        if (titScroll === null) {
            titScroll = gsap.timeline({
                scrollTrigger: {
                    trigger: ".subPg .subTopSlide",
                    start: "top top",
                    end: "100% 8%",
                    anticipatePin: true,
                    scrub: 0.5,
                    id:'aboutme',
                    toggleActions: "play none none reverse",
                }
            });

            titScroll
                .to(".subPg .subTopSlide .subTitle", {
                    top: '8%',
                    left: '5rem',
                    transform: 'translate(0, 0%)',
                    scale: 0.5,
                    zIndex: 9,
                    ease: "none"
                }, 0)
                .to(".subPg .subTopSlide .subTitle", {
                    top: '-10%',                
                    ease: "none",
                    zIndex: 9,
                }, 1.5)

                .to(".subPg .subTopSlide", {
                    // backgroundColor: '#fff',
                    ease: "none",
                    zIndex:9
                }, 0)
                
            titScroll = gsap.timeline({
                scrollTrigger: {
                trigger: ".subPg .subTopSlide",
                start: "70% 20%",
                end: "75% 0%",
                id:"test",
                anticipatePin: true,
                scrub: 0.5,
                toggleActions: "play none none reverse",
                pin: false,
                }
            })
            .to(".subPg .subTopSlide", {
                backgroundColor: '#fff',
                ease: "none",
                // zIndex:9
            }, 0)
        } else if (titScroll !== null){
            titScroll.kill(true); // scrollTrigger 포함 제거
            titScroll = null;
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

$(window).on('resize', function () {
    initGsapScroll(); // 리사이즈 시 타임라인 재설정
});
