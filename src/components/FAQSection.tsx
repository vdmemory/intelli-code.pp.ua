import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { easeOut, motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/hooks/useLanguage.tsx'

const FAQSection = () => {
    const { t, language } = useLanguage()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const faqsEng = [
        {
            question: 'What services do you offer?',
            answer: 'We offer comprehensive IT services including software development, cybersecurity solutions, mobile app development, and cloud services. Our team specializes in custom solutions tailored to your business needs.',
        },
        {
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary depending on complexity and scope. Simple mobile apps may take 2-3 months, while complex enterprise solutions can take 6-12 months. We provide detailed timelines during the consultation phase.',
        },
        {
            question: 'Do you provide ongoing support?',
            answer: 'Yes, we offer comprehensive post-launch support including maintenance, updates, security patches, and technical assistance. We have flexible support packages to meet your specific needs.',
        },
        {
            question: 'What technologies do you work with?',
            answer: 'We work with modern technologies including React, Node.js, Python, React Native, AWS, Azure, and many more. Our team stays updated with the latest tech trends to provide cutting-edge solutions.',
        },
        {
            question: 'How do you ensure project security?',
            answer: 'Security is our top priority. We implement industry-standard security practices, conduct regular security audits, use encrypted communications, and follow GDPR compliance guidelines throughout the development process.',
        },
        {
            question: 'Can you help with digital transformation?',
            answer: 'Absolutely! We specialize in helping businesses undergo digital transformation by modernizing legacy systems, implementing cloud solutions, and optimizing business processes through technology.',
        },
    ]

    const faqsUa = [
        {
            question: 'Які послуги ви надаєте?',
            answer: 'Ми надаємо комплексні ІТ-послуги, включаючи розробку програмного забезпечення, рішення з кібербезпеки, розробку мобільних додатків та хмарні послуги. Наша команда спеціалізується на індивідуальних рішеннях, адаптованих до потреб вашого бізнесу.',
        },
        {
            question: 'Скільки часу займає типовий проект?',
            answer: 'Терміни виконання проектів залежать від складності та обсягу. Простий мобільний додаток може зайняти 2-3 місяці, тоді як складні корпоративні рішення можуть тривати 6-12 місяців. Ми надаємо детальні терміни під час консультацій.',
        },
        {
            question: 'Чи надаєте ви постійну підтримку?',
            answer: 'Так, ми пропонуємо комплексну підтримку після запуску, включаючи обслуговування, оновлення, патчі безпеки та технічну допомогу. У нас є гнучкі пакети підтримки для задоволення ваших потреб.',
        },
        {
            question: 'З якими технологіями ви працюєте?',
            answer: 'Ми працюємо з сучасними технологіями, такими як React, Node.js, Python, React Native, AWS, Azure та багатьма іншими. Наша команда стежить за останніми тенденціями технологій для надання передових рішень.',
        },
        {
            question: 'Як ви забезпечуєте безпеку проектів?',
            answer: 'Безпека є нашим головним пріоритетом. Ми впроваджуємо стандарти безпеки галузі, проводимо регулярні аудити безпеки, використовуємо зашифровані комунікації та дотримуємося вимог GDPR протягом усього процесу розробки.',
        },
        {
            question: 'Чи можете ви допомогти з цифровою трансформацією?',
            answer: 'Абсолютно! Ми спеціалізуємося на допомозі бізнесам у цифровій трансформації шляхом модернізації застарілих систем, впровадження хмарних рішень та оптимізації бізнес-процесів за допомогою технологій.',
        },
    ]

    const faqs = language === 'en' ? faqsEng : faqsUa

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut,
            },
        },
    }

    const faqVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: easeOut,
            },
        },
    }

    return (
        <section
            id={'faq'}
            className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden"
            ref={ref}
        >
            <div className="absolute inset-0 cosmic-grid opacity-5"></div>

            {/* Background Elements */}
            <div
                // ref={backgroundRef}
                className="absolute inset-[-45px] z-0 transition-transform duration-500 ease-out"
                style={{
                    willChange: 'transform',
                    backgroundImage: `url('bg4.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.6,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            ></div>

            <div className="max-w-4xl mx-auto space-y-16 relative z-10">
                <motion.div
                    className="text-center space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        {t('faq.title')}
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground text-lg"
                        variants={itemVariants}
                    >
                        {t('faq.subtitle')}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={faqVariants}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                                >
                                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pt-2">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQSection
