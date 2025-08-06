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
        'hero.title.highlight': 'Програмного Забезпечення',
        'hero.description':
            'Комплексні IT послуги: розробка веб-додатків, мобільних додатків, системи безпеки та інформаційні технології для вашого бізнесу.',
        'hero.contact': "Зв'яжіться з нами",
        'hero.services': 'Наші послуги',

        // Services Section
        'services.title': 'Наші послуги',
        'services.description':
            'Професійні IT рішення та експертні технології для розвитку вашого бізнесу',
        'services.web.title': 'Веб-розробка',
        'services.web.description':
            'Створення сучасних веб-додатків та сайтів з використанням передових технологій. Від корпоративних порталів до інтернет-магазинів.',
        'services.mobile.title': 'Мобільна розробка',
        'services.mobile.description':
            'Розробка нативних та кросплатформних мобільних додатків для iOS та Android з сучасним UX/UI дизайном.',
        'services.security.title': 'Інформаційна безпека',
        'services.security.description':
            'Комплексні рішення з захисту інформації, аудит безпеки, впровадження систем захисту даних та відповідність стандартам безпеки.',
        'services.technologies': 'Технології:',
        'services.included': 'Що включено:',
        'services.additional.title': 'Додаткові послуги',
        'services.additional.description':
            'Спеціалізовані технології та послуги для розвитку вашого IT проекту',
        'services.database': 'Бази даних',
        'services.database.desc': 'Проектування та оптимізація баз даних.',
        'services.cloud': 'Хмарні рішення',
        'services.cloud.desc': 'Міграція та розгортання в хмарі.',
        'services.devops': 'DevOps',
        'services.devops.desc': 'Автоматизація розгортання та моніторинг.',
        'services.support': 'Технічна підтримка',
        'services.support.desc': 'Цілодобова підтримка ваших IT систем.',
        'services.design': 'UI/UX Дизайн',
        'services.design.desc': 'Сучасний дизайн користувацьких інтерфейсів.',
        'services.blockchain': 'Блокчейн',
        'services.blockchain.desc': 'Розробка децентралізованих додатків.',

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

        // FAQ Section
        'faq.title': 'Часто задавані питання',
        'faq.description':
            'Популярні питання про наші послуги та процес розробки',

        // Contact Section
        'contact.title': "Зв'яжіться з нами",
        'contact.description':
            "Заповніть форму нижче, щоб обговорити ваш проект. Наша команда зв'яжеться з вами протягом 24 годин для обговорення деталей.",
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

        // Blog Section - specific posts
        'blog.post.web.title': 'Сучасні тенденції веб-розробки 2024',
        'blog.post.web.excerpt':
            'Огляд найновіших технологій та фреймворків для створення сучасних веб-додатків, включаючи React 18, Next.js 14 та TypeScript.',
        'blog.post.web.category': 'Веб-розробка',
        'blog.post.mobile.title': 'Безпека мобільних додатків',
        'blog.post.mobile.excerpt':
            'Найкращі практики забезпечення безпеки мобільних додатків та захисту користувацьких даних.',
        'blog.post.mobile.category': 'Безпека',
        'blog.post.cloud.title': 'Хмарні технології для бізнесу',
        'blog.post.cloud.excerpt':
            'Як хмарні рішення можуть оптимізувати бізнес-процеси та знизити IT-витрати компанії.',
        'blog.post.cloud.category': 'Хмарні технології',
        'blog.post.devops.title': 'DevOps: автоматизація розгортання',
        'blog.post.devops.excerpt':
            'Впровадження CI/CD пайплайнів та автоматизація процесів розгортання для підвищення ефективності розробки.',
        'blog.post.devops.category': 'DevOps',
        'blog.post.design.title': 'UI/UX дизайн: тренди 2024',
        'blog.post.design.excerpt':
            'Сучасні підходи до проектування користувацьких інтерфейсів та створення зручного користувацького досвіду.',
        'blog.post.design.category': 'Дизайн',

        // Featured Section - projects
        'projects.ecommerce.title': 'E-commerce платформа TechStore',
        'projects.ecommerce.description':
            'Повнофункціональна платформа електронної комерції з інтеграцією платіжних систем, системою управління замовленнями та аналітикою.',
        'projects.ecommerce.category': 'Веб-платформа',
        'projects.banking.title': 'Мобільний банкінг FinanceApp',
        'projects.banking.description':
            'Безпечний мобільний додаток для банківських операцій з біометричною автентифікацією та шифруванням даних.',
        'projects.banking.category': 'Мобільний додаток',
        'projects.security.title': 'Корпоративна система безпеки SecureNet',
        'projects.security.description':
            'Комплексна система інформаційної безпеки з багатофакторною автентифікацією, моніторингом загроз та захистом від кібератак.',
        'projects.security.category': 'Система безпеки',

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

        // Testimonials Section - specific testimonials
        'testimonials.client1.name': 'Іван Петров',
        'testimonials.client1.position': 'Виконавчий директор',
        'testimonials.client1.company': 'ТехІнновації',
        'testimonials.client1.testimonial':
            'Команда Integral Revolut створила відмінну CRM систему для нас. Професійний підхід та якісна технічна підтримка!',
        'testimonials.client2.name': 'Марія Іванова',
        'testimonials.client2.position': 'IT Директор',
        'testimonials.client2.company': 'Креативні Рішення',
        'testimonials.client2.testimonial':
            'Мобільний додаток перевершив усі очікування. Сучасний дизайн, швидка продуктивність та відмінна безпека даних.',
        'testimonials.client3.name': 'Олексій Сидоров',
        'testimonials.client3.position': 'Проектний менеджер',
        'testimonials.client3.company': 'Майбутні Технології',
        'testimonials.client3.testimonial':
            'Рекомендую для будь-яких IT проектів! Дотримання термінів, прозорість процесу та висока якість коду.',
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
        'hero.description':
            'Comprehensive IT services: web application development, mobile applications, security systems and information technologies for your business.',
        'hero.contact': 'Contact Us',
        'hero.services': 'Our Services',

        // Services Section
        'services.title': 'Our Services',
        'services.description':
            'Professional IT solutions and expert technologies for your business development',
        'services.web.title': 'Web Development',
        'services.web.description':
            'Creating modern web applications and websites using cutting-edge technologies. From corporate portals to online stores.',
        'services.mobile.title': 'Mobile Development',
        'services.mobile.description':
            'Development of native and cross-platform mobile applications for iOS and Android with modern UX/UI design.',
        'services.security.title': 'Information Security',
        'services.security.description':
            'Comprehensive information protection solutions, security audits, implementation of data protection systems and compliance with security standards.',
        'services.technologies': 'Technologies:',
        'services.included': "What's included:",
        'services.additional.title': 'Additional Services',
        'services.additional.description':
            'Specialized technologies and services for your IT project development',
        'services.database': 'Databases',
        'services.database.desc': 'Database design and optimization.',
        'services.cloud': 'Cloud Solutions',
        'services.cloud.desc': 'Migration and cloud deployment.',
        'services.devops': 'DevOps',
        'services.devops.desc': 'Deployment automation and monitoring.',
        'services.support': 'Technical Support',
        'services.support.desc': '24/7 support for your IT systems.',
        'services.design': 'UI/UX Design',
        'services.design.desc': 'Modern user interface design.',
        'services.blockchain': 'Blockchain',
        'services.blockchain.desc': 'Decentralized application development.',

        // Blog Section
        'blog.title': 'Blog & Articles',
        'blog.description':
            'Expert knowledge, technical tips and insights from our team of professionals',

        // Projects Section
        'projects.title': 'Our Projects',
        'projects.description':
            'Some of our most successful IT projects and developments',

        // Testimonials Section
        'testimonials.title': 'Client Testimonials',
        'testimonials.description':
            'Learn what our satisfied clients say about working with us',

        // FAQ Section
        'faq.title': 'Frequently Asked Questions',
        'faq.description':
            'Popular questions about our services and development process',

        // Contact Section
        'contact.title': 'Contact Us',
        'contact.description':
            'Fill out the form below to discuss your project. Our team will contact you within 24 hours to discuss the details.',
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

        // Blog Section - specific posts
        'blog.post.web.title': 'Modern Web Development Trends 2024',
        'blog.post.web.excerpt':
            'Overview of the latest technologies and frameworks for creating modern web applications, including React 18, Next.js 14 and TypeScript.',
        'blog.post.web.category': 'Web Development',
        'blog.post.mobile.title': 'Mobile Application Security',
        'blog.post.mobile.excerpt':
            'Best practices for ensuring mobile application security and protecting user data.',
        'blog.post.mobile.category': 'Security',
        'blog.post.cloud.title': 'Cloud Technologies for Business',
        'blog.post.cloud.excerpt':
            'How cloud solutions can optimize business processes and reduce company IT costs.',
        'blog.post.cloud.category': 'Cloud Technologies',
        'blog.post.devops.title': 'DevOps: Deployment Automation',
        'blog.post.devops.excerpt':
            'Implementation of CI/CD pipelines and automation of deployment processes to increase development efficiency.',
        'blog.post.devops.category': 'DevOps',
        'blog.post.design.title': 'UI/UX Design: Trends 2024',
        'blog.post.design.excerpt':
            'Modern approaches to user interface design and creating convenient user experience.',
        'blog.post.design.category': 'Design',

        // Featured Section - projects
        'projects.ecommerce.title': 'E-commerce Platform TechStore',
        'projects.ecommerce.description':
            'Full-featured e-commerce platform with payment system integration, order management system and analytics.',
        'projects.ecommerce.category': 'Web Platform',
        'projects.banking.title': 'Mobile Banking FinanceApp',
        'projects.banking.description':
            'Secure mobile application for banking operations with biometric authentication and data encryption.',
        'projects.banking.category': 'Mobile Application',
        'projects.security.title': 'Corporate Security System SecureNet',
        'projects.security.description':
            'Comprehensive information security system with multi-factor authentication, threat monitoring and cyber attack protection.',
        'projects.security.category': 'Security System',

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

        // Testimonials Section - specific testimonials
        'testimonials.client1.name': 'Ivan Petrov',
        'testimonials.client1.position': 'CEO',
        'testimonials.client1.company': 'TechInnovations',
        'testimonials.client1.testimonial':
            'The Integral Revolut team created an excellent CRM system for us. Professional approach and quality technical support!',
        'testimonials.client2.name': 'Maria Ivanova',
        'testimonials.client2.position': 'IT Director',
        'testimonials.client2.company': 'Creative Solutions',
        'testimonials.client2.testimonial':
            'The mobile application exceeded all expectations. Modern design, fast performance and excellent data security.',
        'testimonials.client3.name': 'Alexey Sidorov',
        'testimonials.client3.position': 'Project Manager',
        'testimonials.client3.company': 'Future Technologies',
        'testimonials.client3.testimonial':
            'I recommend for any IT projects! Meeting deadlines, process transparency and high code quality.',
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
