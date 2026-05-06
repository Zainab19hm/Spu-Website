import { siteRoutes, withHash } from '../../config/site-routes.js';

export const dentalClinicPageContent = {
    hero: {
        titleEn: 'SPU Dental Clinics',
        titleAr: 'عيادات SPU لطب الأسنان',
        summaryEn: 'Providing state-of-the-art dental care to the community while serving as a premier training facility for the next generation of leading dental professionals.',
        summaryAr: 'تقديم رعاية أسنان متطورة للمجتمع مع خدمة كمنشأة تدريبية متميزة للأجيال القادمة من أطباء الأسن.',
        image: '/images/dental-place.JPG',
        ctaAr: 'الحصول على الاتجاهات',
        ctaEn: 'Get Directions',
        ctaUrl: 'https://www.google.com/maps?q=Syrian+Private+University',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'الرئيسية',
        breadcrumbCampusEn: 'Campus Life',
        breadcrumbCampusAr: 'الحياة الجامعية',
        breadcrumbCurrentEn: 'Dental Clinic',
        breadcrumbCurrentAr: 'عيادة الأسنان'
    },

    overview: {
        titleEn: 'Comprehensive Dental Care',
        titleAr: 'رعاية أسنان شاملة',
        summaryEn: 'The SPU Dental Clinic is a cornerstone of our Faculty of Dentistry, providing a bridge between academic learning and professional practice. Equipped with 120 modern dental chairs and specialized units, we offer a wide range of services while ensuring the highest standards of sterilization and patient care.',
        summaryAr: 'تعد عيادة SPU لطب الأسنان حجر الزاوية في كلية طب الأسنان لدينا، حيث توفر جسراً بين التعلم الأكاديمي والممارسة المهنية. مجهزة بـ 120 كرسي أسنان حديثاً ووحدات متخصصة، نقدم مجموعة واسعة من الخدمات مع ضمان أعلى معايير التعقيم ورعاية المرضى.',
        image: '/images/campus-dental.webp'
    },

    stats: [
        { id: 1, labelEn: 'DENTAL CHAIRS', labelAr: 'كراسي الأسنان', value: 120, suffixEn: '+', suffixAr: '+' },
        { id: 2, labelEn: 'SPECIALIZED CLINICS', labelAr: 'عيادات تخصصية', value: 10, suffixEn: '', suffixAr: '' },
        { id: 3, labelEn: 'DAILY PATIENTS', labelAr: 'مرضى يومياً', value: 150, suffixEn: '+', suffixAr: '+' },
        { id: 4, labelEn: 'SUCCESS RATE', labelAr: 'نسبة النجاح', value: 98, suffixEn: '%', suffixAr: '%' }
    ],

    services: [
        {
            titleEn: 'General Dentistry',
            titleAr: 'طب الأسنان العام',
            descriptionEn: 'Comprehensive oral health care including routine cleanings, fillings, root canals, and preventive care. Focused on maintaining overall dental health for all ages.',
            descriptionAr: 'رعاية صحية فموية شاملة تشمل التنظيف الروتيني والحشوات وقنوات الجذر والصيانة الوقائية لجميع الأعمار.',
            icon: '/images/icons/dental-general.webp'
        },
        {
            titleEn: 'Orthodontics',
            titleAr: 'تقويم الأسنان',
            descriptionEn: 'Alignment and correction of teeth and jaws using modern braces and clear aligner technologies.',
            descriptionAr: 'محاذاة وتصحيح الأسنان والفك باستخدام تقنيات التقويم الحديثة والأجهزة الشفافة.',
            icon: '/images/icons/dental-ortho.webp'
        },
        {
            titleEn: 'Oral Surgery',
            titleAr: 'جراحة الفم',
            descriptionEn: 'Expert surgical procedures including extractions, wisdom teeth removal, and minor reconstructive surgeries.',
            descriptionAr: 'إجراءات جراحية متخصصة تشمل قلع الأسنان وخلع ضروس العقل وعلاجات إعادة البناء الطفيفة.',
            icon: '/images/icons/dental-surgery.webp'
        },
        {
            titleEn: 'Periodontics',
            titleAr: 'أمراض اللثة',
            descriptionEn: 'Specialized care for the gums and supporting structures of teeth. Treatment of gum disease and placement of dental implants to restore function and aesthetics.',
            descriptionAr: 'رعاية متخصصة للثة والهياكل الداعمة، بما في ذلك علاج أمراض اللثة وصيانة الزرعات.',
            icon: '/images/icons/dental-perio.webp'
        }
    ],

    schedule: [
        { dayEn: 'Saturday', dayAr: 'السبت', timeEn: '8:00 AM - 4:00 PM', timeAr: '8:00 صباحاً - 4:00 مساءً', isEmergency: false },
        { dayEn: 'Sunday', dayAr: 'الأحد', timeEn: '8:00 AM - 4:00 PM', timeAr: '8:00 صباحاً - 4:00 مساءً', isEmergency: false },
        { dayEn: 'Monday', dayAr: 'الاثنين', timeEn: '8:00 AM - 4:00 PM', timeAr: '8:00 صباحاً - 4:00 مساءً', isEmergency: false },
        { dayEn: 'Tuesday', dayAr: 'الثلاثاء', timeEn: '8:00 AM - 4:00 PM', timeAr: '8:00 صباحاً - 4:00 مساءً', isEmergency: false },
        { dayEn: 'Wednesday', dayAr: 'الأربعاء', timeEn: 'Emergency Only', timeAr: 'حالات الطوارئ فقط', isEmergency: true },
        { dayEn: 'Thursday', dayAr: 'الخميس', timeEn: 'Emergency Only', timeAr: 'حالات الطوارئ فقط', isEmergency: true },
        { dayEn: 'Friday', dayAr: 'الجمعة', timeEn: 'Emergency Only', timeAr: 'حالات الطوارئ فقط', isEmergency: true }
    ],

    scheduleTodayEn: '8:00 AM - 4:00 PM',
    scheduleTodayAr: '8:00 صباحاً - 4:00 مساءً',
    scheduleDetailsEn: 'Regular outpatient services and clinics are currently operating.',
    scheduleDetailsAr: 'الاستشارات العادية ودعم الطوارئ متاحة خلال هذه الساعات.',

    sectionHeader: {
        labelEn: 'Dental Services',
        labelAr: 'خدمات الأسنان',
        titleEn: 'Dental Services',
        titleAr: 'خدمات عيادة الأسنان',
        descriptionEn: 'Comprehensive care for patients and clinical training for future dental professionals.',
        descriptionAr: 'نقدم مجموعة متكاملة من خدمات الأسنان لعلاج المرضى والتدريب السريري في نفس الوقت.'
    },

    scheduleSection: {
        hoursLabelEn: 'Clinic Hours',
        hoursLabelAr: 'مواعيد العيادة',
        titleEn: 'Weekly Schedule',
        titleAr: 'ساعات العمل الأسبوعية',
        descriptionEn: 'We serve patients with a fixed weekly schedule and emergency support when needed.',
        descriptionAr: 'نحن هنا لخدمة المرضى ضمن جدول ثابت مع دعم الطوارئ عند الحاجة.',
        overviewLabelEn: 'Schedule Overview',
        overviewLabelAr: 'الجدول الزمني',
        hoursHeadingEn: 'Opening Hours',
        hoursHeadingAr: 'أيام العمل',
        statusEn: 'Open Now',
        statusAr: 'مفتوح الآن',
        statusClosedEn: 'Closed Now',
        statusClosedAr: 'مغلق الآن'
    },

    booking: {
        titleEn: 'Clinic Hours & Booking',
        titleAr: 'ساعات العيادة والحجز',
        hoursEn: 'Monday - Friday: 8:00 AM - 4:00 PM',
        hoursAr: 'الأحد - الخميس: 8:00 صباحاً - 4:00 مساءً',
        locationEn: 'SPU Campus, Building D',
        locationAr: 'حرم SPU الجامعي، المبنى D',
        contactEn: '+963 11 123 4567',
        contactAr: '+963 11 123 4567'
    }
};
