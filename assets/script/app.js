console.log("Debut Programme");

let screenWidthMenu = window.matchMedia("screen and (max-width: 500px)");

idMenuBtn.addEventListener("click", () => {
  idMenu.forEach(function (item) {
    getComputedStyle(item).opacity != "0"
      ? ((item.style.opacity = "0"), (item.style.visibility = "hidden"))
      : ((item.style.opacity = "1"), (item.style.visibility = "hidden"));
  });
});

console.log("Fin Programme");
