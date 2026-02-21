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

            contact_company_title: "Our Establishment",
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
            video_title: "One of Our Key Projects – Al Haditha Private Schools",
            commercial_project_type: "Multi-Story Commercial Complex",
            commercial_overview_title: "Project Overview",

            commercial_desc_1: "This commercial building project involved the construction of a modern multi-story complex designed for offices, retail outlets, and business facilities. The structure was engineered to meet high-capacity operational standards and commercial safety regulations.",

            commercial_desc_2: "Our team managed the complete execution process including structural framework, MEP systems, fire safety solutions, elevator systems, and high-end commercial interior finishing while ensuring strict quality control and on-time delivery.",

            commercial_scope_title: "Scope of Execution",

            commercial_scope_1: "Reinforced Concrete Structural Frame",
            commercial_scope_2: "Complete Mechanical, Electrical & Plumbing Systems",
            commercial_scope_3: "Commercial Interior Fit-Out & Finishing",
            commercial_scope_4: "Fire Protection & Elevator Installation",

            commercial_info_title: "Project Specifications",

            commercial_client_label: "Client:",
            commercial_client_value: "Private Investment Group",

            commercial_location_label: "Location:",
            commercial_location_value: "Jeddah, Saudi Arabia",

            commercial_category_label: "Project Type:",
            commercial_category_value: "Commercial Development",

            commercial_duration_label: "Execution Period:",
            commercial_duration_value: "14 Months",

            commercial_status_label: "Current Status:",
            commercial_status_value: "Completed Successfully",

            interior_project_type: "High-End Interior Finishing Project",

            interior_overview_title: "Project Overview",

            interior_desc_1: "This project involved complete interior finishing works for a luxury residential property, including decorative gypsum ceilings, premium flooring installation, advanced lighting systems, and custom wall treatments.",

            interior_desc_2: "Our team focused on delivering precision craftsmanship, high-quality materials, and elegant design solutions to create a refined and modern interior environment tailored to the client’s vision.",

            interior_scope_title: "Scope of Work",

            interior_scope_1: "Gypsum Ceiling & Decorative Designs",
            interior_scope_2: "Premium Marble & Porcelain Flooring",
            interior_scope_3: "Modern Lighting & Electrical Fixtures",
            interior_scope_4: "Luxury Paint & Wall Finishing Solutions",

            interior_info_title: "Project Information",

            interior_client_label: "Client:",
            interior_client_value: "Private Residential Owner",

            interior_location_label: "Location:",
            interior_location_value: "Riyadh, Saudi Arabia",

            interior_category_label: "Category:",
            interior_category_value: "Interior Finishing Works",

            interior_duration_label: "Duration:",
            interior_duration_value: "6 Months",

            interior_status_label: "Status:",
            interior_status_value: "Completed Successfully",

            officefit_type_en: "Corporate Office Fit-Out & Renovation",
            officefit_overview_en: "Project Overview",

            officefit_desc1_en: "This office fit-out project involved transforming an existing workspace into a modern, functional, and visually appealing corporate environment, with a focus on maximizing space efficiency and improving workflow productivity.",

            officefit_desc2_en: "Our team delivered high-quality finishing works, custom partitions, upgraded lighting systems, and ergonomic layout planning to ensure a professional and productive work atmosphere.",

            officefit_scope_title_en: "Scope of Work",

            officefit_scope1_en: "Customized Office Layout Planning",
            officefit_scope2_en: "Gypsum & Partition Installation",
            officefit_scope3_en: "Flooring, Ceiling & Lighting Systems",
            officefit_scope4_en: "Painting & Final Finishing Works",

            officefit_info_title_en: "Project Details",

            officefit_client_label_en: "Client:",
            officefit_client_value_en: "Corporate Business Company",

            officefit_location_label_en: "Location:",
            officefit_location_value_en: "Riyadh, Saudi Arabia",

            officefit_category_label_en: "Category:",
            officefit_category_value_en: "Commercial Office Renovation",

            officefit_duration_label_en: "Execution Period:",
            officefit_duration_value_en: "6 Months",

            officefit_status_label_en: "Current Status:",
            officefit_status_value_en: "Completed Successfully",

            structproj_type_title: "Reinforced Concrete & Structural Framework",

            structproj_overview_title: "Project Overview",

            structproj_paragraph_one: "This project involved executing comprehensive reinforced concrete and structural framework works for a large-scale development. The construction adhered to international engineering standards ensuring durability, strength, and long-term performance.",

            structproj_paragraph_two: "Our engineering team managed all structural phases including excavation, foundation casting, column and slab construction, and strict structural safety compliance with precision and efficiency.",

            structproj_scope_header: "Scope of Execution",

            structproj_scope_item1: "Site Preparation & Excavation Works",
            structproj_scope_item2: "Reinforced Concrete Foundations",
            structproj_scope_item3: "Columns, Beams & Slab Construction",
            structproj_scope_item4: "Structural Quality Control & Testing",

            structproj_details_title: "Project Specifications",

            structproj_client_label: "Client:",
            structproj_client_value: "Real Estate Development Company",

            structproj_location_label: "Location:",
            structproj_location_value: "Dammam, Saudi Arabia",

            structproj_category_label: "Category:",
            structproj_category_value: "Structural Construction",

            structproj_duration_label: "Execution Period:",
            structproj_duration_value: "12 Months",

            structproj_status_label: "Current Status:",
            structproj_status_value: "Successfully Completed",

            facadeproj_type_heading: "Exterior Facade & Architectural Finishing",

            facadeproj_overview_heading: "Project Overview",

            facadeproj_text_block_one: "This project focused on delivering modern exterior facade solutions combining architectural aesthetics with high weather resistance. Advanced cladding systems and premium finishing materials were used to enhance both durability and visual appeal.",

            facadeproj_text_block_two: "Our team ensured precise installation, insulation integration, waterproofing systems, and long-term protection against harsh environmental conditions across the Kingdom.",

            facadeproj_scope_heading: "Execution Scope",

            facadeproj_scope_point_one: "Aluminum & Glass Cladding Systems",
            facadeproj_scope_point_two: "Thermal Insulation & Waterproofing",
            facadeproj_scope_point_three: "Decorative Architectural Panels",
            facadeproj_scope_point_four: "Protective Coatings & Finishing Works",

            facadeproj_info_heading: "Project Information",

            facadeproj_client_tag: "Client:",
            facadeproj_client_data: "Government Development Authority",

            facadeproj_location_tag: "Location:",
            facadeproj_location_data: "Riyadh, Saudi Arabia",

            facadeproj_category_tag: "Project Type:",
            facadeproj_category_data: "Exterior Architectural Finishing",

            facadeproj_duration_tag: "Duration:",
            facadeproj_duration_data: "9 Months",

            facadeproj_status_tag: "Project Status:",
            facadeproj_status_data: "Successfully Delivered",

            schoolproj_card_title: "Al Haditha Private Schools - Yanbu",
            schoolproj_card_desc: "Comprehensive construction and finishing works for a modern educational campus.",

            schoolproj_type_label: "Educational Campus Development",

            schoolproj_main_heading: "Project Overview",

            schoolproj_para_one:
            "Al Haditha Private Schools project in Yanbu involved the construction and finishing of a fully integrated educational campus designed to provide a modern and safe learning environment for students across multiple academic levels.",

            schoolproj_para_two:
            "The project included classrooms, administrative offices, laboratories, activity areas, and exterior playground facilities, all executed according to high-quality construction standards and educational infrastructure requirements.",

            schoolproj_scope_heading: "Scope of Work",

            schoolproj_scope_item_a: "Structural & Concrete Construction Works",
            schoolproj_scope_item_b: "Complete Interior & Exterior Finishing",
            schoolproj_scope_item_c: "Electrical, HVAC & Safety Systems Installation",
            schoolproj_scope_item_d: "Landscape & Outdoor Facilities Development",

            schoolproj_info_heading: "Project Information",

            schoolproj_client_label: "Client:",
            schoolproj_client_value: "Al Haditha Private Schools",

            schoolproj_city_label: "Location:",
            schoolproj_city_value: "Yanbu, Saudi Arabia",

            schoolproj_category_label: "Project Type:",
            schoolproj_category_value: "Educational Facility",

            schoolproj_time_label: "Execution Period:",
            schoolproj_time_value: "12 Months",

            schoolproj_state_label: "Project Status:",
            schoolproj_state_value: "Completed",
            gallery_alhaditha_school: "Al Haditha Private Schools – Yanbu",
            alhaditha_school_project_title: "Al Haditha Private Schools – Yanbu",
            crumb_alhaditha_school: "Al Haditha Private Schools – Yanbu",
            crumb_commercial_complex: "Multi-Story Commercial Complex",
            crumb_structural_framework: "Reinforced Concrete & Structural Framework",
            crumb_exterior_facade: "Exterior Facade & Architectural Finishing",
            crumb_interior_finishing: "Premium Interior Finishing",
            crumb_luxury_villa: "Luxury Residential Villa",
            crumb_office_fitout: "Corporate Office Fit-Out & Renovation",
            sblog2_date: "March 18, 2026",
            sblog2_author: "Construction Development Team",

            sblog2_intro: "Sustainable commercial construction is redefining the future of urban development in Saudi Arabia, aligning with Vision 2030 goals for environmental responsibility and economic growth.",

            sblog2_paragraph_one: "Modern commercial projects now integrate energy-efficient systems, environmentally friendly materials, and smart technologies to enhance operational performance and reduce environmental impact.",

            sblog2_heading_one: "Smart Energy Management",
            sblog2_text_one: "Advanced building management systems monitor electricity usage, optimize cooling systems, and reduce unnecessary consumption through automation and AI-driven controls.",

            sblog2_heading_two: "Sustainable Materials & Design Innovation",
            sblog2_text_two: "Low-carbon concrete, recyclable aluminum systems, and high-performance glass facades are increasingly used to achieve durability while minimizing carbon emissions.",

            sblog2_heading_three: "Economic & Environmental Benefits",
            sblog2_text_three: "Sustainable buildings reduce long-term operational costs, improve indoor air quality, and create healthier workspaces, making them attractive investments for companies and developers.",

            sblog2_quote: "The future of commercial construction lies in sustainability, innovation, and smart integration of technology.",

            sblog2_conclusion: "As Saudi Arabia continues expanding its commercial infrastructure, sustainable construction practices will remain essential in building resilient and future-ready developments.",
            ifblog_date: "February 18, 2026",
            ifblog_author: "By Engineering Team",

            ifblog_intro: "Interior finishing plays a crucial role in defining the quality, functionality, and visual identity of any construction project. Modern finishing standards combine aesthetics with durability and long-term performance.",

            ifblog_paragraph_one: "High-quality interior finishing requires precise execution, premium materials, and professional supervision. From flooring systems to ceiling installations, every detail contributes to the final outcome of the project.",

            ifblog_heading_one: "Material Selection & Quality Control",
            ifblog_text_one: "Choosing certified materials ensures durability and safety. Quality control inspections during execution help prevent defects and maintain project standards.",

            ifblog_heading_two: "Modern Design Integration",
            ifblog_text_two: "Contemporary interior finishing integrates smart lighting systems, acoustic treatments, and energy-efficient materials to create functional and comfortable environments.",

            ifblog_heading_three: "Execution Precision & Supervision",
            ifblog_text_three: "Skilled technicians and continuous engineering supervision are essential to achieving flawless finishing results and meeting strict deadlines.",

            ifblog_quote: "Premium finishing is not about appearance only — it reflects engineering precision and long-term value.",

            ifblog_conclusion: "By adhering to international finishing standards, construction companies can deliver projects that combine beauty, safety, and sustainability in one complete package.",
            crumb_modern_villa_trends: "Modern Villa Construction Trends in Saudi Arabia",
            crumb_interior_finishing_standards: "Interior Finishing Standards in Modern Construction",
            crumb_sustainable_commercial_building: "Sustainable Commercial Construction Strategies",


            portfolio_small_title: "Our Portfolio",
            portfolio_main_title: "A Legacy of Excellence in Construction & Finishing",
            portfolio_description: "Over the years, we have successfully delivered diverse construction and finishing projects across the Kingdom of Saudi Arabia, reflecting our commitment to quality, precision, and client satisfaction.",

            portfolio_item_1_title: "Educational Facilities",
            portfolio_item_1_desc: "Execution of private and public school buildings including structural works, exterior facades, and full interior finishing with modern educational standards.",

            portfolio_item_2_title: "Luxury Residential Projects",
            portfolio_item_2_desc: "Construction of premium villas and residential compounds designed with high-end architectural finishing and modern lifestyle requirements.",

            portfolio_item_3_title: "Commercial & Office Buildings",
            portfolio_item_3_desc: "Development of commercial complexes and office fit-out projects with professional project management and strict quality control.",

            portfolio_item_4_title: "Concrete & Structural Works",
            portfolio_item_4_desc: "Comprehensive reinforced concrete and structural framework projects executed according to international engineering standards.",
            portfolio_item_1_title: "Integrated Educational School Project",
            portfolio_item_1_desc: "Construction of a modern school building with distinctive architecture and fully integrated infrastructure.",

            portfolio_item_2_title: "Sports Field Construction",
            portfolio_item_2_desc: "Installation of high-quality artificial turf fields with proper drainage and lighting systems.",

            portfolio_item_3_title: "Educational Hall & Auditorium Finishing",
            portfolio_item_3_desc: "Professional finishing of lecture halls and school auditoriums with advanced lighting and sound systems.",

            portfolio_item_4_title: "Structural & Concrete Works",
            portfolio_item_4_desc: "Execution of reinforced concrete structures and foundations according to approved safety standards."




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
            team_name:   "أ / أحمد ختعم",
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

            contact_company_title: "مؤسستنا",
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
            video_title: "من أهم المشاريع مدارس الحديثة الأهلية",
            commercial_project_type: "مجمع تجاري متعدد الطوابق",

            commercial_overview_title: "نظرة عامة على المشروع",

            commercial_desc_1: "تضمن هذا المشروع تنفيذ مبنى تجاري حديث متعدد الطوابق مخصص للمكاتب والمحلات التجارية والمرافق الاستثمارية. تم تصميم الهيكل وفق أعلى المعايير التشغيلية والاشتراطات الهندسية الخاصة بالمباني التجارية.",

            commercial_desc_2: "أدار فريقنا كامل مراحل التنفيذ بدءًا من الهيكل الإنشائي وأنظمة الميكانيكا والكهرباء والسباكة، مرورًا بأنظمة مكافحة الحريق والمصاعد، وصولاً إلى أعمال التشطيبات التجارية عالية الجودة مع الالتزام التام بالجودة والجدول الزمني.",

            commercial_scope_title: "نطاق التنفيذ",

            commercial_scope_1: "تنفيذ الهيكل الخرساني المسلح",
            commercial_scope_2: "تركيب أنظمة الميكانيكا والكهرباء والسباكة بالكامل",
            commercial_scope_3: "أعمال التشطيبات الداخلية التجارية المتكاملة",
            commercial_scope_4: "أنظمة مكافحة الحريق وتركيب المصاعد",

            commercial_info_title: "مواصفات المشروع",

            commercial_client_label: "العميل:",
            commercial_client_value: "مجموعة استثمارية خاصة",

            commercial_location_label: "الموقع:",
            commercial_location_value: "جدة، المملكة العربية السعودية",

            commercial_category_label: "نوع المشروع:",
            commercial_category_value: "تطوير تجاري",

            commercial_duration_label: "مدة التنفيذ:",
            commercial_duration_value: "14 شهر",

            commercial_status_label: "حالة المشروع:",
            commercial_status_value: "مكتمل بنجاح",

            interior_project_type: "مشروع تشطيبات داخلية فاخرة",

            interior_overview_title: "نظرة عامة على المشروع",

            interior_desc_1: "تضمن هذا المشروع تنفيذ أعمال تشطيبات داخلية متكاملة لفيلا سكنية فاخرة، شملت أسقف جبسية ديكورية، تركيب أرضيات فاخرة، أنظمة إضاءة حديثة، ومعالجات جدارية مخصصة.",

            interior_desc_2: "ركز فريقنا على تقديم أعلى درجات الدقة والحرفية باستخدام مواد عالية الجودة وتصاميم أنيقة لخلق بيئة داخلية عصرية تلبي تطلعات العميل.",

            interior_scope_title: "نطاق الأعمال",

            interior_scope_1: "تنفيذ الأسقف الجبسية والتصاميم الديكورية",
            interior_scope_2: "تركيب أرضيات رخام وبورسلان فاخر",
            interior_scope_3: "أنظمة الإضاءة الحديثة والتجهيزات الكهربائية",
            interior_scope_4: "أعمال الدهانات والتشطيبات الجدارية الفاخرة",

            interior_info_title: "معلومات المشروع",

            interior_client_label: "العميل:",
            interior_client_value: "مالك سكني خاص",

            interior_location_label: "الموقع:",
            interior_location_value: "الرياض، المملكة العربية السعودية",

            interior_category_label: "التصنيف:",
            interior_category_value: "أعمال التشطيبات الداخلية",

            interior_duration_label: "مدة التنفيذ:",
            interior_duration_value: "6 أشهر",

            interior_status_label: "الحالة:",
            interior_status_value: "مكتمل بنجاح",

            officefit_type_en: "تجهيز وتجديد مكتب إداري",
            officefit_overview_en: "نظرة عامة على المشروع",

            officefit_desc1_en: "يشمل مشروع تجهيز المكتب تحويل مساحة عمل قائمة إلى بيئة مكتبية حديثة وعملية ذات طابع احترافي، مع التركيز على تحسين استغلال المساحات وكفاءة سير العمل.",

            officefit_desc2_en: "قام فريقنا بتنفيذ أعمال تشطيبات عالية الجودة، وتركيب القواطع الجبسية، وتطوير أنظمة الإضاءة، وتصميم توزيع داخلي مريح يعزز الإنتاجية ويوفر بيئة عمل احترافية.",

            officefit_scope_title_en: "نطاق الأعمال",

            officefit_scope1_en: "تصميم مخطط داخلي مخصص للمكاتب",
            officefit_scope2_en: "أعمال القواطع والجبس",
            officefit_scope3_en: "تنفيذ الأرضيات والأسقف وأنظمة الإضاءة",
            officefit_scope4_en: "أعمال الدهانات والتشطيبات النهائية",

            officefit_info_title_en: "تفاصيل المشروع",

            officefit_client_label_en: "العميل:",
            officefit_client_value_en: "شركة أعمال تجارية",

            officefit_location_label_en: "الموقع:",
            officefit_location_value_en: "الرياض، المملكة العربية السعودية",

            officefit_category_label_en: "التصنيف:",
            officefit_category_value_en: "تجديد مكاتب تجارية",

            officefit_duration_label_en: "مدة التنفيذ:",
            officefit_duration_value_en: "6 أشهر",

            officefit_status_label_en: "الحالة:",
            officefit_status_value_en: "مكتمل",

            structproj_type_title: "أعمال الخرسانة المسلحة والهيكل الإنشائي",

            structproj_overview_title: "نظرة عامة على المشروع",

            structproj_paragraph_one: "يتضمن هذا المشروع تنفيذ أعمال الخرسانة المسلحة والهيكل الإنشائي لمشروع تطوير واسع النطاق، وفق أعلى المعايير الهندسية العالمية لضمان المتانة والقوة والاستدامة طويلة المدى.",

            structproj_paragraph_two: "أدار فريقنا الهندسي جميع مراحل التنفيذ الإنشائي بما في ذلك أعمال الحفر، وصب الأساسات، وتنفيذ الأعمدة والبلاطات، مع الالتزام الكامل بمعايير السلامة والجودة.",

            structproj_scope_header: "نطاق التنفيذ",

            structproj_scope_item1: "أعمال تجهيز الموقع والحفر",
            structproj_scope_item2: "تنفيذ الأساسات الخرسانية المسلحة",
            structproj_scope_item3: "إنشاء الأعمدة والكمرات والبلاطات",
            structproj_scope_item4: "اختبارات الجودة والسلامة الإنشائية",

            structproj_details_title: "مواصفات المشروع",

            structproj_client_label: "العميل:",
            structproj_client_value: "شركة تطوير عقاري",

            structproj_location_label: "الموقع:",
            structproj_location_value: "الدمام، المملكة العربية السعودية",

            structproj_category_label: "التصنيف:",
            structproj_category_value: "إنشاءات هيكلية",

            structproj_duration_label: "مدة التنفيذ:",
            structproj_duration_value: "12 شهر",

            structproj_status_label: "الحالة الحالية:",
            structproj_status_value: "تم التسليم بنجاح",

            facadeproj_type_heading: "واجهات خارجية وتشطيبات معمارية",

            facadeproj_overview_heading: "نظرة عامة على المشروع",

            facadeproj_text_block_one: "يركز هذا المشروع على تنفيذ حلول واجهات خارجية حديثة تجمع بين الجمال المعماري والمقاومة العالية للعوامل الجوية، باستخدام أنظمة تكسية متطورة ومواد تشطيب عالية الجودة لتعزيز المتانة والمظهر الجمالي.",

            facadeproj_text_block_two: "قام فريقنا بتنفيذ أعمال التركيب بدقة عالية مع دمج أنظمة العزل الحراري ومقاومة المياه، لضمان حماية طويلة الأمد ضد الظروف المناخية القاسية في المملكة.",

            facadeproj_scope_heading: "نطاق التنفيذ",

            facadeproj_scope_point_one: "أنظمة تكسية الألمنيوم والزجاج",
            facadeproj_scope_point_two: "العزل الحراري ومقاومة المياه",
            facadeproj_scope_point_three: "ألواح وزخارف معمارية خارجية",
            facadeproj_scope_point_four: "الدهانات والطبقات الوقائية النهائية",

            facadeproj_info_heading: "معلومات المشروع",

            facadeproj_client_tag: "العميل:",
            facadeproj_client_data: "هيئة تطوير حكومية",

            facadeproj_location_tag: "الموقع:",
            facadeproj_location_data: "الرياض، المملكة العربية السعودية",

            facadeproj_category_tag: "نوع المشروع:",
            facadeproj_category_data: "تشطيبات وواجهات خارجية",

            facadeproj_duration_tag: "مدة التنفيذ:",
            facadeproj_duration_data: "9 أشهر",

            facadeproj_status_tag: "حالة المشروع:",
            facadeproj_status_data: "تم التسليم بنجاح",

            schoolproj_card_title: "مدارس الحديثة الأهلية - ينبع",
            schoolproj_card_desc: "تنفيذ أعمال الإنشاء والتشطيبات الكاملة لمجمع تعليمي حديث.",

            schoolproj_type_label: "تطوير مجمع تعليمي متكامل",

            schoolproj_main_heading: "نظرة عامة على المشروع",

            schoolproj_para_one:
            "يتضمن مشروع مدارس الحديثة الأهلية بمدينة ينبع تنفيذ أعمال إنشاء وتشطيب مجمع تعليمي متكامل مصمم لتوفير بيئة تعليمية حديثة وآمنة للطلاب بمختلف المراحل الدراسية.",

            schoolproj_para_two:
            "شمل المشروع الفصول الدراسية، المكاتب الإدارية، المعامل، مناطق الأنشطة، والملاعب الخارجية، مع تنفيذ جميع الأعمال وفق أعلى معايير الجودة ومتطلبات البنية التحتية التعليمية.",

            schoolproj_scope_heading: "نطاق الأعمال",

            schoolproj_scope_item_a: "أعمال الهيكل الخرساني والإنشائي",
            schoolproj_scope_item_b: "أعمال التشطيبات الداخلية والخارجية الكاملة",
            schoolproj_scope_item_c: "تنفيذ أنظمة الكهرباء والتكييف والسلامة",
            schoolproj_scope_item_d: "تنسيق الموقع والمرافق الخارجية",

            schoolproj_info_heading: "معلومات المشروع",

            schoolproj_client_label: "العميل:",
            schoolproj_client_value: "مدارس الحديثة الأهلية",

            schoolproj_city_label: "الموقع:",
            schoolproj_city_value: "ينبع، المملكة العربية السعودية",

            schoolproj_category_label: "نوع المشروع:",
            schoolproj_category_value: "مرفق تعليمي",

            schoolproj_time_label: "مدة التنفيذ:",
            schoolproj_time_value: "12 شهرًا",

            schoolproj_state_label: "حالة المشروع:",
            schoolproj_state_value: "تم الإنجاز",
            gallery_alhaditha_school: "مدارس الحديثة الأهلية – ينبع",
            alhaditha_school_project_title: "مدارس الحديثة الأهلية – ينبع",
            crumb_alhaditha_school: "مدارس الحديثة الأهلية – ينبع",
            crumb_commercial_complex: "مجمع تجاري متعدد الطوابق",
            crumb_structural_framework: "أعمال الخرسانة والهيكل الإنشائي",
            crumb_exterior_facade: "واجهات خارجية وتشطيبات معمارية",
            crumb_interior_finishing: "تشطيبات داخلية فاخرة",
            crumb_luxury_villa: "فيلا سكنية فاخرة",
            crumb_office_fitout: "تشطيب وتجديد مكاتب إدارية",
            sblog2_date: "18 مارس 2026",
            sblog2_author: "فريق تطوير المشاريع",

            sblog2_intro: "يعيد البناء التجاري المستدام تشكيل مستقبل التطوير العمراني في المملكة العربية السعودية بما يتماشى مع أهداف رؤية 2030 نحو الاستدامة والنمو الاقتصادي.",

            sblog2_paragraph_one: "تعتمد المشاريع التجارية الحديثة على أنظمة موفرة للطاقة ومواد صديقة للبيئة وتقنيات ذكية لتعزيز الكفاءة التشغيلية وتقليل التأثير البيئي.",

            sblog2_heading_one: "إدارة الطاقة الذكية",
            sblog2_text_one: "تعمل أنظمة إدارة المباني المتطورة على مراقبة استهلاك الكهرباء وتحسين أداء أنظمة التبريد وتقليل الهدر من خلال الأتمتة والتحكم الذكي.",

            sblog2_heading_two: "مواد مستدامة وابتكار في التصميم",
            sblog2_text_two: "يتم استخدام الخرسانة منخفضة الانبعاثات وأنظمة الألمنيوم القابلة لإعادة التدوير والواجهات الزجاجية عالية الأداء لتحقيق المتانة مع تقليل البصمة الكربونية.",

            sblog2_heading_three: "فوائد اقتصادية وبيئية",
            sblog2_text_three: "تسهم المباني المستدامة في خفض التكاليف التشغيلية طويلة الأمد وتحسين جودة الهواء الداخلي وخلق بيئة عمل صحية، مما يجعلها استثمارًا جذابًا.",

            sblog2_quote: "مستقبل البناء التجاري يعتمد على الاستدامة والابتكار والتكامل الذكي للتقنيات الحديثة.",

            sblog2_conclusion: "مع استمرار توسع البنية التحتية التجارية في المملكة، ستظل ممارسات البناء المستدام عنصرًا أساسيًا في إنشاء مشاريع عصرية ومستقبلية.",
            ifblog_date: "18 فبراير 2026",
            ifblog_author: "بواسطة الفريق الهندسي",

            ifblog_intro: "تلعب التشطيبات الداخلية دورًا أساسيًا في تحديد جودة المشروع وهويته البصرية ووظيفته العملية. حيث تجمع المعايير الحديثة بين الجمال والمتانة والأداء طويل الأمد.",

            ifblog_paragraph_one: "يتطلب تنفيذ التشطيبات الداخلية عالية الجودة دقة في العمل، واستخدام مواد متميزة، وإشرافًا هندسيًا مستمرًا. من أنظمة الأرضيات إلى الأسقف المستعارة، كل تفصيلة تؤثر على النتيجة النهائية.",

            ifblog_heading_one: "اختيار المواد وضبط الجودة",
            ifblog_text_one: "يضمن اختيار المواد المعتمدة تحقيق المتانة والسلامة، كما تساعد عمليات الفحص أثناء التنفيذ على تجنب العيوب والحفاظ على جودة المشروع.",

            ifblog_heading_two: "دمج التصاميم الحديثة",
            ifblog_text_two: "تعتمد التشطيبات الحديثة على دمج أنظمة الإضاءة الذكية، والمعالجات الصوتية، والمواد الموفرة للطاقة لخلق بيئات مريحة وعملية.",

            ifblog_heading_three: "دقة التنفيذ والإشراف",
            ifblog_text_three: "يعد وجود فنيين مهرة وإشراف هندسي مستمر أمرًا ضروريًا لضمان نتائج مثالية والالتزام بالجداول الزمنية.",

            ifblog_quote: "التشطيبات المتميزة لا تعني الشكل الجمالي فقط، بل تعكس دقة هندسية وقيمة طويلة المدى.",

            ifblog_conclusion: "من خلال الالتزام بمعايير التشطيبات العالمية، يمكن لشركات البناء تقديم مشاريع تجمع بين الجمال والسلامة والاستدامة في آنٍ واحد.",
            crumb_modern_villa_trends: "أحدث اتجاهات بناء الفلل في المملكة العربية السعودية",
            crumb_sustainable_commercial_building: "استراتيجيات البناء التجاري المستدام",
            crumb_interior_finishing_standards: "معايير التشطيبات الداخلية في البناء الحديث",
            portfolio_small_title: "سابقة أعمالنا",
            portfolio_main_title: "سجل حافل بالتميز في البناء والتشطيبات",
            portfolio_description: "على مدار السنوات، قمنا بتنفيذ مجموعة متنوعة من مشاريع البناء والتشطيب في مختلف مناطق المملكة العربية السعودية، مع التزام كامل بالجودة والدقة ورضا العملاء.",

            portfolio_item_1_title: "المشاريع التعليمية",
            portfolio_item_1_desc: "تنفيذ مباني المدارس الحكومية والأهلية بما يشمل الأعمال الإنشائية والواجهات الخارجية والتشطيبات الداخلية وفق أحدث المعايير التعليمية.",

            portfolio_item_2_title: "المشاريع السكنية الفاخرة",
            portfolio_item_2_desc: "إنشاء فلل ومجمعات سكنية راقية بتصاميم معمارية حديثة وتشطيبات عالية الجودة تلبي متطلبات الحياة العصرية.",

            portfolio_item_3_title: "المباني التجارية والإدارية",
            portfolio_item_3_desc: "تنفيذ مجمعات تجارية وأعمال تجهيز المكاتب بإدارة احترافية للمشاريع ومعايير صارمة لمراقبة الجودة.",

            portfolio_item_4_title: "الأعمال الخرسانية والهيكلية",
            portfolio_item_4_desc: "تنفيذ متكامل للأعمال الخرسانية المسلحة والهياكل الإنشائية وفقاً للمعايير الهندسية الدولية.", 
            portfolio_item_1_title: "مشروع مدارس تعليمية متكاملة",
            portfolio_item_1_desc: "تنفيذ مبنى مدرسي حديث بتصميم معماري مميز وبنية تحتية متكاملة وفق أعلى المعايير الهندسية.",

            portfolio_item_2_title: "تنفيذ ملاعب رياضية متكاملة",
            portfolio_item_2_desc: "إنشاء ملاعب نجيل صناعي عالية الجودة مع أنظمة تصريف وإضاءة مطابقة للمواصفات الفنية.",

            portfolio_item_3_title: "تجهيز قاعات ومرافق تعليمية",
            portfolio_item_3_desc: "تنفيذ قاعات محاضرات ومسرح مدرسي بأعمال تشطيب احترافية وأنظمة إضاءة وصوت متطورة.",

            portfolio_item_4_title: "أعمال إنشائية وهيكل خرساني",
            portfolio_item_4_desc: "تنفيذ الهياكل الخرسانية والأساسات وفق معايير السلامة والجودة المعتمدة."


            



        }
    };

    window.setLang = function(lang) {

        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            el.textContent = translations[lang][key];
        });

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

