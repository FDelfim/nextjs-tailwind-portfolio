'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../i18n'

export default function Home() {
  const { t } = useTranslation();

  return (
    <div id='home' className="container mx-auto px-4">
      <div className='flex flex-col-reverse md:flex-row items-center gap-8 py-12 md:py-20'>
        <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
          <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl'>
            <span className='text-white-700'>{t('home.title')}</span>
          </h1>
          <h2 className='mt-4 text-xl md:text-2xl lg:text-3xl text-gray-300'>{t('home.subtitle')}</h2>
          <p className='mt-6 text-lg md:text-xl text-gray-400 max-w-2xl'>{t('home.description')}</p>
        </div>
      </div>
    </div>
  )
}
