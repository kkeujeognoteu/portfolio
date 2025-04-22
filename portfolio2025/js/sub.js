

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
                        zIndex: 1,
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
            } else if (titScroll !== null){
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
        },
        backgroundColor:'#000',
        color:'#fff',
    })
      
    
    /* 포트폴리오 페이지 - tab */
    let portItem02 = document.querySelectorAll('.portTab02 ul li');
    let portTabCont02 = document.querySelectorAll('.portCont .portContTab');
    let portTabCont03 = document.querySelectorAll('.portCont02 .portContTab_lst');

    const headTitle = document.querySelector(".portHead .headLeft h2");
    const headDesc = document.querySelector(".portHead .headLeft p");
    

    portItem02.forEach((item,index)=>{

        const work = [
            {
                company : "(주)유엔비즈",
                filterType : ['적응형', '유지보수'],
                title : 'KPGA 통합플랫폼 운영 및 고도화 용역',
                summary:'kpga는 한국 남자 프로골프의 공식정보를 확인할수 있는 사이트이며, 사용자 홈페이지 및 Admin 페이지 유지보수 작업하였습니다.',
                detail : '',
                link : '',
                thumbImb:'thumb01',
            },
            {
                company : "(주)유엔비즈",
                filterType : ['유지보수'],
                title : '경상남도체육회 홈페이지 유지보수',
                summary:'',
                detail : '',
                link : '',
                thumbImb:'fgff',
            },
            {
                company : "(주)유니픽스",
                filterType : ['반응형', '웹접근성'],
                title : '남도사이버갤러리',
                summary:'웹접근성 검사를 위해 유지보수 작업을 하였습니다.',
                detail : '',
                link : '',
                thumbImb:'namdo',
            },
            {
                company : "(주)유니픽스",
                filterType : ['반응형', '웹접근성', '유지보수','php개발'],
                title : '남도사이버갤러리',
                summary:'소장품 페이지 디자인을 변경하고, myspl을 사용해 php개발 작업을 하였습니다.',
                detail : '',
                link : '',
                thumbImb:'namdo',
            },
            {
                company : "(주)유니픽스",
                filterType : ['앱'],
                title : '메이커스페이스 앱',
                summary:'',
                detail : '',
                link : '',
                thumbImb:'makersApp_thumb',
            },
            {
                company : "(주)유니픽스",
                filterType : ['반응형', '유지보수'],
                title : 'KEA 한국전자정보통신산업진흥회',
                summary:'',
                detail : '',
                link : '',
                thumbImb:'kea_logo',
            },
            {
                company : "(주)유니픽스",
                filterType : ['반응형', '유지보수'],
                title : '한국자동차연구원',
                summary:'',
                detail : '',
                link : '',
                thumbImb:'katech_thumb',
            },
            {
                company : "(주)유니픽스",
                filterType : ['반응형', '유지보수'],
                title : '차세대 바이오헬스산업 혁신인재양성사업',
                summary:'사업안내 페이지에 있는 주관대학 소개 페이지를 유지보수 작업 하였습니다.',
                detail : '',
                link : '',
                thumbImb:'biho_thum',
            },
            {
                company : "(주)유니픽스",
                filterType : ['반응형', '유지보수'],
                title : '차세대융합기술연구원 메이커스페이스 전문랩',
                summary:'',
                detail : '',
                link : '',
                thumbImb:'makers_thumb',
            },
            {
                company : "(주)유니픽스",
                filterType : ['반응형', '유지보수'],
                title : '미래형자동차 기술혁신인재양성',
                summary:'',
                detail : '',
                link : '',
                thumbImb:'future_thumb',
            },
            {
                company : "(주)유니픽스",
                filterType : ['반응형'],
                title : '한국자동차환경협회 전기차충전인프라 교육센터',
                summary:'',
                detail : '',
                link : '',
                thumbImb:'edu_thumb',
            },
            {
                company : "(주)유니픽스",
                filterType : ['반응형'],
                title : '미래형자동차 현장인력양성사업',
                summary:'',
                detail : '',
                link : '',
                thumbImb:'carStudy_thumb',
            },
            {
                company : "(주)유니픽스",
                filterType : ['반응형'],
                title : '한국디지털헬스산업협회',
                summary:'',
                detail : '',
                link : '',
                thumbImb:'kodhia_thumb',
            },

        ];
        const companyData = {
            "All": {
              title: "전체 포트폴리오",
              period: "2021 - 2025",
              desc: "모든 프로젝트를 확인하실 수 있습니다."
            },
            "(주)유엔비즈": {
              title: "(주)유엔비즈",
              period: "2023.10 - 2025.03",
              desc: "우리는 최첨단 스포츠 기술을 지향하는 회사로<br>ADMIN 및 KPGA 사이트 유지보수 위주의 작업을 하였습니다."
            },
            "(주)유니픽스": {
              title: "(주)유니픽스",
              period: "2022.07 - 2023.08",
              desc: "다양한 금융솔루션 웹앱 및 반응형 퍼블리싱을 진행하였습니다."
            },
            "엣썸": {
              title: "엣썸",
              period: "2021.09 - 2022.05",
              desc: "패션 브랜드의 이커머스 사이트 운영 및 웹디자인 유지보수 담당."
            }
        };

          
        item.addEventListener('click', function(e){
            portItem02.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            e.preventDefault();
            portTabCont02.forEach(function(content){
                content.classList.remove('active');
            })
            portItem02.forEach(function(content){
                content.classList.remove('active');
            })
            
            portItem02[index].classList.add('active');
            portTabCont02[index].classList.add('active');

            // 데이터 가져오기
            const company = this.dataset.hover;
            const data = companyData[company];

            if (data) {
                headTitle.innerHTML = `${data.title} <span>${data.period}</span>`;
                headDesc.innerHTML = data.desc;
            }
        })
        item.addEventListener('click', function(e){
            portItem02.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            e.preventDefault();
            portTabCont03.forEach(function(content){
                content.classList.remove('active');
            })
            portItem02.forEach(function(content){
                content.classList.remove('active');
            })
            
            portItem02[index].classList.add('active');
            portTabCont03[index].classList.add('active');

            // 데이터 가져오기
            const company = this.dataset.hover;
            const data = companyData[company];

            if (data) {
                headTitle.innerHTML = `${data.title} <span>${data.period}</span>`;
                headDesc.innerHTML = data.desc;
            }
        })
    })



    /* gird, list 탭  */
    let portItem_Lst = document.querySelectorAll('.port_switcher ul li');
    let portTabCont_Lst = document.querySelectorAll('.tab-content');

    portItem_Lst.forEach((item,index)=>{
        item.addEventListener('click', function(e){
            e.preventDefault();
            portTabCont_Lst.forEach(function(content){
                content.classList.remove('active');
            })
            portItem_Lst.forEach(function(content){
                content.classList.remove('active');
            })
            
            portItem_Lst[index].classList.add('active');
            portTabCont_Lst[index].classList.add('active');
        })
    })

    /* 마우스 포인트 따라다니는 이미지  */
    let activeImage;

    gsap.utils.toArray('.portCont02 .portContTab_lst .portList').forEach((elem) => {
        const portImage = elem.querySelector('img.fadeImg');
        let setX, setY;

        const align = e => {
            setX(e.clientX - portImage.clientWidth / 1);
            setY(e.clientY - portImage.clientWidth / 1);
        };

        const startPoint = () => document.addEventListener("mousemove", align);
        const stopPoint = () => document.removeEventListener("mousemove", align);

        const fade = gsap.to(portImage, { autoAlpha: 0.8, ease: "none", paused: true });

        elem.addEventListener('mouseenter', (e) => {
            fade.play();
            startPoint();

            if (activeImage) {
                gsap.set(portImage, {
                    x: gsap.getProperty(activeImage, "x"),
                    y: gsap.getProperty(activeImage, "y")
                });
            }

            activeImage = portImage;

            setX = gsap.quickTo(portImage, "x", { duration: 0.5, ease: "elastic.out" });
            setY = gsap.quickTo(portImage, "y", { duration: 0.5, ease: "elastic.out" });

            align(e); // 최초 위치 반영
        });

        elem.addEventListener('mouseleave', () => {
            fade.reverse();
            stopPoint(); // 🔥 중요!
        });
    });

    /* about */
    let subPinTit = document.querySelectorAll('.titleList');

    let subPinT1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.aboutInfo',
        scrub: 0.5,
        pin: true,
        start: 'top top',
        end: '+=400%',
        markers: false
    }
    });

    // titleList를 아래에서 위로 등장시키는 자연스러운 애니메이션
    subPinT1.from(subPinTit, {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 1 // 오타 수정 + 각 항목 순차적으로 등장
    });


    gsap.from(".nanum-neo", {
        scrollTrigger: {
          trigger: ".txt-wrap",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
})