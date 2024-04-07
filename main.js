let burger = document.getElementById("burger");
let navbarList = document.getElementById("navbarList");
console.log(burger);
console.log(navbarList);

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  navbarList.classList.toggle("open");
});

// Used jquery
// $(document).ready(function () {
//     $('.navbar__btn').click(function() {
//         $(this).toggleClass('active');
//         $('.navbar__list').slideToggle(500);
//     });
// });
