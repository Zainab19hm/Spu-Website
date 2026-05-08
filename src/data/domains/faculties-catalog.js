import { siteRoutes } from '../../config/site-routes.js';
export const facultiesCatalog = {
    list: [
        {
            id: 'medicine',
            departmentRoute: '/facilities/medicine/departments/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية الطب البشري',
            nameEn: 'Faculty of Medicine',
            catalogDescEn: 'Advancing healthcare through rigorous clinical excellence',
            catalogDescAr: 'النهوض بالرعاية الصحية من خلال التميز السريري الدقيق',
            logo: '/images/tip.png',
            color: 'bc2428',
            yearsAr: '<span>6</span> سنوات',
            yearsEn: '<span>6</span> Years',
            heroImage: '/images/slider-2.webp',
            image_1: '/images/slider-4.jpg',
            image_2: '/images/campus-feature-01.webp',
            tabs: [
                {
                    id: 'overview',
                    labelAr: 'لمحة عن الكلية', labelEn: 'Overview',
                    contentAr: 'تعد كلية الطب في الجامعة السورية الخاصة من أعرق الكليات، تهدف لتخريج أطباء بمستوى علمي عالٍ يجمع بين المعرفة النظرية والتدريب السريري المكثف في المشافي المتعاقد معها.',
                    contentEn: 'The Faculty of Medicine at SPU aims to graduate highly skilled physicians, combining theoretical knowledge with intensive clinical training in affiliated hospitals.'
                },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'الريادة في التعليم الطبي والبحث العلمي محلياً وإقليمياً، وتحقيق التميز في جودة المخرجات التعليمية الطبية.', contentEn: 'Leadership in medical education and scientific research locally and regionally.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'إعداد أطباء أكفاء ملتزمين بأخلاقيات المهنة، وقادرين على التعلم المستمر والمساهمة في تطوير النظام الصحي في سوريا.', contentEn: 'Preparing competent doctors committed to professional ethics.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'توفير بيئة تعليمية متطورة، تعزيز البحث العلمي لدى الطلاب، وربط الكلية بالمجتمع عبر تقديم خدمات رعاية صحية متميزة.', contentEn: 'Providing an advanced educational environment and promoting scientific research.' }
            ],
            dean: {
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'أ.د. أيمن علي',
                nameEn: 'Dr. Ayman Ali',
                roleAr: 'عميد كلية الطب البشري',
                roleEn: 'Dean of the Faculty',
                image: '/images/medicine-dean.jpg',
                messageAr: 'نعمل على إعداد خريجين متميزين معرفياً ومهارياً، قادرين على المنافسة في سوق العمل الطبي محلياً ودولياً، مع التركيز على البحث العلمي والأخلاقيات المهنية.',
                messageEn: 'We work to prepare graduates who are academically and professionally distinguished, capable of competing in the medical labor market with a focus on scientific research.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'ابحاث علمية ', labelEn: 'Scientific Research', value: '+2500', icon: '/images/icons/file.svg' },
                { id: 2, labelAr: 'ساعة معتمدة', labelEn: 'Credit Hours', value: '256', icon: '/images/icons/hours.svg' },
                { id: 3, labelAr: 'أقسام علمية', labelEn: 'Academic Departments', value: '7', icon: '/images/icons/dept.svg' },
                { id: 4, labelAr: 'مشافي تدريبية', labelEn: 'Training Hospitals', value: '5', icon: '/images/icons/hospital.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr:'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn:'A dynamic academic environment designed to support student growth, practical learning, and future',
                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث علمية',
                        titleEn: 'Scientific Research',
                        value: '+2500',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعة معتمدة',
                        titleEn: 'Credit Hours',
                        value: '256',
                        link: 'admissions.html',
                        icon: '/images/icons/hours.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'أقسام علمية',
                        titleEn: 'Academic Departments',
                        value: '7',
                        link: '#',
                        icon: '/images/icons/dept.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'مشافي تدريبية',
                        titleEn: 'Training Hospitals',
                        value: '5',
                        link: '#',
                        icon: '/images/icons/hospital.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyMedicineValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: [
                {
                    id: 1,
                    titleAr: 'مؤتمر طبي دولي حول الجراحة التنظيرية',
                    titleEn: 'International Conference on Laparoscopic Surgery',
                    date: '15 May 2026',
                    descriptionAr: 'يستضيف قسم الجراحة مؤتمراً طبياً دولياً لمناقشة أحدث التقنيات في الجراحة التنظيرية بمشاركة خبراء من مختلف أنحاء العالم. يهدف المؤتمر إلى تبادل الخبرات الأكاديمية والمهنية وتعزيز البحث العلمي في هذا المجال الحيوي.',
                    descriptionEn: 'The Surgery Department hosts an international medical conference to discuss the latest techniques in laparoscopic surgery with experts from around the world. The conference aims to exchange academic and professional experiences and promote scientific research in this vital field.',
                    image: '/images/slider-1.webp'
                },
                {
                    id: 2,
                    titleAr: 'ورشة عمل طب الطوارئ المتقدمة',
                    titleEn: 'Advanced Emergency Medicine Workshop',
                    date: '10 June 2026',
                    descriptionAr: 'تنظم الكلية ورشة عمل متخصصة في طب الطوارئ والإسعافات الأولية المتقدمة لطلاب السنة السادسة، تشمل التدريب على أجهزة الإنعاش الحديثة وكيفية التعامل مع الحالات الحرجة بسرعة ودقة عالية.',
                    descriptionEn: 'The faculty organizes a specialized workshop in emergency medicine and advanced first aid for sixth-year students, including training on modern resuscitation devices and how to deal with critical cases quickly and accurately.',
                    image: '/images/slider-2.webp'
                },
                {
                    id: 3,
                    titleAr: 'يوم البحث العلمي لطلبة الطب',
                    titleEn: 'Medical Students Scientific Research Day',
                    date: '22 July 2026',
                    descriptionAr: 'فعالية سنوية تتيح للطلاب عرض أبحاثهم المتميزة أمام لجنة من الأساتذة والخبراء، مع جوائز لأفضل الأبحاث المشاركة لتشجيع الطلاب على الابتكار والاكتشاف العلمي.',
                    descriptionEn: 'An annual event that allows students to present their outstanding research to a committee of professors and experts, with awards for the best research to encourage innovation and scientific discovery.',
                    image: '/images/slider-4.jpg'
                }
            ]
        },

        {
            id: 'dentistry',
            departmentRoute: '/facilities/dentistry/departments/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية طب الأسنان',
            nameEn: 'Faculty of Dentistry',
            catalogDescEn: 'Innovative approaches to comprehensive oral health.',
            catalogDescAr: 'مناهج مبتكرة للرعاية الصحية الفموية الشاملة.',
            logo: '/images/spu-dentistry-logo.png',
            color: '1f77b4',
            yearsAr: '<span>5</span> سنوات',
            yearsEn: '<span>5</span> Years',
            heroImage: '/images/dental-place.JPG',
            image_1: '/images/dental-clin-lab.jpg',
            image_2: '/images/vantom-lab-den.jpg',
            tabs: [
                {
                    id: 'overview',
                    labelAr: 'لمحة عن الكلية', labelEn: 'Overview',
                    contentAr: 'تتميز الكلية بعياداتها التخصصية الحديثة التي تتيح للطلاب ممارسة المهنة فعلياً تحت إشراف نخبة من الأساتذة، مع التركيز على أحدث تقنيات زراعة وتقويم الأسنان.',
                    contentEn: 'The faculty is distinguished by its modern specialized clinics, allowing students to practice under expert supervision with a focus on dental implants.'
                },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'أن نكون المركز المرجعي المتميز لعلوم طب الأسنان في سوريا.', contentEn: 'To be the distinguished reference center for dental sciences in Syria.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'تقديم تعليم أكاديمي وتدريبي عالي الجودة يلبي احتياجات سوق العمل الطبي.', contentEn: 'Providing high-quality academic and practical training.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'تخريج أطباء أسنان قادرين على تقديم أفضل رعاية فموية ودمج التكنولوجيا في العلاج.', contentEn: 'Graduating dentists capable of providing best oral care.' }
            ],
            dean: {
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'د. طلعت أبو حطب',
                nameEn: 'Dr. Talaat Abu Hatab',
                roleAr: 'عميد كلية طب الأسنان',
                roleEn: 'Dean of Dentistry Faculty',
                image: '/images/dental-dean.jpg',
                messageAr: 'نلتزم بتوفير بيئة تعليمية تدمج بين العلوم الأساسية والتدريب العملي المتقدم في العيادات التخصصية لضمان كفاءة ممارسة المهنة.',
                messageEn: 'We are committed to providing an educational environment that integrates basic sciences with advanced practical training in specialized clinics.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'عيادات تدريبية', labelEn: 'Training Clinics', value: '10', icon: '/images/icons/clinic.svg' },
                { id: 2, labelAr: 'سنوات الدراسة', labelEn: 'Study Years', value: '5', icon: '/images/icons/years.svg' },
                { id: 3, labelAr: 'ساعة معتمدة', labelEn: 'Credit Hours', value: '187', icon: '/images/icons/hours.svg' },
                { id: 4, labelAr: 'كراسي طبية', labelEn: 'Dental Chairs', value: '120', icon: '/images/icons/chair.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',

                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث علمية',
                        titleEn: 'Scientific Research',
                        value: '+1800',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعة معتمدة',
                        titleEn: 'Credit Hours',
                        value: '187',
                        link: 'admissions.html',
                        icon: '/images/icons/hours.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'عيادات تخصصية',
                        titleEn: 'Specialized Clinics',
                        value: '10',
                        link: siteRoutes.campusLifeDental,
                        icon: '/images/icons/clinic.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'كراسي طبية',
                        titleEn: 'Dental Chairs',
                        value: '120',
                        link: '#',
                        icon: '/images/icons/chair.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyDentistryValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: [
                {
                    id: 1,
                    titleAr: 'دورة تدريبية في زراعة الأسنان الحديثة',
                    titleEn: 'Modern Dental Implant Training',
                    date: '05 May 2026',
                    descriptionAr: 'دورة عملية مكثفة تهدف إلى تزويد طلاب الدراسات العليا بأحدث المهارات في مجال زراعة الأسنان باستخدام التقنيات الرقمية المتقدمة وتخطيط العلاج المعتمد على الكمبيوتر.',
                    descriptionEn: 'An intensive practical course aimed at providing postgraduate students with the latest skills in dental implants using advanced digital technologies and computer-aided treatment planning.',
                    image: '/images/slider-3.webp'
                },
                {
                    id: 2,
                    titleAr: 'ندوة تقويم الأسنان الشفاف',
                    titleEn: 'Clear Aligner Orthodontics Seminar',
                    date: '12 June 2026',
                    descriptionAr: 'ندوة علمية تناقش مستقبل تقويم الأسنان والتحول نحو الحلول الشفافة، مع عرض حالات سريرية ناجحة تم علاجها في عيادات الكلية التخصصية.',
                    descriptionEn: 'A scientific seminar discussing the future of orthodontics and the shift towards clear solutions, featuring successful clinical cases treated in the faculty\'s specialized clinics.',
                    image: '/images/slider-4.jpg'
                }
            ]
        },
        {
            id: 'pharmacy',
            departmentRoute: '/facilities/pharmacy/departments/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية الصيدلة',
            nameEn: 'Faculty of Pharmacy',
            catalogDescEn: 'Pioneering research in modern pharmaceutical sciences.',
            catalogDescAr: 'أبحاث رائدة في العلوم الصيدلانية الحديثة.',
            logo: '/images/spu-pharmacy-logo.png',
            color: '5ebe7b',
            yearsAr: '<span>5</span> سنوات',
            yearsEn: '<span>5</span> Years',
            heroImage: '/images/slider-3.webp',
            image_1: '/images/slider-4.jpg',
            image_2: '/images/campus-feature-01.webp',
            tabs: [
                { id: 'overview', labelAr: 'لمحة عن الكلية', labelEn: 'Overview', contentAr: 'تركز الكلية على العلوم الدوائية الحديثة وتطبيقاتها في الصناعة والرعاية السريرية، وتضم مختبرات كيميائية وحيوية متطورة.', contentEn: 'Focusing on modern pharmaceutical sciences and their applications.' },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'الريادة في العلوم الصيدلانية وطنياً ودولياً.', contentEn: 'Leadership in pharmaceutical sciences.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'إعداد صيادلة يمتلكون المعرفة والمهارة للارتقاء بالمنظومة الدوائية.', contentEn: 'Preparing pharmacists with the skills to elevate the drug system.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'تطوير البحث الدوائي وخدمة الرعاية الصحية المجتمعية.', contentEn: 'Developing pharmaceutical research.' }
            ],
            dean: {
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'أ.د. عصام عبود',
                nameEn: 'Dr. Issam Aboud',
                roleAr: 'عميد كلية الصيدلة',
                roleEn: 'Dean of the Faculty',
                image: '/images/pharmacy-dean.jpg',
                messageAr: 'نهدف إلى تخريج صيادلة ذوي كفاءة عالية في مجال الصناعة الدوائية والتحليل والرعاية الصيدلانية السريرية.',
                messageEn: 'Our goal is to graduate highly efficient pharmacists in pharmaceutical industry and clinical pharmacy care.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'مختبر تخصصي', labelEn: 'Specialized Labs', value: '15', icon: '/images/icons/lab.svg' },
                { id: 2, labelAr: 'سنوات الدراسة', labelEn: 'Study Years', value: '5', icon: '/images/icons/years.svg' },
                { id: 3, labelAr: 'ساعة معتمدة', labelEn: 'Credit Hours', value: '178', icon: '/images/icons/hours.svg' },
                { id: 4, labelAr: 'لغة التدريس', labelEn: 'Teaching Language', value: 'Ar / En', icon: '/images/icons/lang.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',

                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث علمية',
                        titleEn: 'Scientific Research',
                        value: '+1200',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعة معتمدة',
                        titleEn: 'Credit Hours',
                        value: '178',
                        link: 'admissions.html',
                        icon: '/images/icons/hours.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'مختبرات تخصصية',
                        titleEn: 'Specialized Labs',
                        value: '15',
                        link: '#',
                        icon: '/images/icons/lab.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'فرص تدريبية',
                        titleEn: 'Training Opportunities',
                        value: 'Active',
                        link: '#',
                        icon: '/images/icons/training.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyPharmacyValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: [
                {
                    id: 1,
                    titleAr: 'اليوم العالمي للصيادلة',
                    titleEn: 'World Pharmacists Day',
                    date: '25 September 2026',
                    descriptionAr: 'احتفالية خاصة لتكريم دور الصيادلة في المجتمع، تتضمن معرضاً للأدوية الحديثة وندوات توعوية حول الاستخدام الآمن والمثالي للدواء.',
                    descriptionEn: 'A special celebration to honor the role of pharmacists in society, including an exhibition of modern medicines and awareness seminars on safe and optimal drug use.',
                    image: '/images/slider-1.webp'
                }
            ]
        },
        {
            id: 'ai-engineering',
            departmentRoute: '/facilities/artificial-intelligence/departments/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية هندسة الذكاء الاصطناعي',
            nameEn: 'Faculty of AI Engineering',
            catalogDescEn: 'Sustainable extraction and strategic global energy management.',
            catalogDescAr: 'الاستخراج المستدام وإدارة الطاقة العالمية الاستراتيجية.',
            logo: '/images/spu-ai-logo.png',
            color: '683695',
            yearsAr: '<span>5</span> سنوات',
            yearsEn: '<span>5</span> Years',
            heroImage: '/images/slider-3.webp',
            image_1: '/images/slider-4.jpg',
            image_2: '/images/campus-feature-01.webp',
            tabs: [
                { id: 'overview', labelAr: 'لمحة عن الكلية', labelEn: 'Overview', contentAr: 'تعتبر الكلية الأولى من نوعها في سوريا، حيث توفر بيئة برمجية وتقنية متقدمة لدراسة تعلم الآلة، الروبوتات، ومعالجة البيانات الكبيرة.', contentEn: 'The first of its kind in Syria, focusing on ML and Robotics.' },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'قيادة الابتكار الرقمي والذكاء الاصطناعي.', contentEn: 'Leading digital innovation.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'بناء جيل مهندسين يقودون الثورة الصناعية الرابعة.', contentEn: 'Building engineers for the 4th Industrial Revolution.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'تمكين الطلاب من أدوات الحوسبة السحابية وهندسة البيانات.', contentEn: 'Empowering students with cloud tools.' }
            ],
            dean: {
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'د. مهيب النقري',
                nameEn: 'Dr. Mouhib Alnoukari',
                roleAr: 'عميد كلية هندسة الذكاء الاصطناعي',
                roleEn: 'Dean of the Faculty',
                image: '/images/ai-dean.jpeg',
                messageAr: 'نحن نؤمن بأن الذكاء الاصطناعي هو المحرك الأساسي للاقتصاد القادم، لذا نعد طلابنا ليكونوا صناع هذا المستقبل الرقمي.',
                messageEn: 'We believe AI is the core engine of the future economy, preparing our students to be digital makers.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'مختبرات برمجية', labelEn: 'Software Labs', value: '8', icon: '/images/icons/software.svg' },
                { id: 2, labelAr: 'سنوات الدراسة', labelEn: 'Study Years', value: '5', icon: '/images/icons/years.svg' },
                { id: 3, labelAr: 'ساعة معتمدة', labelEn: 'Credit Hours', value: '165', icon: '/images/icons/hours.svg' },
                { id: 4, labelAr: 'مشاريع ذكية', labelEn: 'AI Projects', value: '40+', icon: '/images/icons/ai.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',

                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث الذكاء',
                        titleEn: 'AI Research',
                        value: '+500',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعة معتمدة',
                        titleEn: 'Credit Hours',
                        value: '165',
                        link: 'admissions.html',
                        icon: '/images/icons/hours.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'مختبرات ذكية',
                        titleEn: 'Smart Labs',
                        value: '8',
                        link: '#',
                        icon: '/images/icons/software.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'مشاريع تطبيقية',
                        titleEn: 'Applied Projects',
                        value: '40+',
                        link: '#',
                        icon: '/images/icons/ai.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyArtificialIntelligenceValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: [
                {
                    id: 1,
                    titleAr: 'هاكاثون الذكاء الاصطناعي الأول',
                    titleEn: 'First AI Hackathon',
                    date: '20 May 2026',
                    descriptionAr: 'مسابقة برمجية مكثفة تستمر لمدة 48 ساعة، يتنافس فيها الطلاب لابتكار حلول برمجية تعتمد على الذكاء الاصطناعي لحل مشكلات واقعية في مجالات الصحة والتعليم والبيئة.',
                    descriptionEn: 'An intensive 48-hour programming competition where students compete to innovate AI-based software solutions to solve real-world problems in health, education, and the environment.',
                    image: '/images/slider-2.webp'
                }
            ]
        },
        {
            id: 'Construction',
            departmentRoute: '/facilities/building-construction-engineering/departments/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية هندسة التشييد والبناء',
            nameEn: 'Construction Engineering',
            catalogDescEn: 'Driving profound innovation in the modern digital age.',
            catalogDescAr: 'قيادة الابتكار العميق في العصر الرقمي الحديث.',
            logo: '/images/spu-construction-logo.png',
            color: '7f8c8d',
            yearsAr: '<span>5</span> سنوات',
            yearsEn: '<span>5</span> Years',
            heroImage: '/images/slider-3.webp',
            image_1: '/images/slider-4.jpg',
            image_2: '/images/campus-feature-01.webp',
            tabs: [
                { id: 'overview', labelAr: 'لمحة عن الكلية', labelEn: 'Overview', contentAr: 'تعد مهندسين متميزين في تخطيط وإدارة مشاريع التشييد، مع التركيز على التقنيات الحديثة في التصميم وإعادة الإعمار.', contentEn: 'Preparing engineers in planning and management.' },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'التميز في التعليم الهندسي لإعادة الإعمار.', contentEn: 'Excellence in reconstruction engineering.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'توفير بيئة تعليمية تدمج بين النظرية وأحدث تقنيات البناء.', contentEn: 'Integrating theory with construction tech.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'إتقان إدارة المشاريع الهندسية الحديثة.', contentEn: 'Mastering modern project management.' }
            ],
            dean: {
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'د. عمار غضة',
                nameEn: 'Dr. Ammar Ghada',
                roleAr: 'عميد كلية هندسة التشييد والبناء',
                roleEn: 'Dean of the Faculty',
                image: '/images/construction-dean.jpg',
                messageAr: 'نسعى لإعداد مهندسين يمتلكون المعرفة العلمية والمهارات التطبيقية في هندسة التشييد والبناء للمساهمة في إعادة الإعمار.',
                messageEn: 'We aim to prepare engineers with scientific knowledge to contribute to the reconstruction efforts.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'ساعات تدريبية', labelEn: 'Training Hours', value: '160', icon: '/images/icons/training.svg' },
                { id: 2, labelAr: 'سنوات الدراسة', labelEn: 'Study Years', value: '5', icon: '/images/icons/years.svg' },
                { id: 3, labelAr: 'مخابر هندسية', labelEn: 'Eng Labs', value: '6', icon: '/images/icons/lab-eng.svg' },
                { id: 4, labelAr: 'برمجيات BIM', labelEn: 'BIM Software', value: 'Full Support', icon: '/images/icons/bim.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',

                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث هندسية',
                        titleEn: 'Engineering Research',
                        value: '+300',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعات تدريبية',
                        titleEn: 'Training Hours',
                        value: '160',
                        link: 'admissions.html',
                        icon: '/images/icons/training.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'مخابر هندسية',
                        titleEn: 'Eng Labs',
                        value: '6',
                        link: '#',
                        icon: '/images/icons/lab-eng.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'تقنيات BIM',
                        titleEn: 'BIM Tech',
                        value: 'Full',
                        link: '#',
                        icon: '/images/icons/bim.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyBuildingConstructionEngineeringValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: []
        },
        {
            id: 'petroleum',
            departmentRoute: '/facilities/petroleum/departments/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية هندسة البترول',
            nameEn: 'Petroleum Engineering',
            catalogDescEn: 'Provides specialized education in petroleum engineering.',
            catalogDescAr: 'تقدم تعليماً متخصصاً في هندسة البترول.',
            logo: '/images/spu-petroleum-logo.png',
            color: '0b5759',
            yearsAr: '<span>5</span> سنوات',
            yearsEn: '<span>5</span> Years',
            heroImage: '/images/slider-3.webp',
            image_1: '/images/slider-4.jpg',
            image_2: '/images/campus-feature-01.webp',
            tabs: [
                { id: 'overview', labelAr: 'لمحة عن الكلية', labelEn: 'Overview', contentAr: 'تزود الكلية الطلاب بالخبرات التقنية اللازمة لاستكشاف وإنتاج النفط والغاز، مع تدريبات ميدانية في المنشآت الطاقية.', contentEn: 'Providing technical expertise for oil and gas exploration.' },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'أن نكون المركز المرجعي لعلوم الطاقة والبترول.', contentEn: 'To be the reference center for energy sciences.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'تخريج مهندسين أكفاء للعمل في المنشآت النفطية الدولية.', contentEn: 'Graduating competent engineers for international sites.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'تعزيز مهارات الحفر وهندسة المكامن الجوفية.', contentEn: 'Enhancing drilling and reservoir skills.' }
            ],
            dean: {
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'أ.د. جان سعد',
                nameEn: 'Dr. Jean Saad',
                roleAr: 'عميد كلية هندسة البترول',
                roleEn: 'Dean of the Faculty',
                image: '/images/petroleom-dean.jpg',
                messageAr: 'نعمل على تزويد طلابنا بالخبرات التقنية اللازمة للعمل في صناعة النفط والغاز مع مراعاة معايير السلامة والبيئة.',
                messageEn: 'We work to provide students with the technical expertise for the oil industry with safety standards.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'مختبرات طاقة', labelEn: 'Energy Labs', value: '4', icon: '/images/icons/oil.svg' },
                { id: 2, labelAr: 'سنوات الدراسة', labelEn: 'Study Years', value: '5', icon: '/images/icons/years.svg' },
                { id: 3, labelAr: 'ساعة معتمدة', labelEn: 'Credit Hours', value: '160', icon: '/images/icons/hours.svg' },
                { id: 4, labelAr: 'تدريب ميداني', labelEn: 'Field Training', value: 'Required', icon: '/images/icons/field.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',

                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث طاقة',
                        titleEn: 'Energy Research',
                        value: '+450',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعة معتمدة',
                        titleEn: 'Credit Hours',
                        value: '160',
                        link: 'admissions.html',
                        icon: '/images/icons/hours.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'مختبرات طاقة',
                        titleEn: 'Energy Labs',
                        value: '4',
                        link: '#',
                        icon: '/images/icons/oil.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'تدريب ميداني',
                        titleEn: 'Field Training',
                        value: 'Done',
                        link: '#',
                        icon: '/images/icons/field.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyPetroleumValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: []
        },
        {
            id: 'business',
            departmentRoute: '/facilities/business-administration/departments/',
            top_labelar: 'الجامعة السورية الخاصة',
            top_labelen: 'Syrian Private University',
            nameAr: 'كلية إدارة الأعمال',
            nameEn: 'Business Administration',
            catalogDescEn: 'Developing visionary leaders for a dynamic global economy.',
            catalogDescAr: 'تطوير قادة ذوي رؤية لاقتصاد عالمي ديناميكي.',
            logo: '/images/spu-business-logo.png',
            color: 'caa949',
            yearsAr: '<span>4</span> سنوات',
            yearsEn: '<span>4</span> Years',
            heroImage: '/images/slider-3.webp',
            image_1: '/images/slider-4.jpg',
            image_2: '/images/campus-feature-01.webp',
            tabs: [
                { id: 'overview', labelAr: 'لمحة عن الكلية', labelEn: 'Overview', contentAr: 'تؤهل الكلية رواد أعمال وقادة للمؤسسات، عبر تخصصات مرنة تشمل المحاسبة، التسويق، والتمويل.', contentEn: 'Qualifying entrepreneurs and business leaders.' },
                { id: 'vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision', contentAr: 'الريادة في تخريج رواد أعمال وقادة للمؤسسات الاقتصادية.', contentEn: 'Leadership in graduating business leaders.' },
                { id: 'mission', labelAr: 'رسالتنا', labelEn: 'Our Mission', contentAr: 'ربط المعرفة الإدارية بتحديات سوق العمل الفعلي.', contentEn: 'Linking managerial knowledge with market challenges.' },
                { id: 'objectives', labelAr: 'أهدافنا', labelEn: 'Objectives', contentAr: 'تنمية مهارات التخطيط الاستراتيجي والذكاء المالي.', contentEn: 'Developing strategic planning skills.' }
            ],
            dean: {
                sectionLabelAr: 'رسالة عميد الكلية',
                sectionLabelEn: "Dean's Message",
                titlePrefixAr: 'كلمة',
                titlePrefixEn: 'The',
                nameAr: 'أ.د. سمر حبيب',
                nameEn: 'Dr. Samar Habib',
                roleAr: 'عميد كلية إدارة الأعمال',
                roleEn: 'Dean of the Faculty',
                image: '/images/business-dean.jpg',
                messageAr: 'كلية إدارة الأعمال هي حاضنة لقادة المستقبل، نوفر تخصصات مرنة تواكب التطور المتسارع في الأسواق المالية والإدارية.',
                messageEn: 'The Faculty of Business is an incubator for future leaders, offering flexible specializations.',
                ctaAr: 'الرؤية الاستراتيجية الكاملة',
                ctaEn: 'Read Full Strategic Vision'
            },
            stats: [
                { id: 1, labelAr: 'أقسام إدارية', labelEn: 'Management Depts', value: '5', icon: '/images/icons/business.svg' },
                { id: 2, labelAr: 'سنوات الدراسة', labelEn: 'Study Years', value: '4', icon: '/images/icons/years.svg' },
                { id: 3, labelAr: 'ساعة معتمدة', labelEn: 'Credit Hours', value: '136', icon: '/images/icons/hours.svg' },
                { id: 4, labelAr: 'تبادل أكاديمي', labelEn: 'Academic Exchange', value: 'Active', icon: '/images/icons/exchange.svg' }
            ],
            highlights: {
                sectionTitleAr: 'اقسام الكلية',
                sectionTitleEn: 'Faculty Highlights',
                sectionPAr: 'بيئة ديناميكية اكاديمية صممت لدعم تطور الطلاب , التعلم العملي و المستقبل',
                sectionPEn: 'A dynamic academic environment designed to support student growth, practical learning, and future',

                items: [
                    {
                        id: 1,
                        titleAr: 'أبحاث إدارية',
                        titleEn: 'Management Research',
                        value: '+600',
                        link: 'research.html',
                        icon: '/images/icons/file.svg'
                    },
                    {
                        id: 2,
                        titleAr: 'ساعة معتمدة',
                        titleEn: 'Credit Hours',
                        value: '136',
                        link: 'admissions.html',
                        icon: '/images/icons/hours.svg'
                    },
                    {
                        id: 3,
                        titleAr: 'أقسام إدارية',
                        titleEn: 'Management Depts',
                        value: '5',
                        link: '#',
                        icon: '/images/icons/business.svg'
                    },
                    {
                        id: 4,
                        titleAr: 'تبادل أكاديمي',
                        titleEn: 'Academic Exchange',
                        value: 'Active',
                        link: '#',
                        icon: '/images/icons/exchange.svg'
                    },
                    {
                        id: 5,
                        titleAr: 'قائمة الشرف',
                        titleEn: 'Honor List',
                        value: 'Top',
                        link: siteRoutes.facultyBusinessAdministrationValedictorians,
                        icon: '/images/icons/award.svg'
                    }
                ]
            },
            events: []
        }
    ]
};
