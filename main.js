import './src/style.css'

import Alpine from 'alpinejs'



window.Alpine = Alpine

document.addEventListener('alpine:init', () => {
    Alpine.store('app', {
        currentLang: 'en', // اللغة الافتراضية

        setLang(lang) {
            this.currentLang = lang;
            // تغيير اتجاه الصفحة (RTL للأولى و LTR للثانية)
            document.documentElement.dir = (lang === 'en' ? 'ltr' : 'rtl');
            document.documentElement.lang = lang;

            // اختيارياً: حفظ اللغة في المتصفح ليتذكرها عند التحديث
            localStorage.setItem('lang', lang);
        }
    })
})

//! header 
document.addEventListener('alpine:init', () => {
    // مخزن البيانات المشترك
    Alpine.store('navigation', {
        menuItems: [
            {
                id: 1, labelAr: 'عن الجامعة', labelEn: 'About', hasDropdown: true,
                children: [
                    { labelAr: 'الرؤية والرسالة', labelEn: 'Vision & Mission', url: '#' },
                    { labelAr: 'كلمة رئيس الجامعة', labelEn: 'President\'s Speech', url: '#' }
                ]
            },
            {
                id: 2, labelAr: 'الكليات', labelEn: 'Faculties', hasDropdown: true,
                children: [
                    { labelAr: 'كلية الطب', labelEn: 'Medicine', url: '#' },
                    { labelAr: 'كلية طب الأسنان', labelEn: 'Dentistry', url: '#' }
                ]
            },
            {
                id: 3, labelAr: 'القبول والتسجيل', labelEn: 'Admissions', hasDropdown: true,
                children: [
                    { labelAr: 'شروط القبول', labelEn: 'Admission Requirements', url: '#' },
                    { labelAr: 'الرسوم الدراسية', labelEn: 'Tuition Fees', url: '#' }
                ]
            },
           
            {
                id: 5, labelAr: 'الحياة الجامعية', labelEn: 'Campus Life', hasDropdown: true,
                children: [
                    { labelAr: 'المكتبة', labelEn: 'Library', url: '#' },
                    { labelAr: 'الأنشطة', labelEn: 'Activities', url: '#' }
                ]
            },
            { id: 4, labelAr: 'أخبارنا', labelEn: 'News', hasDropdown: false, url: '#' },
            {
                id: 6, labelAr: 'تواصل معنا', labelEn: 'Contact', hasDropdown: false,
                
            }
        ]
    });

    // مخزن حالة التطبيق (اللغة)
    Alpine.store('app', {
        currentLang: savedLang, 
        setLang(lang) {
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        }
    });
});



//! hero
Alpine.store('hero', {
    currentIndex: 0, // المؤشر الحالي للصورة

    titleAr: ' الجامعة السورية الخاصة',
    titleEn: 'Syrian Private University',
    subtitleAr: 'تعليم أكاديمي متميز يجمع بين الخبرة والابتكار لبناء جيل مبدع.',
    subtitleEn: 'Explore accredited programs, campus life and a direct path to your success .....',

    images: [
        '/images/slider-1.jpeg',
        '/images/slider-2.jpg',
        '/images/slider-3.jpg',
        '/images/slider-4.jpg',
    ],

    primaryBtnAr: 'استكشف البرامج',
    primaryBtnEn: 'Explore Programs',
    secondaryBtnAr: ' جولة افتراضية',
    secondaryBtnEn: 'Virtual Tour ',

    init() {
        setInterval(() => {
           
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
            
        }, 5000); 
    }
});




// !stats
Alpine.store('stats', {
    items: [
        {
            id: 1,
            labelAr: 'كلية علمية',
            labelEn: 'Faculties',
            value: 7,
            current: 0, // ضروري جداً ليعمل العداد
            svgPath: '/images/arcticons_emoji-classical-building.svg',
            plus: ''
        },
        {
            id: 2,
            labelAr: 'طالب وطالبة',
            labelEn: 'Enrolled Students',
            value: 8500,
            current: 0, // ضروري جداً
            svgPath: '/images/people-outline.svg',
            plus: '+'
        },
        {
            id: 3,
            labelAr: 'عام من التأسيس',
            labelEn: 'Years since founding',
            value: 20,
            current: 0, // ضروري جداً
            svgPath: '/images/time.svg',
            plus: '+'
        },
        {
            id: 4,
            labelAr: 'طالب خريج',
            labelEn: 'Graduated Students',
            value: 450,
            current: 0, // ضروري جداً
            svgPath: '/images/flowbite_user-graduate-outline.svg',
            plus: '+'
        },
    ],

    startCounting() {
        this.items.forEach(item => {
            // إعادة الصفر عند كل تشغيل (للتأكد)
            item.current = 0;

            let start = 0;
            const end = item.value;
            const duration = 2000; // ثانيتين
            const frameRate = 1000 / 60; // 60 إطار في الثانية لسلاسة عالية
            const totalFrames = Math.round(duration / frameRate);
            const increment = end / totalFrames;

            let currentFrame = 0;

            const timer = setInterval(() => {
                currentFrame++;
                // حساب القيمة الحالية بناءً على الإطار
                const nextValue = Math.round(increment * currentFrame);

                if (currentFrame >= totalFrames) {
                    item.current = end;
                    clearInterval(timer);
                } else {
                    item.current = nextValue;
                }
            }, frameRate);
        });
    }
});


// facilities
Alpine.store('faculties', {
    items: [
        {
            id: 1,
            nameAr: 'كلية الطب', nameEn: 'FACULTY OF MEDICINE',
            years: '6 years', color: '#c52d2f',
            logo: '/images/med-logo.svg'
        },
        {
            id: 2,
            nameAr: 'كلية طب الأسنان', nameEn: 'FACULTY OF DENTISTRY',
            years: '5 years', color: '#2b7db3',
            logo: '/images/dent-logo.svg'
        },
        {
            id: 4,
            nameAr: 'كلية طب الأسنان', nameEn: 'FACULTY OF DENTISTRY',
            years: '5 years', color: '#2b7db3',
            logo: '/images/dent-logo.svg'
        },
        {
            id: 5,
            nameAr: 'كلية طب الأسنان', nameEn: 'FACULTY OF DENTISTRY',
            years: '5 years', color: '#2b7db3',
            logo: '/images/dent-logo.svg'
        },
        {
            id: 6,
            nameAr: 'كلية طب الأسنان', nameEn: 'FACULTY OF DENTISTRY',
            years: '5 years', color: '#2b7db3',
            logo: '/images/dent-logo.svg'
        },
        {
            id: 3,
            nameAr: 'كلية الصيدلة', nameEn: 'FACULTY OF PHARMACY',
            years: '5 years', color: '#68bc7d',
            logo: '/images/pharm-logo.svg'
        }
    ]
});



window.Alpine = Alpine;
Alpine.start();
