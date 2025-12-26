// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, observerOptions);

fadeElements.forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Animate language bars on scroll
const languageBars = document.querySelectorAll('.language-bar span');
const languageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => { entry.target.style.width = width; }, 200);
        }
    });
}, { threshold: 0.5 });

languageBars.forEach(bar => languageObserver.observe(bar));

// Translation System
function translatePage(lang) {
    const translation = translations[lang];
    if (!translation) return;

    // Apply RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('data-lang', lang);

    // Navigation
    const navItems = document.querySelectorAll('.nav-links a');
    navItems[0].textContent = translation.navHome;
    navItems[1].textContent = translation.navAbout;
    navItems[2].textContent = translation.navExperience;
    navItems[3].textContent = translation.navSkills;
    navItems[4].textContent = translation.navEducation;
    navItems[5].textContent = translation.navContact;

    // Hero Section
    const heroBadge = document.querySelector('.hero-badge-text');
    if (heroBadge) heroBadge.textContent = translation.heroBadge;

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleSpan = heroTitle.querySelector('span');
        if (titleSpan) {
            heroTitle.innerHTML = translation.heroName.split(' ').slice(0, 2).join(' ') + '<br><span>' + translation.heroName.split(' ').slice(2).join(' ') + '</span>';
        }
    }

    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.textContent = translation.heroDescription;

    const heroStats = document.querySelectorAll('.hero-stat-label');
    if (heroStats[0]) heroStats[0].textContent = translation.heroStatsExp;
    if (heroStats[1]) heroStats[1].textContent = translation.heroStatsIndustries;
    if (heroStats[2]) heroStats[2].textContent = translation.heroStatsLanguages;

    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons[0]) heroButtons[0].innerHTML = '<span>📧</span> ' + translation.heroBtn1;
    if (heroButtons[1]) heroButtons[1].textContent = translation.heroBtn2;

    const floatCards = document.querySelectorAll('.float-card-title');
    if (floatCards[0]) floatCards[0].textContent = translation.heroFloatSpec;
    if (floatCards[1]) floatCards[1].textContent = translation.heroFloatFocus;

    const floatValues = document.querySelectorAll('.float-card-value');
    if (floatValues[0]) floatValues[0].textContent = translation.heroFloatValue1;
    if (floatValues[1]) floatValues[1].textContent = translation.heroFloatValue2;

    // About Section
    const aboutLabel = document.querySelector('.about .section-label');
    if (aboutLabel) aboutLabel.innerHTML = '<span></span>' + translation.aboutLabel + '<span></span>';

    const aboutTitle = document.querySelector('.about .section-title');
    if (aboutTitle) aboutTitle.innerHTML = translation.aboutTitle + ' <span>' + translation.aboutTitleSpan + '</span>';

    const aboutBadge = document.querySelector('.about-experience-badge-text');
    if (aboutBadge) aboutBadge.textContent = translation.aboutBadgeYears;

    const aboutH3 = document.querySelector('.about-text h3');
    if (aboutH3) aboutH3.textContent = translation.aboutH3;

    const aboutP = document.querySelectorAll('.about-text p');
    if (aboutP[0]) aboutP[0].textContent = translation.aboutP1;
    if (aboutP[1]) aboutP[1].textContent = translation.aboutP2;

    const aboutFeatures = document.querySelectorAll('.about-feature-text');
    if (aboutFeatures[0]) aboutFeatures[0].textContent = translation.aboutFeature1;
    if (aboutFeatures[1]) aboutFeatures[1].textContent = translation.aboutFeature2;
    if (aboutFeatures[2]) aboutFeatures[2].textContent = translation.aboutFeature3;
    if (aboutFeatures[3]) aboutFeatures[3].textContent = translation.aboutFeature4;

    // Experience Section
    const expLabel = document.querySelector('.experience .section-label');
    if (expLabel) expLabel.innerHTML = '<span></span>' + translation.expLabel + '<span></span>';

    const expTitle = document.querySelector('.experience .section-title');
    if (expTitle) expTitle.innerHTML = translation.expTitle + ' <span>' + translation.expTitleSpan + '</span>';

    const expCards = document.querySelectorAll('.experience-card');
    if (expCards[0]) {
        const h3 = expCards[0].querySelector('h3');
        const company = expCards[0].querySelector('.experience-company');
        const desc = expCards[0].querySelector('.experience-description');
        if (h3) h3.textContent = translation.expJob1;
        if (company) company.innerHTML = '<span>📍</span> ' + translation.expCompany1;
        if (desc) desc.textContent = translation.expDesc1;
    }
    if (expCards[1]) {
        const h3 = expCards[1].querySelector('h3');
        const company = expCards[1].querySelector('.experience-company');
        const desc = expCards[1].querySelector('.experience-description');
        if (h3) h3.textContent = translation.expJob2;
        if (company) company.innerHTML = '<span>📍</span> ' + translation.expCompany2;
        if (desc) desc.textContent = translation.expDesc2;
    }
    if (expCards[2]) {
        const h3 = expCards[2].querySelector('h3');
        const company = expCards[2].querySelector('.experience-company');
        const desc = expCards[2].querySelector('.experience-description');
        if (h3) h3.textContent = translation.expJob3;
        if (company) company.innerHTML = '<span>📍</span> ' + translation.expCompany3;
        if (desc) desc.textContent = translation.expDesc3;
    }

    // Skills Section
    const skillsLabel = document.querySelector('.skills .section-label');
    if (skillsLabel) skillsLabel.innerHTML = '<span></span>' + translation.skillsLabel + '<span></span>';

    const skillsTitle = document.querySelector('.skills .section-title');
    if (skillsTitle) skillsTitle.innerHTML = translation.skillsTitle + ' <span>' + translation.skillsTitleSpan + '</span>';

    const skillBubbles = document.querySelectorAll('.bubble-label');
    const skillKeys = ['skillOps', 'skillCustomer', 'skillSales', 'skillAnalytics', 'skillSoftware',
                       'skillComm', 'skillLeadership', 'skillCoord', 'skillReporting', 'skillCRM',
                       'skillProblem', 'skillTally'];
    skillBubbles.forEach((bubble, index) => {
        if (translation[skillKeys[index]]) {
            bubble.textContent = translation[skillKeys[index]];
        }
    });

    // Education Section
    const eduLabel = document.querySelector('.education .section-label');
    if (eduLabel) eduLabel.innerHTML = '<span></span>' + translation.eduLabel + '<span></span>';

    const eduTitle = document.querySelector('.education .section-title');
    if (eduTitle) eduTitle.innerHTML = translation.eduTitle + ' <span>' + translation.eduTitleSpan + '</span>';

    const eduCards = document.querySelectorAll('.education-card');
    if (eduCards[0]) {
        const degree = eduCards[0].querySelector('.education-degree');
        const school = eduCards[0].querySelector('.education-school');
        const desc = eduCards[0].querySelector('.education-description');
        if (degree) degree.textContent = translation.eduDegree1;
        if (school) school.textContent = translation.eduSchool1;
        if (desc) desc.textContent = translation.eduDesc1;
    }
    if (eduCards[1]) {
        const degree = eduCards[1].querySelector('.education-degree');
        const school = eduCards[1].querySelector('.education-school');
        const desc = eduCards[1].querySelector('.education-description');
        if (degree) degree.textContent = translation.eduDegree2;
        if (school) school.textContent = translation.eduSchool2;
        if (desc) desc.textContent = translation.eduDesc2;
    }
    if (eduCards[2]) {
        const degree = eduCards[2].querySelector('.education-degree');
        const school = eduCards[2].querySelector('.education-school');
        const desc = eduCards[2].querySelector('.education-description');
        if (degree) degree.textContent = translation.eduDegree3;
        if (school) school.textContent = translation.eduSchool3;
        if (desc) desc.textContent = translation.eduDesc3;
    }

    // Languages Section
    const langLabel = document.querySelector('.languages .section-label');
    if (langLabel) langLabel.innerHTML = '<span></span>' + translation.langLabel + '<span></span>';

    const langTitle = document.querySelector('.languages .section-title');
    if (langTitle) langTitle.innerHTML = translation.langTitle + ' <span>' + translation.langTitleSpan + '</span>';

    const langCards = document.querySelectorAll('.language-name');
    if (langCards[0]) langCards[0].textContent = translation.langEnglish;
    if (langCards[1]) langCards[1].textContent = translation.langHindi;
    if (langCards[2]) langCards[2].textContent = translation.langUrdu;
    if (langCards[3]) langCards[3].textContent = translation.langTurkish;

    const langLevels = document.querySelectorAll('.language-level');
    if (langLevels[0]) langLevels[0].textContent = translation.langFluent;
    if (langLevels[1]) langLevels[1].textContent = translation.langNative;
    if (langLevels[2]) langLevels[2].textContent = translation.langNative;
    if (langLevels[3]) langLevels[3].textContent = translation.langBeginner;

    // Contact Section
    const contactLabel = document.querySelector('.contact .section-label');
    if (contactLabel) contactLabel.innerHTML = '<span></span>' + translation.contactLabel + '<span></span>';

    const contactTitle = document.querySelector('.contact .section-title');
    if (contactTitle) contactTitle.innerHTML = translation.contactTitle + ' <span>' + translation.contactTitleSpan + '</span>';

    const contactCardLabels = document.querySelectorAll('.contact-card-label');
    if (contactCardLabels[0]) contactCardLabels[0].textContent = translation.contactEmail;
    if (contactCardLabels[1]) contactCardLabels[1].textContent = translation.contactPhone;
    if (contactCardLabels[2]) contactCardLabels[2].textContent = translation.contactLinkedIn;

    const linkedInLink = document.querySelector('.contact-card-value a[href*="linkedin"]');
    if (linkedInLink) linkedInLink.textContent = translation.contactLinkedInText;

    const contactCTATitle = document.querySelector('.contact-cta h3');
    if (contactCTATitle) contactCTATitle.textContent = translation.contactCTATitle;

    const contactCTADesc = document.querySelector('.contact-cta p');
    if (contactCTADesc) contactCTADesc.textContent = translation.contactCTADesc;

    const contactCTABtn = document.querySelector('.contact-cta .btn');
    if (contactCTABtn) contactCTABtn.innerHTML = '<span>✉️</span> ' + translation.contactCTABtn;

    // Footer
    const footerText = document.querySelector('.footer-text');
    if (footerText) footerText.textContent = translation.footerText;

    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks[0]) footerLinks[0].textContent = translation.navHome;
    if (footerLinks[1]) footerLinks[1].textContent = translation.navAbout;
    if (footerLinks[2]) footerLinks[2].textContent = translation.navExperience;
    if (footerLinks[3]) footerLinks[3].textContent = translation.navContact;
}

// Language Switcher
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        langButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        const selectedLang = this.getAttribute('data-lang');

        // Store language preference
        localStorage.setItem('preferredLanguage', selectedLang);

        // Translate the page
        translatePage(selectedLang);
    });
});

// Load saved language preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const langBtn = document.querySelector(`[data-lang="${savedLang}"]`);
    if (langBtn) {
        langBtn.classList.add('active');
        translatePage(savedLang);
    }
});
