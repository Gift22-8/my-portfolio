
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('footer p');
    if(yearSpan) {
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2024', new Date().getFullYear());
    }
});


console.log('Portfolio loaded successfully! Designed with ❤️ for Sitota.');
