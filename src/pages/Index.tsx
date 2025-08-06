import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import BrandsSection from '@/components/BrandsSection.tsx'
import FAQSection from '@/components/FAQSection.tsx'
import ContactSection from '@/components/ContactSection.tsx'

const Index = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main>
                <HeroSection />
                <Features />
                <BrandsSection />
                <Testimonials />
                <Pricing />
                <FAQSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    )
}

export default Index
