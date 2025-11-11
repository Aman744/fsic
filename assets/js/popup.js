// Select elements
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const closeBtn = document.getElementById("closeBtn");
const links = document.querySelectorAll(".popup-link");

// Open popup when image link clicked
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    popupImage.src = link.href;
    popup.style.display = "flex";
  });
});

// Close popup
closeBtn.addEventListener("click", () => (popup.style.display = "none"));

// Close when clicking outside image
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});
