import { researchPageContent } from './research-content.js';

const publications = researchPageContent.repository.publications;

const detailBodies = {
  'res-001': {
    leadEn: 'This study evaluates the effectiveness of various machine learning algorithms in real-time pharmaceutical quality control, with particular focus on tablet and capsule production lines.',
    leadAr: 'يقيم هذا البحث فعالية خوارزميات تعلم الآلة المختلفة في مراقبة جودة الأدوية في الوقت الفعلي، مع التركيز بشكل خاص على خطوط إنتاج الأقراص والكبسولات.',
    heroImage: '/images/pharmacy-place.jpg',
    paragraphsEn: [
      'Quality control in pharmaceutical manufacturing traditionally relies on manual inspection and periodic laboratory testing, which can be time-consuming and prone to human error. This research introduces an automated machine learning pipeline that processes real-time images from production lines to identify defects instantly.',
      'The study compared five different algorithms: Random Forest, Support Vector Machines, Convolutional Neural Networks, ResNet-50, and a custom ensemble model. Data was collected from three pharmaceutical manufacturing facilities over an 18-month period, yielding over 50,000 labeled images of tablets and capsules.',
      'Results showed that the custom ensemble model achieved the highest accuracy at 94.2%, with particularly strong performance in detecting coating defects and dimensional irregularities. The model operates at 120 frames per second, making it suitable for real-time deployment on high-speed production lines.',
      'Implementation of this system at partner facilities resulted in a 37% reduction in quality-related batch rejections and estimated annual savings of approximately $280,000 per production line. The research team is currently working on extending the model to detect contamination and verify labeling accuracy.'
    ],
    paragraphsAr: [
      'تعتمد مراقبة الجودة في تصنيع الأدوية تقليدياً على الفحص اليدوي والاختبار الدوري في المختبر، والذي يمكن أن يكون مستهلكاً للوقت وعرضة للخطأ البشري. يقدم هذا البحث خط أنابيب تعلم آلي آلي يعالج الصور في الوقت الفعلي من خطوط الإنتاج لتحديد العيوب فوراً.',
      'قارنت الدراسة خمس خوارزميات مختلفة: الغابة العشوائية، وآلات المتجهات الداعمة، والشبكات العصبية التلافيفية، وResNet-50، ونموذج مجموعي مخصص. تم جمع البيانات من ثلاث منشآت تصنيع دوائية على مدى 18 شهراً، مما أنتج أكثر من 50000 صورة موسومة للأقراص والكبسولات.',
      'أظهرت النتائج أن النموذج المجمع المخصص حقق أعلى دقة بنسبة 94.2%، مع أداء قوي بشكل خاص في كشف عيوب الطلاء والتشوهات الأبعادية. يعمل النموذج بسرعة 120 إطاراً في الثانية، مما يجعله مناسباً للنشر في الوقت الفعلي على خطوط الإنتاج عالية السرعة.',
      'أدى تنفيذ هذا النظام في المنشآت الشريكة إلى تخفيض بنسبة 37% في رفض الدفعات المتعلقة بالجودة وتوفيرات سنوية تقدر بحوالي 280000 دولار لكل خط إنتاج. يعمل فريق البحث حالياً على توسيع النموذج لكشف التلوث والتحقق من دقة التسمية.'
    ],
    keyStatementEn: 'Machine learning quality control systems can reduce batch rejections by 37% while operating at production-line speeds.',
    keyStatementAr: 'يمكن لأنظمة مراقبة الجودة بالتعلم الآلي تقليل رفض الدفعات بنسبة 37% مع العمل بسرعات خط الإنتاج.'
  },
  'res-002': {
    leadEn: 'This research develops and validates a deep learning system for automated detection of early-stage dental caries from panoramic and periapical radiographs.',
    leadAr: 'يطور هذا البحث ويحقق من نظام التعلم العميق للكشف الآلي عن تسوس الأسنان المبكر من الأشعة البانورامية والأشعة المحيطة بقمة الجذر.',
    heroImage: '/images/research-digital-dentistry.webp',
    paragraphsEn: [
      'Early detection of dental caries is critical for preventive intervention, yet visual inspection of radiographs misses approximately 30% of incipient lesions. This study presents a convolutional neural network trained on 12,000 annotated dental radiographs from SPU dental clinics.',
      'The model architecture combines a ResNet-101 backbone with a feature pyramid network for multi-scale lesion detection. A novel data augmentation strategy was developed to simulate common radiographic artifacts including overexposure, underexposure, and patient movement blur.',
      'In clinical validation, the AI system achieved 89.4% sensitivity and 92.1% specificity for detecting early caries, significantly outperforming junior dentists (74.2% sensitivity) and matching senior specialists (88.1% sensitivity). The system processes a full panoramic radiograph in 2.3 seconds.',
      'The research team has integrated the model into the SPU Dental Clinic\'s picture archiving system, where it serves as a decision-support tool for dental students during their clinical training. Future work will extend the system to detect periodontal bone loss and periapical pathology.'
    ],
    paragraphsAr: [
      'يعد الكشف المبكر عن تسوس الأسنان أمراً حاسماً للتدخل الوقائي، ومع ذلك يفوت الفحص البصري للأشعة السينية حوالي 30% من الآفات البدئية. تقدم هذه الدراسة شبكة عصبية تلافيفية مدربة على 12000 أشعة سنية مشروحة من عيادات طب الأسنان في الجامعة السورية الخاصة.',
      'يجمع هيكل النموذج بين العمود الفقري ResNet-101 وشبكة هرمية للسمات للكشف متعدد المقاياس عن الآفات. تم تطوير استراتيجية جديدة لتعزيز البيانات لمحاكاة الأخطاء الشائعة في الأشعة السينية بما في ذلك الإفراط في التعرض ونقص التعرض وضبابية حركة المريض.',
      'في التحقق السريري، حقق نظام الذكاء الاصطناعي حساسية 89.4% ونوعية 92.1% للكشف عن التسوس المبكر، متفوقاً بشكل كبير على أطباء الأسنان المبتدئين (74.2% حساسية) ومطابقاً للأخصائيين كبار (88.1% حساسية). يعالج النظام أشعة بانورامية كاملة في 2.3 ثانية.',
      'دمج فريق البحث النموذج في نظام أرشفة الصور في عيادة طب الأسنان بالجامعة السورية الخاصة، حيث يعمل كأداة دعم قرار لطلاب طب الأسنان خلال تدريبهم السريري. سيعمل العمل المستقبلي على توسيع النظام لكشف فقدان العظم السنخي والأمراض المحيطة بقمة الجذر.'
    ],
    keyStatementEn: 'AI-powered radiograph analysis achieves specialist-level accuracy in early caries detection while processing images in under 3 seconds.',
    keyStatementAr: 'يحقق تحليل الأشعة السينية المدعوم بالذكاء الاصطناعي دقة مستوى الأخصائي في الكشف المبكر عن التسوس مع معالجة الصور في أقل من 3 ثوانٍ.'
  },
  'res-003': {
    leadEn: 'This experimental study investigates the mechanical behavior of hybrid fiber-reinforced concrete under simulated seismic loading conditions relevant to Syrian building codes.',
    leadAr: 'تبحث هذه الدراسة التجريبية في السلوك الميكانيكي للخرسانة المسلحة بالألياف الهجينة تحت ظروف حمل زلزالي محاكاة ذات صلة بالمواصفات السورية للبناء.',
    heroImage: '/images/campus-feature-01.webp',
    paragraphsEn: [
      'Syria\'s location in a seismically active region necessitates construction materials with superior ductility and energy dissipation. This research evaluates concrete reinforced with a hybrid combination of steel and polypropylene fibers at varying volume fractions.',
      'A total of 72 concrete specimens were cast and tested under cyclic loading protocols conforming to ASTM E2126. The hybrid fiber mix (0.75% steel + 0.25% polypropylene by volume) demonstrated the optimal balance, increasing energy dissipation capacity by 42% compared to plain concrete.',
      'Microstructural analysis using scanning electron microscopy revealed that steel fibers primarily control macro-crack propagation while polypropylene fibers bridge micro-cracks, creating a complementary toughening mechanism. This synergistic effect delays the onset of spalling and maintains structural integrity longer during cyclic loading.',
      'Based on these findings, the research team proposed modified mix design guidelines for seismic-zone concrete that have been submitted to the Syrian Engineering Association for review. Pilot projects using the optimized concrete mix are planned for two university building renovations.'
    ],
    paragraphsAr: [
      'يستلزم موقع سوريا في منطقة زلزالية نشطة مواد بناء ذات مطيلية فائقة وتبديد طاقة عالي. يقوم هذا البحث بتقييم الخرسانة المسلحة بمزيج هجين من ألياف الصلب والبولي بروبيلين بكسور حجمية متفاوتة.',
      'تم صب واختبار 72 عينة خرسانية إجمالاً تحت بروتوكولات حمل دوري تتوافق مع ASTM E2126. أظهر مزيج الألياف الهجين (0.75% فولاذ + 0.25% بولي بروبيلين حسب الحجم) التوازن الأمثل، مما يزيد قدرة تبديد الطاقة بنسبة 42% مقارنة بالخرسانة العادية.',
      'كشف التحليل المجهري باستخدام المجهر الإلكتروني الماسح أن ألياف الصلب تتحكم بشكل أساسي في انتشار الشقوق الكبيرة بينما تربط ألياف البولي بروبيلين الشقوق الدقيقة، مما يخلق آلية تقوية مكملة. يؤثر هذا التأثير التآزري على تأخير بداية التقشر والحفاظ على السلامة الإنشائية لفترة أطول أثناء الحمل الدوري.',
      'بناءً على هذه النتائج، اقترح فريق البحث إرشادات تصميم مزيج معدلة للخرسانة في المناطق الزلزالية تم تقديمها إلى الجمعية السورية للمهندسين للمراجعة. هناك مشاريع تجريبية باستخدام مزيج الخرسانة الأمثل مخطط لها لمشروعين تجديد مباني جامعية.'
    ],
    keyStatementEn: 'Hybrid fiber-reinforced concrete increases energy dissipation capacity by 42% under seismic loading compared to conventional concrete.',
    keyStatementAr: 'تزيد الخرسانة المسلحة بالألياف الهجينة قدرة تبديد الطاقة بنسبة 42% تحت الحمل الزلزالي مقارنة بالخرسانة التقليدية.'
  },
  'res-004': {
    leadEn: 'This study presents a novel deep learning architecture combining LSTM and Transformer models for predicting carbonate reservoir permeability from well log data.',
    leadAr: 'تقدم هذه الدراسة هيكل تعلم عميق جديد يجمع بين نماذج LSTM وTransformer للتنبؤ بإ permeability مكامن الكربونات من بيانات آبار التسجيل.',
    heroImage: '/images/slider-3.webp',
    paragraphsEn: [
      'Accurate permeability prediction is essential for reservoir characterization and production optimization, yet traditional empirical correlations often yield errors exceeding 30%. This research leverages the sequential nature of well log data through a hybrid neural architecture.',
      'The proposed LSTM-Transformer model processes depth-sequential log measurements (gamma ray, neutron porosity, density, sonic, and resistivity) through stacked LSTM layers for temporal feature extraction, followed by Transformer encoder layers for global context aggregation.',
      'Trained on 234 wells from the Middle East\'s major carbonate reservoirs, the model achieved a mean absolute percentage error of 8.4% on the test set, representing an 18% improvement over the best-performing baseline method (XGBoost with engineered features).',
      'The research includes an interpretability analysis using attention visualization, which reveals that the model prioritizes porosity and sonic log readings in permeable zones while relying more on lithology indicators in tight formations. An interactive web application has been developed for field engineers to apply the model to new wells.'
    ],
    paragraphsAr: [
      'يعد التنبؤ الدقيق بإ permeability أمراً ضرورياً لتوصيف المكامن وتحسين الإنتاج، ومع ذلك غالباً ما تنتج الارتباطات التجريبية التقليدية أخطاء تتجاوز 30%. يستفيد هذا البحث من الطبيعة المتسلسلة لبيانات تسجيل الآبار من خلال هيكل عصبي هجين.',
      'يعالج نموذج LSTM-Transformer المقترح قياسات التسجيل المتسلسلة العمق (أشعة جاما، مسامية النيوترون، الكثافة، الصوتية، والمقاومية) من خلال طبقات LSTM مكدسة لاستخراج السمات الزمنية، تليها طبقات ترميز Transformer لتجميع السياق العالمي.',
      'تم تدريب النموذج على 234 بئراً من أكبر مكامن الكربونات في الشرق الأوسط، حيث حقق متوسط الخطأ المطلق النسبي 8.4% على مجموعة الاختبار، مما يمثل تحسناً بنسبة 18% عن أفضل طريقة أساسية أداءً (XGBoost مع السمات المهندسة).',
      'تتضمن الدراسة تحليلاً للتفسيرية باستخدام تصور الانتباه، والذي يكشف أن النموذج يعطي الأولوية لقراءات المسامية والتسجيل الصوتي في المناطق النفاذة بينما يعتمد بشكل أكبر على مؤشرات الصخر في التكوينات الضيقة. تم تطوير تطبيق ويب تفاعلي للمهندسين الميدانيين لتطبيق النموذج على آبار جديدة.'
    ],
    keyStatementEn: 'The LSTM-Transformer architecture reduces permeability prediction error by 18% compared to conventional machine learning approaches.',
    keyStatementAr: 'يقلل هيكل LSTM-Transformer خطأ التنبؤ بإ permeability بنسبة 18% مقارنة بنهج التعلم الآلي التقليدية.'
  },
  'res-005': {
    leadEn: 'This randomized controlled trial evaluates whether high-fidelity clinical simulation training improves diagnostic accuracy among medical students in emergency medicine scenarios.',
    leadAr: 'تقيّم هذه التجربة السريرية العشوائية ما إذا كان تدريب المحاكاة السريرية عالي الدقة يحسن دقة التشخيص بين طلاب الطب في سيناريوهات طب الطوارئ.',
    heroImage: '/images/research-clinical-simulation.webp',
    paragraphsEn: [
      'The transition from classroom learning to clinical practice presents significant challenges for medical students, particularly in high-stakes emergency scenarios where rapid, accurate diagnosis is critical. This study investigates whether structured simulation training can bridge this gap.',
      'One hundred eighty third-year medical students were randomly assigned to either a simulation training group (n=90) or a traditional case-based learning control group (n=90). The simulation group completed twelve standardized emergency scenarios using SPU\'s high-fidelity patient simulators over six weeks.',
      'Post-intervention assessment using validated OSCE stations showed that the simulation group achieved significantly higher diagnostic accuracy scores (82.3% vs 71.6%, p<0.001) and faster time-to-diagnosis (4.2 vs 6.1 minutes, p<0.001). The effect was most pronounced in cardiopulmonary and neurological emergencies.',
      'Student confidence surveys also favored the simulation group, with 89% reporting feeling "well prepared" for emergency rotations compared to 62% in the control group. These findings support the expansion of simulation-based training across all clinical clerkships at SPU.'
    ],
    paragraphsAr: [
      'يقدم الانتقال من التعلم الصفي إلى الممارسة السريرية تحديات كبيرة لطلاب الطب، ولا سيما في سيناريوهات الطوارئ ذات المخاطر العالية حيث يكون التشخيص السريع والدقيق حاسماً. تبحث هذه الدراسة فيما إذا كان التدريب المنظم بالمحاكاة يمكن أن يؤدي هذا الفجوة.',
      'تم تعيين 180 طالباً في السنة الثالثة من الطب عشوائياً إما إلى مجموعة تدريب المحاكاة (n=90) أو مجموعة ضابطة للتعلم التقليدي القائم على الحالات (n=90). أكملت مجموعة المحاكاة اثني عشر سيناريو طوارئ موحد باستخدام محاكيات المرضى عالية الدقة في الجامعة السورية الخاصة على مدى ستة أسابيع.',
      'أظهر التقييم بعد التدخل باستخدام محطات OSCE المؤكدة أن مجموعة المحاكاة حققت درجات دقة تشخيص أعلى بشكل كبير (82.3% مقابل 71.6%، p<0.001) ووقت أسرع للتشخيص (4.2 مقابل 6.1 دقائق، p<0.001). كان التأثير الأكثر وضوحاً في حالات الطوارئ القلبية الرئوية والعصبية.',
      'أفادت استبيانات ثقة الطلاب أيضاً لصالح مجموعة المحاكاة، حيث أبلغ 89% عن شعورهم بأنهم "مستعدون جيداً" لفترات الطوارئ مقارنة بـ 62% في مجموعة الضابطة. تدعم هذه النتائج توسيع التدريب القائم على المحاكاة في جميع التدريبات السريرية في الجامعة السورية الخاصة.'
    ],
    keyStatementEn: 'High-fidelity simulation training improves emergency diagnostic accuracy by 10.7 percentage points and reduces time-to-diagnosis by 31%.',
    keyStatementAr: 'يحسن تدريب المحاكاة عالي الدقة دقة التشخيص في حالات الطوارئ بمقدار 10.7 نقطة مئوية ويقلل وقت التشخيص بنسبة 31%.'
  },
  'res-006': {
    leadEn: 'This research develops an Arabic natural language processing pipeline for automatically summarizing unstructured medical records and extracting key clinical entities.',
    leadAr: 'يطور هذا البحث خط معالجة اللغة العربية الطبيعية لتلخيص السجلات الطبية غير المنظمة تلقائياً واستخراج الكيانات السريرية الرئيسية.',
    heroImage: '/images/Gemini_Generated_Image_c89yjwc89yjwc89y.webp',
    paragraphsEn: [
      'Electronic health records contain vast amounts of unstructured clinical narrative in Arabic, yet existing NLP tools are predominantly designed for English text. This study addresses the gap by developing a specialized Arabic clinical NLP pipeline.',
      'The system uses AraBERT, a pre-trained BERT model for Arabic, fine-tuned on 5,000 curated discharge summaries from SPU University Hospital. Named entity recognition models were trained to identify diagnoses, medications, procedures, and laboratory results with high precision.',
      'Evaluation on a held-out test set of 1,000 summaries demonstrated 91.2% F1-score for entity extraction and 87.6% ROUGE-L score for abstractive summarization. The system handles Arabic morphological complexity including clitics, dialectal variations, and medical abbreviations specific to Syrian healthcare practice.',
      'A web-based demo has been deployed in the hospital\'s informatics department, where clinicians report that automated summaries reduce chart review time by approximately 40%. The dataset and models have been released as open-source resources to support further research in Arabic clinical NLP.'
    ],
    paragraphsAr: [
      'تحتوي السجلات الصحية الإلكترونية على كميات هائلة من السرد السريري غير المنظم باللغة العربية، ومع ذلك تم تصميم أدوات معالجة اللغة الطبيعية الموجودة في الغالب للنصوص الإنجليزية. تعالج هذه الدراسة هذه الفجوة من خلال تطوير خط معالجة اللغة العربية السريرية المتخصصة.',
      'يستخدم النظام AraBERT، وهو نموذج BERT مُدرب مسبقاً للعربية، تمت معايرته على 5000 ملخص خروج منسق من مشفى الجامعة السورية الخاصة. تم تدريب نماذج التعرف على الكيانات المسماة لتحديد التشخيصات والأدوية والإجراءات ونتائج المختبر بدقة عالية.',
      'أظهر التقييم على مجموعة اختبار منفصلة من 1000 ملخص درجة F1 بنسبة 91.2% لاستخراج الكيانات ودرجة ROUGE-L بنسبة 87.6% للتلخيص الاستنتاجي. يتعامل النظام مع التعقيدات الصرفية العربية بما في ذلك الملحقات والتباينات اللهجية والاختصارات الطبية الخاصة بالممارسة الصحية السورية.',
      'تم نشر عرض ويب تجريبي في قسم المعلوماتية بالمشفى، حيث أبلغ الأطباء أن الملخصات الآلية تقلل وقت مراجعة الملفات بنحو 40%. تم إصدار مجموعة البيانات والنماذج كموارد مفتوحة المصدر لدعم المزيد من البحث في معالجة اللغة العربية السريرية.'
    ],
    keyStatementEn: 'Arabic clinical NLP achieves 91% F1-score on entity extraction and reduces physician chart review time by 40%.',
    keyStatementAr: 'يحقق معالجة اللغة العربية السريرية درجة F1 بنسبة 91% في استخراج الكيانات ويقلل وقت مراجعة الأطباء للملفات بنسبة 40%.'
  }
};

const fallbackBodyFor = (pub) => ({
  leadEn: pub.summaryEn,
  leadAr: pub.summaryAr,
  heroImage: pub.image || '/images/uni-main-place.JPG',
  paragraphsEn: [
    'This publication represents ongoing research efforts at Syrian Private University to advance knowledge in this field.',
    'The study was conducted with institutional support and follows established ethical and methodological standards for academic research.'
  ],
  paragraphsAr: [
    'يمثل هذا المنشور جهود البحث المستمرة في الجامعة السورية الخاصة لتقدم المعرفة في هذا المجال.',
    'أجريت الدراسة بدعم مؤسسي وتتبع المعايير الأخلاقية والمنهجية المعمول بها للبحث الأكاديمي.'
  ],
  keyStatementEn: 'SPU continues to support rigorous academic research across all faculties.',
  keyStatementAr: 'تواصل الجامعة السورية الخاصة دعم البحث الأكاديمي الرصين في جميع الكليات.'
});

export const researchDetailContent = {
  hero: {
    titleEn: 'Research Publication',
    titleAr: 'منشور بحثي',
    image: '/images/uni-main-place.JPG'
  },
  labels: {
    homeEn: 'Home',
    homeAr: 'الرئيسية',
    researchEn: 'Research',
    researchAr: 'البحث',
    repositoryEn: 'Repository',
    repositoryAr: 'مستودع البحث',
    relatedEn: 'Related Publications',
    relatedAr: 'منشورات ذات صلة',
    previousEn: 'Previous',
    previousAr: 'السابق',
    nextEn: 'Next',
    nextAr: 'التالي',
    shareEn: 'Share publication',
    shareAr: 'مشاركة المنشور',
    readMoreEn: 'Read More',
    readMoreAr: 'اقرأ المزيد'
  },
  publications: publications.map((pub) => {
    const body = detailBodies[pub.id] || fallbackBodyFor(pub);
    return {
      ...pub,
      ...body,
      titleEn: body.titleEn || pub.titleEn,
      titleAr: body.titleAr || pub.titleAr,
      authorHref: pub.authorHref || '#',
      facultyHref: pub.facultyHref || '#',
      href: `/research/detail/?id=${pub.id}`
    };
  })
};
