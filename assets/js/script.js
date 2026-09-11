document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Enhanced Scroll Animation (IntersectionObserver) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation delay
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach((el) => observer.observe(el));

    // --- 2. Bottom Right Cookie Consent Banner ---
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');

    if (cookieBanner) {
        const cookieConsent = localStorage.getItem('rankedbw_cookie_consent');

        if (!cookieConsent) {
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 600);
        }

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('rankedbw_cookie_consent', 'accepted');
            hideCookieBanner();
        });

        rejectBtn.addEventListener('click', () => {
            localStorage.setItem('rankedbw_cookie_consent', 'rejected');
            hideCookieBanner();
        });

        function hideCookieBanner() {
            cookieBanner.classList.remove('show');
        }
    }
});