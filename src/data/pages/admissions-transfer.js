export const admissionsTransferPage = {
    heroImage: '/images/DSC_1015.JPG',
    breadcrumbHomeEn: 'Home',
    breadcrumbHomeAr: 'الرئيسية',
    breadcrumbParentEn: 'Admissions',
    breadcrumbParentAr: 'القبول والتسجيل',
    breadcrumbCurrentEn: 'Transfer & International Students',
    breadcrumbCurrentAr: 'التحويل والطلاب الدوليون',
    titleEn: 'Transfer & International Students',
    titleAr: 'التحويل والطلاب الدوليون',
    image: '/images/DSC_1015.JPG',
    tabs: [
        { id: 'transfer', labelEn: 'Transfer Student', labelAr: 'طالب محوّل' },
        { id: 'international', labelEn: 'International Student', labelAr: 'طالب دولي' }
    ],
    types: {
        transfer: {
            policiesTitleEn: 'Transfer Policies',
            policiesTitleAr: 'سياسات التحويل',
            policies: [
                {
                    titleEn: 'Credit Transfer Policy',
                    titleAr: 'سياسة تحويل الساعات المعتمدة',
                    descEn: 'Credits are evaluated on a course-by-course basis. A minimum grade of C or equivalent is required for transfer consideration. Core curriculum courses undergo rigorous review by the respective college dean.',
                    descAr: 'يتم تقييم الساعات المعتمدة على أساس كل مقرر على حدة. يُشترط الحصول على حد أدنى من الدرجات C أو ما يعادلها للنظر في التحويل الأكاديمي. وتخضع مساقات المنهج الأساسي لمراجعة دقيقة من قبل عميد الكلية المختص.',
                    iconSvg: `<svg class='h-6 w-6 text-spu-red' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' /></svg>`
                },
                {
                    titleEn: 'Course Equivalency',
                    titleAr: 'تعادل المقررات الدراسية',
                    descEn: 'Applicants must provide detailed syllabi for courses seeking equivalency. The academic committee assesses content overlap, credit hours, and learning outcomes against SPU standards.',
                    descAr: 'يجب على المتقدمين تقديم توصيف تفصيلي للمقررات التي يطلبون معادلتها. وتقوم اللجنة الأكاديمية بتقييم تداخل المحتوى، والساعات المعتمدة، ومخرجات التعلم مقارنة بمعايير جامعة SPU.',
                    iconSvg: `<svg class='h-6 w-6 text-spu-red' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' /></svg>`
                }
            ],
            documentsTitleEn: 'Required Documents',
            documentsTitleAr: 'الوثائق المطلوبة للتقديم',
            documents: [
                { titleEn: 'Original High School Transcript', titleAr: 'وثيقة شهادة الثانوية العامة الأصلية المصدقة', statusEn: 'Required', statusAr: 'مطلوب' },
                { titleEn: 'Photocopy of ID Card / Passport', titleAr: 'صورة عن الهوية الشخصية أو جواز السفر', statusEn: 'Required', statusAr: 'مطلوب' },
                { titleEn: 'Four (4) Recent Passport Photos', titleAr: 'أربع (4) صور شخصية ملونة حديثة', statusEn: 'Required', statusAr: 'مطلوب' },
                { titleEn: 'Medical Fitness Certificate', titleAr: 'شهادة خلو من الأمراض السارية (شهادة صحية)', statusEn: 'Required', statusAr: 'مطلوب' },
                { titleEn: 'Language Proficiency Test Scores', titleAr: 'درجات اختبار كفاءة اللغة الإنجليزية (إن وجد)', statusEn: 'Optional (if Applicable)', statusAr: 'اختياري (إذا توفر)', optional: true }
            ],
            processTitleEn: 'Application Process',
            processTitleAr: 'خطوات وإجراءات التقديم',
            steps: [
                { titleEn: 'Choose Type', titleAr: 'اختر الفئة', descEn: 'Determine if you are applying as a transfer or international student.', descAr: 'تحديد ما إذا كنت تتقدم للدراسة كطالب محوّل أو طالب دولي.' },
                { titleEn: 'Review Requirements', titleAr: 'مراجعة المتطلبات الأكاديمية', descEn: 'Gather all necessary documentation based on your applicant type.', descAr: 'جمع كافة المستندات والوثائق المطلوبة بناءً على فئة التقديم الخاصة بك.' },
                { titleEn: 'Prepare Documents', titleAr: 'تحضير وتصديق الوثائق', descEn: 'Ensure transcripts, syllabi, and identification are certified.', descAr: 'التأكد من تصديق كشوف العلامات، وتوصيف المقررات الأكاديمية، والوثائق الشخصية رسمياً.' }
            ]
        },
        international: {
            policiesTitleEn: 'International Student Policies',
            policiesTitleAr: 'سياسات الطلاب الدوليين',
            policies: [
                {
                    titleEn: 'Language Requirements',
                    titleAr: 'متطلبات الكفاءة اللغوية',
                    descEn: 'Applicants may be asked to provide Arabic or English language evidence depending on faculty requirements and the chosen academic programme.',
                    descAr: 'قد يُطلب من المتقدمين تقديم إثبات إتقان اللغة العربية أو الإنجليزية اعتماداً على شروط القبول في الكلية والبرنامج الأكاديمي المختار.',
                    iconSvg: `<svg class='h-6 w-6 text-spu-red' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c-.313 1.565-.953 3.053-1.892 4.38M11.25 9.077a11.39 11.39 0 01-2.978-2.543m-2.98 2.543A11.398 11.398 0 013 7.078M12 21h-2' /></svg>`
                },
                {
                    titleEn: 'Visa & Equivalency Guide',
                    titleAr: 'دليل التأشيرات ومعادلة الشهادات',
                    descEn: 'International applicants should confirm visa status, passport validity, and Ministry of Education equivalency requirements before final admission.',
                    descAr: 'يجب على المتقدمين الدوليين التأكد من حالة التأشيرة وصلاحية جواز السفر، واستيفاء متطلبات المعادلة لدى وزارة التعليم العالي السورية قبل القبول النهائي.',
                    iconSvg: `<svg class='h-6 w-6 text-spu-red' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' /></svg>`
                }
            ],
            documentsTitleEn: 'Required Documents',
            documentsTitleAr: 'الوثائق المطلوبة للطلاب الدوليين',
            documents: [
                { titleEn: 'Valid Passport Copy', titleAr: 'صورة واضحة عن جواز سفر ساري المفعول', statusEn: 'Required', statusAr: 'مطلوب' },
                { titleEn: 'Certified Secondary School Certificate', titleAr: 'شهادة الدراسة الثانوية العامة مصدقة من وزارة الخارجية والسفارة السورية', statusEn: 'Required', statusAr: 'مطلوب' },
                { titleEn: 'Ministry Equivalency Documents', titleAr: 'وثيقة معادلة الشهادة الثانوية الصادرة عن وزارة التعليم العالي السورية', statusEn: 'Required', statusAr: 'مطلوب' },
                { titleEn: 'Four (4) Recent Passport Photos', titleAr: 'أربع (4) صور شخصية ملونة حديثة', statusEn: 'Required', statusAr: 'مطلوب' },
                { titleEn: 'Visa or Residency Documents', titleAr: 'صورة عن التأشيرة الدراسية أو إقامة سارية المفعول في سوريا', statusEn: 'Optional (if Applicable)', statusAr: 'اختياري (إذا توفر)', optional: true }
            ],
            notesTitleEn: 'Country-Specific Notes',
            notesTitleAr: 'ملاحظات خاصة بكل بلد',
            notes: [
                { titleEn: 'Academic Equivalency Requirements', titleAr: 'متطلبات معادلة الشهادات الأكاديمية', descEn: 'Each country may follow different equivalency workflows and documentation rules. Verify your national requirements early.', descAr: 'قد تتبع كل دولة إجراءات ومتطلبات مختلفة لمعادلة الشهادات. تحقق من المتطلبات الوطنية لمواطنيك مبكراً.' },
                { titleEn: 'Visa Processing Timelines', titleAr: 'جداول معالجة التأشيرات', descEn: 'Visa approval times vary by nationality and consulate. Start the visa process as soon as your admission is confirmed.', descAr: 'تختلف مدد معالجة التأشيرات باختلاف الجنسية والقنصلية. ابدأ إجراءات التأشيرة فور تأكيد القبول.' },
                { titleEn: 'Translation & Legalisation', titleAr: 'الترجمة والتصديق القانوني', descEn: 'Official translations and embassy/legalisation stamps may be required for some documents. Plan ahead to avoid delays.', descAr: 'قد تتطلب بعض الوثائق ترجمة رسمية وأختام تصديق من السفارة أو الجهات القانونية. خطط لذلك لتجنب التأخير.' }
            ],
            processTitleEn: 'Application Process',
            processTitleAr: 'خطوات تقديم طلبات القبول الدولي',
            steps: [
                { titleEn: 'Confirm Eligibility', titleAr: 'التحقق من الأهلية والمعادلة', descEn: 'Review country-specific academic and equivalency requirements.', descAr: 'مراجعة المتطلبات الأكاديمية وشروط معادلة الشهادات المعتمدة لكل جنسية.' },
                { titleEn: 'Submit Documents', titleAr: 'تقديم ملف الوثائق', descEn: 'Provide certified academic records, passport documents, and translations.', descAr: 'تقديم السجلات الأكاديمية المصدقة، وصور جواز السفر، والترجمات المعتمدة قانونياً.' },
                { titleEn: 'Finalize Admission', titleAr: 'استكمال التسجيل والقبول', descEn: 'Coordinate with Admissions for acceptance, visa guidance, and registration steps.', descAr: 'التنسيق مع مكتب القبول والتسجيل لاستلام إشعار القبول الرسمي وإتمام إجراءات الإقامة.' }
            ]
        }
    },
    notes: {
        titleEn: 'Important Institutional Notes',
        titleAr: 'ملاحظات تنظيمية هامة للمتقدمين',
        descEn: 'All admission requirements, including minimum GPA thresholds and accepted document formats, are subject to periodic review and may change based on directives from the Syrian Ministry of Higher Education. Applicants are strongly advised to consult the official university announcements or contact the Admissions Office directly for the most current information before submitting their application. The University reserves the right to request additional documentation to verify applicant eligibility.',
        descAr: 'تخضع جميع شروط القبول والمعدلات الدنيا للقبول وصيغ الوثائق المعتمدة للمراجعة الدورية، وقد يطرأ عليها تعديل بموجب القرارات الناظمة الصادرة عن وزارة التعليم العالي والبحث العلمي السورية. ويُنصح المتقدمون بشدة بالاطلاع على لوائح الجامعة الرسمية المستجدة أو التواصل المباشر مع مديرية القبول والتسجيل للحصول على أدق المعلومات قبل التقديم. وتحتفظ الجامعة بالحق في طلب مستندات إضافية عند الحاجة للتحقق من أهلية المتقدم.'
    }
};
