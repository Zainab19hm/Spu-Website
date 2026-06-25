const externalLink = (host) => host ? `https://${host}` : '';

export const sharedProfileHeroImage = '/images/DSC_1596.JPG';

const facultyMap = {
    medicine: {
        id: 'medicine',
        nameEn: 'Faculty of Medicine',
        nameAr: 'كلية الطب البشري',
        slug: 'medicine',
        route: '#'
    },
    dentistry: {
        id: 'dentistry',
        nameEn: 'Faculty of Dentistry',
        nameAr: 'كلية طب الأسنان',
        slug: 'dentistry',
        route: '#'
    },
    pharmacy: {
        id: 'pharmacy',
        nameEn: 'Faculty of Pharmacy',
        nameAr: 'كلية الصيدلة',
        slug: 'pharmacy',
        route: '#'
    },
    'ai-engineering': {
        id: 'ai-engineering',
        nameEn: 'Faculty of Engineering',
        nameAr: 'كلية الهندسة',
        slug: 'artificial-intelligence',
        route: '#'
    },
    petroleum: {
        id: 'petroleum',
        nameEn: 'Faculty of Petroleum Engineering',
        nameAr: 'كلية هندسة البترول',
        slug: 'petroleum',
        route: '#'
    },
    business: {
        id: 'business',
        nameEn: 'Faculty of Business Administration',
        nameAr: 'كلية إدارة الأعمال',
        slug: 'business',
        route: '#'
    },
    Construction: {
        id: 'Construction',
        nameEn: 'Faculty of Building & Construction Engineering',
        nameAr: 'كلية هندسة التشييد والبناء',
        slug: 'building-construction-engineering',
        route: '#'
    }
};

function toCourses(courseNames, deptId) {
    return (courseNames || []).map((name, i) => ({
        id: `${deptId}-${i + 1}`,
        code: `${deptId.toUpperCase()}${String(i + 1).padStart(3, '0')}`,
        nameEn: name,
        nameAr: name,
        departmentId: deptId
    }));
}

function toEducation(qualifications) {
    return (qualifications || []).map((q) => ({
        degree: q,
        institution: '',
        year: null
    }));
}

export const staffProfileContent = [
    {
        slug: 'dr-lina-khatib-100',
        nameEn: 'Dr. Lina Khatib',
        nameAr: 'د. لينا خطيب',
        roleEn: 'Associate Professor of Internal Medicine',
        roleAr: 'أستاذة مشاركة في الطب الباطني',
        faculty: facultyMap.medicine,
        office: {
            fullAddress: 'مبنى كلية الطب، المكاتب الأكاديمية',
            fullAddressEn: 'Medicine Building, Academic Offices'
        },
        email: 'lina.khatib@spu.edu.sy',
        scholarUrl: externalLink('scholar.google.com'),
        linkedinUrl: externalLink('www.linkedin.com'),
        biography: [
            'الدكتورة لينا خطيب أستاذة مشاركة في كلية الطب، وتتركز اهتماماتها التدريسية والسريرية على الطب الباطني، والتشخيص المنطقي، والرعاية الصحية المتمحورة حول المريض.',
            'يدعم عملها الأكاديمي التدريب السريري، ومواءمة المناهج الدراسية، وتوجيه الطلاب المنتقلين من الدراسة النظرية إلى الممارسة الطبية تحت الإشراف.'
        ],
        biographyEn: [
            'Dr. Lina Khatib is an associate professor in the Faculty of Medicine with teaching and clinical interests in internal medicine, diagnostic reasoning, and patient-centered care.',
            'Her academic work supports clinical training, curriculum alignment, and mentoring for students moving from classroom learning into supervised medical practice.'
        ],
        educationEn: toEducation([
            'MD in Medicine',
            'Specialized clinical training in internal medicine',
            'Experience in clinical education and student supervision'
        ]),
        courses: toCourses(['Internal Medicine I', 'Clinical Skills', 'Medical Ethics'], 'medicine-plan')
    },
    {
        slug: 'dr-omar-darwish-101',
        nameEn: 'Dr. Omar Darwish',
        nameAr: 'د. عمر درويش',
        roleEn: 'Lecturer in Building and Construction Engineering',
        roleAr: 'محاضر في هندسة التشييد والبناء',
        faculty: facultyMap.Construction,
        office: {
            fullAddress: 'مبنى الهندسة، جناح استوديو التصميم',
            fullAddressEn: 'Engineering Building, Design Studio Wing'
        },
        email: 'omar.darwish@spu.edu.sy',
        linkedinUrl: externalLink('www.linkedin.com'),
        biography: [
            'د. عمر درويش يدرس الأنظمة الإنشائية وطرق البناء والتصميم الهندسي مع التركيز على حل المشكلات التطبيقية.',
            'يساهم في أنشطة التعلم القائمة على الاستوديو التي تربط بين التحليل التقني والتوثيق العملي للمشاريع.'
        ],
        biographyEn: [
            'Dr. Omar Darwish teaches structural systems, construction methods, and engineering design with an emphasis on applied problem solving.',
            'He contributes to studio-based learning activities that connect technical analysis with practical project documentation.'
        ],
        educationEn: toEducation([
            'PhD in Civil or Construction Engineering',
            'Professional experience in structural design and project delivery',
            'Academic experience in applied engineering education'
        ]),
        courses: toCourses(['Structural Analysis', 'Construction Methods', 'Engineering Drawing'], 'construction-plan')
    },
    {
        slug: 'dr-rania-mansour-102',
        nameEn: 'Dr. Rania Mansour',
        nameAr: 'د. رانيا منصور',
        roleEn: 'Assistant Professor of Business Administration',
        roleAr: 'أستاذة مساعدة في إدارة الأعمال',
        faculty: facultyMap.business,
        office: {
            fullAddress: 'مبنى إدارة الأعمال، مكاتب هيئة التدريس',
            fullAddressEn: 'Business Administration Building, Faculty Offices'
        },
        email: 'rania.mansour@spu.edu.sy',
        scholarUrl: externalLink('scholar.google.com'),
        linkedinUrl: externalLink('www.linkedin.com'),
        biography: [
            'د. رانيا منصور تركز على الإدارة والسلوك التنظيمي وتعليم ريادة الأعمال.',
            'يربط تدريسها بين النظرية الإدارية والتعلم القائم على الحالات، مما يساعد الطلاب على تحليل المنظمات والأسواق وتحديات صنع القرار.'
        ],
        biographyEn: [
            'Dr. Rania Mansour focuses on management, organizational behavior, and entrepreneurship education.',
            'Her teaching connects business theory with case-based learning, helping students analyze organizations, markets, and decision-making challenges.'
        ],
        educationEn: toEducation([
            'PhD in Business Administration',
            'Research background in management and organizational studies',
            'Experience in academic advising and project supervision'
        ]),
        courses: toCourses(['Principles of Management', 'Entrepreneurship', 'Organizational Behavior'], 'management')
    },
    {
        slug: 'dr-nabil-haddad-103',
        nameEn: 'Dr. Nabil Haddad',
        nameAr: 'د. نبيل حداد',
        roleEn: 'Clinical Lecturer in Dentistry',
        roleAr: 'محاضر سريري في طب الأسنان',
        faculty: facultyMap.dentistry,
        office: {
            fullAddress: 'عيادات الأسنان، مكتب التعليم السريري',
            fullAddressEn: 'Dental Clinics, Clinical Education Office'
        },
        email: 'nabil.haddad@spu.edu.sy',
        biography: [
            'د. نبيل حداد يدعم تعليم طب الأسنان السريري مع الاهتمام برعاية المرضى والانضباط الإجرائي واستعداد الطلاب.',
            'يساعد عمله الطلاب على تطوير الثقة في التشخيص وتخطيط العلاج والممارسة السريرية تحت الإشراف.'
        ],
        biographyEn: [
            'Dr. Nabil Haddad supports clinical dentistry education with attention to patient care, procedural discipline, and student readiness.',
            'His work helps students develop confidence in diagnosis, treatment planning, and supervised clinical practice.'
        ],
        educationEn: toEducation([
            'DDS in Dentistry',
            'Clinical training in restorative and general dentistry',
            'Experience in supervised clinical education'
        ]),
        courses: toCourses(['Clinical Dentistry Practice', 'Treatment Planning', 'Restorative Dentistry'], 'dentistry-plan')
    },
    {
        slug: 'dr-maya-saleh-104',
        nameEn: 'Dr. Maya Saleh',
        nameAr: 'د. مايا صالح',
        roleEn: 'Assistant Professor of Pharmaceutical Sciences',
        roleAr: 'أستاذة مساعدة في العلوم الصيدلانية',
        faculty: facultyMap.pharmacy,
        office: {
            fullAddress: 'مبنى الصيدلة، مكاتب المختبرات',
            fullAddressEn: 'Pharmacy Building, Laboratory Offices'
        },
        email: 'maya.saleh@spu.edu.sy',
        scholarUrl: externalLink('scholar.google.com'),
        biography: [
            'د. مايا صالح تدرس العلوم الصيدلانية مع التركيز على الممارسة المختبرية وسلامة الأدوية والتعليم الصيدلاني التطبيقي.',
            'تساهم في تدريب الطلاب من خلال الجلسات العملية وتطوير التقييم وأنشطة التعلم الموجهة نحو البحث.'
        ],
        biographyEn: [
            'Dr. Maya Saleh teaches pharmaceutical sciences with a focus on laboratory practice, medication safety, and applied pharmacy education.',
            'She contributes to student training through practical sessions, assessment development, and research-oriented learning activities.'
        ],
        educationEn: toEducation([
            'PhD in Pharmaceutical Sciences',
            'Experience in laboratory teaching and quality procedures',
            'Research interest in applied pharmacy practice'
        ]),
        courses: toCourses(['Pharmaceutical Analysis', 'Pharmacy Laboratory Practice', 'Medication Safety'], 'pharmacy-plan')
    },
    {
        slug: 'dr-samer-qassem-105',
        nameEn: 'Dr. Samer Qassem',
        nameAr: 'د. سامر قاسم',
        roleEn: 'Lecturer in Anatomy and Basic Medical Sciences',
        roleAr: 'محاضر في التشريح والعلوم الطبية الأساسية',
        faculty: facultyMap.medicine,
        office: {
            fullAddress: 'مبنى الطب، قسم العلوم الأساسية',
            fullAddressEn: 'Medicine Building, Basic Sciences Department'
        },
        email: 'samer.qassem@spu.edu.sy',
        linkedinUrl: externalLink('www.linkedin.com'),
        biography: [
            'د. سامر قاسم يدعم التعليم الطبي الأساسي في التشريح والعلوم الأساسية.',
            'يركز تدريسه على المصطلحات الدقيقة والتعلم البصري والربط بين المعرفة الأساسية والاستدلال السريري اللاحق.'
        ],
        biographyEn: [
            'Dr. Samer Qassem supports foundational medical education in anatomy and basic sciences.',
            'His teaching emphasizes accurate terminology, visual learning, and the connection between foundational knowledge and later clinical reasoning.'
        ],
        educationEn: toEducation([
            'MD with specialization in basic medical sciences',
            'Training in anatomy education and practical instruction',
            'Experience supporting early-stage medical students'
        ]),
        courses: toCourses(['Human Anatomy', 'Basic Medical Sciences', 'Medical Terminology'], 'medicine-plan')
    },
    {
        slug: 'eng-karim-nasser-106',
        nameEn: 'Eng. Karim Nasser',
        nameAr: 'م. كريم ناصر',
        roleEn: 'Laboratory Supervisor for Engineering Workshops',
        roleAr: 'مشرف مختبر ورش الهندسة',
        faculty: facultyMap.Construction,
        office: {
            fullAddress: 'ورش الهندسة، مكتب المختبر',
            fullAddressEn: 'Engineering Workshops, Laboratory Office'
        },
        email: 'karim.nasser@spu.edu.sy',
        linkedinUrl: externalLink('www.linkedin.com'),
        biography: [
            'م. كريم ناصر يدير أنشطة ورشة الهندسة ويدعم التدريب العملي لدورات البناء والمواد.',
            'يساعد في الحفاظ على بيئات مختبرية آمنة ومنظمة حيث يمكن للطلاب ربط مفاهيم التصميم بالاختبار العملي.'
        ],
        biographyEn: [
            'Eng. Karim Nasser manages engineering workshop activities and supports practical training for construction and materials courses.',
            'He helps maintain safe, organized laboratory environments where students can connect design concepts with hands-on testing.'
        ],
        educationEn: toEducation([
            'BSc in Civil or Construction Engineering',
            'Experience in laboratory operations and equipment handling',
            'Training in safety procedures for academic workshops'
        ]),
        courses: toCourses(['Materials Testing Lab', 'Engineering Workshop Practice'], 'construction-plan')
    },
    {
        slug: 'ms-hiba-taha-107',
        nameEn: 'Ms. Hiba Taha',
        nameAr: 'السيدة هبة طه',
        roleEn: 'Academic Coordinator for Business Programs',
        roleAr: 'منسقة أكاديمية لبرامج الأعمال',
        faculty: facultyMap.business,
        office: {
            fullAddress: 'مبنى إدارة الأعمال، مكتب التنسيق',
            fullAddressEn: 'Business Administration Building, Coordination Office'
        },
        email: 'hiba.taha@spu.edu.sy',
        linkedinUrl: externalLink('www.linkedin.com'),
        biography: [
            'السيدة هبة طه تدعم التنسيق الأكاديمي لبرامج الأعمال وجدولة الدورات والتواصل مع الطلاب.',
            'يساعد عملها أعضاء هيئة التدريس والطلاب على الحفاظ على عمليات أكاديمية واضحة عبر الإرشاد والتقييم وأنشطة البرنامج.'
        ],
        biographyEn: [
            'Ms. Hiba Taha supports the academic coordination of business programs, course scheduling, and student communication.',
            'Her work helps faculty and students maintain clear academic processes across advising, assessment, and program activities.'
        ],
        educationEn: toEducation([
            'MSc in Business Administration or related field',
            'Experience in academic coordination and student services',
            'Training in quality documentation and office workflows'
        ]),
        courses: []
    },
    {
        slug: 'dr-nour-ibrahim-108',
        nameEn: 'Dr. Nour Ibrahim',
        nameAr: 'د. نور إبراهيم',
        roleEn: 'Lecturer in Preventive Dentistry',
        roleAr: 'محاضر في طب الأسنان الوقائي',
        faculty: facultyMap.dentistry,
        office: {
            fullAddress: 'عيادات الأسنان، وحدة طب الأسنان الوقائي',
            fullAddressEn: 'Dental Clinics, Preventive Dentistry Unit'
        },
        email: 'nour.ibrahim@spu.edu.sy',
        scholarUrl: externalLink('scholar.google.com'),
        biography: [
            'د. نور إبراهيم تدرس طب الأسنان الوقائي وتدعم تدريب الطلاب في تثقيف الصحة الفموية والرعاية السنية الموجهة نحو المجتمع.',
            'يسلط ملفها التركيز على الوقاية والتواصل والعادات المهنية اللازمة للممارسة السريرية المسؤولة.'
        ],
        biographyEn: [
            'Dr. Nour Ibrahim teaches preventive dentistry and supports student training in oral-health education and community-facing dental care.',
            'Her profile emphasizes prevention, communication, and the professional habits needed for responsible clinical practice.'
        ],
        educationEn: toEducation([
            'DDS in Dentistry',
            'Training in preventive and community dentistry',
            'Experience in clinical teaching and patient communication'
        ]),
        courses: toCourses(['Preventive Dentistry', 'Oral Health Education', 'Community Dentistry'], 'dentistry-plan')
    }
];

export const leadershipProfileContent = {
    rector: {
        email: 'rector.office@spu.edu.sy',
        scholarUrl: externalLink('scholar.google.com'),
        linkedinUrl: externalLink('www.linkedin.com'),
        faculty: {
            id: 'university',
            nameEn: 'University Presidency',
            nameAr: 'رئاسة الجامعة',
            slug: 'university',
            route: '#'
        },
        office: {
            fullAddress: 'مبنى الرئاسة، الحرم الجامعي الرئيسي',
            fullAddressEn: 'Presidency Building, Main Campus'
        },
        biographyEn: [
            'Prof. Dr. Abdul Razzaq Al-Hussein leads Syrian Private University through institutional planning, academic quality, and university-wide development.',
            'His office works with faculties and directorates to strengthen governance, student outcomes, research culture, and public service.'
        ],
        educationEn: toEducation([
            'Professor-level academic appointment',
            'Senior experience in higher education leadership',
            'Institutional governance and academic development background'
        ]),
        courses: [],
        publications: [
            {
                id: 'res-005',
                title: 'Clinical Simulation Training Impact on Medical Student Diagnostic Accuracy',
                journal: 'Journal of Medical Education',
                year: 2024,
                links: { local: '/research/detail/?id=res-005', scholar: externalLink('scholar.google.com') }
            }
        ]
    },
    vicePresidents: [
        {
            email: 'arwa.khair@spu.edu.sy',
            scholarUrl: externalLink('scholar.google.com'),
            linkedinUrl: externalLink('www.linkedin.com'),
            faculty: {
                id: 'academic-affairs',
                nameEn: 'Academic Affairs',
                nameAr: 'الشؤون العلمية',
                slug: 'academic-affairs',
                route: '#'
            },
            office: {
                fullAddress: 'مكتب الشؤون العلمية',
                fullAddressEn: 'Academic Affairs Office'
            },
            biographyEn: [
                'Dr. Arwa Khair supports academic affairs across SPU, with responsibility for curriculum quality, faculty coordination, and academic standards.',
                'Her work focuses on aligning teaching practice, assessment, and program development with institutional goals.'
            ],
            educationEn: toEducation([
                'Doctoral degree in an academic discipline',
                'Experience in curriculum and academic standards',
                'Leadership experience in higher education'
            ]),
            courses: []
        },
        {
            email: 'mohammad.alghazzi@spu.edu.sy',
            linkedinUrl: externalLink('www.linkedin.com'),
            faculty: {
                id: 'secretary',
                nameEn: 'University Secretariat',
                nameAr: 'أمانة الجامعة',
                slug: 'secretary',
                route: '#'
            },
            office: {
                fullAddress: 'مكتب الأمانة العامة',
                fullAddressEn: 'General Secretariat Office'
            },
            biographyEn: [
                'Dr. Mohammad Riad Alghazzi supports the administrative and institutional coordination of Syrian Private University.',
                'His role connects university governance, documentation, communication, and operational follow-up across academic and administrative offices.'
            ],
            educationEn: toEducation([
                'Doctoral-level academic background',
                'Administrative leadership experience',
                'Experience in institutional coordination'
            ]),
            courses: []
        }
    ],
    deans: [
        {
            email: 'ayman.ali@spu.edu.sy',
            scholarUrl: externalLink('scholar.google.com'),
            faculty: facultyMap.medicine,
            office: {
                fullAddress: 'مكتب عميد كلية الطب البشري',
                fullAddressEn: 'Faculty of Medicine Dean Office'
            },
            biographyEn: [
                'Dr. Ayman Ali leads the Faculty of Medicine, supporting medical education, clinical training, and faculty coordination.',
                'His profile highlights the faculty commitment to applied learning, ethical practice, and student progression.'
            ],
            educationEn: toEducation([
                'Medical doctorate and senior academic experience',
                'Clinical and teaching leadership background',
                'Experience in health-science program management'
            ]),
            courses: toCourses(['Clinical Medicine', 'Medical Education Seminar'], 'medicine-plan'),
            publications: [
                {
                    id: 'res-005',
                    title: 'Clinical Simulation Training Impact on Medical Student Diagnostic Accuracy',
                    journal: 'Journal of Medical Education',
                    year: 2024,
                    links: { local: '/research/detail/?id=res-005', scholar: externalLink('scholar.google.com') }
                }
            ]
        },
        {
            email: 'talaat.abuhatab@spu.edu.sy',
            faculty: facultyMap.dentistry,
            office: {
                fullAddress: 'مكتب عميد كلية طب الأسنان',
                fullAddressEn: 'Faculty of Dentistry Dean Office'
            },
            biographyEn: [
                'Dr. Talaat Abu Hatab leads dentistry programs with attention to clinical readiness, patient care standards, and practical training.',
                'His office supports coordinated learning between classrooms, labs, and the university dental clinics.'
            ],
            educationEn: toEducation([
                'DDS or equivalent dental qualification',
                'Senior clinical and academic experience',
                'Experience in dental education leadership'
            ]),
            courses: toCourses(['Advanced Clinical Dentistry', 'Dental Practice Management'], 'dentistry-plan'),
            publications: [
                {
                    id: 'res-002',
                    title: 'AI-Driven Predictive Models for Early Dental Caries Detection',
                    journal: 'International Journal of Dental Informatics',
                    year: 2024,
                    links: { local: '/research/detail/?id=res-002', scholar: externalLink('scholar.google.com') }
                }
            ]
        },
        {
            email: 'hossam.shahrour@spu.edu.sy',
            scholarUrl: externalLink('scholar.google.com'),
            faculty: facultyMap.pharmacy,
            office: {
                fullAddress: 'مكتب عميد كلية الصيدلة',
                fullAddressEn: 'Faculty of Pharmacy Dean Office'
            },
            biographyEn: [
                'Dr. Hossam Shahrour leads the Faculty of Pharmacy, supporting pharmaceutical education, laboratory learning, and applied research.',
                'His work helps connect scientific foundations with professional pharmacy practice.'
            ],
            educationEn: toEducation([
                'Doctoral qualification in pharmaceutical sciences',
                'Academic and laboratory leadership experience',
                'Experience in health-science education'
            ]),
            courses: toCourses(['Pharmaceutical Sciences Seminar', 'Applied Pharmacy Research'], 'pharmacy-plan'),
            publications: [
                {
                    id: 'res-001',
                    title: 'Machine Learning Applications in Pharmaceutical Quality Control',
                    journal: 'Journal of Pharmaceutical Analysis',
                    year: 2024,
                    links: { local: '/research/detail/?id=res-001', scholar: externalLink('scholar.google.com') }
                }
            ]
        },
        {
            email: 'mouhib.alnoukari@spu.edu.sy',
            scholarUrl: externalLink('scholar.google.com'),
            faculty: facultyMap['ai-engineering'],
            office: {
                fullAddress: 'مكتب عميد كلية الهندسة',
                fullAddressEn: 'Faculty of Engineering Dean Office'
            },
            biographyEn: [
                'Dr. Mouhib Alnoukari leads engineering academic programs with a focus on technical capability, innovation, and applied project work.',
                'His office supports learning environments where students connect engineering theory with practical systems and design challenges.'
            ],
            educationEn: toEducation([
                'Doctoral qualification in engineering or technology',
                'Academic leadership experience',
                'Background in applied technical education'
            ]),
            courses: [
                { id: 'ai-201', code: 'AI201', nameEn: 'Artificial Intelligence', nameAr: 'الذكاء الاصطناعي', departmentId: 'si' },
                { id: 'ml-301', code: 'ML301', nameEn: 'Machine Learning', nameAr: 'تعلم الآلة', departmentId: 'si' },
                { id: 'data-301', code: 'DATA301', nameEn: 'Data Science', nameAr: 'علم البيانات', departmentId: 'si' }
            ],
            publications: [
                {
                    id: 'res-006',
                    title: 'Natural Language Processing for Arabic Medical Record Summarization',
                    journal: 'ACM Transactions on Asian Language Information Processing',
                    year: 2024,
                    links: { local: '/research/detail/?id=res-006', scholar: externalLink('scholar.google.com') }
                }
            ]
        },
        {
            email: 'mahmoud.hadid@spu.edu.sy',
            faculty: facultyMap.petroleum,
            office: {
                fullAddress: 'مكتب عميد كلية هندسة البترول',
                fullAddressEn: 'Faculty of Petroleum Engineering Dean Office'
            },
            biographyEn: [
                'Dr. Mahmoud Hadid leads petroleum engineering education with emphasis on geoscience foundations, energy systems, and field-oriented learning.',
                'His profile reflects the faculty role in preparing students for technical work in energy and industrial contexts.'
            ],
            educationEn: toEducation([
                'Doctoral qualification in petroleum or energy engineering',
                'Academic and technical leadership experience',
                'Experience in applied engineering education'
            ]),
            courses: toCourses(['Petroleum Engineering Systems', 'Field Training Seminar'], 'petroleum-plan'),
            publications: [
                {
                    id: 'res-004',
                    title: 'Deep Learning Framework for Reservoir Permeability Prediction',
                    journal: 'Journal of Petroleum Science and Engineering',
                    year: 2023,
                    links: { local: '/research/detail/?id=res-004', scholar: externalLink('scholar.google.com') }
                }
            ]
        },
        {
            email: 'samar.habib@spu.edu.sy',
            scholarUrl: externalLink('scholar.google.com'),
            faculty: facultyMap.business,
            office: {
                fullAddress: 'مكتب عميد كلية إدارة الأعمال',
                fullAddressEn: 'Faculty of Business Administration Dean Office'
            },
            biographyEn: [
                'Dr. Samar Habib leads the Faculty of Business Administration, supporting management education, entrepreneurship, and career-oriented academic experiences.',
                'Her office helps connect classroom learning with organizational analysis, project work, and professional readiness.'
            ],
            educationEn: toEducation([
                'Doctoral qualification in business or management',
                'Academic leadership experience',
                'Background in program development and advising'
            ]),
            courses: toCourses(['Strategic Management', 'Business Leadership'], 'management'),
            publications: [
                {
                    id: 'res-001',
                    title: 'Machine Learning Applications in Pharmaceutical Quality Control',
                    journal: 'Journal of Pharmaceutical Analysis',
                    year: 2024,
                    links: { local: '/research/detail/?id=res-001', scholar: externalLink('scholar.google.com') }
                }
            ]
        },
        {
            email: 'ammar.ghada@spu.edu.sy',
            faculty: facultyMap.Construction,
            office: {
                fullAddress: 'مكتب عميد كلية هندسة التشييد والبناء',
                fullAddressEn: 'Faculty of Building & Construction Engineering Dean Office'
            },
            biographyEn: [
                'Dr. Ammar Ghada leads the Faculty of Building and Construction Engineering, supporting structural engineering, architectural design, and applied construction education.',
                'His office prepares qualified engineers to contribute to reconstruction and development projects.'
            ],
            educationEn: toEducation([
                'Doctoral qualification in civil or construction engineering',
                'Academic leadership experience',
                'Background in structural design and project delivery'
            ]),
            courses: toCourses(['Structural Analysis', 'Construction Methods'], 'construction-plan'),
            publications: [
                {
                    id: 'res-003',
                    title: 'Structural Performance of Fiber-Reinforced Concrete in Seismic Zones',
                    journal: 'Engineering Structures',
                    year: 2023,
                    links: { local: '/research/detail/?id=res-003', scholar: externalLink('scholar.google.com') }
                }
            ]
        }
    ]
};

export function mergeProfileContent(content) {
    content.profilePage = {
        ...(content.profilePage || {}),
        heroImage: sharedProfileHeroImage
    };

    if (content.leadership?.rector) {
        Object.assign(content.leadership.rector, leadershipProfileContent.rector);
    }

    (content.leadership?.vicePresidents || []).forEach((person, index) => {
        Object.assign(person, leadershipProfileContent.vicePresidents[index] || {});
    });

    (content.leadership?.deans || []).forEach((person, index) => {
        Object.assign(person, leadershipProfileContent.deans[index] || {});
    });

    const staffBySlug = Object.fromEntries(
        staffProfileContent.map(p => [p.slug, p])
    );
    (content.staffDirectory?.staff || []).forEach((person) => {
        const match = staffBySlug[person.slug];
        if (match) {
            Object.assign(person, match);
        }
    });

    return content;
}
