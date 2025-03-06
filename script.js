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
});