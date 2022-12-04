const  btncolors = document.querySelectorAll(".content div");
btncolors.forEach((btncolor) => {
    btncolor.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--mainColor", e.target.dataset.color);
    });
});
// const btnColors = document.querySelectorAll(".content div");

// btnColors.forEach((btnColor) => {
//   btnColor.addEventListener("click", (e) => {
//     document.documentElement.style.setProperty("--mainColor", e.target.dataset.color);
//   });
// });