import './src/style.css'

import Alpine from 'alpinejs'

window.Alpine = Alpine

document.addEventListener('alpine:init', () => {
    const savedLang = localStorage.getItem('lang') || 'en'

    Alpine.store('app', {
        currentLang: savedLang,

        setLang(lang) {
            this.currentLang = lang
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
            document.documentElement.lang = lang
            localStorage.setItem('lang', lang)
        }
    })

    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = savedLang

    Alpine.store('navigation', {
        menuItems: [
            {
                id: 1,
                labelAr: 'عن الجامعة',
                labelEn: 'About',
                hasDropdown: true,
                children: [
                    { labelAr: 'الرؤية والرسالة', labelEn: 'Vision & Mission', url: '#' },
                    { labelAr: 'كلمة رئيس الجامعة', labelEn: "President's Speech", url: '#' }
                ]
            },
            {
                id: 2,
                labelAr: 'الكليات',
                labelEn: 'Faculties',
                hasDropdown: true,
                children: [
                    { labelAr: 'الطب', labelEn: 'Medicine', url: '#' },
                    { labelAr: 'طب الأسنان', labelEn: 'Dentistry', url: '#' }
                ]
            },
            {
                id: 3,
                labelAr: 'القبول والتسجيل',
                labelEn: 'Admissions',
                hasDropdown: true,
                children: [
                    { labelAr: 'شروط القبول', labelEn: 'Admission Requirements', url: '#' },
                    { labelAr: 'الرسوم الدراسية', labelEn: 'Tuition Fees', url: '#' }
                ]
            },
            {
                id: 5,
                labelAr: 'الحياة الجامعية',
                labelEn: 'Campus Life',
                hasDropdown: true,
                children: [
                    { labelAr: 'المكتبة', labelEn: 'Library', url: '#' },
                    { labelAr: 'الأنشطة', labelEn: 'Activities', url: '#' }
                ]
            },
            { id: 4, labelAr: 'أخبارنا', labelEn: 'News', hasDropdown: false, url: '#' },
            { id: 6, labelAr: 'تواصل معنا', labelEn: 'Contact', hasDropdown: false, url: '#' }
        ]
    })

    Alpine.store('hero', {
        currentIndex: 0,

        titleAr: 'الجامعة السورية الخاصة',
        titleEn: 'Syrian Private University',
        subtitleAr: 'تعليم أكاديمي متميز يجمع بين الخبرة والابتكار لبناء جيل مبدع.',
        subtitleEn: 'Explore accredited programs, campus life, and a direct path to your success.',

        images: [
            '/images/slider-1.jpeg',
            '/images/slider-2.jpg',
            '/images/slider-3.jpg',
            '/images/slider-4.jpg'
        ],

        primaryBtnAr: 'استكشف البرامج',
        primaryBtnEn: 'Explore Programs',
        secondaryBtnAr: 'جولة افتراضية',
        secondaryBtnEn: 'Virtual Tour',

        init() {
            setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.images.length
            }, 5000)
        }
    })
    // statics  data
    Alpine.store('stats', {
        items: [
            {
                id: 1,
                labelAr: 'كلية علمية',
                labelEn: 'Faculties',
                value: 7,
                current: 0,
                svgPath: '/images/arcticons_emoji-classical-building.svg',
                plus: ''
            },
            {
                id: 2,
                labelAr: 'طالب وطالبة',
                labelEn: 'Enrolled Students',
                value: 8500,
                current: 0,
                svgPath: '/images/people-outline.svg',
                plus: '+'
            },
            {
                id: 3,
                labelAr: 'عام منذ التأسيس',
                labelEn: 'Years Since Founding',
                value: 20,
                current: 0,
                svgPath: '/images/time.svg',
                plus: '+'
            },
            {
                id: 4,
                labelAr: 'طالب خريج',
                labelEn: 'Graduated Students',
                value: 450,
                current: 0,
                svgPath: '/images/flowbite_user-graduate-outline.svg',
                plus: '+'
            }
        ],

        startCounting() {
            this.items.forEach(item => {
                item.current = 0

                const end = item.value
                const duration = 2000
                const frameRate = 1000 / 60
                const totalFrames = Math.round(duration / frameRate)
                const increment = end / totalFrames

                let currentFrame = 0

                const timer = setInterval(() => {
                    currentFrame++
                    const nextValue = Math.round(increment * currentFrame)

                    if (currentFrame >= totalFrames) {
                        item.current = end
                        clearInterval(timer)
                    } else {
                        item.current = nextValue
                    }
                }, frameRate)
            })
        }
    })
    // faculties data
    Alpine.store('faculties', {
        activeFaculty: null,
        items: [
            {
                id: 1,
                nameAr: 'كلية الطب',
                nameEn: 'Faculty of Medicine',
                yearsAr: '6 سنوات',
                yearsEn: '6 years',
                color: '#c52d2f',
                logo: '/images/faculty-medicine-logo.png'
            },
            {
                id: 2,
                nameAr: 'كلية طب الأسنان',
                nameEn: 'Faculty of Dentistry',
                yearsAr: '5 سنوات',
                yearsEn: '5 years',
                color: '#2b7db3',
                logo: '/images/faculty-dentistry-logo.png'
            },
            {
                id: 3,
                nameAr: 'كلية الصيدلة',
                nameEn: 'Faculty of Pharmacy',
                yearsAr: '5 سنوات',
                yearsEn: '5 years',
                color: '#68bc7d',
                logo: '/images/faculty-pharmacy-logo.png'
            },
            {
                id: 4,
                nameAr: 'كلية هندسة الذكاء الاصطناعي',
                nameEn: 'Faculty of AI Engineering',
                yearsAr: '5 سنوات',
                yearsEn: '5 years',
                color: '#673695',
                logo: '/images/faculty-ai-engineering-logo.png',
                imgClass: 'scale-160'
            },
            {
                id: 5,
                nameAr: 'كلية هندسة البناء',
                nameEn: 'Faculty of Construction Engineering',
                yearsAr: '5 سنوات',
                yearsEn: '5 years',
                color: '#7e8b8c',
                logo: '/images/faculty-construction-engineering-logo.png',
                imgClass: 'scale-160'
            },
            {
                id: 6,
                nameAr: 'كلية هندسة البترول',
                nameEn: 'Faculty of Petroleum Engineering',
                yearsAr: '5 سنوات',
                yearsEn: '5 years',
                color: '#15585b',
                logo: '/images/faculty-petroleum-engineering-logo.png',
                imgClass: 'scale-140'
            },
            {
                id: 7,
                nameAr: 'كلية العلوم الإدارية',
                nameEn: 'Faculty of Administrative Sciences',
                yearsAr: '4 سنوات',
                yearsEn: '4 years',
                color: '#caa949',
                logo: '/images/faculty-admin-sciences-logo.png',
                imgClass: 'scale-140'
            }
        ]
    })
    // paths data
    Alpine.store('paths', {
        activePath: null,
        items: [
            {
                id: 1,
                titleAr: 'الطلاب المستجدون', titleEn: 'Prospective Students',
                icon: '/images/bytesize_book.svg',
                linksAr: ['استكشاف البرامج', 'القبول', 'المنح الدراسية', 'الحياة الجامعية'],
                linksEn: ['Explore programs', 'Admission', 'Scholarships', 'Campus life'],
                actionAr: 'استكشاف القبول', actionEn: 'Explore Admissions'
            },
            {
                id: 2,
                titleAr: 'الطلاب الحاليون', titleEn: 'Current Students',
                icon: '/images/Vector-3.svg',
                linksAr: ['بوابات الدخول', 'الجداول', 'الخدمات', 'المصادر الأكاديمية'],
                linksEn: ['Access portals', 'Schedules', 'Services', 'Academic resources'],
                actionAr: 'عرض المصادر', actionEn: 'View Student Resources'
            },
            
            {
                id: 3,
                titleAr: 'الكادر التدريسي والمنظومة', titleEn: 'Faculty & Staff',
                icon: '/images/Vector-4.svg',
                linksAr: ['أدوات التدريس', 'السياسات', 'الأنظمة', 'الخدمات الداخلية'],
                linksEn: ['Find teaching tools', 'Policies', 'Systems', 'Internal services'],
                actionAr: 'استكشاف المصادر', actionEn: 'Explore Resources'
            },
            {
                id: 4,
                titleAr: 'الخريجون', titleEn: 'Alumni',
                icon: '/images/student.svg',
                linksAr: ['خدمات الخريجين', 'الشبكة', 'الفعاليات', 'التوظيف'],
                linksEn: ['Alumni Services', 'Network', 'Events', 'Career'],
                actionAr: 'استكشاف المصادر', actionEn: 'Explore Resources'
            },
            {
                id: 5,
                titleAr: 'الأهالي والزوار', titleEn: 'Parents & Visitors',
                icon: '/images/people-outline.svg',
                linksAr: ['زيارة الحرم', 'أخبار الجامعة', 'التقويم', 'اتصل بنا'],
                linksEn: ['Visit Campus', 'University News', 'Calendar', 'Contact Us'],
                actionAr: 'المزيد من المعلومات', actionEn: 'More Info'
            }
        ]
    });
})

Alpine.start()
