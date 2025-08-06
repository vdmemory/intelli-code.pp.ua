import React from 'react'
import SocialLinks from '@/components/SocialLinks.tsx'
import { configCompany } from '@/lib/configCompany.ts'

const Footer = () => {
    return (
        <footer className="w-full py-16 px-6 md:px-12 border-t border-border bg-transparent relative overflow-hidden">

            {/* Background Elements */}
            <div
                // ref={backgroundRef}
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

            <div className="max-w-7xl mx-auto">
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
                            {configCompany.info}{' '}{configCompany.address}
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLinks />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium text-lg text-foreground">
                            Product
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#features"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Integrations
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Updates
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Roadmap
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium text-lg text-foreground">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Press
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Contact
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
                    <div>© 2025 Cosmos Tasks. All rights reserved.</div>
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
                        <a
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
