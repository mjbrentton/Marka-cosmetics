// Reveal sections on scroll
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Product galleries
const productGalleries = {
  1: ["product1.jpg", "product1-alt.jpg", "product1-alt2.jpg"],
  2: ["product2.jpg", "product2-alt.jpg", "product2-alt2.jpg"]
  // Add more products here
};

const modal = document.getElementById("productModal");
const closeBtn = document.querySelector(".close");
const modalImages = document.querySelector(".modal-images");
const viewButtons = document.querySelectorAll(".view-btn");

// Open modal with correct gallery
viewButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const productCard = e.target.closest(".product-card");
    const productId = productCard.getAttribute("data-product");

    // Clear old images
    modalImages.innerHTML = "";

    // Load new images
    productGalleries[productId].forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Product Image";
      modalImages.appendChild(img);
    });

    modal.style.display = "block";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

