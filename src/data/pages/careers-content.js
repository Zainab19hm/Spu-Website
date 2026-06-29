export const jobCategories = [
  { id: 'all', labelEn: 'All Categories', labelAr: 'كل الفئات' },
  { id: 'academic', labelEn: 'Academic', labelAr: 'أكاديمي' },
  { id: 'administrative', labelEn: 'Administrative', labelAr: 'إداري' },
  { id: 'driver', labelEn: 'Driver', labelAr: 'سائق' },
  { id: 'technical', labelEn: 'Technical', labelAr: 'تقني' },
  { id: 'medical', labelEn: 'Medical', labelAr: 'طبي' }
];

export const jobTypes = [
  { id: 'all', labelEn: 'All Types', labelAr: 'كل الأنواع' },
  { id: 'full-time', labelEn: 'Full-time', labelAr: 'دوام كامل' },
  { id: 'part-time', labelEn: 'Part-time', labelAr: 'دوام جزئي' },
  { id: 'contract', labelEn: 'Contract', labelAr: 'عقد' }
];

export const careersPageContent = {
  hero: {
    titleEn: 'Job Board',
    titleAr: 'لوحة الوظائف',
    breadcrumbs: [
      { labelEn: 'Home', labelAr: 'الرئيسية', href: '/' },
      { labelEn: 'Campus Life', labelAr: 'الحياة الجامعية', href: '/campus-life/' },
      { labelEn: 'Career Development', labelAr: 'التطوير المهني', href: '/campus-life/career-development/' },
      { labelEn: 'Job Board', labelAr: 'لوحة الوظائف', href: '/campus-life/career-development/jobs/' }
    ],
    panel: {
      titleEn: 'Build Your Career With Us',
      titleAr: 'ابنِ مسيرتك المهنية معنا',
      summaryEn: 'Explore current openings across academic, administrative, technical, and support roles at Syrian Private University.',
      summaryAr: 'استكشف الفرص المتاحة حالياً في الأدوار الأكاديمية والإدارية والتقنية وخدمات الدعم في الجامعة السورية الخاصة.'
    }
  },
  labels: {
    homeLabelEn: 'Home',
    homeLabelAr: 'الرئيسية',
    searchPlaceholderEn: 'Search by title, department, or keyword...',
    searchPlaceholderAr: 'ابحث حسب العنوان أو القسم أو الكلمة المفتاحية...',
    categoryLabelEn: 'Category',
    categoryLabelAr: 'الفئة',
    typeLabelEn: 'Job Type',
    typeLabelAr: 'نوع الوظيفة',
    learnMoreEn: 'Learn More',
    learnMoreAr: 'اعرف المزيد',
    noResultsEn: 'No jobs match your search.',
    noResultsAr: 'لا توجد وظائف تطابق بحثك.',
    showingEn: 'Showing',
    showingAr: 'عرض',
    ofEn: 'of',
    ofAr: 'من',
    previousEn: 'Previous',
    previousAr: 'السابق',
    nextEn: 'Next',
    nextAr: 'التالي',
    applyNowEn: 'Apply Now',
    applyNowAr: 'قدّم الآن',
    applyDisabledEn: 'Application form coming soon',
    applyDisabledAr: 'استمارة التقديم قريباً',
    shareEn: 'Share',
    shareAr: 'مشاركة',
    copyLinkEn: 'Copy Link',
    copyLinkAr: 'نسخ الرابط',
    copiedEn: 'Copied',
    copiedAr: 'تم النسخ',
    postedOnEn: 'Posted on',
    postedOnAr: 'نُشر بتاريخ',
    departmentEn: 'Department',
    departmentAr: 'القسم',
    locationEn: 'Location',
    locationAr: 'الموقع',
    jobTypeEn: 'Job Type',
    jobTypeAr: 'نوع الوظيفة',
    overviewEn: 'Job Overview',
    overviewAr: 'نظرة عامة على الوظيفة',
    responsibilitiesEn: 'Key Responsibilities',
    responsibilitiesAr: 'المسؤوليات الرئيسية',
    requirementsEn: 'Requirements',
    requirementsAr: 'المتطلبات',
    benefitsEn: 'What We Offer',
    benefitsAr: 'ما نقدمه',
    notFoundEn: 'This job posting is no longer available.',
    notFoundAr: 'هذه الوظيفة لم تعد متاحة.'
  },
  jobs: [
    {
      id: 'job-001',
      slug: 'lecturer-computer-science',
      category: 'academic',
      type: 'full-time',
      titleEn: 'Lecturer in Computer Science',
      titleAr: 'محاضر في علوم الحاسوب',
      departmentEn: 'Faculty of Artificial Intelligence',
      departmentAr: 'كلية الذكاء الاصطناعي',
      locationEn: 'Damascus Campus',
      locationAr: 'حرم دمشق',
      shortDescriptionEn: 'Deliver undergraduate courses in algorithms, data structures, and software engineering.',
      shortDescriptionAr: 'تدريس مواد الجامعية في الخوارزميات وهياكل البيانات وهندسة البرمجيات.',
      overviewEn: [
        'We are seeking a passionate Lecturer in Computer Science to join the Faculty of Artificial Intelligence. The successful candidate will deliver undergraduate and graduate courses in algorithms, data structures, software engineering, and related fields.',
        'This role offers the opportunity to shape the next generation of technology professionals while contributing to research and curriculum development at one of Syria\'s leading private universities.'
      ],
      overviewAr: [
        'نبحث عن محاضر متحمس في علوم الحاسوب للانضمام إلى كلية الذكاء الاصطناعي. سيقوم المرشح الناجح بتدريس مواد جامعية ودراسات عليا في الخوارزميات وهياكل البيانات وهندسة البرمجيات والمجالات ذات الصلة.',
        'تتيح هذه الوظيفة الفرصة لتشكيل الجيل القادم من المتخصصين في التكنولوجيا مع المساهمة في البحث وتطوير المناهج في إحدى الجامعات الخاصة الرائدة في سوريا.'
      ],
      responsibilitiesEn: [
        'Prepare and deliver engaging lectures, labs, and workshops.',
        'Develop course materials, assignments, and assessments aligned with program outcomes.',
        'Supervise student projects, theses, and capstone work.',
        'Participate in curriculum review, academic committees, and faculty meetings.',
        'Contribute to research activities and scholarly publications.'
      ],
      responsibilitiesAr: [
        'إعداد وتقديم محاضرات ومختبرات وورش عمل جذابة.',
        'تطوير المواد الدراسية والواجبات والتقييمات بما يتماشى مع مخرجات البرنامج.',
        'إشراف مشاريع الطلاب وأطروحاتهم وأعمال التخرج.',
        'المشاركة في مراجعة المناهج واللجان الأكاديمية واجتماعات الهيئة التدريسية.',
        'المساهمة في الأنشطة البحثية والمنشورات العلمية.'
      ],
      requirementsEn: [
        'Ph.D. or Master\'s degree in Computer Science or a closely related discipline.',
        'Prior teaching experience at the university level is preferred.',
        'Strong communication skills in Arabic and English.',
        'Commitment to academic excellence and student success.'
      ],
      requirementsAr: [
        'درجة الدكتوراه أو الماجستير في علوم الحاسوب أو تخصص ذي صلة.',
        'تفضيل الخبرة السابقة في التدريس على مستوى الجامعة.',
        'مهارات تواصل قوية بالعربية والإنجليزية.',
        'الالتزام بالتميز الأكاديمي ونجاح الطلاب.'
      ],
      benefitsEn: [
        'Competitive salary and benefits package.',
        'Support for professional development and conference attendance.',
        'Access to modern labs, research tools, and library resources.',
        'Collaborative academic environment.'
      ],
      benefitsAr: [
        'راتب وخدمات تنافسية.',
        'دعم التطوير المهني والمشاركة في المؤتمرات.',
        'الوصول إلى مختبرات حديثة وأدوات بحث ومصادر مكتبية.',
        'بيئة أكاديمية تعاونية.'
      ],
      postedDate: '2026-06-20'
    },
    {
      id: 'job-002',
      slug: 'research-assistant',
      category: 'academic',
      type: 'contract',
      titleEn: 'Research Assistant',
      titleAr: 'مساعد باحث',
      departmentEn: 'Scientific Research Directorate',
      departmentAr: 'مديرية البحث العلمي',
      locationEn: 'Damascus Campus',
      locationAr: 'حرم دمشق',
      shortDescriptionEn: 'Support faculty-led research projects in data collection, analysis, and publication preparation.',
      shortDescriptionAr: 'دعم مشاريع البحث التي يقودها أعضاء الهيئة التدريسية في جمع البيانات وتحليلها وإعداد المنشورات.',
      overviewEn: [
        'The Scientific Research Directorate is looking for a Research Assistant to support ongoing faculty-led projects across clinical, engineering, and applied science domains.',
        'You will work closely with principal investigators to advance research objectives, manage datasets, and help prepare findings for publication and presentation.'
      ],
      overviewAr: [
        'تبحث مديرية البحث العلمي عن مساعد باحث لدعم المشاريع الجارية التي يقودها أعضاء الهيئة التدريسية في المجالات السريرية والهندسية والعلوم التطبيقية.',
        'سوف تعمل عن كثب مع الباحثين الرئيسيين للمضي قدماً في أهداف البحث، وإدارة مجموعات البيانات، والمساعدة في إعداد النتائج للنشر والعرض.'
      ],
      responsibilitiesEn: [
        'Conduct literature reviews and summarize findings.',
        'Collect, clean, and organize research data.',
        'Assist with statistical analysis and visualization.',
        'Format manuscripts, references, and presentation materials.',
        'Coordinate schedules and documentation between research teams.'
      ],
      responsibilitiesAr: [
        'إجراء مراجعات أدبيات وتلخيص النتائج.',
        'جمع بيانات البحث وتنظيفها وتنظيمها.',
        'المساعدة في التحليل الإحصائي والتصور البياني.',
        'تنسيق المخطوطات والمراجع ومواد العرض.',
        'تنسيق الجداول والوثائق بين فرق البحث.'
      ],
      requirementsEn: [
        'Bachelor\'s or Master\'s degree in a relevant scientific field.',
        'Strong analytical and problem-solving skills.',
        'Proficiency in office and statistical software.',
        'Excellent organizational and communication abilities.'
      ],
      requirementsAr: [
        'درجة البكالوريوس أو الماجستير في مجال علمي ذي صلة.',
        'مهارات تحليلية وقدرات حل مشكلات قوية.',
        'إتقان برامج المكتب والإحصاء.',
        'قدرات تنظيمية وتواصل ممتازة.'
      ],
      benefitsEn: [
        'Hands-on research experience with leading faculty.',
        'Exposure to interdisciplinary projects and collaborations.',
        'Flexible working arrangements.',
        'Certificate of completion and recommendation letter.'
      ],
      benefitsAr: [
        'خبرة بحثية عملية مع أعضاء هيئة تدريسية رائدين.',
        'التعرض لمشاريع وتعاونات متعددة التخصصات.',
        'ترتيبات عمل مرنة.',
        'شهادة إتمام وخط توصية.'
      ],
      postedDate: '2026-06-18'
    },
    {
      id: 'job-003',
      slug: 'administrative-coordinator',
      category: 'administrative',
      type: 'full-time',
      titleEn: 'Administrative Coordinator',
      titleAr: 'منسق إداري',
      departmentEn: 'Central Administration',
      departmentAr: 'الإدارة المركزية',
      locationEn: 'Damascus Campus',
      locationAr: 'حرم دمشق',
      shortDescriptionEn: 'Coordinate schedules, meetings, and documentation across university administrative units.',
      shortDescriptionAr: 'تنسيق الجداول والاجتماعات والوثائق بين الوحدات الإدارية في الجامعة.',
      overviewEn: [
        'The Central Administration is hiring an Administrative Coordinator to manage schedules, organize meetings, prepare reports, and facilitate communication between departments.',
        'This position is ideal for a detail-oriented professional who thrives in a dynamic university environment and enjoys supporting diverse teams.'
      ],
      overviewAr: [
        'تقوم الإدارة المركزية بتوظيف منسق إداري لإدارة الجداول وتنظيم الاجتماعات وإعداد التقارير وتسهيل التواصل بين الأقسام.',
        'هذا المنصب مثالي لمحترف يهتم بالتفاصيل ويزدهر في بيئة جامعية ديناميكية ويستمتع بدعم فرق متنوعة.'
      ],
      responsibilitiesEn: [
        'Manage calendars, schedule meetings, and send invitations.',
        'Prepare and distribute internal reports and memoranda.',
        'Maintain organized physical and digital filing systems.',
        'Act as a liaison between departments and external partners.',
        'Assist with event coordination and logistical support.'
      ],
      responsibilitiesAr: [
        'إدارة التقويمات وتحديد مواعيد الاجتماعات وإرسال الدعوات.',
        'إعداد التقارير والمذكرات الداخلية وتوزيعها.',
        'الحفاظ على أنظمة أرشفة منظمة ورقمية.',
        'العمل كحلقة وصل بين الأقسام والشركاء الخارجيين.',
        'المساعدة في تنسيق الفعاليات والدعم اللوجستي.'
      ],
      requirementsEn: [
        'Bachelor\'s degree in Business Administration, Management, or a related field.',
        'At least two years of administrative experience is preferred.',
        'Fluency in Arabic and English, written and spoken.',
        'Strong proficiency in Microsoft Office and digital collaboration tools.'
      ],
      requirementsAr: [
        'درجة البكالوريوس في إدارة الأعمال أو الإدارة أو مجال ذي صلة.',
        'تفضيل عامين على الأقل من الخبرة الإدارية.',
        'طلاقة في العربية والإنجليزية تحدثاً وكتابة.',
        'إتقان قوي لبرامج Microsoft Office وأدوات التعاون الرقمية.'
      ],
      benefitsEn: [
        'Stable full-time employment with university benefits.',
        'Professional development and training opportunities.',
        'Friendly and supportive work culture.',
        'Clear career progression pathways.'
      ],
      benefitsAr: [
        'توظيف بدوام كامل مستقر مع مزايا الجامعة.',
        'فرص التطوير المهني والتدريب.',
        'ثقافة عمل ودية وداعمة.',
        'مسارات تقدم وظيفي واضحة.'
      ],
      postedDate: '2026-06-15'
    },
    {
      id: 'job-004',
      slug: 'admissions-officer',
      category: 'administrative',
      type: 'full-time',
      titleEn: 'Admissions Officer',
      titleAr: 'موظف قبول وتسجيل',
      departmentEn: 'Admissions & Registration',
      departmentAr: 'قبول وتسجيل',
      locationEn: 'Damascus Campus',
      locationAr: 'حرم دمشق',
      shortDescriptionEn: 'Guide prospective students through the admissions process and maintain accurate records.',
      shortDescriptionAr: 'توجيه الطلاب المحتملين خلال عملية القبول والحفاظ على السجلات الدقيقة.',
      overviewEn: [
        'The Admissions & Registration Department is seeking an Admissions Officer to assist prospective students with applications, answer inquiries, and process admission documents.',
        'You will be the first point of contact for many future students and play a key role in creating a welcoming and efficient admissions experience.'
      ],
      overviewAr: [
        'تبحث دائرة القبول والتسجيل عن موظف قبول لمساعدة الطلاب المحتملين في الطلبات والإجابة على الاستفسارات ومعالجة مستندات القبول.',
        'ستكون نقطة الاتصال الأولى للعديد من الطلاب المستقبليين وتلعب دوراً رئيسياً في خلق تجربة قبول ترحيبية وفعالة.'
      ],
      responsibilitiesEn: [
        'Respond to admissions inquiries via phone, email, and in-person visits.',
        'Guide applicants through admission requirements and procedures.',
        'Verify and process application documents and academic credentials.',
        'Maintain accurate student records in the university system.',
        'Support orientation events and open-day activities.'
      ],
      responsibilitiesAr: [
        'الرد على استفسارات القبول عبر الهاتف والبريد الإلكتروني والزيارات الشخصية.',
        'توجيه المتقدمين عبر متطلبات وإجراءات القبول.',
        'التحقق من مستندات الطلب والشهادات الأكاديمية ومعالجتها.',
        'الحفاظ على سجلات الطلاب الدقيقة في نظام الجامعة.',
        'دعم فعاليات التوجيه وأيام الانفتاح.'
      ],
      requirementsEn: [
        'Bachelor\'s degree in a relevant field.',
        'Excellent interpersonal and customer service skills.',
        'Fluency in Arabic and English.',
        'Experience in academic administration or customer service is a plus.'
      ],
      requirementsAr: [
        'درجة البكالوريوس في مجال ذي صلة.',
        'مهارات تواصل بين الأشخاص وخدمة عملاء ممتازة.',
        'طلاقة في العربية والإنجليزية.',
        'الخبرة في الإدارة الأكاديمية أو خدمة العملاء ميزة إضافية.'
      ],
      benefitsEn: [
        'Direct impact on students\' academic journeys.',
        'Comprehensive training on university systems.',
        'Health insurance and social security coverage.',
        'Annual leave and university holidays.'
      ],
      benefitsAr: [
        'تأثير مباشر على رحلات الطلاب الأكاديمية.',
        'تدريب شامل على أنظمة الجامعة.',
        'تأمين صحي وتغطية ضمان اجتماعي.',
        'إجازة سنوية وعطل الجامعة.'
      ],
      postedDate: '2026-06-12'
    },
    {
      id: 'job-005',
      slug: 'campus-bus-driver',
      category: 'driver',
      type: 'full-time',
      titleEn: 'Campus Bus Driver',
      titleAr: 'سائق حافلة الجامعة',
      departmentEn: 'Transport Services',
      departmentAr: 'خدمات النقل',
      locationEn: 'Damascus Campus',
      locationAr: 'حرم دمشق',
      shortDescriptionEn: 'Operate university shuttle buses safely along designated student and staff routes.',
      shortDescriptionAr: 'تشغيل حافلات النقل الجامعي بأمان على الطرق المخصصة للطلاب والموظفين.',
      overviewEn: [
        'Transport Services is looking for a reliable Campus Bus Driver to operate university shuttle buses on scheduled routes for students and staff.',
        'The driver will ensure passenger safety, follow traffic regulations, perform basic vehicle inspections, and maintain punctual service throughout the academic year.'
      ],
      overviewAr: [
        'تبحث خدمات النقل عن سائق حافلة جامعي موثوق لتشغيل حافلات النقل على الطرق المجدولة للطلاب والموظفين.',
        'سيتأكد السائق من سلامة الركاب، واتباع قواعد المرور، وإجراء فحوصات أساسية للمركبة، والحفاظ على الخدمة في مواعيدها طوال العام الدراسي.'
      ],
      responsibilitiesEn: [
        'Operate shuttle buses on assigned routes and schedules.',
        'Ensure passenger safety and comfort during transit.',
        'Perform pre-trip and post-trip vehicle inspections.',
        'Report maintenance needs and incidents promptly.',
        'Maintain cleanliness and basic upkeep of the vehicle.'
      ],
      responsibilitiesAr: [
        'تشغيل حافلات النقل على الطرق والجداول المخصصة.',
        'ضمان سلامة وراحة الركاب أثناء النقل.',
        'إجراء فحوصات المركبة قبل وبعد الرحلة.',
        'الإبلاغ عن احتياجات الصيانة والحوادث فوراً.',
        'الحفاظ على نظافة المركبة وصيانتها الأساسية.'
      ],
      requirementsEn: [
        'Valid commercial driving license appropriate for passenger buses.',
        'Clean driving record and good physical health.',
        'Knowledge of traffic laws and safety procedures.',
        'Professional attitude and punctuality.'
      ],
      requirementsAr: [
        'رخصة قيادة تجارية سارية صالحة لحافلات الركاب.',
        'سجل قيادة نظيف وصحة جيدة.',
        'معرفة بقوانين المرور وإجراءات السلامة.',
        'موقف مهني والالتزام بالمواعيد.'
      ],
      benefitsEn: [
        'Stable full-time schedule aligned with academic calendar.',
        'Comprehensive health and social insurance.',
        'Safe and well-maintained vehicles.',
        'Respectful and organized work environment.'
      ],
      benefitsAr: [
        'جدول دوام كامل مستقر متوافق مع التقويم الأكاديمي.',
        'تأمين صحي واجتماعي شامل.',
        'مركبات آمنة و maintained بشكل جيد.',
        'بيئة عمل محترمة ومنظمة.'
      ],
      postedDate: '2026-06-10'
    },
    {
      id: 'job-006',
      slug: 'it-support-specialist',
      category: 'technical',
      type: 'full-time',
      titleEn: 'IT Support Specialist',
      titleAr: 'أخصائي دعم تقنية المعلومات',
      departmentEn: 'IT Services Directorate',
      departmentAr: 'مديرية خدمات تقنية المعلومات',
      locationEn: 'Damascus Campus',
      locationAr: 'حرم دمشق',
      shortDescriptionEn: 'Provide hardware, software, and network support to faculty, staff, and computer labs.',
      shortDescriptionAr: 'تقديم الدعم للأجهزة والبرمجيات والشبكات لأعضاء الهيئة التدريسية والموظفين والمختبرات الحاسوبية.',
      overviewEn: [
        'The IT Services Directorate is hiring an IT Support Specialist to provide technical assistance across campus, including hardware troubleshooting, software installation, and network support.',
        'You will help keep classrooms, labs, and offices running smoothly by responding to support requests and maintaining reliable IT infrastructure.'
      ],
      overviewAr: [
        'تقوم مديرية خدمات تقنية المعلومات بتوظيف أخصائي دعم تقنية المعلومات لتقديم المساعدة التقنية في الحرم الجامعي، بما في ذلك استكشاف أخطاء الأجهزة وتثبيت البرمجيات ودعم الشبكات.',
        'ستساعد في الحفاظ على سير القاعات الدراسية والمختبرات والمكاتب بسلاسة من خلال الاستجابة لطلبات الدعم والحفاظ على بنية تقنية المعلومات الموثوقة.'
      ],
      responsibilitiesEn: [
        'Respond to IT support tickets from faculty, staff, and students.',
        'Install, configure, and maintain hardware and software.',
        'Maintain and support computer labs and classroom technology.',
        'Troubleshoot network connectivity and printer issues.',
        'Document solutions and maintain an internal knowledge base.'
      ],
      responsibilitiesAr: [
        'الاستجابة لتذاكر دعم تقنية المعلومات من أعضاء الهيئة التدريسية والموظفين والطلاب.',
        'تثبيت الأجهزة والبرمجيات وتهيئتها وصيانتها.',
        'صيانة ودعم المختبرات الحاسوبية وتقنية القاعات الدراسية.',
        'استكشاف مشاكل اتصال الشبكة والطابعات وإصلاحها.',
        'توثيق الحلول والحفاظ على قاعدة معرفة داخلية.'
      ],
      requirementsEn: [
        'Degree in Information Technology, Computer Science, or a related field.',
        'Experience in desktop support and network administration is preferred.',
        'Familiarity with Windows, Office suites, and common productivity tools.',
        'Strong problem-solving and customer service skills.'
      ],
      requirementsAr: [
        'درجة في تقنية المعلومات أو علوم الحاسوب أو مجال ذي صلة.',
        'تفضيل الخبرة في دعم سطح المكتب وإدارة الشبكات.',
        'الإلمام بأنظمة Windows وبرامج Office وأدوات الإنتاجية الشائعة.',
        'مهارات قوية في حل المشكلات وخدمة العملاء.'
      ],
      benefitsEn: [
        'Exposure to a diverse range of technologies and systems.',
        'Professional certifications support.',
        'Health insurance and paid annual leave.',
        'Team-oriented and learning-focused environment.'
      ],
      benefitsAr: [
        'التعرض لمجموعة متنوعة من التقنيات والأنظمة.',
        'دعم الشهادات المهنية.',
        'تأمين صحي وإجازة سنوية مدفوعة.',
        'بيئة تركز على الفريق والتعلم.'
      ],
      postedDate: '2026-06-08'
    },
    {
      id: 'job-007',
      slug: 'laboratory-technician',
      category: 'technical',
      type: 'contract',
      titleEn: 'Laboratory Technician',
      titleAr: 'فني مختبر',
      departmentEn: 'Faculty of Dentistry',
      departmentAr: 'كلية طب الأسنان',
      locationEn: 'Damascus Campus',
      locationAr: 'حرم دمشق',
      shortDescriptionEn: 'Maintain dental lab equipment, prepare materials, and support clinical training sessions.',
      shortDescriptionAr: 'صيانة معدات مختبر الأسنان، وإعداد المواد، ودعم جلسات التدريب السريري.',
      overviewEn: [
        'The Faculty of Dentistry is seeking a Laboratory Technician to support its clinical training programs by maintaining equipment, preparing lab materials, and assisting faculty and students during practical sessions.',
        'This role is essential to ensuring that dental students receive high-quality, hands-on training in a safe and well-equipped laboratory environment.'
      ],
      overviewAr: [
        'تبحث كلية طب الأسنان عن فني مختبر لدعم برامج التدريب السريري من خلال صيانة المعدات وإعداد مواد المختبر ومساعدة أعضاء الهيئة التدريسية والطلاب أثناء الجلسات العملية.',
        'هذا الدور ضروري لضمان حصول طلاب طب الأسنان على تدريب عملي عالي الجودة في بيئة مختبر آمنة ومجهزة جيداً.'
      ],
      responsibilitiesEn: [
        'Prepare and organize laboratory materials and dental models.',
        'Maintain, clean, and calibrate laboratory equipment.',
        'Assist students and instructors during practical sessions.',
        'Manage inventory and order supplies as needed.',
        'Ensure compliance with safety and sterilization protocols.'
      ],
      responsibilitiesAr: [
        'إعداد وتنظيم مواد المختبر ونماذج الأسنان.',
        'صيانة وتنظيف ومعايرة معدات المختبر.',
        'مساعدة الطلاب والمدربين أثناء الجلسات العملية.',
        'إدارة المخزون وطلب اللوازم حسب الحاجة.',
        'ضمان الالتزام ببروتوكولات السلامة والتعقيم.'
      ],
      requirementsEn: [
        'Diploma or degree in Dental Technology, Laboratory Sciences, or a related technical field.',
        'Relevant experience in a dental or medical laboratory is preferred.',
        'Attention to detail and ability to follow precise protocols.',
        'Good communication and teamwork skills.'
      ],
      requirementsAr: [
        'دبلوم أو درجة في تقنية الأسنان أو علوم المختبرات أو مجال تقني ذي صلة.',
        'تفضيل الخبرة ذات الصلة في مختبر أسنان أو طبي.',
        'الاهتمام بالتفاصيل والقدرة على اتباع البروتوكولات الدقيقة.',
        'مهارات تواصل وتعمل جيدة ضمن فريق.'
      ],
      benefitsEn: [
        'Practical experience in an academic dental setting.',
        'Access to modern dental lab equipment.',
        'Training on safety and sterilization standards.',
        'Supportive faculty and technical staff.'
      ],
      benefitsAr: [
        'خبرة عملية في بيئة أكاديمية لطب الأسنان.',
        'الوصول إلى معدات مختبر أسنان حديثة.',
        'تدريب على معايير السلامة والتعقيم.',
        'هيئة تدريسية وطاقم تقني داعم.'
      ],
      postedDate: '2026-06-05'
    },
    {
      id: 'job-008',
      slug: 'dental-clinic-supervisor',
      category: 'medical',
      type: 'part-time',
      titleEn: 'Dental Clinic Supervisor',
      titleAr: 'مشرف العيادات السنية',
      departmentEn: 'University Dental Clinics',
      departmentAr: 'عيادات الجامعة السنية',
      locationEn: 'Damascus Campus',
      locationAr: 'حرم دمشق',
      shortDescriptionEn: 'Oversee daily clinic operations, patient scheduling, and quality of care in the dental clinics.',
      shortDescriptionAr: 'الإشراف على العمليات اليومية للعيادة وجدولة المرضى وجودة الرعاية في العيادات السنية.',
      overviewEn: [
        'The University Dental Clinics are looking for a part-time Dental Clinic Supervisor to oversee daily operations, coordinate patient appointments, and ensure high standards of patient care.',
        'Working closely with dental faculty and clinical staff, you will help maintain an efficient, professional, and patient-centered clinic environment.'
      ],
      overviewAr: [
        'تبحث العيادات السنية الجامعية عن مشرف عيادات أسنان بدوام جزئي للإشراف على العمليات اليومية، وتنسيق مواعيد المرضى، وضمان معايير عالية من الرعاية الصحية.',
        'بالتعاون الوثيق مع أعضاء هيئة التدريس في طب الأسنان والموظفين السريريين، ستساعد في الحفاظ على بيئة عيادة فعالة ومهنية وموجهة نحو المريض.'
      ],
      responsibilitiesEn: [
        'Supervise daily clinic operations and staff schedules.',
        'Coordinate patient appointments and manage the waiting list.',
        'Ensure compliance with infection control and quality standards.',
        'Address patient concerns and improve clinic workflow.',
        'Maintain accurate records and prepare operational reports.'
      ],
      responsibilitiesAr: [
        'الإشراف على العمليات اليومية للعيادة وجداول الموظفين.',
        'تنسيق مواعيد المرضى وإدارة قائمة الانتظار.',
        'ضمان الالتزام بمعايير مكافحة العدوى والجودة.',
        'معالجة مخاوف المرضى وتحسين سير العمل في العيادة.',
        'الحفاظ على سجلات دقيقة وإعداد تقارير تشغيلية.'
      ],
      requirementsEn: [
        'Degree in Dentistry or Dental Surgery.',
        'Clinical supervisory experience is strongly preferred.',
        'Strong leadership and organizational abilities.',
        'Excellent communication skills in Arabic and English.'
      ],
      requirementsAr: [
        'درجة في طب الأسنان أو جراحة الفم والفكين.',
        'تفضيل قوي للخبرة في الإشراف السريري.',
        'قدرات قيادية وتنظيمية قوية.',
        'مهارات تواصل ممتازة بالعربية والإنجليزية.'
      ],
      benefitsEn: [
        'Flexible part-time schedule.',
        'Opportunity to work in a university teaching clinic.',
        'Collaboration with experienced dental professionals.',
        'Competitive compensation based on experience.'
      ],
      benefitsAr: [
        'جدول دوام جزئي مرن.',
        'فرصة العمل في عيادة تدريس جامعية.',
        'التعاون مع محترفين ذوي خبرة في طب الأسنان.',
        'تعويض تنافسي بناءً على الخبرة.'
      ],
      postedDate: '2026-06-01'
    }
  ]
};
