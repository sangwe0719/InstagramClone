console.log('hi its profile');
// tab
$(function() {
   $('.divBar-button .tabbtn').click(function() {
     let onTab = $(this).attr('data-tab');
     $('.divBar-button .tabbtn').removeClass('on');
     $('.cnt').removeClass('on');
     $(this).addClass('on');
     $('#'+onTab).addClass('on');
   })
 });


//  const deleteBtn = document.querySelector(".follower2");
//  const followUser = document.querySelector("li.followUser");
//  deleteBtn.setAttribute("", "");

//  deleteBtn.addEventListener("click", function () {
//   followUser.remove();
// });

// function removeJS() {
//   let li = document.querySelector('#li2')
//   li.remove()
// }

// function removeClass() {
//   $('#li1').removeClass()
// }