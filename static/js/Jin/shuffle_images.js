// Shuffle images every page refresh //
const randomId = []; /* Index from 0 to 99*/
let imageCount = 20;

for (let i = 0; i < imageCount; ++i) {
  randomId.push(i);
}
function shuffle(array) {
  /* Get numbers in -0.5 ~ 0.5 range becomes index of sort() */
  array.sort(() => Math.random() - 0.5);
}

/* Check whether browser is reloaded */
if (window.performance) {
  // console.info("window.performance works fine on this browser");
}
// console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  // console.info("This page is reloaded");

  shuffle(randomId);
} else {
  // console.info("This page is not reloaded");
}

let imageBasePath = "/static/src/Jin/post/posts";
for (let i = 0; i < imageCount; ++i) {
  let imagePath = `${imageBasePath}-${randomId[i]}.jpg`;
  $(`#random-post-image-${i}`).attr("src", imagePath);
}
