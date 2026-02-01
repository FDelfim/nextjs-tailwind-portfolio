'use client'

import React from 'react'
import Experience from './ui/Experience'
import { useTranslation } from 'react-i18next'
import '../../i18n'
import { cn } from '@/app/utils/theme'
import { FaBriefcase, FaDivide } from 'react-icons/fa'

export default function Experiences() {
    const { t } = useTranslation();
    const experiences = t('experience.items', { returnObjects: true }) as unknown as any[];

    return (
        <section className="py-16" id="experience">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className={cn(
                        'text-3xl md:text-4xl font-bold mb-4',
                        'bg-gradient-to-b dark:from-yellow-300 dark:to-yellow-500 from-blue-500 to-blue-800 bg-clip-text text-transparent'
                    )}>
                        {t('experience.title')}
                    </h2>
                    <p className={cn('text-lg text-gray-600 dark:text-gray-400 max-w-4xl')}>
                        {t('experience.subtitle')}
                    </p>
                </div>

                <div className="relative">
                    <div className=" hidden md:block absolute left-0 top-0 bottom-0 md:w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                    <div className="space-y-8">
                        {Array.isArray(experiences) && experiences.map((exp, index) => (
                            <Experience 
                                key={index}
                                companyLogo={exp.company === 'Econodata' ? '/assets/econodata.jpg' : '/assets/sicoob.png'} 
                                company={exp.company} 
                                role={exp.role} 
                                technologies={exp.technologies} 
                                startDate={exp.startDate} 
                                endDate={exp.endDate}
                                location={exp.location}
                                description={exp.description}
                                achievements={exp.achievements}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
