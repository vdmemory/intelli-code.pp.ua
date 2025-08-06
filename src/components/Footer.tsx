import React from 'react'
import SocialLinks from '@/components/SocialLinks.tsx'
import { configCompany } from '@/lib/configCompany.ts'
import { useLanguage } from '@/hooks/useLanguage.tsx'

const Footer = () => {

    const { t, language } = useLanguage()

    const handleNavClick = (page: string) => (e: React.MouseEvent) => {
        e.preventDefault()
        const element = document.getElementById(page)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const renderInfo = () => {
        if (language === 'en') {
            return configCompany.infoEng + ' ' + configCompany.addressEng
        }
        return configCompany.info + ' ' + configCompany.address
    }

    return (
        <footer className="w-full py-16 px-6 md:px-12 border-t border-border bg-transparent relative overflow-hidden">

            {/* Background Elements */}
            <div
                className="absolute inset-[-45px] z-0 transition-transform duration-500 ease-out"
                style={{
                    willChange: 'transform',
                    backgroundImage: `url('bg6.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    filter: 'blur(8px)',
                }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

                    <div className="md:col-span-2 space-y-6">
                        <div className="relative flex items-center space-x-2 rounded-full py-1 gap-2 shadow-lg">
                            <img
                                src="logo.png"
                                alt="Logo"
                                className="h-[60px] w-auto object-contain"
                            />

                            <h1 className="font-bold lg:leading-[1.7] md:leading-[1.7]">
                                {configCompany.name}
                            </h1>
                        </div>
                        <p className="text-muted-foreground max-w-xs">
                            {renderInfo()}
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLinks />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium text-lg text-foreground">
                            {t('footer.menu1.title')}
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    onClick={handleNavClick('features')}
                                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    {t('footer.menu1.link1')}
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={handleNavClick('features')}
                                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    {t('footer.menu1.link2')}
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={handleNavClick('prising')}
                                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    {t('footer.menu1.link3')}
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={handleNavClick('features')}
                                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    {t('footer.menu1.link4')}
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={handleNavClick('features')}
                                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    {t('footer.menu1.link5')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium text-lg text-foreground">
                            {t('footer.menu2.title')}
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    onClick={handleNavClick('home')}
                                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    {t('footer.menu2.link1')}
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={handleNavClick('features')}
                                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    {t('footer.menu2.link2')}
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={handleNavClick('contacts')}
                                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    {t('footer.menu2.link3')}
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={handleNavClick('faq')}
                                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    {t('footer.menu2.link4')}
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={handleNavClick('contacts')}
                                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    {t('footer.menu2.link5')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium text-lg text-foreground">
                        </h4>
                        <ul className="space-y-3">

                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
                    <div>© 2025 {configCompany.name}. {
                        language === 'en' ? 'All rights reserved.' : 'Все права защищены.'
                    }</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
