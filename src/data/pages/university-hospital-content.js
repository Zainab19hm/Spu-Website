import { icon } from "@fortawesome/fontawesome-svg-core";
import { siteRoutes , withHash } from "../../config/site-routes";

export const universityHospitalPageContent = {
    hero: {
        titleEn: 'University Hospital',
        titleAr: 'المستشفى الجامعي',
        summaryEn: 'Medical departments, healthcare services, appointments, insurance support, and emergency contact.',
        summaryAr: 'الأقسام الطبية، خدمات الرعاية الصحية، المواعيد، دعم التأمين، والاتصال في حالات الطوارئ.',
        image: '/images/campus-hospital.webp',
        ctaAr: 'الحصول على الاتجاهات',
        ctaEn: 'Get Directions',
        ctaUrl: 'https://www.google.com/maps?q=Syrian+Private+University+Hospital',
        breadcrumbHomeEn: 'Home',
        breadcrumbHomeAr: 'الرئيسية',
        breadcrumbCampusEn: 'Campus Life',
        breadcrumbCampusAr: 'الحياة الجامعية',
        breadcrumbCurrentEn: 'University Hospital',
        breadcrumbCurrentAr: 'المستشفى الجامعي'
    },

    sectionHeader: {
        titleEn: 'Medical Departments',
        titleAr: 'الأقسام الطبية'
    },

    departments: [
        {
            titleEn: 'Cardiology',
            titleAr: 'أمراض القلب',
            descriptionEn: 'Comprehensive heart care, diagnostics, and advanced treatment options.',
            descriptionAr: 'رعاية قلب شاملة، تشخيصات، وخيارات علاجية متقدمة.',
            icon: '/images/icons/cardiology.svg'
        },
        {
            titleEn: 'Neurology',
            titleAr: 'أمراض الأعصاب',
            descriptionEn: 'Expert diagnosis and treatment for neurological disorders and brain health.',
            descriptionAr: 'تشخيص وعلاج متخصص للاضطرابات العصبية وصحة الدماغ.',
            icon: '/images/icons/neurology.svg'
        },
        {
            titleEn: 'Pediatrics',
            titleAr: 'طب الأطفال',
            descriptionEn: 'Specialized healthcare services for infants, children, and adolescents.',
            descriptionAr: 'خدمات رعاية صحية متخصصة للرضع والأطفال والمراهقين.',
            icon: '/images/icons/pediatrics.svg'
        },
        {
            titleEn: 'Orthopedics',
            titleAr: 'جراحة العظام',
            descriptionEn: 'Comprehensive care for bone, joint, and muscle conditions and injuries.',
            descriptionAr: 'رعاية شاملة لحالات وإصابات العظام والمفاصل والعضلات.',
            icon: '/images/icons/orthopedics.svg'
        }
    ],
    
    schedule: [
        { dayEn: 'Saturday', dayAr: 'السبت', timeEn: '8:00 AM - 4:00 PM', timeAr: '8:00 صباحاً - 4:00 مساءً' , isEmergency: false },
        { dayEn: 'Sunday', dayAr: 'الأحد', timeEn: '8:00 AM - 4:00 PM', timeAr: '8:00 صباحاً - 4:00 مساءً', isEmergency: false },
        { dayEn: 'Monday', dayAr: 'الاثنين', timeEn: '8:00 AM - 4:00 PM', timeAr: '8:00 صباحاً - 4:00 مساءً', isEmergency: false },
        { dayEn: 'Tuesday', dayAr: 'الثلاثاء', timeEn: '8:00 AM - 4:00 PM', timeAr: '8:00 صباحاً - 4:00 مساءً', isEmergency: false },
        { dayEn: 'Wednesday', dayAr: 'الأربعاء', timeEn: 'Emergency Only', timeAr: 'حالات الطوارئ فقط', isEmergency: true },
        { dayEn: 'Thursday', dayAr: 'الخميس', timeEn: 'Emergency Only', timeAr: 'حالات الطوارئ فقط', isEmergency: true },
        { dayEn: 'Friday', dayAr: 'الجمعة', timeEn: 'Emergency Only', timeAr: 'حالات الطوارئ فقط', isEmergency: true },
    ],

    scheduleSection: {
        titleEn: 'Weekly Schedule',
        titleAr: 'ساعات العمل الأسبوعية',
        statusEn: 'Open Now',
        statusAr: 'مفتوح الآن',
        statusClosedEn: 'Closed Now',
        statusClosedAr: 'مغلق الآن'
    },

    scheduleDetailsEn: 'Regular outpatient services and clinics are currently operating.',
    scheduleDetailsAr: 'العيادات الخارجية والخدمات العادية تعمل حالياً.',

    emergency: {
        labelEn: 'Emergency Support',
        labelAr: 'دعم الطوارئ',
        statusEn: 'AVAILABLE 24/7',
        statusAr: 'متاح 24/7',
        hotlineLabelEn: 'Emergency Hotline',
        hotlineLabelAr: 'خط الطوارئ الساخن',
        phone: '+963 11 123 4567',
        callCtaEn: 'Call Now',
        callCtaAr: 'اتصل الآن',
        directionsCtaEn: 'Get Directions',
        directionsCtaAr: 'الحصول على الاتجاهات',
        icon:'/images/icons/univ-icon.png'
    }
};
