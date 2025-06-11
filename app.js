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