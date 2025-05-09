const fadeEls = document.querySelectorAll(".myname");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 2, {
    // gsap(요소, 지속시간, 옵션)
    // 몇초뒤에 실행될건지 delay 에 명시 index는 0부터 시작이니 +!
    delay: (index + 1) * 0.6, //0.7 1.4 2.1 ....
    opacity: 1,
  });
});
