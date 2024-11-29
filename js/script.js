let goToTop = document.getElementById("top");
goToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
