'use client'

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../i18n'
import LanguageSelector from './LanguageSelector'
import { useTheme } from '../context/ThemeContext'
import { themeClasses, cn } from '../utils/theme'

export default function Navbar() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location
      if (hash) {
        setTimeout(() => {
          const id = hash.replace('#', '')
          const element = document.getElementById(id)
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 50,
              behavior: 'smooth'
            })
          }
        }, 0)
      }
      setIsMenuOpen(false)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <nav className={cn(
      'sticky top-0 z-50',
      themeClasses.background.overlay,
      themeClasses.transition.colors
    )}>
      <div className='flex justify-between items-center py-2 px-4 backdrop-filter backdrop-blur-lg shadow-sm'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            'lg:hidden p-2 rounded-lg',
            themeClasses.button.secondary,
            themeClasses.transition.colors
          )}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className='hidden lg:flex gap-10 py-3 lg:px-40 items-center'>
          {['home', 'projects', 'experience', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={cn(
                'nav-link',
                themeClasses.text.primary,
                themeClasses.transition.colors
              )}
            >
              {t(`nav.${item}`)}
            </a>
          ))}
        </div>

        <div className={cn(
          'lg:hidden fixed top-[60px] left-0 right-0 bg-white',
          themeClasses.background.overlay,
          'backdrop-filter backdrop-blur-lg',
          'transition-all duration-300 ease-in-out',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
          'flex flex-col items-center py-4 gap-4'
        )}>
          {['home', 'projects', 'experience', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={cn(
                'nav-link text-lg',
                themeClasses.text.primary,
                themeClasses.transition.colors
              )}
            >
              {t(`nav.${item}`)}
            </a>
          ))}
        </div>

        {/* Controls (always visible) */}
        <div className='flex items-center gap-4'>
          <button
            onClick={toggleTheme}
            className={cn(
              'p-2 rounded-lg',
              themeClasses.button.secondary,
              themeClasses.transition.colors
            )}
            aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  )
}
