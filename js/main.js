// ENHANCED MAIN JS FOR ELITE DENTAL (Apple-Level UX)

document.addEventListener('DOMContentLoaded', () => {

    // 1. REVEAL ON SCROLL (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));


    // 2. TESTIMONIAL SLIDER
    const track = document.getElementById('testimonialTrack');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    window.goToSlide = (index) => {
        if (!track) return;
        currentSlide = index;
        track.style.transform = `translateX(-${index * 100}%)`;

        // Update dots
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.style.background = 'var(--primary)';
                dot.style.width = '24px';
                dot.style.borderRadius = '10px';
            } else {
                dot.style.background = '#E5E5E7';
                dot.style.width = '12px';
            }
        });
    };

    // Auto slide
    setInterval(() => {
        currentSlide = (currentSlide + 1) % 3;
        goToSlide(currentSlide);
    }, 6000);


    // 3. HEADER EFFECTS
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.height = '70px';
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        } else {
            header.style.height = '80px';
            header.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    });


    // 4. FORM HANDLING (SaaS Style)
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = bookingForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Securing Slot...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.innerText = 'Appointment Reserved ✓';
                btn.style.background = 'var(--secondary)';
                btn.style.color = 'white';
                bookingForm.reset();

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.style.opacity = '1';
                }, 4000);
            }, 2000);
        });
    }


    // 5. LIGHTBOX FUNCTIONALITY (for Gallery)
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        // Create lightbox elements
        const lb = document.createElement('div');
        lb.className = 'lightbox';
        const lbImg = document.createElement('img');
        lbImg.className = 'lightbox-content';
        lb.appendChild(lbImg);
        document.body.appendChild(lb);

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const src = item.querySelector('img').src;
                lbImg.src = src;
                lb.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        lb.addEventListener('click', () => {
            lb.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }


    // 6. INITIAL UI STATES
    goToSlide(0);

});
