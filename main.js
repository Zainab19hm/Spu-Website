import './src/style.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine

/**
 * SHARED UTILITIES
 * Global helper functions used across multiple stores
 */
const spuUtils = {
    /**
     * Smoothly animate a numeric counter from 0 to a target value
     * @param {Object} item - An object with {value, current} properties
     * @param {number} duration - Animation duration in milliseconds (default 2000ms)
     */
    animateCounter(item, duration = 2000) {
        item.current = 0;
        const end = item.value;
        const frameRate = 1000 / 60; // 60 FPS
        const totalFrames = Math.round(duration / frameRate);
        const increment = end / totalFrames;
        let currentFrame = 0;

        const timer = setInterval(() => {
            currentFrame++;
            const nextValue = Math.round(increment * currentFrame);
            
            if (currentFrame >= totalFrames) {
                item.current = end;
                clearInterval(timer);
            } else {
                item.current = nextValue;
            }
        }, frameRate);
    }
};

/**
 * ALPINE.JS INITIALIZATION
 * Consolidation of all application state and data stores
 */
document.addEventListener('alpine:init', () => {
    
    // --- 1. GLOBAL APP STATE ---
    const savedLang = localStorage.getItem('lang') || 'en';
    Alpine.store('app', {
        currentLang: savedLang,
        // Common UI labels for global consistency
        ui: {
            viewAll: { en: 'View All', ar: 'عرض الكل' },
            learnMore: { en: 'LEARN MORE', ar: 'اعرف المزيد' },
            explore: { en: 'Explore', ar: 'استكشف' },
            exploreDetails: { en: 'Explore Details', ar: 'استكشاف التفاصيل' },
            next: { en: 'Next', ar: 'التالي' },
            prev: { en: 'Previous', ar: 'السابق' },
            noEvents: { en: 'No events scheduled for this date.', ar: 'لا توجد فعاليات مجدولة لهذا التاريخ.' },
            chooseAnother: { en: 'Please choose another day.', ar: 'الرجاء اختيار يوم آخر من التقويم.' },
            months: {
                en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                ar: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران', 'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول']
            }
        },
        setLang(lang) {
            this.currentLang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.lang = lang;
            localStorage.setItem('lang', lang);
        }
    });

    // Initialize document direction based on saved language
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLang;

    // --- 2. NAVIGATION & MENU ---
    Alpine.store('navigation', {
        menuItems: [
            {
                id: 1,
                labelAr: 'عن الجامعة', labelEn: 'About',
                hasDropdown: true,
                children: [
                    { labelAr: 'الرؤية والرسالة', labelEn: 'Vision & Mission', url: '#' },
                    { labelAr: 'كلمة رئيس الجامعة', labelEn: "President's Speech", url: '#' }
                ]
            },
            {
                id: 2,
                labelAr: 'الكليات', labelEn: 'Faculties',
                hasDropdown: true,
                children: [
                    { labelAr: 'الطب', labelEn: 'Medicine', url: '#' },
                    { labelAr: 'طب الأسنان', labelEn: 'Dentistry', url: '#' }
                ]
            },
            {
                id: 3,
                labelAr: 'القبول والتسجيل', labelEn: 'Admissions',
                hasDropdown: true,
                children: [
                    { labelAr: 'شروط القبول', labelEn: 'Admission Requirements', url: '#' },
                    { labelAr: 'الرسوم الدراسية', labelEn: 'Tuition Fees', url: '#' }
                ]
            },
            {
                id: 5,
                labelAr: 'الحياة الجامعية', labelEn: 'Campus Life',
                hasDropdown: true,
                children: [
                    { labelAr: 'المكتبة', labelEn: 'Library', url: '#' },
                    { labelAr: 'الأنشطة', labelEn: 'Activities', url: '#' }
                ]
            },
            { id: 4, labelAr: 'أخبارنا', labelEn: 'News', hasDropdown: false, url: '#' },
            { id: 6, labelAr: 'تواصل معنا', labelEn: 'Contact', hasDropdown: false, url: '#' }
        ]
    });

    // --- 3. HERO SLIDER ---
    Alpine.store('hero', {
        currentIndex: 0,
        isDarkImage: false,
        titleAr: 'الجامعة السورية الخاصة',
        titleEn: 'Syrian Private University',
        subtitleAr: 'تعليم أكاديمي متميز يجمع بين الخبرة والابتكار لبناء جيل مبدع.',
        subtitleEn: 'Explore accredited programs, campus life, and a direct path to your success.',
        images: [
            '/images/DSC_1015.JPG',
            '/images/DSC_1016.JPG',
            '/images/DSC_1060.jpg',
            '/images/DSC_1075.JPG'
        ],
        primaryBtnAr: 'استكشف البرامج', primaryBtnEn: 'Explore Programs',
        secondaryBtnAr: 'جولة افتراضية', secondaryBtnEn: 'Virtual Tour',

        init() {
            this.checkCurrentDarkness();
            // Auto-rotate hero images every 5 seconds
            setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
                this.checkCurrentDarkness();
            }, 5000);
        },

        checkCurrentDarkness() {
            const imgSrc = this.images[this.currentIndex];
            if (!imgSrc) return;
            
            const img = new Image();
            img.src = imgSrc;
            img.onload = () => {
                try {
                    const canvas = document.createElement('canvas');
                    canvas.width = 50;
                    canvas.height = 10; // We only sample the top section where the navbar sits
                    const ctx = canvas.getContext('2d', { willReadFrequently: true });
                    
                    // Draw top 20% of the image into our small 50x10 analytical canvas
                    ctx.drawImage(img, 0, 0, img.width, img.height * 0.2, 0, 0, 50, 10);
                    
                    const data = ctx.getImageData(0, 0, 50, 10).data;
                    let r = 0, g = 0, b = 0;
                    
                    for (let i = 0; i < data.length; i += 4) {
                        r += data[i];
                        g += data[i + 1];
                        b += data[i + 2];
                    }
                    
                    const pixelCount = data.length / 4;
                    r /= pixelCount;
                    g /= pixelCount;
                    b /= pixelCount;
                    
                    // Standard luminance formula
                    const perceivedLightness = (r * 299 + g * 587 + b * 114) / 1000;
                    
                    // If darkness threshold is met, consider it dark
                    this.isDarkImage = perceivedLightness < 150;
                } catch(e) {
                    // Fallback securely in case of cross-origin or canvas issues
                    this.isDarkImage = true; 
                    console.error('Image darkness calculation error:', e);
                }
            };
        }
    });

    // --- 4. MAIN UNIVERSITY STATISTICS ---
    Alpine.store('stats', {
        items: [
            { id: 1, labelAr: 'كلية علمية', labelEn: 'Faculties', value: 7, current: 0, svgPath: '/images/arcticons_emoji-classical-building.svg', plus: '' },
            { id: 2, labelAr: 'طالب وطالبة', labelEn: 'Enrolled Students', value: 8500, current: 0, svgPath: '/images/people-outline.svg', plus: '+' },
            { id: 3, labelAr: 'عام منذ التأسيس', labelEn: 'Years Since Founding', value: 20, current: 0, svgPath: '/images/time.svg', plus: '+' },
            { id: 4, labelAr: 'طالب خريج', labelEn: 'Graduated Students', value: 450, current: 0, svgPath: '/images/flowbite_user-graduate-outline.svg', plus: '+' }
        ],
        startCounting() {
            this.items.forEach(item => spuUtils.animateCounter(item));
        }
    });

    // --- 5. FACULTIES & ACADEMIC PROGRAMS ---
    Alpine.store('faculties', {
        activeFaculty: null,
        items: [
            { id: 1, nameAr: 'كلية الطب', nameEn: 'Faculty of Medicine', yearsAr: '6 سنوات', yearsEn: '6 years', color: '#c52d2f', logo: '/images/faculty-medicine-logo.png' },
            { id: 2, nameAr: 'كلية طب الأسنان', nameEn: 'Faculty of Dentistry', yearsAr: '5 سنوات', yearsEn: '5 years', color: '#2b7db3', logo: '/images/faculty-dentistry-logo.png' },
            { id: 3, nameAr: 'كلية الصيدلة', nameEn: 'Faculty of Pharmacy', yearsAr: '5 سنوات', yearsEn: '5 years', color: '#68bc7d', logo: '/images/faculty-pharmacy-logo.png' },
            { id: 4, nameAr: 'كلية هندسة الذكاء الاصطناعي', nameEn: 'Faculty of AI Engineering', yearsAr: '5 سنوات', yearsEn: '5 years', color: '#673695', logo: '/images/faculty-ai-engineering-logo.png', imgClass: 'scale-160' },
            { id: 5, nameAr: 'كلية هندسة البناء', nameEn: 'Faculty of Construction Engineering', yearsAr: '5 سنوات', yearsEn: '5 years', color: '#7e8b8c', logo: '/images/faculty-construction-engineering-logo.png', imgClass: 'scale-160' },
            { id: 6, nameAr: 'كلية هندسة البترول', nameEn: 'Faculty of Petroleum Engineering', yearsAr: '5 سنوات', yearsEn: '5 years', color: '#15585b', logo: '/images/faculty-petroleum-engineering-logo.png', imgClass: 'scale-140' },
            { id: 7, nameAr: 'كلية العلوم الإدارية', nameEn: 'Faculty of Administrative Sciences', yearsAr: '4 سنوات', yearsEn: '4 years', color: '#caa949', logo: '/images/faculty-admin-sciences-logo.png', imgClass: 'scale-140' }
        ]
    });

    // --- 6. TARGET AUDIENCE PATHS ---
    Alpine.store('paths', {
        activePath: null,
        items: [
            { id: 1, titleAr: 'الطلاب المستجدون', titleEn: 'Prospective Students', icon: '/images/bytesize_book.svg', linksAr: ['استكشاف البرامج', 'القبول', 'المنح الدراسية', 'الحياة الجامعية'], linksEn: ['Explore programs', 'Admission', 'Scholarships', 'Campus life'], actionAr: 'استكشاف القبول', actionEn: 'Explore Admissions' },
            { id: 2, titleAr: 'الطلاب الحاليون', titleEn: 'Current Students', icon: '/images/Vector-3.svg', linksAr: ['بوابات الدخول', 'الجداول', 'الخدمات', 'المصادر الأكاديمية'], linksEn: ['Access portals', 'Schedules', 'Services', 'Academic resources'], actionAr: 'عرض المصادر', actionEn: 'View Student Resources' },
            { id: 3, titleAr: 'الكادر التدريسي والمنظومة', titleEn: 'Faculty & Staff', icon: '/images/Vector-4.svg', linksAr: ['أدوات التدريس', 'السياسات', 'الأنظمة', 'الخدمات الداخلية'], linksEn: ['Find teaching tools', 'Policies', 'Systems', 'Internal services'], actionAr: 'استكشاف المصادر', actionEn: 'Explore Resources' },
            { id: 4, titleAr: 'الخريجون', titleEn: 'Alumni', icon: '/images/student.svg', linksAr: ['خدمات الخريجين', 'الشبكة', 'الفعاليات', 'التوظيف'], linksEn: ['Alumni Services', 'Network', 'Events', 'Career'], actionAr: 'استكشاف المصادر', actionEn: 'Explore Resources' },
            { id: 5, titleAr: 'الأهالي والزوار', titleEn: 'Parents & Visitors', icon: '/images/people-outline.svg', linksAr: ['زيارة الحرم', 'أخبار الجامعة', 'التقويم', 'اتصل بنا'], linksEn: ['Visit Campus', 'University News', 'Calendar', 'Contact Us'], actionAr: 'المزيد من المعلومات', actionEn: 'More Info' }
        ]
    });

    // --- 7. NEWS & COMMUNITY UPDATES ---
    Alpine.store('news', {
        items: [
            { id: 1, category: 'Camps', categoryColor: 'bg-[#1e2652]', titleEn: 'Expansion of University Green Spaces', titleAr: 'توسيع المساحات الخضراء في الجامعة', date: 'March 15, 2026', summaryEn: 'New landscaping initiatives are transforming the campus into a greener environment.', summaryAr: 'مبادرات جديدة لتنسيق الحدائق تحول الحرم الجامعي إلى بيئة أكثر خضرة.', image: '/images/unsplash_s9CC2SKySJM.png' },
            { id: 2, category: 'Admission', categoryColor: 'bg-[#7a1212]', titleEn: 'Early Admission cycle now open', titleAr: 'فتح باب القبول المبكر الآن', date: 'March 10, 2026', summaryEn: 'High school students can now apply for the upcoming fall semester.', summaryAr: 'يمكن لطلاب المدارس الثانوية الآن التقديم للفصل الدراسي الخريف القادم.', image: '/images/unsplash_VckdJzo7ig0.png' },
            { id: 3, category: 'Events', categoryColor: 'bg-[#1a203d]', titleEn: 'Annual Cultural Festival', titleAr: 'المهرجان الثقافي السنوي', date: 'March 5, 2026', summaryEn: 'Student-led performances showcasing regional arts and heritage.', summaryAr: 'عروض يقدمها الطلاب تعرض الفنون والتراث الإقليمي.', image: '/images/slider-3.jpg' },
            { id: 4, category: 'Community', categoryColor: 'bg-[#912b2b]', titleEn: 'Community Outreach Partnership', titleAr: 'شراكة التواصل المجتمعي', date: 'March 1, 2026', summaryEn: 'Collaborating with regional partners to support local social growth.', summaryAr: 'التعاون مع الشركاء الإقليميين لدعم النمو الاجتماعي المحلي.', image: '/images/slider-4.jpg' }
        ]
    });

    // --- 8. ACADEMIC RESEARCH HIGHLIGHTS ---
    Alpine.store('research', {
        items: [
            { id: 1, category: 'Medicine', tagColor: '#d32f2f', metaEn: 'Faculty of Medicine', metaAr: 'كلية الطب', titleEn: 'Clinical Simulation and Preventive Health Research', titleAr: 'أبحاث المحاكاة السريرية والصحة الوقائية', summaryEn: 'Faculty-led work highlights early diagnosis and community health studies.', summaryAr: 'تسلط أعمال الكلية الضوء على دراسات التشخيص المبكر وصحة المجتمع.', image: '/images/Frame 114.png', link: '#' },
            { id: 2, category: 'Dentistry', tagColor: '#1976d2', metaEn: 'Faculty of Dentistry', metaAr: 'كلية طب الأسنان', titleEn: 'Digital Dentistry and Oral Regeneration Studies', titleAr: 'دراسات طب الأسنان الرقمي وتجديد الأنسجة الفموية', summaryEn: 'Research themes include restorative techniques and evidence-based planning.', summaryAr: 'تشمل محاور البحث تقنيات الترميم والتخطيط القائم على الأدلة.', image: '/images/unsplash_s9CC2SKySJM.png', link: '#' },
            { id: 3, category: 'Pharmacy', tagColor: '#388e3c', metaEn: 'Faculty of Pharmacy', metaAr: 'كلية الصيدلة', titleEn: 'Drug Formulation, Quality Control, and Therapeutics', titleAr: 'صياغة الأدوية، مراقبة الجودة، والعلاجات', summaryEn: 'Projects focus on safe and effective medication use studies.', summaryAr: 'تركز المشاريع على دراسات الاستخدام الآمن والفعال للأدوية.', image: '/images/unsplash_VckdJzo7ig0.png', link: '#' },
            { id: 4, category: 'AI', tagColor: '#7b1fa2', metaEn: 'Faculty of AI Engineering', metaAr: 'كلية هندسة الذكاء الاصطناعي', titleEn: 'Applied AI for Industrial Systems', titleAr: 'الذكاء الاصطناعي التطبيقي للأنظمة الصناعية', summaryEn: 'Exploring intelligent systems and data-driven decision support.', summaryAr: 'استكشاف الأنظمة الذكية ودعم القرار القائم على البيانات.', image: '/images/Gemini_Generated_Image_c89yjwc89yjwc89y.png', link: '#' },
            { id: 5, category: 'Construction', tagColor: '#7e8b8c', metaEn: 'Faculty of Construction Engineering', metaAr: 'كلية هندسة البناء', titleEn: 'Smart Construction and Sustainable Design', titleAr: 'البناء الذكي والتصميم المستدام', summaryEn: 'Investigating structural performance and site efficiency.', summaryAr: 'التحقيق في الأداء الإنشائي وكفاءة الموقع.', image: '/images/Gemini_Generated_Image_rrcjc2rrcjc2rrcj.png', link: '#' }
        ]
    });

    // --- 9. HEALTHCARE FACILITIES DATA ---
    Alpine.store('healthcare', {
        mainCard: {
            image: '/images/healthcare-main.png',
            titleEn: 'HealthCare at SPU',
            titleAr: 'الرعاية الصحية في SPU',
            descriptionEn: 'SPU provides students with access to practical medical and dental exposure on campus',
            descriptionAr: 'توفر SPU للطلاب إمكانية الوصول إلى الممارسة الطبية والسنية العملية في الحرم الجامعي',
            featuresEn: ['University Hospital', 'Dental Clinic', 'Clinical Learning Support'],
            featuresAr: ['مشفى الجامعة', 'عيادة الأسنان', 'دعم التعلم السريري'],
            actionEn: 'Explore Hospital', actionAr: 'استكشاف المشفى',
            link: '#'
        },
        hospitalCard: {
            image: '/images/healthcare-hospital.png',
            titleEn: 'SPU Hospital', titleAr: 'مشفى SPU',
            descriptionEn: 'Advanced medical diagnostics and clinical training facilities.',
            descriptionAr: 'تشخيص طبي متقدم ومرافق تدريب سريري.',
            link: '#'
        },
        dentalCard: {
            image: '/images/healthcare-dental.png',
            titleEn: 'SPU Dental Clinical', titleAr: 'عيادة SPU للأسنان',
            descriptionEn: 'Modern dental units for hands-on student practice and patient care.',
            descriptionAr: 'وحدات أسنان حديثة للممارسة العملية ورعاية المرضى.',
            linkTextEn: 'Explore Clinic', linkTextAr: 'استكشاف العيادة',
            link: '#'
        },
        stats: [
            { id: 1, labelEn: 'HOSPITAL BEDS', labelAr: 'أسرة المشفى', value: 200, current: 0, suffix: '+' },
            { id: 2, labelEn: 'SPECIALIST DOCTORS', labelAr: 'أطباء أخصائيين', value: 80, current: 0, suffix: '+' },
            { id: 3, labelEn: 'DENTAL CHAIRS', labelAr: 'كراسي الأسنان', value: 30, current: 0, suffix: '+' },
            { id: 4, labelEn: 'PATIENTS ANNUALLY', labelAr: 'مرضى سنوياً', value: 12, current: 0, suffix: 'k+' }
        ],
        startCounting() {
            this.stats.forEach(stat => spuUtils.animateCounter(stat));
        }
    });

    // --- 10. FOOTER DATA ---
    Alpine.store('footer', {
        identity: {
            titleEn: 'SYRIAN PRIVATE UNIVERSITY',
            titleAr: 'الجامعة السورية الخاصة',
            missionEn: 'Committed to fostering academic excellence and global leadership from the heart of Damascus.',
            missionAr: 'ملتزمون بتعزيز التميز الأكاديمي والقيادة العالمية من قلب دمشق.',
            socials: [
                { icon: 'fas fa-globe', url: '#' },
                { icon: 'fab fa-instagram', url: '#' },
                { icon: 'fab fa-youtube', url: '#' }
            ]
        },
        resources: {
            titleEn: 'RESOURCES',
            titleAr: 'المصادر',
            links: [
                { labelEn: 'Privacy Policy', labelAr: 'سياسة الخصوصية', url: '#' },
                { labelEn: 'Contact Us', labelAr: 'اتصل بنا', url: '#' },
                { labelEn: 'Careers', labelAr: 'الوظائف', url: '#' },
                { labelEn: 'Alumni', labelAr: 'الخريجون', url: '#' },
                { labelEn: 'Accreditation', labelAr: 'الاعتماد الأكاديمي', url: '#' }
            ]
        },
        contact: {
            titleEn: 'CONTACT',
            titleAr: 'التواصل',
            addressEn: 'Main Campus, Damascus-Daraa Highway, Damascus, Syria',
            addressAr: 'المقر الرئيسي، طريق دمشق درعا الدولي، دمشق، سوريا',
            phone: '+963 11 9876',
            email: 'info@spu.edu.sy'
        },
        location: {
            titleEn: 'LOCATION',
            titleAr: 'الموقع',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13346.741280351659!2d36.26129575!3d33.31448835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518f99e3f1e1e1f%3A0xe1e1e1e1e1e1e1e1!2sSyrian%20Private%20University!5e0!3m2!1sen!2ssy!4v1712710000000!5m2!1sen!2ssy'
        },
        bottom: {
            copyrightEn: '© 2026 Syrian Private University. Excellence in Education.',
            copyrightAr: '© 2026 الجامعة السورية الخاصة. التميز في التعليم.',
            legalEn: 'Legal Notices',
            legalAr: 'إشعارات قانونية',
            cookieEn: 'Cookie Policy',
            cookieAr: 'سياسة ملفات الارتباط'
        }
    });


    // --- 11. REUSABLE SECTION LOADER ---
    Alpine.data('sectionLoader', (url) => ({
        html: '',
        async init() {
            try {
                const response = await fetch(url);
                const text = await response.text();
                
                // Security check to prevent infinite loops if Vite serves index.html for a 404 path
                if (text.includes('<!DOCTYPE html>')) {
                    console.error('Failed to load component or path not found:', url);
                    return;
                }
                
                this.html = text;
            } catch (err) {
                console.error('Error loading section:', url, err);
            }
        }
    }));

});

/**
 * COMPONENT COMPONENT LOGIC
 * Standalone functions for specific complex animations and calendars
 */



// Research Slider Logic
window.researchSlider = function() {
    return {
        slide(direction) {
            const track = this.$refs.researchTrack;
            const step = 342; // Card width + gap
            track.scrollBy({ left: direction === 'right' ? step : -step, behavior: 'smooth' });
        }
    };
};

// Events Calendar Components
const mockCalendarEvents = [
    { id: 1, type: 'Seminar', titleEn: 'Open Campus Seminar', titleAr: 'ندوة الحرم الجامعي المفتوح', date: '2026-03-13', image: '/images/slider-2.jpg', descriptionEn: 'Explore campus and learn about programs.', descriptionAr: 'استكشف الحرم الجامعي وتعرف على البرامج الدراسية.', link: '#' },
    { id: 2, type: 'Workshop', titleEn: 'Program Discovery Workshop', titleAr: 'ورشة عمل اكتشاف البرامج', date: '2026-03-13', image: '/images/slider-3.jpg', descriptionEn: 'Interactive workshop for academic track planning.', descriptionAr: 'ورشة عمل تفاعلية للتخطيط للمسار الأكاديمي.', link: '#' },
    { id: 3, type: 'Tour', titleEn: 'Campus Tour', titleAr: 'جولة في الحرم الجامعي', date: '2026-03-13', image: '/images/unsplash_s9CC2SKySJM.png', descriptionEn: 'Guided tour of university student spaces.', descriptionAr: 'جولة إرشادية في مسارات الطلاب بالجامعة.', link: '#' },
    { id: 4, type: 'Research Talk', titleEn: 'Medical Innovation Forum', titleAr: 'منتدى الابتكار الطبي', date: '2026-03-23', image: '/images/slider-4.jpg', descriptionEn: 'Faculty researchers share current medical innovations.', descriptionAr: 'باحثون من الهيئة التدريسية يشاركون الابتكارات الطبية الحالية.', link: '#' },
    { id: 5, type: 'Student Life', titleEn: 'Campus Clubs Fair', titleAr: 'معرض الأندية الجامعية', date: '2026-03-30', image: '/images/unsplash_VckdJzo7ig0.png', descriptionEn: 'Join activities matching your interests on campus.', descriptionAr: 'انضم إلى الأنشطة التي تناسب اهتماماتك في الحرم الجامعي.', link: '#' }
];

function normalizeCalendarEvent(event, index) {
    const parsedDate = dayjs(event.date);
    if (!parsedDate.isValid()) return null;

    return {
        id: event.id ?? `event-${index + 1}`,
        type: event.type ?? 'Event',
        titleEn: event.titleEn ?? event.title ?? 'Untitled Event',
        titleAr: event.titleAr ?? event.title ?? 'حدث بدون عنوان',
        descriptionEn: event.descriptionEn ?? event.description ?? '',
        descriptionAr: event.descriptionAr ?? event.description ?? '',
        image: event.image ?? '/images/slider-1.jpeg',
        link: event.link ?? '#',
        dateKey: parsedDate.format('YYYY-MM-DD'),
        dateText: event.dateText ?? parsedDate.format('MMM D, YYYY')
    };
}

window.calendarApp = function() {
    return {
        rawEvents: [],
        viewDate: dayjs().startOf('month'),
        selectedDate: dayjs().format('YYYY-MM-DD'),
        activeEventIndex: 0,

        init() {
            const incomingEvents = Array.isArray(window.spuEventsData) ? window.spuEventsData : mockCalendarEvents;
            this.setEvents(incomingEvents);
        },

        setEvents(events = []) {
            this.rawEvents = events
                .map((event, index) => normalizeCalendarEvent(event, index))
                .filter(Boolean)
                .sort((a, b) => a.dateKey.localeCompare(b.dateKey));

            const initialDate = this.rawEvents[0]?.dateKey ?? dayjs().format('YYYY-MM-DD');
            this.selectedDate = initialDate;
            this.viewDate = dayjs(initialDate).startOf('month');
            this.activeEventIndex = 0;
        },

        get eventsByDate() {
            return this.rawEvents.reduce((grouped, event) => {
                if (!grouped[event.dateKey]) grouped[event.dateKey] = [];
                grouped[event.dateKey].push(event);
                return grouped;
            }, {});
        },

        get selectedDateEvents() { return this.eventsByDate[this.selectedDate] || []; },
        get selectedEvent() { return this.selectedDateEvents[this.activeEventIndex] || null; },
        get selectedDateLabel() { 
            const d = dayjs(this.selectedDate);
            if (Alpine.store('app').currentLang === 'ar') {
                return `${Alpine.store('app').ui.months.ar[d.month()]} ${d.date()}, ${d.year()}`;
            }
            return d.format('MMM D, YYYY');
        },

        get calendarDays() {
            const groupedEvents = this.eventsByDate;
            const monthStart = this.viewDate.startOf('month');
            const mondayOffset = (monthStart.day() + 6) % 7;
            const gridStart = monthStart.subtract(mondayOffset, 'day');

            return Array.from({ length: 42 }, (_, index) => {
                const currentDay = gridStart.add(index, 'day');
                const dateKey = currentDay.format('YYYY-MM-DD');
                return {
                    date: dateKey,
                    dayNumber: currentDay.date(),
                    isCurrentMonth: currentDay.isSame(this.viewDate, 'month'),
                    hasEvent: (groupedEvents[dateKey] || []).length > 0
                };
            });
        },

        selectDate(date) {
            this.selectedDate = date;
            this.activeEventIndex = 0;
            if (!dayjs(date).isSame(this.viewDate, 'month')) {
                this.viewDate = dayjs(date).startOf('month');
            }
        },

        selectEvent(index) { this.activeEventIndex = index; },
        changeMonth(step) {
            const nextViewDate = this.viewDate.add(step, 'month').startOf('month');
            const firstEventInMonth = this.rawEvents.find(event => dayjs(event.dateKey).isSame(nextViewDate, 'month'));
            this.viewDate = nextViewDate;
            this.selectedDate = firstEventInMonth?.dateKey ?? nextViewDate.format('YYYY-MM-DD');
            this.activeEventIndex = 0;
        },

        prevMonth() { this.changeMonth(-1); },
        nextMonth() { this.changeMonth(1); }
    };
};

// Start Alpine
Alpine.start();
