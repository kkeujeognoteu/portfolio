

$(document).ready(function () {
    
    $(function(){
    // gsap
        gsap.registerPlugin(ScrollTrigger);
        
    
        /* about - infor */
        let aboutTitleList = document.querySelectorAll('.aboutList');
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
            duration: 1.5,
            ease: "power2.out",
            stagger: 3 // 오타 수정 + 각 항목 순차적으로 등장
        })


        /* 가로스크롤 */
        const sections = document.querySelectorAll(".sclXTxt"); //내부컨텐츠 있음
        const scrollWrap = document.querySelector(".scrollXWrap"); //실제 가로로 움직일 요소
    
        // 총 가로 이동 거리 계산
        // const totalX = -100 * (sections.length - 0);
        scrollWrap.style.width = `${sections.length * 100}vw`
    
        gsap.to(scrollWrap, {
        xPercent: -100 * (sections.length),
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

        /* tool */
        const toolCard = document.querySelectorAll('.toolCard');
        toolCard.forEach((item)=>{
            item.addEventListener('mouseenter', () => {
                toolCard.forEach((el)=>el.classList.remove('active'));
                item.classList.add('active');
            })
            item.addEventListener('mouseleave',()=>{
                toolCard.forEach((el) => el.classList.remove('active'))
            })
            toolCard[0].classList.add('active');
        })

        scrollChart = gsap.timeline({
            scrollTrigger:{
                trigger:'.projectTool',
                start:'top top',
                end:'bottom bottom',
                scrub:1,
            }
        })
        scrollChart
            .fromTo('.chart01', {width:0, opacity:0}, {width:'90%', opacity:1, ease:'none', duration:1},0)
            .fromTo('.chart02', {width:0, opacity:0}, {width:'80%', opacity:1, ease:'none', duration:1},0)
            .fromTo('.chart03', {width:0, opacity:0}, {width:'30%', opacity:1, ease:'none', duration:1},0)
            .fromTo('.chart04', {width:0, opacity:0}, {width:'30%', opacity:1, ease:'none', duration:1},0)
            .fromTo('.chart05', {width:0, opacity:0}, {width:'60%', opacity:1, ease:'none', duration:1},0)
            .fromTo('.chart06', {width:0, opacity:0}, {width:'80%', opacity:1, ease:'none', duration:1},0)
            .fromTo('.chart07', {width:0, opacity:0}, {width:'80%', opacity:1, ease:'none', duration:1},0)
            .fromTo('.chart08', {width:0, opacity:0}, {width:'50%', opacity:1, ease:'none', duration:1},0)
            .fromTo('.chart09', {width:0, opacity:0}, {width:'30%', opacity:1, ease:'none', duration:1},0)
        
        
        let toolCardhover = document.querySelectorAll('.toolCard li')
        toolCardhover.forEach((item)=>{
            item.addEventListener('mouseenter', () => {
                toolCardhover.forEach((el)=>el.classList.remove('active'));
                item.classList.add('active');
            })
            item.addEventListener('mouseleave',()=>{
                toolCardhover.forEach((el) => el.classList.remove('active'))
            })
        })
        toolCardhover[0].classList.add('active');


        /* hobby */
        let hobbyImg = document.querySelectorAll('.hobbyCard');
        let hobbyT1 = gsap.timeline({
            scrollTrigger:{
                trigger:'.hobby',
                pin:true,
                scrub:3,
                start:'top top',
                end:'+=400%',
            }
        })
        hobbyT1.from(hobbyImg,{'y':'300%','duration':'8','ease':'none','stagger':'6'})
        hobbyT1.to(hobbyImg,{'y':'0'})

        /* qna  */
        let qna_Q = document.querySelectorAll('.question');
        let qna_A = document.querySelectorAll('.answer');

        qna_Q.forEach((item, index)=>{
            item.addEventListener('click', ()=>{
                // 모두 닫기기
                qna_Q.forEach(el=>el.classList.remove('active'));
                qna_A.forEach(el => {
                    gsap.to(el,{
                        height:0,
                        opacity:0,
                        paddingTop:0,
                        paddingBottom:0,
                        duration:0.3,
                        ease:'power2.inOut'
                    })
                })

                // 해당 항목 열기
                item.classList.add('active');

                const target = qna_A[index];

                //실제 높이 축증 후 애니메이션 적용
                target.style.display = 'block';
                target.style.height = 'auto';
                let height = target.scrollHeight;

                gsap.fromTo(target,
                    {
                        height:0,
                        opacity:0,
                        paddingTop:0,
                        paddingBottom:0
                    },
                    {
                        height:height,
                        opacity:1,
                        duration:0.4,
                        ease:'power2.out'
                    }
                )
            })
        })
    
    })
})
