const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    } else {
    entry.target.classList.remove('visible'); // Remove when not visible
    }
});
}, { threshold: 0.2 });

document.querySelectorAll('.scroll-fade').forEach(section => {
observer.observe(section);
});


  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');
  }


  // crousel
function scrollCarousel(direction) {
    const carousel = document.getElementById('teamCarousel');
    const scrollAmount = 270; // adjust per card width
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  // end

  // gallery crousel
  function scrollGallery(direction) {
    const carousel = document.getElementById('galleryCarousel');
    const scrollAmount = 720;
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  // end