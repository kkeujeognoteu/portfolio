$(document).ready(function () {
    //서브페이지 메인 타이틀
    $('.subTopSlide').addClass('active');
    initGsapScroll02();
});


function initGsapScroll02(){
    if(window.innerWidth >= window.innerHeight){
        const storyScroll = document.querySelector('.storyWrap'); // 스크롤할 요소
        storyScroll.style.height = `${storyScroll.length * 100}vw`
        gsap.to(storyScroll,{
            yPercent: -100 * (storyScroll.length),
            scrollTrigger:{
                trigger:'.story',
                start:'top top',
                end: '50% 50%',
            },
        })
        gsap.timeline({
            scrollTrigger:{
                trigger:'.storyWrap',
                start:'50% 100%',
                end:'80% 50%',
                scrub:1,
            }
        })
        .to('.subPg', {backgroundColor:"#000", ease:'power2.in', duration:1},0)
        .to('.storyBox .storyLst p', {color:"#ededed", ease:'power2.in', duration:1},0)
    
    
        const projectLinks = document.querySelectorAll('.proJ_Cont .left li');
        const projectImages = document.querySelectorAll('.proJ_Cont .right .proJectImg');
        let current = 0;
    
        projectLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                const index = link.dataset.index;
    
                projectImages.forEach((img, i) => {
                    if (i == index) {
                        img.classList.add('active');
                    } else {
                        img.classList.remove('active');
                    }
                });
            });
            projectLinks[0].classList.add('active')
            projectImages[0].classList.add('active')
        });
    
        function showImage(index) {
            projectImages.forEach((img, i) => {
              img.classList.remove('active');
            });
            projectImages[index].classList.add('active');
            
            projectLinks.forEach((img, i) => {
              img.classList.remove('active');
            });
            projectLinks[index].classList.add('active');
        }
    
        function nextImage() {
            current = (current + 1) % projectImages.length;
            current = (current + 1) % projectLinks.length;
            showImage(current);
            
        }
    
        showImage(current); // 초기 표시
        setInterval(nextImage, 3000); // 3초마다 전환
    }else if(window.innerWidth < 1080){

        const storyScroll = document.querySelector('.storyWrap'); // 스크롤할 요소
        storyScroll.style.height = `${storyScroll.length * 100}vw`
        gsap.to(storyScroll,{
            yPercent: -100 * (storyScroll.length),
            scrollTrigger:{
                trigger:'.story',
                start:'top top',
                end: '50% 50%',
            },
        })
        gsap.timeline({
            scrollTrigger:{
                trigger:'.storyWrap',
                start:'50% 100%',
                end:'80% 50%',
                scrub:1,
            }
        })
        .to('.subPg', {backgroundColor:"#000", ease:'power2.in', duration:1},0)
        .to('.storyBox .storyLst p', {color:"#ededed", ease:'power2.in', duration:1},0)

        const slider = document.querySelector('.proJ_Cont');
        const totalSlides = document.querySelectorAll('.proJectImg').length;
        let currentIndex = 0;
    
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 3000); // 3초마다 슬라이드 전환
    }
}
