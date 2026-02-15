 const menuBtn = document.getElementById("menuBtn");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    mobileMenu.classList.toggle("hidden");
  });