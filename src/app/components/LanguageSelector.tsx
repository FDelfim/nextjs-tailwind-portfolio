'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { useTheme } from '../context/ThemeContext'
import { themeClasses, cn } from '../utils/theme'

interface Language {
  code: string
  name: string
  flag: string
  alt: string
}

const languages: Language[] = [
  {
    code: 'pt',
    name: 'Português',
    flag: '/assets/svg/br.svg',
    alt: 'Mudar idioma para Português'
  },
  {
    code: 'en',
    name: 'English',
    flag: '/assets/svg/us.svg',
    alt: 'Change language to English'
  }
]

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg',
          themeClasses.button.secondary,
          themeClasses.transition.colors
        )}
      >
        <Image
          src={currentLanguage.flag}
          alt={currentLanguage.alt}
          width={24}
          height={24}
          className="rounded-sm"
        />
        <span className="text-sm">{currentLanguage.name}</span>
        <svg
          className={cn(
            'w-4 h-4',
            themeClasses.transition.transform,
            isOpen ? 'rotate-180' : ''
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={cn(
          'absolute right-0 mt-2 py-2 w-48 rounded-lg shadow-lg z-50',
          themeClasses.background.secondary,
          themeClasses.text.primary
        )}>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                i18n.changeLanguage(language.code)
                setIsOpen(false)
              }}
              className={cn(
                'flex items-center gap-2 w-full px-4 py-2 text-sm',
                themeClasses.transition.colors,
                language.code === i18n.language
                  ? theme === 'dark'
                    ? 'bg-primary-dark bg-opacity-20'
                    : 'bg-primary-light bg-opacity-20'
                  : themeClasses.hover.primary
              )}
            >
              <Image
                src={language.flag}
                alt={language.alt}
                width={24}
                height={24}
                className="rounded-sm"
              />
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 