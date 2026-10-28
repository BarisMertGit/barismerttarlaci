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
        navCertificates: 'Certificates',
        navContact: 'Contact',

        // Home Page
        heroGreeting: 'Management Information Systems · İzmir Bakırçay University',
        heroTitle: 'Hello, I\'m',
        heroName: 'Barış Mert',
        heroRole: 'MIS Graduate & Software Developer',
        heroDescription: 'MIS graduate with experience in data analysis, ERP systems, and software development — focused on bridging digital transformation with business processes.',
        btnDownloadCV: 'Download CV',
        btnViewWork: 'View My Work',
        btnContact: 'Get In Touch',
        aboutTitle: 'About Me',
        aboutText1: 'Management Information Systems graduate with hands-on experience in software development. I specialize in building complex Genetic Algorithm-based scheduling systems (FastAPI, DEAP, PostgreSQL) to solve NP-Hard optimization problems.',
        aboutText2: 'Highly proficient in IT troubleshooting, data analysis, visualization, and database querying using MySQL, R, Power BI, and Tableau to drive process optimization and support digital transformation.',
        skillsTitle: 'Key Competencies',

        // Projects Page
        projectsTitle: 'My Projects',
        projectsSubtitle: 'A collection of work that showcases my skills, creativity, and passion for building amazing digital experiences.',
        viewCode: 'View Code',
        liveDemo: 'Live Demo',

        // Project Cards
        project1Date: '2025–2026',
        project1Title: 'Automated Scheduling System',
        project1Desc: 'A comprehensive Full-Stack application using Python and Genetic Algorithms to solve automated timetabling challenges. Utilizes custom genetic algorithms to intelligently optimize schedules while adhering to complex resource constraints.',
        project2Date: 'Apr–May 2025',
        project2Title: 'Global Passport Power Analysis',
        project2Desc: 'Analyzed global passport power using HDI and political stability variables with R. Grouped countries using K-means and hierarchical clustering, visualized with world heat maps.',
        project3Date: '2025–2026',
        project3Title: 'Odoo ERP Equipment Tracking Module',
        project3Desc: 'Developed an Odoo module at Değer Steel to automate industrial equipment tracking. Digitalized operational processes with system architecture and back-end integrations.',
        project4Date: 'Personal Project',
        project4Title: 'Mail Agent Automation',
        project4Desc: 'An agent system that automates email processes. Built to intelligently manage workflows with smart categorization and response suggestions.',
        project5Date: 'Personal Project',
        project5Title: 'Daily News Collector',
        project5Desc: 'An application that collects, summarizes, and lists daily news. Built to automate information tracking and stay up-to-date effortlessly.',
        project6Date: 'Academic',
        project6Title: 'Digital Transformation of Turkey',
        project6Desc: 'An academic study comprehensively examining Turkey\'s digital transformation process. Includes policy analysis, sectoral impact assessment, and technological infrastructure evaluation.',

        // Story Page
        storyTitle: 'Career',

        // Timeline
        timeline1Date: '09/2021 - 06/2026',
        timeline1Title: 'University (Graduated)',
        timeline1Subtitle: 'Bachelor of Management of Information Systems (EN)',
        timeline1Desc: 'Graduated from İzmir Bakırçay University with a degree in Management Information Systems. Focused on software development, data analysis, and business processes throughout the program. Completed various projects including genetic algorithm-based scheduling systems and data visualization applications.',

        timeline2Date: '02/2026 - 06/2026',
        timeline2Title: 'IT Intern',
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

        timeline5Date: '09/2023 - 11/2023',
        timeline5Title: 'HR Intern',
        timeline5Subtitle: 'Human Ports — Belgrade, Serbia',
        timeline5Desc: 'Led corporate branding development projects in an international internship program. Produced social media content and developed corporate strategy. Managed recruitment and CRM processes.',

        // Certificates Page
        certificatesTitle: 'Certificates & Training',
        certificatesSubtitle: 'Professional certifications and educational achievements that validate my expertise.',
        cert1Title: 'SQL — Intermediate',
        cert1Issuer: 'HackerRank',
        cert1Date: 'November 2025',
        cert2Title: 'RPA Citizen Developer Foundation',
        cert2Issuer: 'UiPath Academy',
        cert2Date: 'December 2024',
        cert3Title: 'Canias ERP Module Training',
        cert3Issuer: 'IAS Business Academy',
        cert3Date: 'June 2024',
        cert4Title: 'HR & Project Management',
        cert4Issuer: 'Human Ports (Belgrade)',
        cert4Date: 'November 2023',
        cert5Title: 'English Education in Business Life',
        cert5Issuer: 'Human Ports',
        cert5Date: 'November 2023',
        cert6Title: 'HR & Social Media Marketing Training',
        cert6Issuer: 'Sport Center Academy',
        cert6Date: '2023',

        // Contact Page
        contactTitle: 'Get In Touch',
        contactSubtitle: 'Have a project in mind or just want to say hello? I\'d love to hear from you!',
        contactCTA: 'Let\'s work together.',
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
        socialText: 'Want to collaborate on data analytics, ERP integration, or software development? Feel free to reach out through any of these platforms.',
        phoneTitle: 'Phone',
        locationTitle: 'Based in İzmir, Turkey',
        locationText: 'Available for remote work worldwide',

        // Footer
        footerText: 'All rights reserved.'
    },
    tr: {
        // Navigation
        navHome: 'Ana Sayfa',
        navProjects: 'Projeler',
        navStory: 'Kariyer',
        navCertificates: 'Sertifikalar',
        navContact: 'İletişim',

        // Home Page
        heroGreeting: 'Yönetim Bilişim Sistemleri · İzmir Bakırçay Üniversitesi',
        heroTitle: 'Merhaba, ben',
        heroName: 'Barış Mert',
        heroRole: 'YBS Mezunu & Yazılım Geliştirici',
        heroDescription: 'Veri analizi, ERP sistemleri ve yazılım geliştirme alanlarında deneyim kazanmış; dijital dönüşümü iş süreçleriyle buluşturmaya odaklanan bir MIS mezunuyum.',
        btnDownloadCV: 'CV İndir',
        btnViewWork: 'Çalışmalarımı Gör',
        btnContact: 'İletişime Geç',
        aboutTitle: 'Hakkımda',
        aboutText1: 'Yazılım geliştirme konusunda uygulamalı deneyime sahip Yönetim Bilişim Sistemleri mezunuyum. NP-Hard optimizasyon problemlerini çözmek için karmaşık Genetik Algoritma tabanlı zamanlama sistemleri (FastAPI, DEAP, PostgreSQL) geliştirme konusunda uzmanlaştım.',
        aboutText2: 'BT sorun giderme, MySQL, R, Power BI ve Tableau kullanarak veri analizi, görselleştirme ve veritabanı sorgulama konularında yüksek yetkinliğe sahibim.',
        skillsTitle: 'Temel Yetkinlikler',

        // Projects Page
        projectsTitle: 'Projelerim',
        projectsSubtitle: 'Becerilerimi, yaratıcılığımı ve harika dijital deneyimler oluşturma tutkumu sergileyen bir çalışma koleksiyonu.',
        viewCode: 'Kodu Gör',
        liveDemo: 'Canlı Demo',

        // Project Cards
        project1Date: '2025–2026',
        project1Title: 'Otomatik Ders Programı Planlama Sistemi',
        project1Desc: 'Ders programı oluşturmayı otomatikleştiren Python uygulaması. Karmaşık kaynak kısıtlamalarını Genetik Algoritma ile optimize ederek manuel iş yükünü tek bir arayüze indirdi.',
        project2Date: 'Nis–May 2025',
        project2Title: 'Küresel Pasaport Gücü Analizi',
        project2Desc: 'R ile HDI ve siyasi istikrar değişkenlerini kullanarak küresel pasaport gücünü analiz etti. K-means ve hiyerarşik kümeleme ile ülkeleri gruplandırıp dünya ısı haritalarıyla görselleştirdi.',
        project3Date: '2025–2026',
        project3Title: 'Odoo ERP Ekipman Takip Modülü',
        project3Desc: 'Değer Çelik\'te endüstriyel ekipman takibini otomatikleştiren Odoo modülü geliştirdi. Sistem mimarisi ve arka uç entegrasyonlarıyla operasyonel süreçleri dijitalleştirdi.',
        project4Date: 'Kişisel Proje',
        project4Title: 'Mail Agent Otomasyonu',
        project4Desc: 'E-posta süreçlerini otomatikleştiren bir ajan sistemi. İş akışlarını akıllı şekilde yönetmek için geliştirildi.',
        project5Date: 'Kişisel Proje',
        project5Title: 'Günlük Haber Toplayıcı',
        project5Desc: 'Günlük haberleri toplayarak özetleyen ve listeleyen bir uygulama. Bilgi takibini otomatikleştirmek amacıyla geliştirildi.',
        project6Date: 'Akademik',
        project6Title: 'Türkiye\'nin Dijital Dönüşümü',
        project6Desc: 'Türkiye\'nin dijital dönüşüm sürecini kapsamlı biçimde ele alan akademik çalışma. Politika analizi, sektörel etki ve teknolojik altyapı değerlendirmesi içeriyor.',

        // Story Page
        storyTitle: 'Kariyer',

        // Timeline
        timeline1Date: '09/2021 - 06/2026',
        timeline1Title: 'Üniversite (Mezun)',
        timeline1Subtitle: 'YBS Lisans (İngilizce)',
        timeline1Desc: 'İzmir Bakırçay Üniversitesi Yönetim Bilişim Sistemleri bölümünden mezun oldum. Program boyunca yazılım geliştirme, veri analizi ve iş süreçlerine odaklandım. Genetik algoritma tabanlı zamanlama sistemleri ve veri görselleştirme uygulamaları dahil çeşitli projeleri tamamladım.',

        timeline2Date: '02/2026 - 06/2026',
        timeline2Title: 'BT Stajyeri',
        timeline2Subtitle: 'Enercon Rüzgar Enerji Santrali Kurulum Hizmetleri Ltd.',
        timeline2Desc: 'Donanım ve yazılım sorunlarını çözerek BT ve ağ desteği sağladı. Power BI ve Excel ile etkileşimli performans raporları oluşturdu. BT varlık yönetim süreçlerinde aktif rol üstlendi.',

        timeline3Date: '06/2025 - 02/2026',
        timeline3Title: 'Yazılım Stajyeri',
        timeline3Subtitle: 'Değer Çelik Metal Sanayi ve Ticaret A.Ş.',
        timeline3Desc: 'Odoo ERP içinde ekipman takip modülleri geliştirdi. Ağ altyapısı verimliliğini artıracak yazılım araçları oluşturdu. Sistem entegrasyonunun sürekliliğini sağladı.',

        timeline4Date: '02/2024 - 04/2024',
        timeline4Title: 'Stajyer',
        timeline4Subtitle: 'Corede Technology',
        timeline4Desc: 'CRM ve aday veri tabanı yönetimiyle işe alım süreçlerini otomasyona taşıdı. Pazar araştırması ve veri analizi yaparak yeni iş geliştirme fırsatları belirledi.',

        timeline5Date: '09/2023 - 11/2023',
        timeline5Title: 'İnsan Kaynakları Stajyeri',
        timeline5Subtitle: 'Human Ports — Belgrad, Sırbistan',
        timeline5Desc: 'Uluslararası staj programında kurumsal marka geliştirme projesine liderlik etti. Sosyal medya içerikleri üretti, kurumsal strateji geliştirdi. İşe alım ve CRM süreçlerini yönetti.',

        // Certificates Page
        certificatesTitle: 'Belgeler & Eğitimler',
        certificatesSubtitle: 'Uzmanlığımı doğrulayan profesyonel sertifikalar ve eğitim başarıları.',
        cert1Title: 'SQL — Intermediate',
        cert1Issuer: 'HackerRank',
        cert1Date: 'Kasım 2025',
        cert2Title: 'RPA Citizen Developer Foundation',
        cert2Issuer: 'UiPath Academy',
        cert2Date: 'Aralık 2024',
        cert3Title: 'Canias ERP Modül Eğitimleri',
        cert3Issuer: 'IAS Business Academy',
        cert3Date: 'Haziran 2024',
        cert4Title: 'İnsan Kaynakları & Proje Yönetimi',
        cert4Issuer: 'Human Ports (Belgrad)',
        cert4Date: 'Kasım 2023',
        cert5Title: 'English Education in Business Life',
        cert5Issuer: 'Human Ports',
        cert5Date: 'Kasım 2023',
        cert6Title: 'İK & Sosyal Medya Pazarlama Eğitimleri',
        cert6Issuer: 'Sport Center Academy',
        cert6Date: '2023',

        // Contact Page
        contactTitle: 'İletişim',
        contactSubtitle: 'Aklınızda bir proje mi var yoksa sadece merhaba mı demek istiyorsunuz? Sizden haber almak isterim!',
        contactCTA: 'Birlikte çalışalım.',
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
        socialText: 'Veri analitiği, ERP entegrasyonu veya yazılım geliştirme konularında iş birliği yapmak ister misiniz? Mesaj atın.',
        phoneTitle: 'Telefon',
        locationTitle: 'Türkiye\'de',
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
