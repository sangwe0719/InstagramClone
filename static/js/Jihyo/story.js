const swiper = new Swiper(".swiper", {
  // loop가 false일 경우 start, end 도달 시 button 비활성화 자동
  loop: false,
  slidesPerView: 1,
  mousewheel: false,
  autoplayStopOnLast: true,
  autoplay: {
    delay: 3000,
  },
  // 1000이 1초
  speed: 100,
  // 화살표 동작
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // page 표시 (bullet으로 표시)
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + "<i></i>" + "<b></b>" + "</span>"
      );
    },
  },
});

$("#btn-mute").click(() => {
  console.log("clicked");
  $(".soundless-alert-box").fadeIn();
  setTimeout(() => {
    $(".soundless-alert-box").fadeOut();
  }, 1000);
});

let onPlay = true;
// play/pause button event
$("#btn-play").click(() => {
  if (onPlay) {
    swiper.autoplay.pause();
    onPlaySetAttr();
    onPlay = false;
  } else {
    swiper.autoplay.resume();
    onPausedSetAttr();
    onPlay = true;
  }
});

// swiper-navigation-button event
$(".swiper-button-prev").click(() => {
  if (onPlay) {
    swiper.autoplay.pause();
    onPausedSetAttr();
  } else {
    swiper.autoplay.resume();
    onPlaySetAttr();
  }
});
$(".swiper-button-next").click(() => {
  if (onPlay) {
    swiper.autoplay.pause();
    onPausedSetAttr();
  } else {
    swiper.autoplay.resume();
    onPlaySetAttr();
  }
});
swiper.on("reachEnd", () => {
  swiper.autoplay.stop();
  $(".swiper-button-prev").click(() => {
    swiper.autoplay.start();
  });
});

function onPlaySetAttr() {
  $(".swiper-pagination-bullet-active b").css("animation-play-state", "paused");
  $("#btn-play").html(
    '<button type="button" id="btn-play"><i class="fa-solid fa-play fa-2x" style="color: #ffffff"></i></button>'
  );
}

function onPausedSetAttr() {
  $(".swiper-pagination-bullet-active b").css(
    "animation-play-state",
    "running"
  );
  $("#btn-play").html(
    '<button type="button" id="btn-play"><i class="fa-solid fa-pause fa-2x" style="color: #ffffff"></i></button>'
  );
}
