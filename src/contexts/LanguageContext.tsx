import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'uk' | 'en'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
)

const translations = {
    uk: {
        // Navigation
        'nav.home': 'Головна',
        'nav.services': 'Послуги',
        'nav.blog': 'Блог',
        'nav.faq': 'FAQ',
        'nav.contacts': 'Контакти',

        // Hero Section
        'hero.badge': 'Професійні IT рішення',
        'hero.title': 'Розробка',
        'hero.title.highlight': 'програмного забезпечення',
        'hero.title2': 'для сучасного бізнесу',
        'hero.description':
            'Комплексні IT послуги: розробка веб-додатків, мобільних додатків, системи безпеки та інформаційні технології для вашого бізнесу.',
        'hero.contact': "Зв'яжіться з нами",
        'hero.services': 'Наші послуги',

        // Pricing Section
        'pricing.title': 'Прозорі ціни для будь-якого проекту',
        'pricing.description': 'Оберіть підходящий пакет послуг для розвитку вашого бізнесу',
        'pricing.popular': 'Найпопулярніший',
        'pricing.questions': 'Є питання?',
        'pricing.contact_team': "Зв'яжіться з нашою командою",
        'pricing.starter.name': 'Стартовий',
        'pricing.starter.price': 'Від 50,000₴',
        'pricing.starter.description': 'Ідеально для малого бізнесу та стартапів',
        'pricing.starter.feature1': 'Лендінг або простий сайт',
        'pricing.starter.feature2': 'Адаптивний дизайн',
        'pricing.starter.feature3': 'Базова SEO-оптимізація',
        'pricing.starter.feature4': 'Техпідтримка 3 місяці',
        'pricing.starter.feature5': 'Хостинг на 1 рік',
        'pricing.starter.button': 'Замовити',
        'pricing.professional.name': 'Професійний',
        'pricing.professional.price': 'Від 150,000₴',
        'pricing.professional.period': 'за проект',
        'pricing.professional.description': 'Для зростаючих компаній з розширеними потребами',
        'pricing.professional.feature1': 'Веб-додаток або інтернет-магазин',
        'pricing.professional.feature2': 'Панель адміністратора',
        'pricing.professional.feature3': 'Інтеграція з API',
        'pricing.professional.feature4': 'Система аналітики',
        'pricing.professional.feature5': 'Мобільна версія',
        'pricing.professional.feature6': 'Техпідтримка 6 місяців',
        'pricing.professional.feature7': 'Пріоритетна підтримка',
        'pricing.professional.button': 'Обговорити проект',
        'pricing.enterprise.name': 'Корпоративний',
        'pricing.enterprise.price': 'Індивідуально',
        'pricing.enterprise.description': 'Для великих організацій зі складними вимогами',
        'pricing.enterprise.feature1': 'Корпоративні системи',
        'pricing.enterprise.feature2': 'Інтеграція з існуючими системами',
        'pricing.enterprise.feature3': 'Високі вимоги безпеки',
        'pricing.enterprise.feature4': 'Виділена інфраструктура',
        'pricing.enterprise.feature5': 'Індивідуальні рішення',
        'pricing.enterprise.feature6': 'Персональний менеджер',
        'pricing.enterprise.feature7': 'Підтримка 24/7',
        'pricing.enterprise.button': "Зв'язатися з нами",

        // Blog Section
        'blog.title': 'Блог та статті',
        'blog.description':
            'Експертні знання, технічні поради та інсайти від нашої команди професіоналів',

        // Projects Section
        'projects.title': 'Наші проекти',
        'projects.description':
            'Деякі з наших найуспішніших IT проектів та розробок',

        // Testimonials Section
        'testimonials.title': 'Відгуки наших клієнтів',
        'testimonials.description':
            'Дізнайтеся, що кажуть наші задоволені клієнти про співпрацю з нами',
        'testimonials.message.first':
            'Ефективність нашої платформи обробки платежів зросла на 40%, а кількість помилок транзакцій зменшилася до нуля. Автоматизація процесів змінила правила гри.',
        'testimonials.message.second':
            'Аналітика в реальному часі та можливості виявлення шахрайства допомогли нам заощадити мільйони. Ми можемо виявляти проблеми до того, як вони стануть серйозними.',
        'testimonials.message.third':
            'Раніше відповідність вимогам була справжнім кошмаром. Тепер наші звіти для регуляторів автоматизовані, і ми завжди готові до аудиту.',


        // FAQ Section
        'faq.title': 'Часто задавані питання',
        'faq.description':
            'Популярні питання про наші послуги та процес розробки',

        // Brand Section
        'brand.title': 'Партнери та технології',
        'brand.description':
            'Ми співпрацюємо з провідними технологічними компаніями та використовуємо найкращі рішення для вашого бізнесу.',

        // Contact Section
        'contact.title': "Зв'яжіться з нами",
        'contact.description':
            "Заповніть форму нижче, щоб обговорити ваш проект. Наша команда зв'яжеться з вами протягом 24 годин для обговорення деталей.",
        'contact.subtitle': 'Готові розпочати ваш проект?',
        'contact.subtitle2': 'Наша команда експертів готова допомогти вам втілити ваші ідеї в життя. Зв\'яжіться з нами сьогодні для безкоштовної консультації.',
        'contact.form_title': 'Надішліть нам повідомлення',
        'contact.form_first_name': "Ім'я",
        'contact.form_last_name': 'Прізвище',
        'contact.form_email': 'Електронна пошта',
        'contact.form_phone': 'Номер телефону',
        'contact.form_message': 'Розкажіть нам про ваш проект...',
        'contact.form_submit': 'Відправити повідомлення',
        'contact.address': 'Адреса',
        'contact.name': "Ім'я",
        'contact.email': 'Електронна пошта',
        'contact.phone': 'Телефон',
        'contact.company': 'Компанія',
        'contact.project': 'Опис проекту',
        'contact.project.placeholder':
            'Опишіть ваш проект, вимоги та побажання',
        'contact.submit': 'Відправити заявку',
        'contact.direct.title': 'Потрібно поговорити з нами безпосередньо?',
        'contact.direct.description':
            'Якщо у вас є специфічні питання або ви віддаєте перевагу обговоренню ваших вимог по телефону, наша команда тут, щоб допомогти.',

        'contact.time': 'Пн-Пт: 9:00-18:00 | Сб: 10:00-16:00',
        'contact.text.title': 'Аварійна підтримка',
        'contact.text.description':
            'Цілодобова лінія підтримки для існуючих\n бронювань',
        'contact.text.title2': 'Індивідуальні пакети',
        'contact.text.description2':
            'Ми пропонуємо індивідуальні пакети послуг для бізнесу, які включають розробку, підтримку та консалтинг.',
        'contact.text.title3': 'Підтримка клієнтів',
        'contact.text.description3':
            'Наша команда підтримки завжди готова допомогти вам з будь-якими питаннями чи проблемами, пов’язаними з вашими IT системами.',
        // Footer
        'footer.description':
            'Професійні послуги з розробки програмного забезпечення, інформаційні технології та системи безпеки для вашого бізнесу.',
        'footer.links': 'Швидкі посилання',
        'footer.contact.info': 'Контактна інформація',
        'footer.rights': 'Всі права захищені.',
        'footer.privacy': 'Політика конфіденційності',
        'footer.terms': 'Умови використання',

        'footer.menu1.title': 'Продукт',
        'footer.menu1.link1': 'Особливості',
        'footer.menu1.link2': 'Інтеграції',
        'footer.menu1.link3': 'Ціни',
        'footer.menu1.link4': 'Оновлення',
        'footer.menu1.link5': 'Дорожня карта',
        'footer.menu2.title': 'Компанія',
        'footer.menu2.link1': 'Головна',
        'footer.menu2.link2': 'Особливості',
        'footer.menu2.link3': 'Кар\'єра',
        'footer.menu2.link4': 'FAQ',
        'footer.menu2.link5': 'Контакти',

        // Featured Section - projects
        'featured.title': 'Все, що потрібно вашому бізнесу',
        'featured.subtitle': 'Комплексні фінансові рішення для оптимізації ваших фінансових операцій та стимулювання зростання',

        'projects1.title': 'Автоматизація платежів',
        'projects1.description':
            'Автоматизуйте обробку платежів - зменшення помилок, підвищення ефективності.',
        'projects1.expandedDescription':
            'Налаштуйте автоматизовані робочі процеси платежів з користувацькими ланцюгами затвердження. Плануйте регулярні платежі, автоматизуйте обробку рахунків і створюйте умовні правила для різних типів транзакцій. Зменшіть ручне втручання та забезпечте відповідність фінансовим регламентам.',
        'projects2.title': 'Аналітика в реальному часі',
        'projects2.description':
            'Отримуйте інсайти про ваші фінансові операції з аналітикою та звітністю в реальному часі.',
        'projects2.expandedDescription':
            'Відстежуйте ключові фінансові показники за допомогою налаштовуваних інформаційних панелей. Моніторьте грошові потоки, обсяги платежів і рівні успішності транзакцій в реальному часі. Генеруйте детальні звіти для зацікавлених сторін і виявляйте тенденції до того, як вони вплинуть на ваш бізнес.',
        'projects3.title': 'Управління ризиками',
        'projects3.description':
            'Розширене виявлення шахрайства та інструменти оцінки ризиків для захисту вашого бізнесу.',
        'projects3.expandedDescription':
            'Впроваджуйте алгоритми машинного навчання для виявлення аномалій і потенційного шахрайства в реальному часі. Налаштуйте оцінку ризиків для транзакцій, моніторте шаблони і отримуйте миттєві сповіщення про підозрілу активність. Захистіть свій бізнес за допомогою рішень корпоративного рівня безпеки.',
        'projects4.title': 'Автоматизація відповідності',
        'projects4.description':
            'Автоматизуйте звітність та забезпечте дотримання фінансових регламентів.',
        'projects4.expandedDescription':
            'Оптимізуйте ваші процеси відповідності за допомогою інструментів автоматизованої звітності. Генеруйте звіти для регуляторних органів, відстежуйте показники відповідності та підтримуйте аудиторські сліди без зусиль. Забезпечте відповідність вашого бізнесу всім юридичним вимогам без ручних витрат.',
        'projects5.title': 'Підтримка багатьох валют',
        'projects5.description':
            'Підтримка багатьох валют і міжнародних транзакцій для розширення вашого бізнесу.',
        'projects5.expandedDescription':
            'Обробляйте платежі в різних валютах з реальними обмінними курсами. Керуйте конверсіями валют, відстежуйте багатовалютні транзакції та забезпечте безперебійну роботу для міжнародних клієнтів. Розширюйте свій бізнес на глобальному рівні з упевненістю.',
        'projects6.title': 'Інтеграція API',
        'projects6.description':
            'Потужні API для безшовної інтеграції з вашими існуючими фінансовими системами.',
        'projects6.expandedDescription':
            'Інтегруйте нашу платформу з вашими існуючими ERP, CRM або бухгалтерськими системами за допомогою наших надійних API. Автоматизуйте обмін даними, синхронізуйте транзакції та покращуйте ваші фінансові робочі процеси. Налаштовувані кінцеві точки API для задоволення ваших специфічних потреб.',

        // FAQ Section - questions and answers
        'faq.q1.question': 'Скільки часу займає розробка веб-додатку?',
        'faq.q1.answer':
            'Час розробки залежить від складності проекту. Простий сайт - 2-4 тижні, складний веб-додаток - 3-6 місяців. Надаємо детальний план з часовими рамками після аналізу вимог.',
        'faq.q2.question': 'Які технології ви використовуєте?',
        'faq.q2.answer':
            'Працюємо з сучасними технологіями: React, Vue.js, Node.js, Python, PHP, React Native, Flutter. Вибір технологій залежить від специфіки проекту та ваших вимог.',
        'faq.q3.question': 'Чи надаєте ви технічну підтримку?',
        'faq.q3.answer':
            'Так, надаємо технічну підтримку та супровід проектів. Включає виправлення помилок, оновлення, консультації та розвиток функціоналу.',
        'faq.q4.question': 'Як забезпечується безпека даних?',
        'faq.q4.answer':
            'Використовуємо сучасні методи шифрування, SSL-сертифікати, захищені API, регулярні аудити безпеки та дотримуємося стандартів GDPR та ISO 27001.',
        'faq.q5.question': 'Чи можна вносити зміни під час розробки?',
        'faq.q5.answer':
            'Так, використовуємо гнучку методологію розробки, яка дозволяє вносити зміни. Обговорюємо всі корективи та їх вплив на терміни та бюджет.',
        'faq.q6.question': 'Яка вартість розробки?',
        'faq.q6.answer':
            'Вартість залежить від складності проекту, функціоналу та термінів. Надаємо безкоштовну консультацію та детальну кошторис після аналізу ваших вимог.',

       },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.blog': 'Blog',
        'nav.faq': 'FAQ',
        'nav.contacts': 'Contacts',

        // Hero Section
        'hero.badge': 'Professional IT Solutions',
        'hero.title': 'Software',
        'hero.title.highlight': 'Development',
        'hero.title2': 'for Modern Business',
        'hero.description':
            'Comprehensive IT services: web application development, mobile applications, security systems and information technologies for your business.',
        'hero.contact': 'Contact Us',
        'hero.services': 'Our Services',

        // Pricing Section
        'pricing.title': 'Transparent prices for any project',
        'pricing.description': 'Choose the right service package for your business development',
        'pricing.popular': 'Most Popular',
        'pricing.questions': 'Have questions?',
        'pricing.contact_team': 'Contact our team',
        'pricing.starter.name': 'Starter',
        'pricing.starter.price': 'From $1,200',
        'pricing.starter.description': 'Perfect for small businesses and startups',
        'pricing.starter.feature1': 'Landing page or simple website',
        'pricing.starter.feature2': 'Responsive design',
        'pricing.starter.feature3': 'Basic SEO optimization',
        'pricing.starter.feature4': 'Technical support 3 months',
        'pricing.starter.feature5': 'Hosting for 1 year',
        'pricing.starter.button': 'Order',
        'pricing.professional.name': 'Professional',
        'pricing.professional.price': 'From $3,600',
        'pricing.professional.period': 'per project',
        'pricing.professional.description': 'For growing companies with extended needs',
        'pricing.professional.feature1': 'Web application or e-commerce',
        'pricing.professional.feature2': 'Admin panel',
        'pricing.professional.feature3': 'API integration',
        'pricing.professional.feature4': 'Analytics system',
        'pricing.professional.feature5': 'Mobile version',
        'pricing.professional.feature6': 'Technical support 6 months',
        'pricing.professional.feature7': 'Priority support',
        'pricing.professional.button': 'Discuss project',
        'pricing.enterprise.name': 'Enterprise',
        'pricing.enterprise.price': 'Custom',
        'pricing.enterprise.description': 'For large organizations with complex requirements',
        'pricing.enterprise.feature1': 'Corporate systems',
        'pricing.enterprise.feature2': 'Integration with existing systems',
        'pricing.enterprise.feature3': 'High security requirements',
        'pricing.enterprise.feature4': 'Dedicated infrastructure',
        'pricing.enterprise.feature5': 'Custom solutions',
        'pricing.enterprise.feature6': 'Personal manager',
        'pricing.enterprise.feature7': '24/7 support',
        'pricing.enterprise.button': 'Contact us',

        // Blog Section
        'blog.title': 'Blog & Articles',
        'blog.description':
            'Expert knowledge, technical tips and insights from our team of professionals',

        // Projects Section
        'projects.title': 'Our Projects',
        'projects.description':
            'Some of our most successful IT projects and developments',

        // Testimonials Section
        'testimonials.title': 'Trusted by finance teams worldwide',
        'testimonials.description':
            'See how our platform transforms financial operations for businesses',
        'testimonials.message.first': 'Our payment processing efficiency increased by 40% and transaction failures dropped to near zero. The automation features are game-changing.',
        'testimonials.message.second':
            'The real-time analytics and fraud detection capabilities have saved us millions. We can spot issues before they become problems.',
        'testimonials.message.third': 'Compliance used to be a nightmare. Now our regulatory reporting is automated and we\'re always audit-ready.',

        // Brand Section
        'brand.title': 'Partners & Technologies',
        'brand.description':
            'We collaborate with leading technology companies and use the best solutions for your business.',

        // FAQ Section
        'faq.title': 'Frequently Asked Questions',
        'faq.description':
            'Popular questions about our services and development process',

        // Contact Section
        'contact.title': 'Contact Us',
        'contact.description':
            'Fill out the form below to discuss your project. Our team will contact you within 24 hours to discuss the details.',
        'contact.subtitle': 'Ready to start your project?',
        'contact.subtitle2': 'Our team of experts is ready to help you bring your ideas to life. Contact us today for a free consultation.',
        'contact.form_title': 'Send us a message',
        'contact.form_first_name': 'First Name',
        'contact.form_last_name': 'Last Name',
        'contact.form_email': 'Email Address',
        'contact.form_phone': 'Phone Number',
        'contact.form_message': 'Tell us about your project...',
        'contact.form_submit': 'Send Message',
        'contact.address': 'Address',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.company': 'Company',
        'contact.project': 'Project Description',
        'contact.project.placeholder':
            'Describe your project, requirements and wishes',
        'contact.submit': 'Submit Request',
        'contact.direct.title': 'Need to Speak With Us Directly?',
        'contact.direct.description':
            'If you have specific questions or prefer to discuss your requirements over the phone, our team is here to help.',

        'contact.time': 'Mon-Fri: 9am-6pm | Sat: 10am-4pm',
        'contact.text.title': 'Emergency Support',
        'contact.text.description': '24/7 support line for existing\n bookings',
        'contact.text.title2': 'Custom Packages',
        'contact.text.description2':
            'Speak with our team about\n bespoke solutions',
        'contact.text.title3': 'Site Visits',
        'contact.text.description3':
            'Request a venue assessment\n before your event',
        // Footer
        'footer.description':
            'Professional software development services, information technology and security systems for your business.',
        'footer.links': 'Quick Links',
        'footer.contact.info': 'Contact Information',
        'footer.rights': 'All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Use',

        'footer.menu1.title': 'Product',
        'footer.menu1.link1': 'Features',
        'footer.menu1.link2': 'Integrations',
        'footer.menu1.link3': 'Pricing',
        'footer.menu1.link4': 'Updates',
        'footer.menu1.link5': 'Roadmap',
        'footer.menu2.title': 'Company',
        'footer.menu2.link1': 'Home',
        'footer.menu2.link2': 'Features',
        'footer.menu2.link3': 'Careers',
        'footer.menu2.link4': 'FAQ',
        'footer.menu2.link5': 'Contact',

        // Featured Section - projects
        'featured.title': 'Everything your business needs',
        'featured.subtitle': 'Comprehensive fintech solutions to streamline your financial operations and drive growth',

        'projects1.title': 'Payment Automation',
        'projects1.description':
            'Automate payment processing and reconciliation to reduce manual errors and improve efficiency.',
        'projects1.expandedDescription':
            'Set up automated payment workflows with custom approval chains. Schedule recurring payments, automate invoice processing, and create conditional rules for different transaction types. Reduce manual intervention and ensure compliance with financial regulations.',
        'projects2.title': 'Real-time Analytics',
        'projects2.description':
            'Gain insights into your financial operations with real-time data analytics and reporting.',
        'projects2.expandedDescription':
            'Track key financial metrics with customizable dashboards. Monitor cash flow, payment volumes, and transaction success rates in real-time. Generate detailed reports for stakeholders and identify trends before they impact your business.',
        'projects3.title': 'Risk Management',
        'projects3.description':
            'Advanced fraud detection and risk assessment tools to protect your business.',
        'projects3.expandedDescription':
            'Implement machine learning algorithms to detect anomalies and potential fraud in real-time. Set up risk scoring for transactions, monitor patterns, and receive instant alerts for suspicious activity. Safeguard your business with enterprise-grade security measures.',
        'projects4.title': 'Compliance Automation',
        'projects4.description':
            'Automate compliance reporting and ensure adherence to financial regulations.',
        'projects4.expandedDescription':
            'Streamline your compliance processes with automated reporting tools. Generate reports for regulatory bodies, track compliance metrics, and maintain audit trails effortlessly. Ensure your business meets all legal requirements without manual overhead.',
        'projects5.title': 'Multi-currency Support',
        'projects5.description':
            'Support for multiple currencies and international transactions to expand your business reach.',
        'projects5.expandedDescription':
            'Process payments in various currencies with real-time exchange rates. Manage currency conversions, track multi-currency transactions, and provide a seamless experience for international customers. Expand your business globally with confidence.',
        'projects6.title': 'API Integration',
        'projects6.description':
            'Powerful APIs for seamless integration with your existing financial systems.',
        'projects6.expandedDescription':
            'Integrate our platform with your existing ERP, CRM, or accounting systems using our robust APIs. Automate data exchange, synchronize transactions, and enhance your financial workflows. Customizable API endpoints to fit your specific needs.',

        // FAQ Section - questions and answers
        'faq.q1.question': 'How long does web application development take?',
        'faq.q1.answer':
            'Development time depends on project complexity. Simple website - 2-4 weeks, complex web application - 3-6 months. We provide detailed timeline after requirements analysis.',
        'faq.q2.question': 'What technologies do you use?',
        'faq.q2.answer':
            'We work with modern technologies: React, Vue.js, Node.js, Python, PHP, React Native, Flutter. Technology choice depends on project specifics and your requirements.',
        'faq.q3.question': 'Do you provide technical support?',
        'faq.q3.answer':
            'Yes, we provide technical support and project maintenance. Includes bug fixes, updates, consultations and functionality development.',
        'faq.q4.question': 'How is data security ensured?',
        'faq.q4.answer':
            'We use modern encryption methods, SSL certificates, secure APIs, regular security audits and comply with GDPR and ISO 27001 standards.',
        'faq.q5.question': 'Can changes be made during development?',
        'faq.q5.answer':
            'Yes, we use agile development methodology that allows changes. We discuss all corrections and their impact on timeline and budget.',
        'faq.q6.question': 'What is the development cost?',
        'faq.q6.answer':
            'Cost depends on project complexity, functionality and timeline. We provide free consultation and detailed estimate after analyzing your requirements.',

        },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('language')
        return (saved as Language) || 'uk'
    })

    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])

    const t = (key: string): string => {
        return translations[language][key] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}
