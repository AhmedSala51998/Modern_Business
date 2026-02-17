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
        }
    };

    window.setLang = function(lang) {

        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            el.textContent = translations[lang][key];
        });

        if(lang === "ar"){
            document.documentElement.dir = "rtl";
            document.documentElement.lang = "ar";
        } else {
            document.documentElement.dir = "ltr";
            document.documentElement.lang = "en";
        }

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

