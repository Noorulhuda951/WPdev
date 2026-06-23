 // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Custom Cursor
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorRing = document.querySelector('.cursor-ring');
        const hoverElements = document.querySelectorAll('a, button, .portfolio-card, .skill-card, .service-box, input, textarea');

        document.addEventListener('mousemove', (e) => {
            gsap.to(cursorDot, {
                x: e.clientX - 4,
                y: e.clientY - 4,
                duration: 0.1
            });
            gsap.to(cursorRing, {
                x: e.clientX - 20,
                y: e.clientY - 20,
                duration: 0.15
            });
        });

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.classList.add('hover');
                cursorRing.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('hover');
                cursorRing.classList.remove('hover');
            });
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Scroll Progress Bar
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            document.querySelector('.scroll-progress').style.width = progress + '%';
        });

        // Hero Animations
        const heroTitle = document.querySelector('.hero-title');
        const titleText = heroTitle.textContent;
        heroTitle.innerHTML = '';
        titleText.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${i * 0.05}s`;
            heroTitle.appendChild(span);
        });

        gsap.to('.hero-title span', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power4.out',
            delay: 0.5
        });

        gsap.to('.hero-subtitle', {
            opacity: 1,
            duration: 1,
            delay: 1.5
        });

        gsap.to('.hero-desc', {
            opacity: 1,
            duration: 1,
            delay: 2
        });

        gsap.to('.hero-btn', {
            opacity: 1,
            duration: 1,
            delay: 2.5
        });

        gsap.to('.scroll-indicator', {
            opacity: 1,
            duration: 1,
            delay: 3
        });

        // Floating Particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.opacity = Math.random() * 0.5;
            document.querySelector('.hero-section').appendChild(particle);

            gsap.to(particle, {
                y: -100 - Math.random() * 200,
                x: Math.random() * 100 - 50,
                opacity: 0,
                duration: 3 + Math.random() * 4,
                repeat: -1,
                delay: Math.random() * 3,
                ease: 'none'
            });
        }

        // Stats Counter Animation
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            ScrollTrigger.create({
                trigger: stat,
                start: 'top 80%',
                onEnter: () => {
                    gsap.to(stat, {
                        innerHTML: target,
                        duration: 2,
                        snap: { innerHTML: 1 },
                        ease: 'power2.out'
                    });
                }
            });
        });

        // Skill Bars Animation
        const skillFills = document.querySelectorAll('.skill-fill');
        skillFills.forEach(fill => {
            const width = fill.getAttribute('data-width');
            ScrollTrigger.create({
                trigger: fill,
                start: 'top 80%',
                onEnter: () => {
                    fill.style.width = width;
                }
            });
        });

        // Section Reveal Animations
        

        // About Image Animation
        gsap.from('.about-image-wrapper', {
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 70%'
            }
        });

        // Portfolio Cards Stagger
       

        // Service Boxes Stagger
       

        // Testimonial Cards Stagger
        gsap.from('.testimonial-card', {
            x: 80,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.testimonials-section',
                start: 'top 70%'
            }
        });

        // Contact Form Animation
        gsap.from('.contact-form', {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top 70%'
            }
        });

        // Glitch Effect Random Trigger
        setInterval(() => {
            const glitch = document.querySelector('.glitch');
            glitch.style.animation = 'none';
            setTimeout(() => {
                glitch.style.animation = '';
            }, 10);
        }, 5000);

        // Form submission
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
        });