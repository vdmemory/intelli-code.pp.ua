import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage.tsx'

const HeroSection = () => {
    const { t } = useLanguage()
    const [isVisible, setIsVisible] = useState(false)
    const backgroundRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 300)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!backgroundRef.current) return

            const x = e.clientX / window.innerWidth
            const y = e.clientY / window.innerHeight

            backgroundRef.current.style.transform = `translate(${x * -45}px, ${y * -45}px)`
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const handleNavClick = (page: string) => (e: React.MouseEvent) => {
        e.preventDefault()
        const element = document.getElementById(page)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            id={'home'}
            className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background"
        >
            {/* Background Elements */}
            <motion.div  // Wrap the background element with motion.div
                ref={backgroundRef}
                className="absolute inset-[-45px] z-0 transition-transform duration-500 ease-out"
                style={{
                    willChange: 'transform',
                    backgroundImage: `url('bg.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
                initial={{ opacity: 0 }}  // Start fully transparent
                animate={{ opacity: 0.7 }}  // Fade in to 0.7 opacity
                transition={{ duration: 1.5, ease: "easeInOut" }} // Adjust duration and easing
            />

            <div className="absolute inset-0 cosmic-grid opacity-30"></div>

            {/* Gradient glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
                <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
            </div>

            <div
                className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="pt-6 text-sm text-muted-foreground">
                </div>
                <div className="flex justify-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
                        <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                        {t('hero.badge')}
                        <Loader className="h-3 w-3 animate-spin text-primary" />
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
                    {t('hero.title')}{' '}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('hero.title.highlight')}</span>{' '}
                    {t('hero.title2')}
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                    {t('hero.description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
                    <Button  onClick={handleNavClick('contacts')} className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
                        {t('hero.contact')}
                    </Button>
                    <Button
                        onClick={handleNavClick('features')}
                        variant="outline"
                        className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
                    >
                        {t('hero.services')}
                    </Button>
                </div>


                <div className="pt-6 text-sm text-muted-foreground">
                </div>
                <div className="pt-6 text-sm text-muted-foreground">
                </div>

            </div>
        </section>
    )
}
export default HeroSection