function initCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;

  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = carousel.querySelector(".next");
  const prevButton = carousel.querySelector(".prev");

  if (slides.length === 0) return;

  let currentIndex = 0;

  function getSlideWidth() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    return slideWidth + gap;
  }

  function updateSlidePosition() {
    const moveAmount = getSlideWidth() * currentIndex;
    track.style.transform = `translateX(-${moveAmount}px)`;
  }

  nextButton.addEventListener("click", () => {
    const trackWidth = track.parentElement.getBoundingClientRect().width;
    const slideWidth = getSlideWidth();
    const visibleSlides = Math.round(trackWidth / slideWidth);
    const maxIndex = slides.length - visibleSlides;

    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlidePosition();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidePosition();
    }
  });

  window.addEventListener("resize", updateSlidePosition);
}

document.addEventListener("DOMContentLoaded", () => {
  initCarousel("clients-carousel");
});

function initContinuousCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;

  const track = carousel.querySelector(".continuous-track");
  if (!track) return;

  let position = 0;
  const speed = 1;
  let isPaused = false;

  function getResetWidth() {
    const cards = Array.from(track.children);
    const singleSetCount = Math.floor(cards.length / 2);
    let width = 0;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;

    for (let i = 0; i < singleSetCount; i++) {
      width += cards[i].offsetWidth + gap;
    }
    return width;
  }

  let resetWidth = getResetWidth();

  window.addEventListener("resize", () => {
    resetWidth = getResetWidth();
  });

  carousel.addEventListener("mouseenter", () => (isPaused = true));
  carousel.addEventListener("mouseleave", () => (isPaused = false));

  function animate() {
    if (!isPaused) {
      position -= speed;
      if (Math.abs(position) >= resetWidth) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(animate);
  }

  animate();
}

document.addEventListener("DOMContentLoaded", () => {
  initCarousel("clients-carousel");
  initContinuousCarousel("showcase-continuous"); // Start the showcase
});
