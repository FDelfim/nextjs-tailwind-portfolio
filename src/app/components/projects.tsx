'use client'

import React from 'react'
import Card from './ui/card'
import { Project } from '@/types/project';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { cn } from '../utils/theme';

export default function Projects() {
    const { t } = useTranslation();
    const projects = t('projects.items', { returnObjects: true }) as Project[];

    return (
        <div id='projects' className='py-4'>
            <div className='mb-12'>
                <h2 className={cn(
                    'text-3xl md:text-4xl font-bold mb-4',
                    'bg-gradient-to-b dark:from-yellow-300 dark:to-yellow-500 from-blue-500 to-blue-800 bg-clip-text text-transparent'
                )}>
                    {t('projects.title')}
                </h2>
                <p className={cn('text-lg text-gray-600 dark:text-gray-400 max-w-4xl')}>
                    {t('projects.subtitle')}
                </p>
            </div>
            <div className='flex flex-wrap justify-center'>
                {Array.isArray(projects) && projects.map((project, index) => (
                    <div key={index} className='py-2 w-full md:w-1/2 px-2'>
                        <Card {...project} />
                    </div>
                ))}
            </div>
        </div>
    )
}
