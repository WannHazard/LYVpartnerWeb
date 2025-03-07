// Vänta tills DOM är helt laddad
document.addEventListener('DOMContentLoaded', () => {
    // Mobil meny funktionalitet
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = navLinks.classList.contains('active');
            mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });

        // Stäng menyn när man klickar på en länk
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', false);
            });
        });
    }

    // Kontaktformulär hantering
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulerad bekräftelse
            const formMessage = document.createElement('p');
            formMessage.textContent = 'Tack för ditt meddelande! Vi återkommer så snart som möjligt.';
            formMessage.style.color = 'green';
            contactForm.appendChild(formMessage);

            // Rensa formuläret efter några sekunder
            setTimeout(() => {
                formMessage.remove();
                contactForm.reset();
            }, 5000);
        });
    }

    const dots = document.querySelectorAll('.slider-dot');
    const images = document.querySelectorAll('.slider-image');
    let currentIndex = 0;
    let interval;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        images[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    function nextImage() {
        let nextIndex = (currentIndex + 1) % images.length;
        showImage(nextIndex);
    }

    // Start automatic slideshow
    function startSlideshow() {
        interval = setInterval(nextImage, 5000); // Change image every 5 seconds
    }

    // Stop slideshow on user interaction
    function stopSlideshow() {
        clearInterval(interval);
    }

    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideshow();
            showImage(index);
            startSlideshow();
        });
    });

    // Start the slideshow
    startSlideshow();
});