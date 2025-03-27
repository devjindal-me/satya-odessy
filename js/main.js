// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add navigation bar scroll effect
    const navbar = document.querySelector('nav');
    const topButton = document.getElementById('top');
    
    window.addEventListener('scroll', function() {
        // Add scrolled class to navbar when scrolling down
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            topButton.classList.add('show');
        } else {
            navbar.classList.remove('scrolled');
            topButton.classList.remove('show');
        }
    });
    
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle.checked) {
                navToggle.checked = false;
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would normally send the form data to a server
            // For now, we'll just show a success message
            contactForm.innerHTML = `
                <div class="success-message">
                    <h3>Thank you for contacting us!</h3>
                    <p>We'll get back to you as soon as possible.</p>
                </div>
            `;
        });
    }
    
    // Add animation to services on scroll
    const animateOnScroll = function() {
        const services = document.querySelectorAll('.service');
        const reviews = document.querySelectorAll('.review');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        // Set initial styles for services
        services.forEach(service => {
            service.style.opacity = 0;
            service.style.transform = 'translateY(20px)';
            service.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(service);
        });
        
        // Set initial styles for reviews
        reviews.forEach(review => {
            review.style.opacity = 0;
            review.style.transform = 'translateY(20px)';
            review.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(review);
        });
    };
    
    // Run animations
    animateOnScroll();
    
    // Gallery image modal
    const galleryImages = document.querySelectorAll('.gallery-container img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // Create modal
            const modal = document.createElement('div');
            modal.classList.add('image-modal');
            
            // Create modal content
            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');
            
            // Create close button
            const closeBtn = document.createElement('span');
            closeBtn.classList.add('close-modal');
            closeBtn.innerHTML = '&times;';
            
            // Create image
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            
            // Append elements
            modalContent.appendChild(closeBtn);
            modalContent.appendChild(modalImg);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            // Show modal
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
            
            // Close modal on click
            modal.addEventListener('click', function(e) {
                if (e.target === modal || e.target === closeBtn) {
                    modal.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(modal);
                    }, 300);
                }
            });
        });
    });
}); 