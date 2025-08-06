import React from 'react'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'
import { easeInOut, motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage.tsx'

const Pricing = () => {
    const { t } = useLanguage()

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: easeInOut,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: easeInOut,
            },
        },
    }

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: easeInOut,
            },
        },
    }

    const featureVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: easeInOut,
            },
        },
    }


    const plans = [
        {
            name: t('pricing.starter.name'),
            price: t('pricing.starter.price'),
            description: t('pricing.starter.description'),
            features: [
                t('pricing.starter.feature1'),
                t('pricing.starter.feature2'),
                t('pricing.starter.feature3'),
                t('pricing.starter.feature4'),
                t('pricing.starter.feature5'),
            ],
            buttonText: t('pricing.starter.button'),
            buttonVariant: 'outline',
            popular: false,
        },
        {
            name: t('pricing.professional.name'),
            price: t('pricing.professional.price'),
            period: t('pricing.professional.period'),
            description: t('pricing.professional.description'),
            features: [
                t('pricing.professional.feature1'),
                t('pricing.professional.feature2'),
                t('pricing.professional.feature3'),
                t('pricing.professional.feature4'),
                t('pricing.professional.feature5'),
                t('pricing.professional.feature6'),
                t('pricing.professional.feature7'),
            ],
            buttonText: t('pricing.professional.button'),
            buttonVariant: 'default',
            popular: true,
        },
        {
            name: t('pricing.enterprise.name'),
            price: t('pricing.enterprise.price'),
            description: t('pricing.enterprise.description'),
            features: [
                t('pricing.enterprise.feature1'),
                t('pricing.enterprise.feature2'),
                t('pricing.enterprise.feature3'),
                t('pricing.enterprise.feature4'),
                t('pricing.enterprise.feature5'),
                t('pricing.enterprise.feature6'),
                t('pricing.enterprise.feature7'),
            ],
            buttonText: t('pricing.enterprise.button'),
            buttonVariant: 'outline',
            popular: false,
        },
    ]

    const handleNavClick = (page: string) => (e: React.MouseEvent) => {
        e.preventDefault()
        const element = document.getElementById(page)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            id="pricing"
            className="w-full py-20 px-6 md:px-12 bg-background"
            ref={ref}
        >
            <div className="max-w-7xl mx-auto space-y-16">
                <motion.div
                    className="text-center space-y-4 max-w-3xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                        variants={titleVariants}
                    >
                        {t('pricing.title')}
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground text-lg"
                        variants={itemVariants}
                    >
                        {t('pricing.description')}
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`p-6 rounded-xl border flex flex-col h-full ${
                                plan.popular
                                    ? 'border-primary/50 cosmic-glow bg-card'
                                    : 'border-border cosmic-gradient bg-card'
                            } transition-all duration-300 relative`}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                                    {t('pricing.popular')}
                                </div>
                            )}

                            <div className="mb-auto">
                                <motion.h3
                                    className="text-2xl font-medium tracking-tighter mb-1 text-foreground"
                                    variants={itemVariants}
                                >
                                    {plan.name}
                                </motion.h3>

                                <motion.div className="mb-4" variants={itemVariants}>
                                    <div className="text-3xl font-bold tracking-tighter text-foreground">
                                        {plan.price}
                                    </div>
                                    {plan.period && (
                                        <div className="text-sm text-muted-foreground">
                                            {plan.period}
                                        </div>
                                    )}
                                </motion.div>

                                <motion.p
                                    className="text-muted-foreground mb-6"
                                    variants={itemVariants}
                                >
                                    {plan.description}
                                </motion.p>

                                <div className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-center gap-3"
                                            variants={featureVariants}
                                            initial="hidden"
                                            animate={inView ? 'visible' : 'hidden'}
                                            transition={{ delay: 0.3 + i * 0.05 }}
                                        >
                                            <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M5 12L10 17L19 8"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-foreground">
                                                {feature}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>


                        </motion.div>
                    ))}
                </motion.div>


                <div className="text-center text-muted-foreground">
                    {t('pricing.questions')}{' '}
                    <a onClick={handleNavClick('contacts')} className="text-primary hover:underline cursor-pointer">
                        {t('pricing.contact_team')}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Pricing