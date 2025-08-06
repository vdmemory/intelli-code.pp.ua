import React, { useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
    ChevronDown,
    Layers,
    Grid3x3,
    ListCheck,
    BookOpen,
    Star,
    LayoutDashboard,
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { easeOut, motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage.tsx'

const Features = () => {
    const [openFeature, setOpenFeature] = useState<number | null>(null)

    const { t } = useLanguage()

    const { ref, inView: isInView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px',
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Increased stagger for smoother effect
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7, // Adjusted duration
                ease: easeOut,
            },
        },
    }

    const collapsibleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut,
            },
        },
    }

    const features = [
        {
            title: t('projects1.title'),
            description: t('projects1.description'),
            expandedDescription: t('projects1.expandedDescription'),
            icon: <Layers size={24} className="text-cosmic-accent" />,
        },
        {
            title: t('projects2.title'),
            description: t('projects2.description'),
            expandedDescription: t('projects2.expandedDescription'),
            icon: <Grid3x3 size={24} className="text-cosmic-accent" />,
        },
        {
            title: t('projects3.title'),
            description: t('projects3.description'),
            expandedDescription: t('projects3.expandedDescription'),
            icon: <LayoutDashboard size={24} className="text-cosmic-accent" />,
        },
        {
            title: t('projects4.title'),
            description: t('projects4.description'),
            expandedDescription: t('projects4.expandedDescription'),
            icon: <ListCheck size={24} className="text-cosmic-accent" />,
        },
        {
            title: t('projects5.title'),
            description: t('projects5.description'),
            expandedDescription: t('projects5.expandedDescription'),
            icon: <Star size={24} className="text-cosmic-accent" />,
        },
        {
            title: t('projects6.title'),
            description: t('projects6.description'),
            expandedDescription: t('projects6.expandedDescription'),
            icon: <BookOpen size={24} className="text-cosmic-accent" />,
        },
    ]

    const toggleFeature = (index: number) => {
        setOpenFeature(openFeature === index ? null : index)
    }

    return (
        <section ref={ref} id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-12">
                <motion.div
                    className="text-center space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        Everything your business needs
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground"
                        variants={itemVariants}
                    >
                        Comprehensive fintech solutions to streamline your
                        financial operations and drive growth
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={collapsibleVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                        >
                            <Collapsible
                                open={openFeature === index}
                                onOpenChange={() => toggleFeature(index)}
                                className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
                            >
                                <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                                    <div className="flex justify-between items-start">
                                        <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                                            {feature.icon}
                                        </div>
                                        <ChevronDown
                                            className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                                                openFeature === index
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </div>
                                    <h3 className="text-xl font-medium tracking-tighter mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-cosmic-muted">
                                        {feature.description}
                                    </p>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-6 pb-6 pt-2">
                                    <div className="pt-3 border-t border-cosmic-light/10">
                                        <p className="text-cosmic-muted">
                                            {feature.expandedDescription}
                                        </p>
                                        <div className="mt-4 flex justify-end">

                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features