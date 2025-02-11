// function headerScrolling (){
//   const header = document.getElementById('header');
//     let lastScrollPosition = 0;
//     let scrollTimeout;

//     window.addEventListener('scroll', () => {
//       const currentScrollPosition = window.pageYOffset;

//       // Hide header on scroll
//       if (currentScrollPosition > lastScrollPosition) {
//         header.classList.add('hidden');
//       } else {
//         header.classList.remove('hidden');
//       }

//       // Clear previous timeout and set a new one to show the header after scrolling stops
//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         header.classList.remove('hidden');
//       }, 150); // Delay to detect stop (adjust as needed)

//       lastScrollPosition = currentScrollPosition;
//     });
// }
// headerScrolling()

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

let body = document.querySelector("body");
let cursor = document.getElementById("cursor");

body.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.3,
    opacity: 1
  })
})

function navigation() {
  let tl = gsap.timeline();

  tl.from("header", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
  })

  tl.from(".logo", {
    y: -20,
    duration: 0.5,
    opacity: 0,
  }, 'a')

  tl.from("nav li", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
  }, 'a')

}
navigation()

function heroSection() {
  const tl = gsap.timeline()
  tl.from("#about-box", {
    scale: 0,
    opacity: 0,
    duration: 1.2,
    delay: 1.5
  }, 'b')

  tl.from(".more-about", {
    scale: 0,
    duration: 1.2,
    opacity: 0,
    delay: 1.5
  }, 'b')

  tl.from(".contact-box-s", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.01,
    stagger: 0.1,
  })

  window.addEventListener("DOMContentLoaded", () => {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      repeat: -1,
      duration: 4,
      ease: "none"
    });

    window.addEventListener("wheel", (dets) => {
      if (dets.deltaY > 0) {
        gsap.to(".marque", {
          transform: "translateX(-200%)",
          repeat: -1,
          duration: 4,
          ease: "none"
        });
        gsap.to(".marque i", {
          rotate: 180
        });
      } else {
        gsap.to(".marque", {
          transform: "translateX(0%)",
          repeat: -1,
          duration: 4,
          ease: "none"
        });
        gsap.to(".marque i", {
          rotate: 0
        });
      }
    });
  });
}
heroSection()


function createTextAnimation(selector, trigger) {
  const element = document.querySelector(selector);
  let content = "";
  element.textContent.split("").forEach((char) => {
    content += char === " " ? `<span>&nbsp</span>` : `<span>${char}</span>`;
  });
  element.innerHTML = content;

  gsap.set(`${selector} span`, { opacity: 0.1 });
  gsap.to(`${selector} span`, {
    opacity: 1,
    stagger: 0.05,
    ease: Power4,
    scrollTrigger: {
      trigger,
      start: "top 90%",
      end: "top 50%",
      scrub: 3,
    },
  });
}

createTextAnimation(".right .about p", ".right .about .animateText1");
createTextAnimation(".right .experience p", ".right .experience .animateText2");
createTextAnimation(".right .graduation p", ".right .graduation p");
createTextAnimation(".right .intermediate p", ".right .intermediate p");







function smallProjectSlider () {
  const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  },
});
}
smallProjectSlider ()

// Hero Animations
// animate(".about, .about p", { y: 100, opacity: 0, duration: 0.5, delay: 0.5 }, {
//   trigger: ".about-section .right .about",
//   start: "top 90%",
//   end: "top 60%",
// });

// animate(".introduction, .introduction p", { y: 200, opacity: 0, duration: 0.5, stagger: 0.3 }, {
//   trigger: ".about-section .right .introduction",
//   start: "top 50%",
//   end: "top 40%",
// });

// // Education Animations
// animate(".education-expreience .subtitle, .education-expreience .educationTitle, .education-expreience .brief-intro",
//   { y: 100, opacity: 0, duration: 0.5, stagger: 0.3 }, {
//   trigger: ".about-section .right .education-expreience",
//   start: "top 90%",
//   end: "top 60%",
// });

function Specializations (){
  gsap.from(".right .services ul li", {
  y: 100,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".right .services",
    scroller: "body",
    start: "top 80%",
    end: "top 70%",
    // markers: true,
    scrub: 3,
  },
  });
}
// Specializations ()

function Skills (){
  gsap.from(".right .Skills ul li", {
  y: 150,
  x: 50,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".right .Skills",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    // markers: true,
    scrub: 2,
  },
});
}
// Skills ()

// gsap.to("#project h6",{
//   transform: "translateX(-350%)",
//   scrollTrigger:{
//       trigger:"#project",
//       scroller:"body",
//       start: "top 10%",
//       end:"top 100%",
//       duration: 1,
//       delay: 0.5,
//       scrub: 3,
//       // markers: true,
//       pin:true
//   }
// })



// function cursorAnimation(){

//       document.querySelector('#project').addEventListener('mouseenter',function(){
//         gsap.to(cursor ,{
//             display: 'none',
//         })
//     })
//     document.querySelector('#project').addEventListener('mouseleave',function(){
//         gsap.to(cursor ,{
//             display: 'block',
//         })
//     })


//   document.addEventListener('mousemove',function(dets){
//       gsap.to('.cursor',{
//           left:dets.x,
//           top:dets.y
//       })
//   })
  
//   document.querySelector('#id1').addEventListener('mouseenter',function(){
//       gsap.to('.cursor' ,{
//           transform: 'translate(-50%,-50%) scale(1)',
//           background: ('#17214c'),
//       })
//   })
  
//   document.querySelector('#id1').addEventListener('mouseleave',function(){
//       gsap.to('.cursor' ,{
//           transform: 'translate(-50%,-50%) scale(0)'
//       })
//   })
  
//   document.querySelector('#id2').addEventListener('mouseenter',function(){
//       gsap.to('.cursor' ,{
//           transform: 'translate(-50%,-50%) scale(1)',
//           background: ('#303651')
//       })
//   })
  
//   document.querySelector('#id2').addEventListener('mouseleave',function(){
//       gsap.to('.cursor' ,{
//           transform: 'translate(-50%,-50%) scale(0)'
//       })
//   })
  
//   document.querySelector('#id3').addEventListener('mouseenter',function(){
//       gsap.to('.cursor' ,{
//           transform: 'translate(-50%,-50%) scale(1)',
//           background: ('#000000')
//       })
//   })
  
//   document.querySelector('#id3').addEventListener('mouseleave',function(){
//       gsap.to('.cursor' ,{
//           transform: 'translate(-50%,-50%) scale(0)'
//       })
//   })
  
//   document.querySelector('#id4').addEventListener('mouseenter',function(){
//       gsap.to('.cursor' ,{
//           transform: 'translate(-50%,-50%) scale(1)',
//           background: ('#28c44c')
//       })
//   })
  
//   document.querySelector('#id4').addEventListener('mouseleave',function(){
//       gsap.to('.cursor' ,{
//           transform: 'translate(-50%,-50%) scale(0)'
//       })
//   })
// }
// cursorAnimation()




// gsap.from(".credential-education .graduation", {
//   y: 300,
//   opacity: 0,
//   delay: 0.5,
//   duration: 0.5,
//   stagger: 1,
//   scrollTrigger: {
//     trigger: ".about-section .right .credential-education",
//     scroller: "body",
//     start: "top 80%",
//     end: "top 20%",
//     markers: true,
//     scrub: 2,
//   },
// });

// Div Text-with-imagr=================

// let currentIndex = 0;

// function showSlide(index) {
//   const slides = document.querySelector('.slides');
//   const totalSlides = document.querySelectorAll('.slide').length;

//   if (index >= totalSlides) {
//     currentIndex = 0;
//   } else if (index < 0) {
//     currentIndex = totalSlides - 1;
//   } else {
//     currentIndex = index;
//   }

//   slides.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function nextSlide() {
//   showSlide(currentIndex + 1);
// }

// function prevSlide() {
//   showSlide(currentIndex - 1);
// }

// // Auto Slide (Optional)
// setInterval(nextSlide, 3000);
