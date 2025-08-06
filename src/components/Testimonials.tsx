import React from 'react'

const Testimonials = () => {
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
        <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">

            {/* Background Elements */}
            <div
                // ref={backgroundRef}
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
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Trusted by finance teams worldwide
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        See how our platform transforms financial operations for
                        businesses
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
                        >
                            <div className="mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className="text-primary inline-block mr-1"
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="text-lg mb-8 text-foreground/90 italic">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div
                                    className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-muted`}
                                >
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=random&color=fff`}
                                        alt={testimonial.author}
                                        className="h-full w-full rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
