const researchTopicsByFaculty = {
    medicine: [
        { titleEn: 'Clinical Simulation and Preventive Health', titleAr: 'Clinical Simulation and Preventive Health' },
        { titleEn: 'Hospital Training Outcomes', titleAr: 'Hospital Training Outcomes' },
        { titleEn: 'Community Medicine Studies', titleAr: 'Community Medicine Studies' }
    ],
    dentistry: [
        { titleEn: 'Digital Dentistry and Oral Regeneration', titleAr: 'Digital Dentistry and Oral Regeneration' },
        { titleEn: 'Dental Imaging and Diagnosis', titleAr: 'Dental Imaging and Diagnosis' },
        { titleEn: 'Evidence Based Oral Care', titleAr: 'Evidence Based Oral Care' }
    ],
    pharmacy: [
        { titleEn: 'Drug Formulation and Quality Control', titleAr: 'Drug Formulation and Quality Control' },
        { titleEn: 'Clinical Pharmacy Practice', titleAr: 'Clinical Pharmacy Practice' },
        { titleEn: 'Natural Products and Therapeutics', titleAr: 'Natural Products and Therapeutics' }
    ],
    petroleum: [
        { titleEn: 'Reservoir Characterization Models', titleAr: 'Reservoir Characterization Models' },
        { titleEn: 'Energy Production Optimization', titleAr: 'Energy Production Optimization' },
        { titleEn: 'Petroleum Geology Applications', titleAr: 'Petroleum Geology Applications' }
    ],
    'ai-engineering': [
        { titleEn: 'Applied AI and Machine Learning', titleAr: 'Applied AI and Machine Learning' },
        { titleEn: 'Computer Vision and Natural Language Processing', titleAr: 'Computer Vision and Natural Language Processing' },
        { titleEn: 'Cloud Systems and Smart Data', titleAr: 'Cloud Systems and Smart Data' }
    ],
    Construction: [
        { titleEn: 'Sustainable Construction Materials', titleAr: 'Sustainable Construction Materials' },
        { titleEn: 'Structural Performance and Safety', titleAr: 'Structural Performance and Safety' },
        { titleEn: 'Project Delivery and BIM Methods', titleAr: 'Project Delivery and BIM Methods' }
    ],
    business: [
        { titleEn: 'Market Intelligence and Decision Systems', titleAr: 'Market Intelligence and Decision Systems' },
        { titleEn: 'Finance and Banking Research', titleAr: 'Finance and Banking Research' },
        { titleEn: 'Entrepreneurship and Organizational Leadership', titleAr: 'Entrepreneurship and Organizational Leadership' }
    ]
};

const fallbackTopics = [
    { titleEn: 'Applied Faculty Research', titleAr: 'Applied Faculty Research' },
    { titleEn: 'Practice Based Innovation', titleAr: 'Practice Based Innovation' },
    { titleEn: 'Student Research Development', titleAr: 'Student Research Development' }
];

const publicationTypes = [
    { typeEn: 'Research Article', typeAr: 'Research Article' },
    { typeEn: 'Applied Study', typeAr: 'Applied Study' },
    { typeEn: 'Faculty Project', typeAr: 'Faculty Project' }
];

const publicationYears = ['2026', '2025', '2025'];

function getTabContent(faculty, id, lang) {
    const tab = (faculty.tabs || []).find((item) => item.id === id) || {};
    return lang === 'ar'
        ? (tab.contentAr || tab.contentEn || '')
        : (tab.contentEn || tab.contentAr || '');
}

function getFacultyName(faculty, lang) {
    if (lang === 'ar') {
        return faculty.nameAr || faculty.catalogTitleAr || faculty.nameEn || '';
    }

    return faculty.catalogTitleEn || faculty.nameEn || '';
}

function getGallery(faculty) {
    return [...new Set([
        faculty.image_1,
        faculty.image_2,
        faculty.heroImage,
        faculty.dean?.image
    ].filter(Boolean))];
}

function buildResearchItems(faculty) {
    const topics = researchTopicsByFaculty[faculty.id] || fallbackTopics;
    const gallery = getGallery(faculty);
    const summariesEn = [
        getTabContent(faculty, 'objectives', 'en'),
        getTabContent(faculty, 'mission', 'en'),
        faculty.dean?.messageEn || faculty.catalogDescEn || ''
    ];
    const summariesAr = [
        getTabContent(faculty, 'objectives', 'ar'),
        getTabContent(faculty, 'mission', 'ar'),
        faculty.dean?.messageAr || faculty.catalogDescAr || ''
    ];

    return topics.map((topic, index) => ({
        id: `${faculty.id || 'faculty'}-research-${index + 1}`,
        titleEn: topic.titleEn,
        titleAr: topic.titleAr,
        summaryEn: summariesEn[index] || faculty.catalogDescEn || '',
        summaryAr: summariesAr[index] || faculty.catalogDescAr || summariesEn[index] || '',
        image: gallery[index % Math.max(gallery.length, 1)] || '/images/news/researches.jpeg',
        date: publicationYears[index] || publicationYears[publicationYears.length - 1],
        typeEn: publicationTypes[index]?.typeEn || 'Research',
        typeAr: publicationTypes[index]?.typeAr || publicationTypes[index]?.typeEn || 'Research',
        doi: `SPU-${String(faculty.id || 'faculty').toUpperCase()}-${index + 1}`,
        href: '/research/repository.html',
        ctaEn: index === 0 ? 'View Research' : 'Research Details',
        ctaAr: index === 0 ? 'View Research' : 'Research Details'
    }));
}

export function createFacultyResearchSection(faculty) {
    const facultyNameEn = getFacultyName(faculty, 'en');
    const facultyNameAr = getFacultyName(faculty, 'ar');

    return {
        eyebrowEn: 'Faculty Research',
        eyebrowAr: 'Faculty Research',
        titleEn: 'Latest Research',
        titleAr: 'Latest Research',
        summaryEn: `Recent faculty-led work connects ${facultyNameEn || 'the faculty'} programs with applied study, laboratory practice, and community impact.`,
        summaryAr: `Recent faculty-led work connects ${facultyNameAr || 'the faculty'} programs with applied study, laboratory practice, and community impact.`,
        items: buildResearchItems(faculty)
    };
}
