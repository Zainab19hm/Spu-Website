import { researchPageContent } from '../pages/research-content.js';

const facultyIdToPublicationFacultyMap = {
    'medicine': { facultyEn: 'Faculty of Medicine', facultyAr: 'كلية الطب' },
    'dentistry': { facultyEn: 'Faculty of Dentistry', facultyAr: 'كلية طب الأسنان' },
    'pharmacy': { facultyEn: 'Faculty of Pharmacy', facultyAr: 'كلية الصيدلة' },
    'ai-engineering': { facultyEn: 'Faculty of Artificial Intelligence', facultyAr: 'كلية الذكاء الاصطناعي' },
    'petroleum': { facultyEn: 'Faculty of Petroleum Engineering', facultyAr: 'كلية هندسة البترول' },
    'Construction': { facultyEn: 'Faculty of Construction Engineering', facultyAr: 'كلية هندسة التشييد' },
    'business': { facultyEn: 'Faculty of Business Administration', facultyAr: 'كلية إدارة الأعمال' }
};

function getFacultyName(faculty, lang) {
    if (lang === 'ar') {
        return faculty.nameAr || faculty.catalogTitleAr || faculty.nameEn || '';
    }

    return faculty.catalogTitleEn || faculty.nameEn || '';
}

export function createFacultyResearchSection(faculty) {
    const facultyNameEn = getFacultyName(faculty, 'en');
    const facultyNameAr = getFacultyName(faculty, 'ar');
    const facultyMapping = facultyIdToPublicationFacultyMap[faculty.id];

    let filteredPublications = [];

    if (facultyMapping) {
        filteredPublications = (researchPageContent.publications?.items || []).filter(pub =>
            pub.facultyEn === facultyMapping.facultyEn
        );
    }

    const items = filteredPublications.length > 0 ? filteredPublications.map(pub => ({
        id: pub.id,
        titleEn: pub.titleEn,
        titleAr: pub.titleAr,
        summaryEn: pub.summaryEn,
        summaryAr: pub.summaryAr,
        image: pub.image,
        date: pub.year,
        doi: pub.doi,
        typeEn: pub.typeEn,
        typeAr: pub.typeAr,
        authorEn: pub.authorEn,
        authorAr: pub.authorAr,
        facultyEn: pub.facultyEn,
        facultyAr: pub.facultyAr,
        href: pub.links?.local || `/research/publications/${pub.slug}/`,
        ctaEn: 'View Publication',
        ctaAr: 'عرض المنشور'
    })) : [];

    return {
        eyebrowEn: 'Faculty Research',
        eyebrowAr: 'Faculty Research',
        titleEn: 'Latest Research',
        titleAr: 'Latest Research',
        summaryEn: items.length > 0
            ? `Explore ${facultyNameEn} research publications, articles, and conference papers.`
            : `No research publications available for ${facultyNameEn} at this time.`,
        summaryAr: items.length > 0
            ? `استكشف منشورات وأبحاث ومقالات كلية ${facultyNameAr}.`
            : `لا توجد منشورات بحثية متاحة لكلية ${facultyNameAr} في الوقت الحالي.`,
        items: items
    };
}
