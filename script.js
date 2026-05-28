function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

// Apple-like scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("header");

  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,0.85)";
  } else {
    nav.style.background = "rgba(0,0,0,0.6)";
  }
});
