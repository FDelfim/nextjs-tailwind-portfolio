'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../i18n'

export default function Home() {
  const { t } = useTranslation();

  return (
    <div id='home'>
      <div className='flex flex-col lg:flex-row-reverse w-full min-h-[300px] lg:min-h-[400px] lg:pb-20 align-bottom justify-center'>
        <div className='lg:w-2/3 w-full flex items-center'>
          <div>
            <div className='flex'>
              <div className='w-1/3 flex justify-center content-center items-center lg:hidden h-full'>
                <img className='object-cover w-[100px] h-[100px] rounded-full' loading='lazy' src='/assets/avatar.png' alt='Avatar' />
              </div>
              <div className='flex-row justify-center w-2/3 items-center h-full'>
                <h1 className='font-bold text-3xl lg:text-5xl'><span className='text-white-700 text-center lg:text-left'>{t('home.title')}</span></h1>
                <h2 className='mt-2 text-xl lg:text-2xl'>{t('home.subtitle')}</h2>
              </div>
            </div>
            <p className='mt-4 md:text-justify lg:text-justify text-center'>{t('home.description')}</p>
          </div>
        </div>
        <div className='lg:w-1/3 w-full hidden lg:flex justify-center content-center items-center '>
          <img className='object-cover w-[200px] h-[200px] rounded-full' loading='lazy' src='/assets/avatar.png' alt='Avatar' />
        </div>
      </div>
    </div >
  )
}
