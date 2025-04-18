
//서브페이지 메인 타이틀
$(document).ready(function () {
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
            end: "bottom-=15% top",
            anticipatePin: true,
            scrub: 0.5,
            toggleActions: "play none none reverse",
            pin: false,
            markers: false,
          }
        });
  
        titScroll
            .to(".sub_port .subTopSlide .subTitle", {
                top: '8%',
                left: '220px',
                transform: 'translate(0, 0%)',
                scale: 0.5,
                zIndex: 9999,
                ease: "none"
            }, 0)
            .to(".sub_port .subTopSlide .subTitle", {
                top: '-10%',
                
                ease: "none"
            }, 1.5)


            .to(".sub_port .subTopSlide", {
                backgroundColor: '#fff',
                ease: "none"
            }, 0)
        }

        titScroll = gsap.timeline({
            scrollTrigger: {
              trigger: ".sub_port .subTopSlide",
              start: "20% top",
             end: "80% 0%",
              anticipatePin: true,
              scrub: 0.5,
              toggleActions: "play none none reverse",
              pin: false,
              markers: false,
            }
        })
    } else {
      if (titScroll !== null) {
        titScroll.kill(true); // scrollTrigger 포함 제거
        titScroll = null;
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
    
    gsap.utils.toArray('.portList').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%", // 요소가 화면 아래 90% 위치에 도달 시 실행
              toggleActions: "play none none none",
              once: true, // 한 번만 실행 (선택)
            }
          }
        );
    });
    
    gsap.to('.fixedCont', {
        scrollTrigger: {
            trigger: '.fixedCont',
            start: '90% 90%',
            end: '100% 100%',
            scrub: 1,
            markers: true
        },
        backgroundColor:'#000'
    })
      

    // gsap.utils.toArray('.fixedWrap').forEach((panel, i) => {
    //     ScrollTrigger.create({
    //         trigger: panel,
    //         start: "top top",
    //         //end:"bottom 300%",
    //         //pin: true,
    //         markers: true
    //       });
    // });
    
    // let portTabs = document.querySelectorAll('.port_filterring li');
    // portTabs.forEach(function(portTabs){
    //     portTabs.addEventListener('click', function(){
    //         portTabs.classList.add('on');
    //         portTabs.querySelector('.port_filter').classList.add('on');
    //     })
    // })
})