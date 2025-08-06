import React from 'react'
import { motion } from 'framer-motion'
import { configCompany } from '@/lib/configCompany.ts'

const SocialLinks = ({
    isHeader = false,
    isLight = false,
}: {
    isHeader?: boolean
    isLight?: boolean
}) => {
    const socialLinks = [
        {
            icon: 'facebook.png',
            href: configCompany.facebook,
            color: '#A01F5D',
        },
        {
            icon: 'insta.png',
            href: configCompany.instagram,
            color: '#FBB216',
        },
        {
            icon: 'upwork.png',
            href: configCompany.upwork,
            color: '#64B232',
        },
    ]

    const links = isHeader ? socialLinks.slice(0, 3) : socialLinks

    return (
        <div className="flex space-x-4 px-3">
            {links.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-amber-700
    ${isLight ? 'bg-white shadow-md hover:shadow-xl' : 'bg-gray-800 hover:shadow-lg'}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img
                        src={social.icon}
                        className={`w-5 h-5 transition-all duration-300 ${isLight ? 'filter' : ''}`}
                        alt="social"
                    />
                </motion.a>
            ))}
        </div>
    )
}

export default SocialLinks
