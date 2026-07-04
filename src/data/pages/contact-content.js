import { siteRoutes } from '../../config/site-routes.js';

export const contactPageContent = {
    hero: {
        titleEn: 'CONTACT US',
        titleAr: 'تواصل معنا',
        bgImage: '/images/slider-3.webp'
    },
    subtitle: {
        en: 'If you have any questions, please feel free to get in touch with us via phone, text, email, the form below, or even on social media!',
        ar: 'إذا كان لديك أي أسئلة، لا تتردد في التواصل معنا عبر الهاتف أو الرسالة النصية أو البريد الإلكتروني أو النموذج أدناه أو حتى على وسائل التواصل الاجتماعي!'
    },
    info: {
        titleEn: 'CONTACT INFORMATION',
        titleAr: 'معلومات الاتصال',
        phone: {
            labelEn: 'PHONE',
            labelAr: 'الهاتف',
            value: '773-365-1240',
            icon: 'images/icon-phone-outline.svg'
        },
        address: {
            labelEn: 'ADDRESS',
            labelAr: 'العنوان',
            value: '1425 N McLean Blvd, Elgin, IL',
            icon: '/images/icon-map-outline.svg'
        },
        email: {
            labelEn: 'EMAIL',
            labelAr: 'البريد الإلكتروني',
            value: 'office@steponetrans.com',
            icon: '/images/icon-envelope-outline.svg'
        }
    },
    businessHours: {
        titleEn: 'BUSINESS HOURS',
        titleAr: 'ساعات العمل',
        mondayFriday: {
            labelEn: 'MONDAY - FRIDAY',
            labelAr: 'الاثنين - الجمعة',
            value: '9:00 am - 8:00 pm'
        },
        saturday: {
            labelEn: 'SATURDAY',
            labelAr: 'السبت',
            value: '9:00 am - 6:00 pm'
        },
        sunday: {
            labelEn: 'SUNDAY',
            labelAr: 'الأحد',
            value: '9:00 am - 5:00 pm'
        }
    },
    form: {
        titleEn: 'GET IN TOUCH',
        titleAr: 'تواصل معنا',
        fields: {
            name: { 
                labelEn: 'NAME', 
                labelAr: 'الاسم',
                placeholderEn: 'Enter your name*',
                placeholderAr: 'أدخل اسمك*'
            },
            phone: { 
                labelEn: 'PHONE NUMBER', 
                labelAr: 'رقم الهاتف',
                placeholderEn: 'Enter your phone number*',
                placeholderAr: 'أدخل رقم هاتفك*'
            },
            email: { 
                labelEn: 'EMAIL', 
                labelAr: 'البريد الإلكتروني',
                placeholderEn: 'Enter your email*',
                placeholderAr: 'أدخل بريدك الإلكتروني*'
            },
            message: { 
                labelEn: 'YOUR MESSAGE', 
                labelAr: 'رسالتك',
                placeholderEn: 'Enter your message',
                placeholderAr: 'أدخل رسالتك'
            }
        },
        submitEn: 'SEND MESSAGE',
        submitAr: 'إرسال الرسالة'
    },
    location: {
        titleEn: 'Campus Location',
        titleAr: 'موقع الحرم الجامعي',
        buttonEn: 'Open Campus Map',
        buttonAr: 'فتح خريطة الحرم الجامعي',
        bgImage: '/images/uni-main-place.JPG',
        mapUrl: 'https://www.google.com/maps?q=Syrian+Private+University'
    }
};
