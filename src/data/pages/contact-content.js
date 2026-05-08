import { siteRoutes } from '../../config/site-routes.js';

export const contactPageContent = {
    hero: {
        titleEn: 'CONTACT US',
        titleAr: 'تواصل معنا',
        bgImage: '/images/slider-3.webp'
    },
    info: {
        titleEn: 'Get In Touch',
        titleAr: 'ابق على تواصل',
        callUs: {
            labelEn: 'CALL US',
            labelAr: 'اتصل بنا',
            value: '+963 11 123 4567',
            icon: 'images/icon-phone-outline.svg'
        },
        emailUs: {
            labelEn: 'EMAIL US',
            labelAr: 'راسلنا',
            value: 'info@spu.edu.sy'
        },
        address: {
            labelEn: 'ADDRESS',
            labelAr: 'العنوان',
            valueEn: 'Syrian Private University Campus, Daraa Highway, Damascus, Syria',
            valueAr: 'مقر الجامعة السورية الخاصة، طريق درعا الدولي، دمشق، سوريا'
        },
        officeHours: {
            labelEn: 'OFFICE HOURS',
            labelAr: 'ساعات العمل',
            valueEn: 'Sunday - Thursday 8:00 AM - 4:00 PM',
            valueAr: 'الأحد - الخميس 8:00 صباحاً - 4:00 مساءً'
        }
    },
    socialsTitleEn: 'CONNECT WITH US',
    socialsTitleAr: 'تواصل معنا عبر',
    socials: [
        { icon: '/images/icon-facebook-outline.svg', url: 'https://www.facebook.com/SPUpage.sy' },
        { icon: '/images/icon-instagram-outline.svg', url: 'https://www.instagram.com/spu_syrian_private_university/' },
        { icon: '/images/icon-youtube-outline.svg', url: 'https://youtube.com/@spusyrianprivateuniversity755?si=xW_6Zru4wvjHnm6R' }
    ],
    form: {
        titleEn: 'Send us a Message',
        titleAr: 'أرسل لنا رسالة',
        fields: {
            name: { labelEn: 'Your Name', labelAr: 'اسمك' },
            email: { labelEn: 'Your Email', labelAr: 'بريدك الإلكتروني' },
            subject: { labelEn: 'Subject', labelAr: 'الموضوع' },
            message: { labelEn: 'Your Message', labelAr: 'رسالتك' }
        },
        submitEn: 'Send Message',
        submitAr: 'إرسال الرسالة'
    },
    location: {
        titleEn: 'Campus Location',
        titleAr: 'موقع الحرم الجامعي',
        buttonEn: 'Open Campus Map',
        buttonAr: 'فتح خريطة الحرم الجامعي',
        bgImage: '/images/contact/map-bg.jpg',
        mapUrl: 'https://www.google.com/maps?q=Syrian+Private+University'
    }
};

