document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("myRange");
    const slideContainer = document.querySelector(".slide-container");
    const slides = document.querySelectorAll(".slide");
    const slideWidth = slides[0].offsetWidth + 10; // 슬라이드 너비 + 간격
    const containerWidth = slideContainer.offsetWidth;
    let currentSlide = 0;

    // 초기 위치 설정: 첫 번째 슬라이드를 중앙에 위치
    const initialTransform = (containerWidth / 2) - (slideWidth / 2);
    slideContainer.style.transform = `translateX(${initialTransform}px)`;

    // 방향키 이벤트 리스너 추가
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            showSlide(currentSlide - 1);
        } else if (event.key === "ArrowRight") {
            showSlide(currentSlide + 1);
        }
    });

    slider.addEventListener("input", function () {
        showSlide(parseInt(this.value));
    });

    function showSlide(index) {
        // 인덱스 범위 제한
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        // 현재 슬라이드 이미지 크기 원래대로 되돌리기
        slides[currentSlide].querySelector('img').style.transform = "scale(1)";

        // 슬라이드 이동 처리
        const moveAmount = initialTransform - (index * slideWidth);
        slideContainer.style.transform = `translateX(${moveAmount}px)`;

        // 현재 슬라이드 이미지 크기 키우기
        slides[index].querySelector('img').style.transform = "scale(1.2)";

        currentSlide = index;

        // 슬라이더 위치 업데이트
        slider.value = index;
    }
});
