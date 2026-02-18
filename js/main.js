(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    const translations = {
        en: {
            brand: "Modern Business",

            nav_home: "Home",
            nav_about: "About",
            nav_services: "Services",
            nav_pages: "Pages",
            nav_projects: "Projects",
            nav_features: "Features",
            nav_team: "Our Team",
            nav_testimonial: "Testimonial",
            nav_blogs: "Blogs",
            nav_contact: "Contact",
            nav_quote: "Get A Quote",

            follow: "Follow Us:",
            call: "Call Us:",
            c1_small: "Trusted Construction Experts in Saudi Arabia",
            c1_title: "Leading Building Construction & Finishing Company in the Kingdom of Saudi Arabia",
            c1_btn: "Explore Our Services",

            c2_small: "Quality • Commitment • Professional Execution",
            c2_title: "Delivering Residential and Commercial Projects with Excellence and Precision",
            c2_btn: "Explore Our Projects",

            c3_small: "Advanced Infrastructure Solutions",
            c3_title: "Executing Roads, Utilities & Large-Scale Infrastructure Projects with Precision and Reliability",
            c3_btn: "View Infrastructure Projects",

            c4_small: "Premium Interior Finishing Services",
            c4_title: "Transforming Spaces with Modern Designs, High-End Materials & Expert Craftsmanship",
            c4_btn: "Discover Our Finishing Works",

            c5_small: "Residential Construction Excellence",
            c5_title: "Building Comfortable, Modern Homes Designed for Quality Living and Long-Term Value",
            c5_btn: "Explore Residential Projects",

            c6_small: "Commercial & Industrial Development",
            c6_title: "Delivering High-Performance Commercial and Industrial Facilities Built to International Standards",
            c6_btn: "Start Your Project Today",
            about_small: "About Us",
            about_title: "Leading Construction & Finishing Company in Saudi Arabia",
            about_desc: "We are a professional construction company based in the Kingdom of Saudi Arabia, specializing in building construction, civil works, and high-quality interior and exterior finishing. With extensive experience in residential, commercial, and industrial projects, we deliver reliable, cost-effective, and timely solutions tailored to our clients’ needs.",

            years_of: "Years of",
            experience: "Experience",

            service_1: "Residential & Commercial Building Construction",
            service_2: "Concrete & Structural Works",
            service_3: "Interior & Exterior Finishing",
            service_4: "Renovation & Remodeling",
            service_5: "Project Management & Site Supervision",

            email_us: "Email us",
            call_us: "Call us",
            fact_1: "Years Experience",
            fact_2: "Team Members",
            fact_3: "Happy Clients",
            fact_4: "Projects Done",
            why_choose: "Why Choose Us",
            why_title: "Why Clients Trust Our Construction & Finishing Services",
            why_desc: "We are committed to delivering high-quality construction and finishing solutions across the Kingdom of Saudi Arabia. Our team combines technical expertise, modern equipment, and strict safety standards to ensure every project is completed on time and within budget.",

            feature_1_title: "Skilled & Experienced Team",
            feature_1_desc: "Our engineers, supervisors, and technicians have extensive experience in residential, commercial, and industrial construction projects.",

            feature_2_title: "High-Quality Materials & Finishing",
            feature_2_desc: "We use premium materials and advanced construction methods to deliver durable structures and high-end interior and exterior finishes.",

            feature_3_title: "On-Time Project Delivery",
            feature_3_desc: "We follow strict project management standards to ensure timely delivery while maintaining safety, quality, and cost efficiency.",
            services_small: "Our Services",
            services_title: "Comprehensive Construction & Finishing Solutions",

            srv_1_title: "Building Construction",
            srv_1_desc: "We specialize in residential, commercial, and industrial building construction, delivering high-quality structural works in compliance with Saudi building standards.",

            srv_2_title: "Interior & Exterior Finishing",
            srv_2_desc: "Professional finishing services including plastering, painting, flooring, gypsum works, facades, and complete turnkey finishing solutions.",

            srv_3_title: "Renovation & Project Management",
            srv_3_desc: "We provide renovation, remodeling, and full project management services, ensuring efficient planning, supervision, and on-time project delivery.",

            read_more: "Read More",
            projects_small: "Our Projects",
            projects_title: "Explore Our Recently Completed Projects",

            project_1: "Luxury Residential Villa Construction",
            project_2: "Commercial Building Project",
            project_3: "Full Interior Finishing Works",
            project_4: "Office Fit-Out & Renovation",
            project_5: "Concrete & Structural Works",
            project_6: "Exterior Facade & Finishing Project",
            team_small: "Our Team",
            team_title: "Dedicated Team Members",

            team_role_1: "Operations Manager",
            team_role_2: "Admin. Manager",
            team_role_3: "H.R Manager",
            team_name:   "Mr / Ahmad Khataam",
            testimonials_small: "Testimonials",
            testimonials_title: "What Our Clients Say",

            testi_1_desc: "The company delivered our residential villa project with outstanding quality and professionalism. The work was completed on time and exceeded our expectations in both construction and finishing.",
            testi_1_role: "Property Owner – Riyadh",

            testi_2_desc: "Their team demonstrated excellent project management skills and strict adherence to safety and quality standards. We highly recommend them for commercial construction and interior finishing projects.",
            testi_2_role: "Business Owner – Jeddah",

            testi_3_desc: "From structural works to final finishing, the execution was flawless. The attention to detail and commitment to delivering on schedule truly set them apart in the Saudi construction market.",
            testi_3_role: "Project Consultant – Dammam",
            testi_1_name: "Mohammed Al-Harbi",
            testi_2_name: "Abdullah Al-Qahtani",
            testi_3_name: "Faisal Al-Nouri",
            footer_address: "Othman Ibn Afaan Street, Al-Rabawa Dist, Yanbu",

            footer_quick: "Quick Links",
            footer_hours: "Business Hours",
            footer_days: "Saturday - Thursday",
            footer_time: "08:00 am - 04:00 pm",
            footer_friday: "Friday",
            footer_closed: "Closed",

            footer_help: "Need Assistance?",
            footer_help_desc: "We do not offer account registration at the moment. If you face any issues or have inquiries regarding our services, please feel free to contact us and our team will be happy to assist you.",

            footer_copy: "Copyright ©",
            footer_rights: "All Rights Reserved.",
            footer_design: "Designed By",
            nav_home: "Home",
            nav_pages: "Pages",

            error_title: "404 Error",
            error_page_not_found: "Page Not Found",

            error_description: "We’re sorry, the page you are looking for does not exist on our website. Please return to the home page.",

            error_back_home: "Go Back To Home",
            nav_home: "Home",
            nav_pages: "Pages",

            about_page_title: "About Us",
            nav_home: "Home",
            nav_blogs: "Blogs",
            blog_details: "Blog Details",

            blog_title_1: "Modern Villa Construction Trends in Saudi Arabia",

            blog_date_1: "Jan 10, 2026",
            blog_author: "Admin",

            blog_intro_1: "The construction sector in Saudi Arabia is experiencing rapid transformation, especially in luxury residential projects.",

            blog_paragraph_1: "Modern villas now incorporate sustainable materials, advanced insulation systems, and smart home technologies that improve efficiency and comfort. Clients are increasingly demanding high-quality finishes and contemporary designs.",

            blog_section_1_title: "Smart Home Systems",
            blog_section_1_text: "Integration of lighting automation, surveillance systems, and energy-efficient climate control has become a standard requirement.",

            blog_section_2_title: "Sustainable Construction Materials",
            blog_section_2_text: "Developers are using eco-friendly materials that reduce long-term operational costs while meeting Saudi building regulations.",

            blog_section_3_title: "Open Architectural Concepts",
            blog_section_3_text: "Spacious interiors, natural lighting, and open layouts enhance the aesthetic and practical value of residential properties.",

            blog_quote_1: "High-quality construction is not only about structure — it's about durability, design, and long-term value.",

            blog_conclusion_1: "As Vision 2030 continues to drive urban development, construction companies must adopt innovative solutions to stay competitive in the evolving Saudi market.", 
            blogs_page_title: "Construction Blogs",

            nav_home: "Home",
            nav_pages: "Pages",
            nav_blogs: "Blogs",

            blogs_section_subtitle: "Our Construction Blogs",
            blogs_section_title: "Latest Construction Insights & News",

            blog1_date: "Jan 10, 2026",
            blog1_title: "Modern Villa Construction Trends in Saudi Arabia",
            blog1_desc: "Discover the latest architectural styles and construction methods shaping luxury villas across the Kingdom.",

            blog2_date: "Jan 05, 2026",
            blog2_title: "Why Quality Finishing Matters in Commercial Projects",
            blog2_desc: "Learn how premium finishing enhances durability, brand image, and long-term value.",

            blog3_date: "Dec 28, 2025",
            blog3_title: "Project Management Tips for Construction Success",
            blog3_desc: "Effective planning, supervision, and scheduling strategies for large-scale projects.",

            read_more: "Read More →",
            contact_page_title: "Contact",

            nav_home: "Home",
            nav_pages: "Pages",
            nav_contact: "Contact",

            contact_call_title: "Call Our Team",
            contact_call_btn: "Call Now →",

            contact_email_title: "Email Us",
            contact_email_btn: "Send Email →",

            contact_location_title: "Our Company",
            contact_location_btn: "View Location →",
            contact_address: "Othman Ibn Afaan Street, Al-Rabawa Dist, Yanbu",

            contact_form_title: "Request a Construction Consultation",
            contact_form_desc: "We specialize in construction, contracting, and interior finishing works. Contact us today to discuss your project requirements.",

            contact_placeholder_name: "Your Name",
            contact_placeholder_email: "Your Email",
            contact_placeholder_subject: "Project Type",
            contact_placeholder_message: "Project Details",

            contact_submit_btn: "Send Request", 
            features_page_title: "Features",

            nav_home: "Home",
            nav_pages: "Pages",
            nav_features: "Features",
            projects_page_title: "Projects",
            nav_home: "Home",
            nav_projects: "Projects",
            nav_project_details: "Project Details",
            project_type: "Luxury Residential Villa",
            project_overview_title: "Project Overview",
            project_desc_1: "This luxury residential villa was constructed using premium materials and advanced engineering techniques. The project included structural works, finishing, smart systems integration, and exterior landscaping.",
            project_desc_2: "Our team ensured high-quality execution while maintaining strict deadlines and safety standards. The villa features modern architectural concepts, energy-efficient systems, and elegant finishing.",
            scope_title: "Scope of Work",
            scope_1: "Structural Concrete Works",
            scope_2: "Full Interior Finishing",
            scope_3: "Smart Home Systems",
            scope_4: "Exterior Facade & Landscaping",
            project_info_title: "Project Information",
            client_label: "Client:",
            client_value: "Private Owner",
            location_label: "Location:",
            location_value: "Yanbu, KSA",
            category_label: "Category:",
            category_value: "Residential Construction",
            duration_label: "Duration:",
            duration_value: "8 Months",
            status_label: "Status:",
            status_value: "Completed",
            gallery_title: "Project Gallery",
            gallery_1: "Luxury Residential Villa",
            gallery_2: "Commercial Building Project",
            gallery_3: "Interior Finishing Works",
            gallery_4: "Office Fit-Out & Renovation",
            gallery_5: "Concrete & Structural Works",
            gallery_6: "Exterior Facade & Finishing",
            contact_page_title: "Contact",
            nav_home: "Home",
            nav_pages: "Pages",
            nav_contact: "Contact",

            contact_call_title: "Call Our Team",
            contact_call_btn: "Call Now",

            contact_email_title: "Email Us",
            contact_email_btn: "Send Email",

            contact_company_title: "Our Company",
            contact_address: "Othman Ibn Afaan Street,\nAl-Rabawa Dist, Yanbu",
            contact_location_btn: "View Location",

            contact_form_title: "Request a Construction Consultation",
            contact_form_desc: "We specialize in construction, contracting, and interior finishing works. Contact us today to discuss your project requirements.",

            placeholder_name: "Your Name",
            placeholder_email: "Your Email",
            placeholder_subject: "Project Type",
            placeholder_message: "Project Details",

            contact_submit_btn: "Send Request",   
            enter_name: "Please enter your name",
            enter_email: "Please enter your email",
            invalid_email: "Invalid email format",
            enter_subject: "Please enter project type",
            enter_message: "Please enter project details",

            success_title: "Success",
            error_title: "Error",
            oops_title: "Oops...",
            general_error: "Something went wrong. Please try again.",
            placeholder_name: "Your Name",
            placeholder_email: "Your Email",
            placeholder_subject: "Project Type",
            placeholder_message: "Project Details",
            project_desc_1_short: "High-end residential villa built with premium materials and modern architectural standards.",
            project_desc_2_short: "Complete structural and finishing works for a multi-story commercial building.",
            project_desc_3_short: "Premium interior finishing including gypsum, flooring, lighting, and paint solutions.",
            project_desc_4_short: "Modern office renovation with customized layouts and high-quality finishing standards.",
            project_desc_5_short: "Reinforced concrete and structural framework construction for large-scale developments.",
            project_desc_6_short: "Advanced exterior facade solutions with weather-resistant and aesthetic materials.",
            services_page_title: "Services",
            team_page_title: "Our Team",
            testimonial_page_title: "Testimonials",



        },

        ar: {
            brand: "مودرن بيزنس",

            nav_home: "الرئيسية",
            nav_about: "من نحن",
            nav_services: "خدماتنا",
            nav_pages: "الصفحات",
            nav_projects: "المشاريع",
            nav_features: "المميزات",
            nav_team: "فريق العمل",
            nav_testimonial: "آراء العملاء",
            nav_blogs: "المدونة",
            nav_contact: "اتصل بنا",
            nav_quote: "اطلب عرض سعر",

            follow: "تابعنا:",
            call: "اتصل بنا:",
            c1_small: "خبراء البناء الموثوقون في المملكة العربية السعودية",
            c1_title: "شركة رائدة في أعمال البناء والتشطيبات في المملكة العربية السعودية",
            c1_btn: "اكتشف خدماتنا",

            c2_small: "الجودة • الالتزام • التنفيذ الاحترافي",
            c2_title: "تنفيذ المشاريع السكنية والتجارية بأعلى معايير الدقة والتميز",
            c2_btn: "استعرض مشاريعنا",

            c3_small: "حلول متقدمة للبنية التحتية",
            c3_title: "تنفيذ الطرق والمرافق ومشاريع البنية التحتية الكبرى بدقة واحترافية",
            c3_btn: "عرض مشاريع البنية التحتية",

            c4_small: "خدمات تشطيبات داخلية فاخرة",
            c4_title: "تحويل المساحات بتصاميم عصرية ومواد عالية الجودة وحرفية متقنة",
            c4_btn: "اكتشف أعمال التشطيبات",

            c5_small: "التميز في البناء السكني",
            c5_title: "بناء منازل عصرية ومريحة مصممة لجودة الحياة والقيمة طويلة المدى",
            c5_btn: "استعرض المشاريع السكنية",

            c6_small: "تطوير المشاريع التجارية والصناعية",
            c6_title: "تنفيذ منشآت تجارية وصناعية عالية الأداء وفق المعايير الدولية",
            c6_btn: "ابدأ مشروعك اليوم",
            about_small: "من نحن",
            about_title: "شركة رائدة في مجال البناء والتشطيبات في المملكة العربية السعودية",
            about_desc: "نحن شركة مقاولات متخصصة في المملكة العربية السعودية، نقدم خدمات البناء والأعمال المدنية والتشطيبات الداخلية والخارجية بأعلى معايير الجودة. نمتلك خبرة واسعة في المشاريع السكنية والتجارية والصناعية ونوفر حلولاً موثوقة واقتصادية يتم تنفيذها في الوقت المحدد وفقاً لاحتياجات عملائنا.",

            years_of: "سنة من",
            experience: "الخبرة",

            service_1: "تنفيذ المباني السكنية والتجارية",
            service_2: "أعمال الخرسانة والهيكل الإنشائي",
            service_3: "التشطيبات الداخلية والخارجية",
            service_4: "أعمال الترميم وإعادة التأهيل",
            service_5: "إدارة المشاريع والإشراف على المواقع",

            email_us: "راسلنا",
            call_us: "اتصل بنا",
            fact_1: "سنوات الخبرة",
            fact_2: "أعضاء الفريق",
            fact_3: "عملاء سعداء",
            fact_4: "مشاريع مكتملة",
            why_choose: "لماذا تختارنا",
            why_title: "لماذا يثق العملاء في خدمات البناء والتشطيبات لدينا",
            why_desc: "نلتزم بتقديم حلول بناء وتشطيبات عالية الجودة في جميع أنحاء المملكة العربية السعودية. يجمع فريقنا بين الخبرة الفنية والمعدات الحديثة ومعايير السلامة الصارمة لضمان تنفيذ كل مشروع في الوقت المحدد وضمن الميزانية المحددة.",

            feature_1_title: "فريق عمل محترف وذو خبرة",
            feature_1_desc: "يتمتع مهندسونا ومشرفونا وفنيونا بخبرة واسعة في مشاريع البناء السكنية والتجارية والصناعية.",

            feature_2_title: "مواد عالية الجودة وتشطيبات متميزة",
            feature_2_desc: "نستخدم مواد ممتازة وأساليب بناء متقدمة لضمان هياكل متينة وتشطيبات داخلية وخارجية راقية.",

            feature_3_title: "تسليم المشاريع في الوقت المحدد",
            feature_3_desc: "نتبع معايير صارمة لإدارة المشاريع لضمان التسليم في الوقت المحدد مع الحفاظ على أعلى معايير الجودة والسلامة والكفاءة في التكاليف.",
            services_small: "خدماتنا",
            services_title: "حلول متكاملة للبناء والتشطيبات",

            srv_1_title: "أعمال البناء والتشييد",
            srv_1_desc: "نتخصص في تنفيذ مشاريع البناء السكنية والتجارية والصناعية، مع تقديم أعمال إنشائية عالية الجودة وفق معايير البناء المعتمدة في المملكة العربية السعودية.",

            srv_2_title: "التشطيبات الداخلية والخارجية",
            srv_2_desc: "نقدم خدمات تشطيب احترافية تشمل اللياسة، الدهانات، الأرضيات، أعمال الجبس، الواجهات، وحلول التشطيب المتكاملة تسليم مفتاح.",

            srv_3_title: "الترميم وإدارة المشاريع",
            srv_3_desc: "نوفر خدمات الترميم والتطوير وإدارة المشاريع بالكامل، مع ضمان التخطيط الفعال والإشراف الدقيق وتسليم المشاريع في الوقت المحدد.",

            read_more: "اقرأ المزيد",
            projects_small: "مشاريعنا",
            projects_title: "استكشف أحدث مشاريعنا المنفذة",

            project_1: "إنشاء فيلا سكنية فاخرة",
            project_2: "مشروع مبنى تجاري",
            project_3: "أعمال تشطيبات داخلية متكاملة",
            project_4: "تجهيز مكاتب وأعمال ترميم",
            project_5: "أعمال الخرسانة والهيكل الإنشائي",
            project_6: "مشروع واجهات وتشطيبات خارجية",
            team_small: "فريق العمل",
            team_title: "أعضاء الفريق المتخصصون",

            team_role_1: "مدير العمليات",
            team_role_2: "مدير الشؤون الإدارية",
            team_role_3: "مدير الموارد البشرية",
            team_name:   "أ / أحمد ختم",
            testimonials_small: "آراء العملاء",
            testimonials_title: "ماذا يقول عملاؤنا",

            testi_1_desc: "قامت الشركة بتنفيذ مشروع الفيلا السكنية الخاصة بنا بجودة واحترافية عالية. تم إنجاز العمل في الوقت المحدد وتجاوز توقعاتنا في أعمال البناء والتشطيبات.",
            testi_1_role: "مالك عقار – الرياض",

            testi_2_desc: "أظهر فريق العمل مهارات متميزة في إدارة المشاريع والالتزام الصارم بمعايير السلامة والجودة. نوصي بهم بشدة لمشاريع البناء التجارية وأعمال التشطيبات الداخلية.",
            testi_2_role: "رجل أعمال – جدة",

            testi_3_desc: "من الأعمال الإنشائية حتى التشطيبات النهائية، كان التنفيذ متقناً بكل تفاصيله. الالتزام بالمواعيد والدقة في العمل يميزهم في سوق البناء السعودي.",
            testi_3_role: "استشاري مشاريع – الدمام",
            testi_1_name: "محمد الحربي",
            testi_2_name: "عبدالله القحطاني",
            testi_3_name: "فيصل النوري",
            footer_address: "شارع عثمان بن عفان، حي الربوة، ينبع",

            footer_quick: "روابط سريعة",
            footer_hours: "ساعات العمل",
            footer_days: "السبت - الخميس",
            footer_time: "08:00 صباحاً - 04:00 مساءً",
            footer_friday: "الجمعة",
            footer_closed: "مغلق",

            footer_help: "هل تحتاج مساعدة؟",
            footer_help_desc: "لا نوفر حالياً نظام تسجيل حسابات. إذا واجهت أي مشكلة أو كان لديك استفسار بخصوص خدماتنا، لا تتردد في التواصل معنا وسيسعد فريقنا بمساعدتك.",

            footer_copy: "جميع الحقوق محفوظة ©",
            footer_rights: "",
            footer_design: "تصميم وتنفيذ",
            nav_home: "الرئيسية",
            nav_pages: "الصفحات",

            error_title: "خطأ 404",
            error_page_not_found: "الصفحة غير موجودة",

            error_description: "عذراً، الصفحة التي تبحث عنها غير موجودة على موقعنا. يمكنك العودة إلى الصفحة الرئيسية.",

            error_back_home: "العودة إلى الرئيسية",
            nav_home: "الرئيسية",
            nav_pages: "الصفحات",

            about_page_title: "من نحن",
            nav_home: "الرئيسية",
            nav_blogs: "المدونة",
            blog_details: "تفاصيل المقال",

            blog_title_1: "أحدث اتجاهات بناء الفلل الحديثة في المملكة العربية السعودية",

            blog_date_1: "10 يناير 2026",
            blog_author: "الإدارة",

            blog_intro_1: "يشهد قطاع البناء في المملكة العربية السعودية تحولاً سريعاً، خاصة في مشاريع الإسكان الفاخر.",

            blog_paragraph_1: "أصبحت الفلل الحديثة تعتمد على مواد مستدامة، وأنظمة عزل متقدمة، وتقنيات المنازل الذكية التي تعزز الكفاءة والراحة. كما يزداد طلب العملاء على التشطيبات عالية الجودة والتصاميم العصرية.",

            blog_section_1_title: "أنظمة المنازل الذكية",
            blog_section_1_text: "أصبح دمج أنظمة التحكم في الإضاءة، وأنظمة المراقبة، وأنظمة التكييف الموفرة للطاقة مطلباً أساسياً في المشاريع الحديثة.",

            blog_section_2_title: "مواد البناء المستدامة",
            blog_section_2_text: "يتجه المطورون لاستخدام مواد صديقة للبيئة تقلل من تكاليف التشغيل على المدى الطويل مع الالتزام بأنظمة البناء في المملكة.",

            blog_section_3_title: "التصاميم المعمارية المفتوحة",
            blog_section_3_text: "توفر المساحات الواسعة والإضاءة الطبيعية والمخططات المفتوحة قيمة جمالية وعملية أكبر للعقارات السكنية.",

            blog_quote_1: "الجودة في البناء لا تتعلق بالهيكل فقط — بل بالمتانة والتصميم والقيمة طويلة المدى.",

            blog_conclusion_1: "مع استمرار رؤية 2030 في دفع عجلة التنمية العمرانية، يجب على شركات البناء تبني حلول مبتكرة للحفاظ على قدرتها التنافسية في السوق السعودي المتطور.",
            blogs_page_title: "مدونة البناء",

            nav_home: "الرئيسية",
            nav_pages: "الصفحات",
            nav_blogs: "المدونة",

            blogs_section_subtitle: "مدونة أعمالنا في قطاع البناء",
            blogs_section_title: "أحدث أخبار ورؤى قطاع البناء",

            blog1_date: "10 يناير 2026",
            blog1_title: "أحدث اتجاهات بناء الفلل الحديثة في المملكة العربية السعودية",
            blog1_desc: "اكتشف أحدث الأساليب المعمارية وطرق البناء التي تشكل الفلل الفاخرة في المملكة.",

            blog2_date: "05 يناير 2026",
            blog2_title: "لماذا تعتبر جودة التشطيب مهمة في المشاريع التجارية",
            blog2_desc: "تعرف على كيف تعزز التشطيبات عالية الجودة المتانة وصورة العلامة التجارية والقيمة طويلة المدى.",

            blog3_date: "28 ديسمبر 2025",
            blog3_title: "نصائح لإدارة المشاريع لتحقيق نجاح في قطاع البناء",
            blog3_desc: "استراتيجيات فعالة للتخطيط والإشراف والجدولة في المشاريع الكبيرة.",

            read_more: "اقرأ المزيد ←",
            contact_page_title: "اتصل بنا",

            nav_home: "الرئيسية",
            nav_pages: "الصفحات",
            nav_contact: "اتصل بنا",

            contact_call_title: "اتصل بفريقنا",
            contact_call_btn: "اتصل الآن ←",

            contact_email_title: "راسلنا عبر البريد",
            contact_email_btn: "إرسال بريد ←",

            contact_location_title: "مقر الشركة",
            contact_location_btn: "عرض الموقع ←",
            contact_address: "شارع عثمان بن عفان، حي الربوة، ينبع",

            contact_form_title: "طلب استشارة في مجال البناء",
            contact_form_desc: "نحن متخصصون في أعمال البناء والمقاولات والتشطيبات الداخلية. تواصل معنا اليوم لمناقشة متطلبات مشروعك.",

            contact_placeholder_name: "الاسم الكامل",
            contact_placeholder_email: "البريد الإلكتروني",
            contact_placeholder_subject: "نوع المشروع",
            contact_placeholder_message: "تفاصيل المشروع",

            contact_submit_btn: "إرسال الطلب",
            features_page_title: "مميزاتنا",

            nav_home: "الرئيسية",
            nav_pages: "الصفحات",
            nav_features: "المميزات",
            projects_page_title: "المشاريع",
            nav_home: "الرئيسية",
            nav_projects: "المشاريع",
            nav_project_details: "تفاصيل المشروع",
            project_type: "فيلا سكنية فاخرة",
            project_overview_title: "نظرة عامة على المشروع",
            project_desc_1: "تم تنفيذ هذه الفيلا السكنية الفاخرة باستخدام مواد عالية الجودة وتقنيات هندسية متقدمة. شمل المشروع الأعمال الإنشائية، التشطيبات، أنظمة المنزل الذكي، وتنسيق الموقع الخارجي.",
            project_desc_2: "حرص فريقنا على تنفيذ العمل بأعلى جودة مع الالتزام بالمواعيد النهائية ومعايير السلامة. تتميز الفيلا بتصميم معماري حديث وأنظمة موفرة للطاقة وتشطيبات أنيقة.",
            scope_title: "نطاق العمل",
            scope_1: "أعمال الخرسانة الإنشائية",
            scope_2: "التشطيبات الداخلية الكاملة",
            scope_3: "أنظمة المنزل الذكي",
            scope_4: "الواجهات الخارجية وتنسيق الموقع",
            project_info_title: "معلومات المشروع",
            client_label: "العميل:",
            client_value: "مالك خاص",
            location_label: "الموقع:",
            location_value: "ينبع، المملكة العربية السعودية",
            category_label: "التصنيف:",
            category_value: "إنشاءات سكنية",
            duration_label: "المدة:",
            duration_value: "8 أشهر",
            status_label: "الحالة:",
            status_value: "مكتمل",
            gallery_title: "معرض المشروع",
            gallery_1: "فيلا سكنية فاخرة",
            gallery_2: "مشروع مبنى تجاري",
            gallery_3: "أعمال التشطيبات الداخلية",
            gallery_4: "تجهيز وتجديد المكاتب",
            gallery_5: "أعمال الخرسانة والإنشاءات",
            gallery_6: "الواجهات الخارجية والتشطيبات",
            contact_page_title: "اتصل بنا",
            nav_home: "الرئيسية",
            nav_pages: "الصفحات",
            nav_contact: "اتصل بنا",

            contact_call_title: "اتصل بفريقنا",
            contact_call_btn: "اتصل الآن",

            contact_email_title: "راسلنا",
            contact_email_btn: "إرسال بريد",

            contact_company_title: "شركتنا",
            contact_address: "شارع عثمان بن عفان،\nحي الربوة، ينبع",
            contact_location_btn: "عرض الموقع",

            contact_form_title: "طلب استشارة مقاولات",
            contact_form_desc: "نحن متخصصون في أعمال البناء والمقاولات والتشطيبات الداخلية. تواصل معنا اليوم لمناقشة متطلبات مشروعك.",

            placeholder_name: "اسمك",
            placeholder_email: "بريدك الإلكتروني",
            placeholder_subject: "نوع المشروع",
            placeholder_message: "تفاصيل المشروع",

            contact_submit_btn: "إرسال الطلب",
            enter_name: "من فضلك أدخل اسمك",
            enter_email: "من فضلك أدخل بريدك الإلكتروني",
            invalid_email: "صيغة البريد الإلكتروني غير صحيحة",
            enter_subject: "من فضلك أدخل نوع المشروع",
            enter_message: "من فضلك أدخل تفاصيل المشروع",

            success_title: "تم بنجاح",
            error_title: "خطأ",
            oops_title: "حدث خطأ",
            general_error: "حدث خطأ ما، حاول مرة أخرى.",
            placeholder_name: "الاسم الكامل",
            placeholder_email: "البريد الإلكتروني",
            placeholder_subject: "نوع المشروع",
            placeholder_message: "تفاصيل المشروع",
            project_desc_1_short: "فيلا سكنية فاخرة تم تنفيذها بمواد عالية الجودة ومعايير معمارية حديثة.",
            project_desc_2_short: "تنفيذ كامل للأعمال الإنشائية والتشطيبات لمبنى تجاري متعدد الطوابق.",
            project_desc_3_short: "تشطيبات داخلية متكاملة تشمل الجبس والأرضيات والإضاءة وأعمال الدهانات.",
            project_desc_4_short: "تجديد مكاتب عصرية بتصاميم مخصصة وتشطيبات عالية الجودة.",
            project_desc_5_short: "أعمال خرسانة مسلحة وهياكل إنشائية لمشاريع تطوير كبيرة.",
            project_desc_6_short: "حلول واجهات خارجية متقدمة بمواد مقاومة للعوامل الجوية وذات طابع جمالي.",
            services_page_title: "خدماتنا",
            team_page_title: "فريق العمل",
            testimonial_page_title: "آراء العملاء",


        }
    };

    window.setLang = function(lang) {

        const elements = document.querySelectorAll("[data-lang]");

        elements.forEach(el => {
            el.classList.add("lang-transition");
        });

        setTimeout(() => {
            elements.forEach(el => {
                const key = el.getAttribute("data-lang");
                el.textContent = translations[lang][key];
                el.classList.remove("lang-transition");
                el.classList.add("lang-show");
            });
        }, 150);

        document.querySelectorAll("[data-lang-placeholder]").forEach(el => {
            const key = el.getAttribute("data-lang-placeholder");
            el.setAttribute("placeholder", translations[lang][key]);
        });

        if(lang === "ar"){
            document.documentElement.dir = "rtl";
            document.documentElement.lang = "ar";
        } else {
            document.documentElement.dir = "ltr";
            document.documentElement.lang = "en";
        }

        document.getElementById("btn-en").classList.remove("active-lang");
        document.getElementById("btn-ar").classList.remove("active-lang");
        document.getElementById("btn-" + lang).classList.add("active-lang");

        localStorage.setItem("siteLang", lang);
    };

    $(document).ready(function(){
        const savedLang = localStorage.getItem("siteLang") || "en";
        window.setLang(savedLang);
    });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);

