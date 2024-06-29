// // jquery 객체
// var mHtml = $("html");
// var page = 1;

// mHtml.animate({ scrollTop: 0 }, 10);
// $(window).on("wheel", function (e) {
//     if (mHtml.is(":animated")) return;
//     if (e.originalEvent.deltaY > 0) {
//         if (page == 3) return;
//         page++;
//     } else if (e.originalEvent.deltaY < 0) {
//         if (page == 1) return;
//         page--;
//     }
//     var posTop = (page - 1) * $(window).height();
//     mHtml.animate({ scrollTop: posTop });
// })

// document.addEventListener('DOMContentLoaded', function () {
//     const sections = document.querySelectorAll('section');
//     let currentSectionIndex = 0;

//     function updateCurrentSection() {
//         sections.forEach((section, index) => {
//             if (index === currentSectionIndex) {
//                 section.classList.add('current');
//             } else {
//                 section.classList.remove('current');
//             }
//         });
//     }

//     function scrollToSection(sectionIndex) {
//         const section = sections[sectionIndex];
//         section.scrollIntoView({ behavior: 'smooth' });
//         currentSectionIndex = sectionIndex;
//         updateCurrentSection();
//     }

//     function handleScroll() {
//         const scrollPosition = window.scrollY;
//         const windowHeight = window.innerHeight;

//         sections.forEach((section, index) => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;

//             // Check if more than half of the section is visible
//             if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight - windowHeight / 2) {
//                 if (currentSectionIndex !== index) {
//                     scrollToSection(index);
//                 }
//             }
//         });
//     }

//     // Initial setup
//     updateCurrentSection();

//     window.addEventListener('scroll', handleScroll);
// });