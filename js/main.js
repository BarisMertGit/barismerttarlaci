/* ===================================
   Barış Portfolio - JavaScript
   With Language Switcher (TR/EN)
   =================================== */

// Translations
const translations = {
    en: {
        // Navigation
        navHome: 'Home',
        navProjects: 'Projects',
        navStory: 'Career',
        navContact: 'Contact',

        // Home Page
        heroTitle: 'Hello, I\'m',
        heroName: 'Barış',
        heroRole: 'MIS Graduate & Software Developer',
        heroDescription: 'Management Information Systems graduate with a passion for software development. I specialize in building complex Genetic Algorithm-based scheduling systems (FastAPI, DEAP, PostgreSQL) to solve NP-Hard optimization problems. Experienced in ERP (Odoo) module development, IT troubleshooting & infrastructure support, data analysis with R and Power BI, and driving digital transformation across organizations.',
        btnDownloadCV: 'Download CV',
        btnViewWork: 'View My Work',
        aboutTitle: 'About Me',
        aboutText1: 'Management Information Systems graduate with hands-on experience in software development. I specialize in building complex Genetic Algorithm-based scheduling systems (FastAPI, DEAP, PostgreSQL) to solve NP-Hard optimization problems. Experienced in customizing and developing Odoo ERP modules.',
        aboutText2: 'Highly proficient in IT troubleshooting, data analysis, visualization, and database querying using MySQL, R, Power BI, and Tableau to drive process optimization and support digital transformation.',
        skillsTitle: 'Key Competencies',

        // Projects Page
        projectsTitle: 'My Projects',
        projectsSubtitle: 'A collection of work that showcases my skills, creativity, and passion for building amazing digital experiences.',
        viewCode: 'View Code',
        liveDemo: 'Live Demo',

        // Project Cards
        project1Title: 'Automated Scheduling System',
        project1Desc: 'A comprehensive Full-Stack application using Python and Genetic Algorithms to solve automated timetabling challenges. Utilizes custom genetic algorithms to intelligently optimize schedules while adhering to complex resource constraints.',
        project2Title: 'Mail Agent',
        project2Desc: 'An intelligent email management and analysis application. Automates email processing workflows with smart categorization and response suggestions using Python and NLP.',
        project3Title: 'Passport Power Analysis',
        project3Desc: 'Global socio-economic analysis using R programming, implementing K-Means clustering algorithms for data segmentation. Visualizes distinct data patterns through heat maps to interpret complex socio-economic trends.',

        // Story Page
        storyTitle: 'Career',

        // Timeline
        timeline1Date: '09/2021 - 06/2026',
        timeline1Title: 'University (Graduated)',
        timeline1Subtitle: 'Bachelor of Management of Information Systems (EN)',
        timeline1Desc: 'Graduated from İzmir Bakırçay University with a degree in Management Information Systems. Focused on software development, data analysis, and business processes throughout the program. Completed various projects including genetic algorithm-based scheduling systems and data visualization applications.',

        timeline2Date: '02/2026 - 05/2026',
        timeline2Title: 'Technical Support Intern',
        timeline2Subtitle: 'Enercon Wind Energy Turbine Installation Services Ltd.',
        timeline2Desc: 'Resolved hardware and software issues, providing IT and network support. Created interactive performance reports using Power BI and Excel for data-driven decision making. Played an active role in IT asset management processes, ensuring the seamless operation of corporate technology infrastructure.',

        timeline3Date: '06/2025 - 02/2026',
        timeline3Title: 'Software Intern',
        timeline3Subtitle: 'Değer Steel Metal Industry and Trade Inc.',
        timeline3Desc: 'Developed modules within the Odoo ERP system to automate tracking of industrial equipment, simplifying the digitalization of operational processes. Designed system architecture and back-end solutions to optimize equipment management processes and streamline workflows. Developed software-based tools to increase network infrastructure efficiency and ensure continuity of inter-system integration.',

        timeline4Date: '02/2024 - 04/2024',
        timeline4Title: 'Intern',
        timeline4Subtitle: 'Corede Technology',
        timeline4Desc: 'Systematically automated CRM and candidate database management to streamline recruitment processes. Conducted comprehensive market research and data analysis to identify new business development opportunities. Enhanced digital productivity company-wide by developing inter-team communication and remote work models.',

        // Contact Page
        contactTitle: 'Get In Touch',
        contactSubtitle: 'Have a project in mind or just want to say hello? I\'d love to hear from you!',
        formName: 'Your Name',
        formEmail: 'Email Address',
        formMessage: 'Your Message',
        formNamePlaceholder: 'John Doe',
        formEmailPlaceholder: 'john@example.com',
        formMessagePlaceholder: 'Tell me about your project or just say hi...',
        formSubmit: 'Send Message',
        formErrorRequired: 'This field is required',
        formErrorEmail: 'Please enter a valid email',
        socialTitle: 'Let\'s Connect',
        socialText: 'Feel free to reach out through any of these platforms. I\'m always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.',
        locationTitle: '📍 Based in İzmir, Turkey',
        locationText: 'Available for remote work worldwide',

        // Footer
        footerText: 'All rights reserved.'
    },
    tr: {
        // Navigation
        navHome: 'Ana Sayfa',
        navProjects: 'Projeler',
        navStory: 'Kariyer',
        navContact: 'İletişim',

        // Home Page

        heroTitle: 'Merhaba, ben',
        heroName: 'Barış Mert',
        heroRole: 'YBS Mezunu & Yazılım Geliştirici',
        heroDescription: 'Yazılım geliştirme tutkusu ile Yönetim Bilişim Sistemleri mezunuyum. NP-Hard optimizasyon problemlerini çözmek için Genetik Algoritma tabanlı zamanlama sistemleri (FastAPI, DEAP, PostgreSQL) geliştirme konusunda uzmanlaşıyorum. ERP (Odoo) modül geliştirme, BT sorun giderme ve altyapı desteği, R ve Power BI ile veri analizi ve organizasyonlarda dijital dönüşüm konularında deneyimliyim.',
        btnDownloadCV: 'CV İndir',
        btnViewWork: 'Çalışmalarımı Gör',
        aboutTitle: 'Hakkımda',
        aboutText1: 'Yazılım geliştirme konusunda uygulamalı deneyime sahip Yönetim Bilişim Sistemleri mezunuyum. NP-Hard optimizasyon problemlerini çözmek için karmaşık Genetik Algoritma tabanlı zamanlama sistemleri (FastAPI, DEAP, PostgreSQL) geliştirme konusunda uzmanlaştım. Odoo ERP modülleri özelleştirme ve geliştirme alanında deneyimliyim.',
        aboutText2: 'BT sorun giderme, MySQL, R, Power BI ve Tableau kullanarak veri analizi, görselleştirme ve veritabanı sorgulama konularında yüksek yetkinliğe sahibim.',
        skillsTitle: 'Temel Yetkinlikler',

        // Projects Page
        projectsTitle: 'Projelerim',
        projectsSubtitle: 'Becerilerimi, yaratıcılığımı ve harika dijital deneyimler oluşturma tutkumu sergileyen bir çalışma koleksiyonu.',
        viewCode: 'Kodu Gör',
        liveDemo: 'Canlı Demo',

        // Project Cards
        project1Title: 'Otomatik Ders Planlama Sistemi',
        project1Desc: 'Otomatik ders çizelgeleme problemlerini çözmek için Python ve Genetik Algoritmalar kullanan kapsamlı bir Full-Stack uygulama. Karmaşık kaynak kısıtlamalarına uyarak programları akıllıca optimize eder.',
        project2Title: 'Mail Agent',
        project2Desc: 'Akıllı e-posta yönetimi ve analiz uygulaması. Python ve NLP kullanarak akıllı kategorizasyon ve yanıt önerileri ile e-posta işleme iş akışlarını otomatikleştirir.',
        project3Title: 'Pasaport Gücü Analizi',
        project3Desc: 'R programlama kullanarak küresel sosyo-ekonomik analiz. Veri segmentasyonu için K-Means kümeleme algoritmaları uygular ve ısı haritaları ile veri kalıplarını görselleştirir.',

        // Story Page
        storyTitle: 'Kariyer',

        // Timeline
        timeline1Date: '09/2021 - 06/2026',
        timeline1Title: 'Üniversite (Mezun)',
        timeline1Subtitle: 'YBS Lisans (İngilizce)',
        timeline1Desc: 'İzmir Bakırçay Üniversitesi Yönetim Bilişim Sistemleri bölümünden mezun oldum. Program boyunca yazılım geliştirme, veri analizi ve iş süreçlerine odaklandım. Genetik algoritma tabanlı zamanlama sistemleri ve veri görselleştirme uygulamaları dahil çeşitli projeleri tamamladım.',

        timeline2Date: '02/2026 - 05/2026',
        timeline2Title: 'Teknik Destek Stajyeri',
        timeline2Subtitle: 'Enercon Rüzgar Enerji Santrali Kurulum Hizmetleri Ltd.',
        timeline2Desc: 'Donanım ve yazılım sorunlarını gidererek BT ve ağ desteği sağladım. Power BI ve Excel kullanarak veri analitiğine dayalı etkileşimli performans raporları oluşturdum. BT varlık yönetimi süreçlerinde aktif rol alarak kurumsal teknoloji altyapısının kesintisiz çalışmasına katkı sağladım.',

        timeline3Date: '06/2025 - 02/2026',
        timeline3Title: 'Yazılım Stajyeri',
        timeline3Subtitle: 'Değer Çelik Metal Sanayi ve Ticaret A.Ş.',
        timeline3Desc: 'Odoo ERP sistemi içinde endüstriyel ekipmanların takibini otomatikleştiren modüller geliştirerek, operasyonel süreçlerin dijitalleşmesini kolaylaştırdım. Sistem mimarisi ve arka uç çözümleri, ekipman yönetimi süreçlerini optimize etmek ve iş akışlarını kolaylaştırmak üzere tasarlandı. Ağ altyapısının verimliliğini artırmak ve sistemler arası entegrasyonun sürekliliğini sağlamak amacıyla yazılım tabanlı araçlar geliştirildi.',

        timeline4Date: '02/2024 - 04/2024',
        timeline4Title: 'Stajyer',
        timeline4Subtitle: 'Corede Technology',
        timeline4Desc: 'CRM ve aday veri tabanı yönetilerek işe alım süreçleri sistematik olarak otomatik hale getirildi. Pazar araştırması ve veri analizi yapılarak yeni iş geliştirme fırsatları kapsamlı şekilde belirlendi. Ekipler arası iletişim ve uzaktan çalışma modelleri geliştirilerek şirket genelinde dijital verimlilik artırıldı.',

        // Contact Page
        contactTitle: 'İletişim',
        contactSubtitle: 'Aklınızda bir proje mi var yoksa sadece merhaba mı demek istiyorsunuz? Sizden haber almak isterim!',
        formName: 'Adınız',
        formEmail: 'E-posta Adresi',
        formMessage: 'Mesajınız',
        formNamePlaceholder: 'Ahmet Yılmaz',
        formEmailPlaceholder: 'ahmet@ornek.com',
        formMessagePlaceholder: 'Projeniz hakkında bilgi verin veya sadece merhaba deyin...',
        formSubmit: 'Mesaj Gönder',
        formErrorRequired: 'Bu alan zorunludur',
        formErrorEmail: 'Geçerli bir e-posta girin',
        socialTitle: 'İletişim Adresleri',
        socialText: 'Bu platformlardan herhangi biri aracılığıyla bana ulaşmaktan çekinmeyin. Yeni projeleri, yaratıcı fikirleri veya vizyonunuzun bir parçası olma fırsatlarını tartışmak için her zaman heyecanlıyım.',
        locationTitle: '📍 Türkiye\'de',
        locationText: 'Dünya çapında uzaktan çalışmaya uygun',

        // Footer
        footerText: 'Tüm hakları saklıdır.'
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initContactForm();
    initLanguageSwitcher();

    // Apply saved language
    applyLanguage(currentLang);
});

/* ===== Language Switcher ===== */
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        // Set active state based on current language
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }

        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLang) return;

            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Save and apply language
            currentLang = lang;
            localStorage.setItem('lang', lang);
            applyLanguage(lang);
        });
    });
}

function applyLanguage(lang) {
    const t = translations[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (key in t) {
            el.textContent = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

/* ===== Mobile Navigation ===== */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a:not(.lang-btn)');

    if (hamburger && navLinks) {
        // Toggle mobile menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinksItems.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/* ===== Scroll Animations ===== */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

/* ===== Contact Form Validation ===== */
function initContactForm() {
    const form = document.querySelector('.contact-form');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        const formGroups = form.querySelectorAll('.form-group');
        const t = translations[currentLang];

        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const errorSpan = group.querySelector('.form-error');

            if (input && input.hasAttribute('required')) {
                if (input.value.trim() === '') {
                    group.classList.add('error');
                    if (errorSpan) errorSpan.textContent = t.formErrorRequired;
                    isValid = false;
                } else if (input.type === 'email' && !isValidEmail(input.value)) {
                    group.classList.add('error');
                    if (errorSpan) errorSpan.textContent = t.formErrorEmail;
                    isValid = false;
                } else {
                    group.classList.remove('error');
                }
            }
        });

        if (isValid) {
            // Show success message
            showFormSuccess(form);
        }
    });

    // Remove error on input
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.closest('.form-group').classList.remove('error');
        });
    });
}

/* ===== Email Validation ===== */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/* ===== Form Success Message ===== */
function showFormSuccess(form) {
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    const successText = currentLang === 'tr' ? '✓ Mesaj Gönderildi!' : '✓ Message Sent!';

    button.textContent = successText;
    button.style.background = '#22c55e';
    button.disabled = true;

    // Reset form
    form.reset();

    // Restore button after 3 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        button.disabled = false;
    }, 3000);
}

/* ===== Smooth Scroll for Anchor Links ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===== Navbar Background on Scroll ===== */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        }
    }
});
