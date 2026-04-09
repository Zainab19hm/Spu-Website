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

// news and research data
document.addEventListener('alpine:init', () => {
    Alpine.store('news', {
        items: [
            {
                id: 1,
                category: 'Camps',
                categoryColor: 'bg-[#1e2652]', // Dark blue
                title: 'Title Of News',
                date: 'month day, year',
                summary: 'Brief news summary Brief news summary. Brief news summary.',
                image: '/images/unsplash_s9CC2SKySJM.png'
            },
            {
                id: 2,
                category: 'Admission',
                categoryColor: 'bg-[#7a1212]', // Maroon/Red
                title: 'Title Of News',
                date: 'month day, year',
                summary: 'Brief news summary Brief news summary. Brief news summary.',
                image: '/images/unsplash_VckdJzo7ig0.png'
            },
            {
                id: 3,
                category: 'Events',
                categoryColor: 'bg-[#1a203d]', // Navy
                title: 'Title Of News',
                date: 'month day, year',
                summary: 'Brief news summary Brief news summary. Brief news summary.',
                image: '/images/slider-3.jpg'
            },
            {
                id: 4,
                category: 'Community',
                categoryColor: 'bg-[#912b2b]', // Light Crimson
                title: 'Title Of News',
                date: 'month day, year',
                summary: 'Brief news summary Brief news summary. Brief news summary.',
                image: '/images/slider-4.jpg'
            }
        ]
    });
});

document.addEventListener('alpine:init', () => {
    Alpine.store('research', {
        items: [
            {
                id: 1,
                category: 'Medicine',
                tagColor: '#d32f2f',
                meta: 'Faculty of Medicine',
                title: 'Clinical Simulation and Preventive Health Research',
                summary: 'Faculty-led work highlights early diagnosis, case-based training, and community health studies that connect medical education with patient-centered care.',
                image: '/images/Frame 114.png',
                link: '#'
            },
            {
                id: 2,
                category: 'Dentistry',
                tagColor: '#1976d2',
                meta: 'Faculty of Dentistry',
                title: 'Digital Dentistry and Oral Regeneration Studies',
                summary: 'Research themes include restorative techniques, imaging workflows, and evidence-based treatment planning for modern oral healthcare.',
                image: '/images/unsplash_s9CC2SKySJM.png',
                link: '#'
            },
            {
                id: 3,
                category: 'Pharmacy',
                tagColor: '#388e3c',
                meta: 'Faculty of Pharmacy',
                title: 'Drug Formulation, Quality Control, and Therapeutics',
                summary: 'Projects focus on pharmaceutical formulation, dosage optimization, and lab-based analysis that support safe and effective medication use.',
                image: '/images/unsplash_VckdJzo7ig0.png',
                link: '#'
            },
            {
                id: 4,
                category: 'AI',
                tagColor: '#7b1fa2',
                meta: 'Faculty of AI Engineering',
                title: 'Applied AI for Medical, Educational, and Industrial Systems',
                summary: 'The faculty explores intelligent systems, data-driven decision support, and machine learning applications for real-world university and community challenges.',
                image: '/images/Gemini_Generated_Image_c89yjwc89yjwc89y.png',
                link: '#'
            },
            {
                id: 5,
                category: 'Construction',
                tagColor: '#7e8b8c',
                meta: 'Faculty of Construction Engineering',
                title: 'Smart Construction Materials and Sustainable Design',
                summary: 'Research activity investigates structural performance, site efficiency, and sustainable building strategies suited to regional infrastructure needs.',
                image: '/images/Gemini_Generated_Image_rrcjc2rrcjc2rrcj.png',
                link: '#'
            },
           
        ]
    });
});

function researchSlider() {
    return {
        slide(direction) {
            const track = this.$refs.researchTrack;
            const step = 342; // Width (310) + Gap (32)
            track.scrollBy({ left: direction === 'right' ? step : -step, behavior: 'smooth' });
        }
    }
};



// events data

const mockCalendarEvents = [
    {
        id: 1,
        type: 'Seminar',
        title: 'Open Campus Seminar',
        date: '2026-03-13',
        image: '/images/slider-2.jpg',
        description: 'Explore campus, meet faculty, and learn about programs. Explore campus, meet faculty, and learn about programs.',
        link: '#'
    },
    {
        id: 2,
        type: 'Workshop',
        title: 'Program Discovery Workshop',
        date: '2026-03-13',
        image: '/images/slider-3.jpg',
        description: 'Join an interactive workshop introducing study tracks, application guidance, and tips for preparing your next academic step.',
        link: '#'
    },
    {
        id: 3,
        type: 'Tour',
        title: 'Campus Tour Experience',
        date: '2026-03-13',
        image: '/images/unsplash_s9CC2SKySJM.png',
        description: 'Take a guided campus tour, visit student spaces, and get a closer look at university life and learning environments.',
        link: '#'
    },
    {
        id: 4,
        type: 'Research Talk',
        title: 'Medical Innovation Forum',
        date: '2026-03-23',
        image: '/images/slider-4.jpg',
        description: 'Faculty researchers share current medical projects and invite students to join collaborative innovation initiatives.',
        link: '#'
    },
    {
        id: 5,
        type: 'Student Life',
        title: 'Campus Clubs Fair',
        date: '2026-03-30',
        image: '/images/unsplash_VckdJzo7ig0.png',
        description: 'Meet student clubs, discover volunteering opportunities, and find activities that match your interests on campus.',
        link: '#'
    }
];

function normalizeCalendarEvent(event, index) {
    const parsedDate = dayjs(event.date);

    if (!parsedDate.isValid()) {
        return null;
    }

    return {
        id: event.id ?? `event-${index + 1}`,
        type: event.type ?? 'Event',
        title: event.title ?? 'Untitled Event',
        description: event.description ?? '',
        image: event.image ?? '/images/slider-1.jpeg',
        link: event.link ?? '#',
        dateKey: parsedDate.format('YYYY-MM-DD'),
        dateText: event.dateText ?? parsedDate.format('MMM D, YYYY')
    };
}

function calendarApp() {
    return {
        rawEvents: [],
        viewDate: dayjs().startOf('month'),
        selectedDate: dayjs().format('YYYY-MM-DD'),
        activeEventIndex: 0,

        init() {
            // Backend can replace this with `window.spuEventsData = [...]` before Alpine starts.
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
                if (!grouped[event.dateKey]) {
                    grouped[event.dateKey] = [];
                }

                grouped[event.dateKey].push(event);
                return grouped;
            }, {});
        },

        get selectedDateEvents() {
            return this.eventsByDate[this.selectedDate] || [];
        },

        get selectedEvent() {
            return this.selectedDateEvents[this.activeEventIndex] || null;
        },

        get selectedDateLabel() {
            return dayjs(this.selectedDate).format('MMM D, YYYY');
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

        selectEvent(index) {
            this.activeEventIndex = index;
        },

        changeMonth(step) {
            const nextViewDate = this.viewDate.add(step, 'month').startOf('month');
            const firstEventInMonth = this.rawEvents.find(event => dayjs(event.dateKey).isSame(nextViewDate, 'month'));

            this.viewDate = nextViewDate;
            this.selectedDate = firstEventInMonth?.dateKey ?? nextViewDate.format('YYYY-MM-DD');
            this.activeEventIndex = 0;
        },

        prevMonth() {
            this.changeMonth(-1);
        },

        nextMonth() {
            this.changeMonth(1);
        }
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.store('healthcare', {
        mainCard: {
            image: '/images/healthcare-main.png',
            title: 'HealthCare at SPU',
            description: 'SPU provides students with access to a well-rounded healthcare environment that combines academic learning with practical medical and dental exposure on campus',
            featuresEn: ['University Hospital', 'Dental Clinic', 'Clinical Learning Support'],
            featuresAr: ['مشفى الجامعة', 'عيادة الأسنان', 'دعم التعلم السريري'],
            actionEn: 'Explore Hospital',
            actionAr: 'استكشاف المشفى',
            link: '#'
        },
        hospitalCard: {
            image: '/images/healthcare-hospital.png',
            titleEn: 'SPU Hospital',
            titleAr: 'مشفى SPU',
            descriptionEn: 'More than 105 Dental Unit More than 105 Dental Unit Digital Dentistry and Oral Regeneration Studies',
            descriptionAr: 'أكثر من 105 وحدة طب أسنان ودراسات تجديد الفم والأسنان الرقمية',
            link: '#'
        },
        dentalCard: {
            image: '/images/healthcare-dental.png',
            titleEn: 'SPU Dental Clinical',
            titleAr: 'عيادة SPU للأسنان',
            descriptionEn: 'More than 105 Dental Unit More than 105 Dental Unit Digital Dentistry and Oral Regeneration Studies',
            descriptionAr: 'أكثر من 105 وحدة طب أسنان ودراسات تجديد الفم والأسنان الرقمية',
            linkTextEn: 'Explore Clinic',
            linkTextAr: 'استكشاف العيادة',
            link: '#'
        },
        stats: [
            { id: 1, labelEn: 'HOSPITAL BEDS', labelAr: 'أسرة المشفى', value: 200, current: 0, suffix: '+' },
            { id: 2, labelEn: 'SPECIALIST DOCTORS', labelAr: 'أطباء أخصائيين', value: 80, current: 0, suffix: '+' },
            { id: 3, labelEn: 'DENTAL CHAIRS', labelAr: 'كراسي الأسنان', value: 30, current: 0, suffix: '+' },
            { id: 4, labelEn: 'PATIENTS ANNUALLY', labelAr: 'مرضى سنوياً', value: 12, current: 0, suffix: 'k+' }
        ],
        startCounting() {
            this.stats.forEach(stat => {
                stat.current = 0;
                const end = stat.value;
                const duration = 2000;
                const frameRate = 1000 / 60;
                const totalFrames = Math.round(duration / frameRate);
                const increment = end / totalFrames;
                let currentFrame = 0;
                const timer = setInterval(() => {
                    currentFrame++;
                    const nextValue = Math.round(increment * currentFrame);
                    if (currentFrame >= totalFrames) {
                        stat.current = end;
                        clearInterval(timer);
                    } else {
                        stat.current = nextValue;
                    }
                }, frameRate);
            });
        }
    });
});

Alpine.start()
