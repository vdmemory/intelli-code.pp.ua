import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import TaskBoard from './TaskBoard'
import { Loader } from 'lucide-react'
const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 300)
        return () => clearTimeout(timer)
    }, [])
    return (
        <section
            id={'home'}
            className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background"
        >
            <div className="absolute inset-0 cosmic-grid opacity-30"></div>

            {/* Gradient glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
                <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
            </div>

            <div
                className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="flex justify-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
                        <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                        Launching new payment features
                        <Loader className="h-3 w-3 animate-spin text-primary" />
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
                    Financial operations for{' '}
                    <span className="text-foreground">growth</span> businesses
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                    Streamline your financial workflows with our comprehensive
                    fintech platform. Built for modern businesses who value
                    efficiency, compliance, and scalable growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
                        Start for free
                    </Button>
                    <Button
                        variant="outline"
                        className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
                    >
                        Book a demo
                    </Button>
                </div>

                <div className="pt-6 text-sm text-muted-foreground">
                    No credit card required • Free 14-day trial
                </div>
            </div>
        </section>
    )
}
export default HeroSection
