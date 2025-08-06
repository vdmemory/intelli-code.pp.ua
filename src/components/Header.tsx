import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import SocialLinks from '@/components/SocialLinks.tsx'
import LanguageSwitcher from '@/components/LanguageSwitcher.tsx'
import { configCompany } from '@/lib/configCompany.ts'
import { useLanguage } from '@/hooks/useLanguage.tsx'

const Header = () => {
    const [activePage, setActivePage] = useState('features')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isDarkMode] = useState(true) // Default to light mode

    const { language } = useLanguage()

    const ukTitles = {
        features: 'Особливості',
        pricing: 'Ціни',
        faq: 'Питання та відповіді',
        contacts: 'Контакти',
    }

    const engTitles = {
        features: 'Features',
        pricing: 'Pricing',
        faq: 'FAQ',
        contacts: 'Contacts',
    }

    useEffect(() => {
        // Apply the theme to the document when it changes
        if (isDarkMode) {
            document.documentElement.classList.remove('light-mode')
            document.documentElement.classList.add('dark-mode')
        } else {
            document.documentElement.classList.remove('dark-mode')
            document.documentElement.classList.add('light-mode')
        }
    }, [isDarkMode])

    const handleNavClick = (page: string) => (e: React.MouseEvent) => {
        e.preventDefault()
        setActivePage(page)
        const element = document.getElementById(page)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileMenuOpen(false)
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <div className="sticky top-0 z-50 pt-3 px-4">
            <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
                <div
                    onClick={handleNavClick('home')}
                    className="w-auto md:w-auto relative flex items-center space-x-2 rounded-full px-6 py-1 backdrop-blur-md gap-2 bg-background/80 border border-amber-700 shadow-lg cursor-pointer"
                >
                    <img
                        src="logo.png"
                        alt="Logo"
                        className="h-[60px] w-auto object-contain"
                    />

                    <h1 className="font-bold lg:leading-[1.7] md:leading-[1.7]">
                        {configCompany.name}
                    </h1>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center absolute left-2/3 transform -translate-x-1/2">
                    <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-amber-700 shadow-lg">
                        <ToggleGroup
                            type="single"
                            value={activePage}
                            onValueChange={(value) =>
                                value && setActivePage(value)
                            }
                        >
                            <ToggleGroupItem
                                value="features"
                                className={cn(
                                    'px-4 py-2 rounded-full transition-colors relative',
                                    activePage === 'features'
                                        ? 'text-accent-foreground bg-accent'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                                )}
                                onClick={handleNavClick('features')}
                            >
                                {language === 'uk'
                                    ? ukTitles.features
                                    : engTitles.features}
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="pricing"
                                className={cn(
                                    'px-4 py-2 rounded-full transition-colors relative',
                                    activePage === 'pricing'
                                        ? 'text-accent-foreground bg-accent'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                                )}
                                onClick={handleNavClick('pricing')}
                            >
                                {language === 'uk'
                                    ? ukTitles.pricing
                                    : engTitles.pricing}
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="faq"
                                className={cn(
                                    'px-4 py-2 rounded-full transition-colors relative',
                                    activePage === 'dashboard'
                                        ? 'text-accent-foreground bg-accent'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                                )}
                                onClick={handleNavClick('faq')}
                            >
                                {language === 'uk'
                                    ? ukTitles.faq
                                    : engTitles.faq}
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="contacts"
                                className={cn(
                                    'px-4 py-2 rounded-full transition-colors relative',
                                    activePage === 'contacts'
                                        ? 'text-accent-foreground bg-accent'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                                )}
                                onClick={handleNavClick('contacts')}
                            >
                                {language === 'uk'
                                    ? ukTitles.contacts
                                    : engTitles.contacts}
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                    <span className="mx-4 text-muted-foreground"></span>
                    <LanguageSwitcher />
                    <span className="mx-4 text-muted-foreground"></span>
                    <SocialLinks isHeader />
                </nav>

                {/* Mobile navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
                        <div className="flex flex-col gap-4">
                            <a
                                href="#features"
                                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                                    activePage === 'features'
                                        ? 'bg-accent text-accent-foreground'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                }`}
                                onClick={handleNavClick('features')}
                            >
                                {language === 'uk'
                                    ? ukTitles.features
                                    : engTitles.features}
                            </a>
                            <a
                                href="#pricing"
                                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                                    activePage === 'pricing'
                                        ? 'bg-accent text-accent-foreground'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                }`}
                                onClick={handleNavClick('pricing')}
                            >
                                {language === 'uk'
                                    ? ukTitles.pricing
                                    : engTitles.pricing}

                            </a>
                            <a
                                href="#faq"
                                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                                    activePage === 'faq'
                                        ? 'bg-accent text-accent-foreground'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                }`}
                                onClick={handleNavClick('faq')}
                            >
                                {language === 'uk'
                                    ? ukTitles.faq
                                    : engTitles.faq}

                            </a>
                            <a
                                href="#contacts"
                                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                                    activePage === 'contacts'
                                        ? 'bg-accent text-accent-foreground'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                }`}
                                onClick={handleNavClick('contacts')}
                            >
                                {language === 'uk'
                                    ? ukTitles.contacts
                                    : engTitles.contacts}
                            </a>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}

export default Header
