import React from 'react'
import { Language } from '@/contexts/LanguageContext'
import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/hooks/useLanguage.tsx'

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage()

    const languages: { code: Language; name: string; flag: string }[] = [
        { code: 'uk', name: 'Українська', flag: '🇺🇦' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
    ]

    return (
        <div className="relative group">
            <button className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors border border-amber-700 rounded-full w-12 h-12 justify-center bg-gray-900 hover:bg-gray-800">
                <span className="text-3xl font-medium">
                    {languages.find((lang) => lang.code === language)?.flag}
                </span>
            </button>

            <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-green-500/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={cn(
                            'w-full px-4 py-2 text-left text-sm hover:bg-green-500/10 transition-colors flex items-center space-x-3 first:rounded-t-lg last:rounded-b-lg',
                            language === lang.code
                                ? 'bg-green-500/20 text-green-400'
                                : 'text-gray-300',
                        )}
                    >
                        <span className="text-2xl">{lang.flag}</span>
                        <span>{lang.name}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default LanguageSwitcher
