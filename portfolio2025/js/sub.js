
$(function(){
    // gsap
    gsap.registerPlugin(ScrollTrigger);

    // 1. .subTopSlide의 .subTitle을 움직이게 만들기
    gsap.to(".subTopSlide .subTitle", {
        scrollTrigger: {
          trigger: ".subTopSlide",
          start: "top top",
          end: "60% 10%",
          scrub: true,
          //markers:true,
          pin: true,
          //pinSpacing: false
        },
        top: '5%',
        left: 0,
        zIndex: 9999,
        scale: 0.5,
        ease: "power2.out"
    });
    // 2. .subTopSlide 사라지게 만들기
    gsap.to(".subTopSlide", {
    scrollTrigger: {
        trigger: ".subTopSlide",
        start: "20% top",
        end: "80% 0%",
        scrub: true,
        //markers: true,
    },
        top: '-50%',
        left: 0,
        opacity: 0,
        backgroundColor:'#fff',
        ease: "power1.out"
    });

    // gsap.to('fixedWrap',{
    //     scrollTrigger: {
    //         trigger: ".fixedWrap", // 또는 .subTitle
    //         start: "30% 0%",      // 시작 지점
    //         end: "0% 0%",        // 끝 지점
    //         scrub: true,
    //         pin:true,
    //     },
    // })
    gsap.utils.toArray('.fixedWrap').forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            //end:"bottom 300%",
            pin: true,
            markers: true
          });
    });
})