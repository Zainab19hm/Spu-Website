import { newsArticles } from './news-listing-content.js';

const articleBodies = {
  'news-001': {
    titleEn: 'Pioneering Medical Research Initiative Launched',
    titleAr: 'إطلاق مبادرة بحث طبي رائدة',
    eyebrowEn: 'Research News',
    eyebrowAr: 'خبر بحثي',
    authorEn: 'SPU News Desk',
    authorAr: 'فريق أخبار الجامعة',
    readTimeEn: '4 min read',
    readTimeAr: '4 دقائق قراءة',
    leadEn: 'Syrian Private University has launched a new medical research initiative designed to strengthen academic collaboration, support clinical innovation, and encourage evidence-based healthcare practices across the university’s faculties.',
    leadAr: 'أطلقت الجامعة السورية الخاصة مبادرة بحث طبي جديدة تهدف إلى تعزيز التعاون الأكاديمي ودعم الابتكار السريري وتشجيع الممارسات الصحية القائمة على الدليل.',
    heroImage: '/images/research-clinical-simulation.webp',
    paragraphsEn: [
      'The initiative brings together faculty members, researchers, and students from medicine, dentistry, pharmacy, and related health sciences to work on research projects that address real healthcare challenges. Through this program, SPU aims to create a stronger connection between classroom learning, clinical practice, and scientific discovery.',
      'The new initiative will focus on applied medical research, patient-centered studies, public health topics, laboratory-based projects, and interdisciplinary collaboration. It will also support students in developing research skills, including literature review, data collection, ethical research practice, academic writing, and presentation of findings.',
      'This research-driven approach gives students and faculty the tools to contribute practical solutions while maintaining high academic and ethical standards.',
      'SPU considers this initiative an important step toward building a stronger research culture within the university. By supporting medical research and encouraging collaboration, the university continues its commitment to academic excellence, professional development, and service to the wider community.'
    ],
    paragraphsAr: [
      'تجمع المبادرة أعضاء الهيئة التدريسية والباحثين والطلاب من كليات الطب وطب الأسنان والصيدلة والعلوم الصحية ذات الصلة للعمل على مشاريع بحثية تعالج تحديات صحية واقعية.',
      'تركز المبادرة على البحث الطبي التطبيقي والدراسات المتمحورة حول المريض وموضوعات الصحة العامة والمشاريع المخبرية والتعاون متعدد التخصصات.',
      'يساعد هذا النهج البحثي الطلاب وأعضاء الهيئة التدريسية على تقديم حلول عملية مع الحفاظ على المعايير الأكاديمية والأخلاقية.',
      'تعد الجامعة هذه المبادرة خطوة مهمة لبناء ثقافة بحثية أقوى ودعم التميز الأكاديمي وخدمة المجتمع.'
    ],
    keyStatementEn: 'This approach allows students and faculty to explore practical solutions while maintaining high academic and ethical standards.',
    keyStatementAr: 'يتيح هذا النهج للطلاب وأعضاء الهيئة التدريسية استكشاف حلول عملية مع الحفاظ على معايير أكاديمية وأخلاقية عالية.'
  }
};

const fallbackBodyFor = (article) => ({
  titleEn: article.titleEn,
  titleAr: article.titleAr,
  eyebrowEn: 'University News',
  eyebrowAr: 'أخبار الجامعة',
  authorEn: 'SPU News Desk',
  authorAr: 'فريق أخبار الجامعة',
  readTimeEn: '3 min read',
  readTimeAr: '3 دقائق قراءة',
  leadEn: 'Syrian Private University continues to share academic, research, and campus updates from across the university community.',
  leadAr: 'تواصل الجامعة السورية الخاصة مشاركة التحديثات الأكاديمية والبحثية والجامعية من مختلف مجتمع الجامعة.',
  heroImage: '/images/IMG_7035 copy.jpg',
  paragraphsEn: [
    'This story highlights ongoing work across SPU and reflects the university’s commitment to academic quality, student engagement, and applied learning.',
    'The update brings together faculty activity, student participation, and institutional development in a format designed for public communication and archival access.',
    'SPU will continue publishing stories that document university progress, academic initiatives, and community-facing activities.'
  ],
  paragraphsAr: [
    'يسلط هذا الخبر الضوء على العمل المستمر داخل الجامعة ويعكس الالتزام بالجودة الأكاديمية ومشاركة الطلاب والتعلم التطبيقي.',
    'يجمع التحديث بين نشاط الكليات ومشاركة الطلاب والتطوير المؤسسي ضمن صيغة مناسبة للتواصل العام والأرشفة.',
    'ستواصل الجامعة نشر أخبار توثق التقدم الجامعي والمبادرات الأكاديمية والأنشطة المجتمعية.'
  ],
  keyStatementEn: 'The university continues to document academic progress and community engagement through official news updates.',
  keyStatementAr: 'تواصل الجامعة توثيق التقدم الأكاديمي والتفاعل المجتمعي عبر الأخبار الرسمية.'
});

export const newsArticleContent = {
  hero: {
    titleEn: 'News Article Page',
    titleAr: 'صفحة الخبر',
    image: '/images/slider-1.webp'
  },
  labels: {
    homeEn: 'Home',
    homeAr: 'الرئيسية',
    newsEn: 'News',
    newsAr: 'الأخبار',
    relatedEn: 'Related News',
    relatedAr: 'أخبار ذات صلة',
    previousEn: 'Previous',
    previousAr: 'السابق',
    nextEn: 'Next',
    nextAr: 'التالي',
    shareEn: 'Share article',
    shareAr: 'مشاركة الخبر',
    readMoreEn: 'Read More',
    readMoreAr: 'اقرأ المزيد'
  },
  articles: newsArticles.map((article) => {
    const body = articleBodies[article.id] || fallbackBodyFor(article);
    return {
      ...article,
      ...body,
      titleEn: body.titleEn || article.titleEn,
      titleAr: body.titleAr || article.titleAr,
      heroImage: body.heroImage || article.image,
      href: `/news/article/?id=${article.id}`
    };
  })
};
