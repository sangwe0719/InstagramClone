let btns = []; /* Array to  */
for (let i = 0; i < 8; ++i) {
  btns[i] = document.querySelector(`.top-reels-btn${i}`);
  btns[i].addEventListener("click", function (event) {
    window.location.replace(`/story/:${i}`);
  });
}
