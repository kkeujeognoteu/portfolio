$(document).ready(function () {
    //서브페이지 메인 타이틀
    $('.subTopSlide').addClass('active');
    initGsapScroll();
    make.init();
});

/**
 * html 화명 구상
 * */
const make = {
    filter : {
        types : ['all'],
        companys : ['all'],
        tap : 'grid',
    },
    /**
     * Init 함수
     * 상단 Filter, 회사박스 생성
     * */
    init : function (){
        let typesHtml = ``;
        typesHtml += `<li class="filtertypes" id="filtertypesall" onclick="fnEvent.filter(\'types\', \'all\')">All</li>`
        dataJson.types.forEach((e)=>{
            typesHtml += `<li class="filtertypes" id="filtertypes${e.cd}" onclick="fnEvent.filter(\'types\', \'${e.cd}\')">${e.nm}</li>`
        });
        $('#filterTypes').html(typesHtml);

        let companyHtml = ``;
        dataJson.companys.forEach((e)=>{
            companyHtml += `<li class="filtercompanys" id="filtercompanys${e.cd}" data-hover="${make.getCompanyNm(e.cd)}" onclick="fnEvent.filter(\'companys\', \'${e.cd}\')"><span>${e.title}</span></li>`
        });
        $('#filterCompany').html(companyHtml);

        fnEvent.filter('types', 'all');
        fnEvent.filter('companys', 'all');
    },
    /**
     * 포토카드 형식 생성
     * */
    grid : function () {
        let gridHtml = '';
        gridHtml += `<div class="portCont tab-content active">`;
        gridHtml += `	<div class="portContTab active">`;
        gridHtml += `		<div class="subPortBox ">`;
        dataJson.works.forEach((e) => {
            if(make.isShow(e)){
                gridHtml += make.getGridPortDiv(e);
            }
        })
        gridHtml += `		</div>`;
        gridHtml += `	</div>`;
        gridHtml += `</div>`;
        $('#tabGrid').html(gridHtml)
    },
    /**
     * 포토카드 객체 별 HTMl 생성
     * @param {Object} info | dataJson.works 객체
     * @returns {string} portDiv html string
     * */
    getGridPortDiv : function (info) {
        let portHtml = '';
        portHtml += `<div class="portList">`;
        portHtml += `	<div class="portThumb"> <img src="../images/${info.thumbImb}.jpeg" alt="${info.title} 이미지">  </div>`;
        portHtml += `	<div class="portTxt">`;
        portHtml += make.getPortTypeUl(info);
        portHtml += `		<h3>${info.title}</h3>`;
        portHtml += `		<p class="portTxt02">${info.summary}</p>`;
        portHtml += `		<div class="lst_btn">`;
        portHtml += `			<button type="button" onclick="fnEvent.open(\'${info.link}\')">사이트 바로가기</button>`;
        portHtml += `			<button type="button" >상세페이지 비로가기</button>`;
        portHtml += `		</div>`;
        portHtml += `	</div>`;
        portHtml += `</div>`;
        return portHtml;
    },
    /**
     * 타입Ul 생성 (적응형, 반응형..) HTMl 생성
     * @param {Object} info | dataJson.works[]
     * @returns {string} portTypeUl html string
     * */
    getPortTypeUl : function (info) {
        let portUlHtml = '<ul>';
        info.filterType.forEach((e)=>{
            portUlHtml += `<li class="type ${make.filter.types.includes(e) && 'typeHl'}">${make.getTypesNm(e)}</li>`;
        })
        portUlHtml += `</ul>`;
        return portUlHtml;
    },
    /**
     * 리스트 형식 생성
     * */
    list : function () {
        let listHtml = '';
        listHtml += `<div class="portCont02 tab-content active">`;
        listHtml += `	<div class="portContTab_lst  active">`;
        dataJson.works.forEach((e) => {
            if(make.isShow(e)){
                listHtml += make.getListPortDiv(e);
            }
        })
        listHtml += `	</div>`;
        listHtml += `</div>`;
        $('#tabGrid').html(listHtml)
    },
    /**
     * 포토카드 객체 별 HTMl 생성
     * @param {Object} info | dataJson.works 객체
     * @returns {string} portDiv html string
     * */
    getListPortDiv : function (info) {
        let portHtml = '';
        portHtml += `<div class="portList">`;
        portHtml += `	<img src="../images/${info.thumbImb}.jpeg" alt="" class="fadeImg" alt="${info.title} 이미지">`;
        portHtml += `	<div class="portTxt">`;
        portHtml += `		<h3><a href="">${info.title}</a></h3>`;
        portHtml += make.getListPortTypeUlP(info);
        portHtml += `		<div class="infoBtn">`;
        portHtml += `			<a href="" onclick="fnEvent.open(\'${info.link}\')">상세보기</a>`;
        portHtml += `			<a href="" target="_blank">링크</a>`;
        portHtml += `		</div>`;
        portHtml += `	</div>`;
        portHtml += `</div>`;
        return portHtml;
    },
    /**
     * 타입Ul 생성 (적응형, 반응형..) txt 생성
     * @param {Object} info | dataJson.works[].filterType
     * @returns {string} portTypeUl html string
     * */
    getListPortTypeUlP : function (info) {
        let portP = `<p class="type">`;
        info.filterType.forEach((e, i) => {
            portP += `${i === 0 ? '' : ' ,'}${make.getTypesNm(e)}` ;
        })
        portP += `</p>`;
        return portP;
    },
    /**
     * 생성 시 데이터 필터링 표시할지 말지 설정
     * @param {Object} info | dataJson.works 객체
     * @returns {boolean} 표시여부
     * */
    isShow : function (info) {
        return (make.filter.companys.includes('all') || make.filter.companys.includes(info.company)) &&
            (make.filter.types.includes('all') || make.filter.types.some(item => info.filterType.includes(item)) );
    },
    /**
     * 타입 이름 반환
     * @param {string} val | 타입 cd
     * @return {string} 타입 이름
     * */
    getTypesNm : function (val) {
        let info = dataJson.types.find((e) => e.cd === val);
        return  info ? info.nm : val;
    },
    /**
     * 회사 이름 반환
     * @param {string} val | 회사 cd
     * @return {string} 회사명
     * */
    getCompanyNm : function (val) {
        let info = dataJson.companys.find((e) => e.cd === val);
        return  info ? info.title : val;
    }
};
/**
 * make 이벤트
 * */
let fnEvent = {
    /**
     * 타입, 회사명 선택 시 필터 데이터 관리 및 active
     * 데이터 필터링에 사용함
     * @param {string} type | types or companys
     * @param {string} val | 해당 code
     * */
    filter : function (type, val) {
        let filterOne = make.filter[type];

        if (val === 'all') {
            filterOne = [val];
        } else {
            if(filterOne.includes('all')) filterOne.splice(filterOne.indexOf('all'), 1);
            if(filterOne.includes('all')) filterOne.splice(filterOne.indexOf('all'), 1);

            if (filterOne.includes(val)) {
                let idx = filterOne.indexOf(val);
                filterOne.splice(idx, 1);
            } else {
                filterOne.push(val);
            }
        }

        let fLng = filterOne.length;
        let maxLng = dataJson[type].length - ( type === 'companys' ? 1 : 0 );
        if(fLng === 0 || fLng === maxLng){

            filterOne = ['all'];
        }

        $('.filter'+type).removeClass('active');
        filterOne.forEach((e) => {
            $('#filter'+type+''+e).addClass('active');
        })
        make.filter[type] = filterOne;
        fnEvent.changeTap('grid');
    },
    /**
     * 그리드 리스트 선택 시 내용 다시그리기
     * */
    changeContent : function () {
        if(make.filter.tap === 'grid'){
            make.grid();
        } else {
            make.list();
        }
    },
    /**
     * 그리드 리스트 탭 선택
     * @param{string} val | grid or list
     * */
    changeTap : function (val) {
        make.filter.tap = val;
        $('.switer-grid').removeClass('active');
        $('#tap'+val).addClass('active');
        fnEvent.changeContent();
    },
    /**
     * 링크 새창열기
     * @param {string} link 보내는 링킹
     * */
    open : function (link) {
        window.open(link)
    }
};




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

