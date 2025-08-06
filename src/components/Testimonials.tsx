import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Testimonials = () => {
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

    const testimonials = [
        {
            quote: 'Our payment processing efficiency increased by 40% and transaction failures dropped to near zero. The automation features are game-changing.',
            author: 'Sarah Johnson',
            position: 'CFO at TechCorp',
            avatar: 'bg-cosmic-light/30',
        },
        {
            quote: 'The real-time analytics and fraud detection capabilities have saved us millions. We can spot issues before they become problems.',
            author: 'Michael Chen',
            position: 'Head of Risk at FinanceFlow',
            avatar: 'bg-cosmic-light/20',
        },
        {
            quote: "Compliance used to be a nightmare. Now our regulatory reporting is automated and we're always audit-ready.",
            author: 'Leila Rodriguez',
            position: 'Operations Director at GlobalPay',
            avatar: 'bg-cosmic-light/40',
        },
    ]

    return (
        <section
            className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden"
            ref={ref}
        >

            {/* Background Elements */}
            <div
                className="absolute inset-[-45px] z-0 transition-transform duration-500 ease-out"
                style={{
                    willChange: 'transform',
                    backgroundImage: `url('bg5.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            ></div>

            {/* Background grid */}
            <div className="absolute inset-0 cosmic-grid opacity-20"></div>

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
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
                        Trusted by finance teams worldwide
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground text-lg"
                        variants={itemVariants}
                    >
                        See how our platform transforms financial operations for
                        businesses
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className="mb-6"
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            >
                                {[...Array(5)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        className="text-primary inline-block mr-1"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                        transition={{
                                            delay: 0.7 + index * 0.1 + i * 0.1,
                                            duration: 0.3,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                    >
                                        ★
                                    </motion.span>
                                ))}
                            </motion.div>
                            <motion.p
                                className="text-lg mb-8 text-foreground/90 italic"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                            >
                                "{testimonial.quote}"
                            </motion.p>
                            <motion.div
                                className="flex items-center gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                            >
                                <motion.div
                                    className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-muted`}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=random&color=fff`}
                                        alt={testimonial.author}
                                        className="h-full w-full rounded-full object-cover"
                                    />
                                </motion.div>
                                <div>
                                    <motion.h4
                                        className="font-medium text-foreground"
                                        whileHover={{
                                            color: 'hsl(var(--primary))',
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {testimonial.author}
                                    </motion.h4>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials
