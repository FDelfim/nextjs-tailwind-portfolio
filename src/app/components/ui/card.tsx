import React from 'react'
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import { CiGlobe } from 'react-icons/ci';
import Link from 'next/link';
import { Project } from '@/types/project';
import { cn, themeClasses } from '@/app/utils/theme';
import { useTranslation } from 'react-i18next';

export default function Card(props: Project) {
    const { t } = useTranslation();
    const { img, title, technologies, subtitle, description, app, repo, info, author } = props;

    return (
        <div className='flex flex-col h-full w-full'>
            <div className='relative w-full'>
                <div className={cn(
                    'relative w-full',
                    'aspect-square',
                    'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900',
                    'sm:h-64 md:h-72 lg:h-80',
                    'flex items-center justify-center',
                    'overflow-hidden rounded-t-xl'
                )}>
                    <img 
                        className={cn(
                            'w-full h-full',
                            'object-contain p-4',
                            'transition-transform duration-300 hover:scale-105',
                            'max-w-[90%] max-h-[90%]'
                        )}
                        loading='lazy' 
                        src={img} 
                        alt={title} 
                    />
                </div>
            </div>

            <div className={cn(
                'flex flex-col p-6 rounded-b-xl h-full justify-between',
                themeClasses.card.primary,
                themeClasses.border.primary
            )}>
                <div className='space-y-4'>
                    <div>
                        <h2 className={cn('text-2xl font-bold font-sans', themeClasses.projectText.title)}>{title}</h2>
                        <h2 className={cn('text-sm mt-1 font-light', themeClasses.projectText.subtitle)}>{subtitle}</h2>
                    </div>

                    <div className='flex gap-3'>
                        {app && (
                            <Link 
                                href={app} 
                                target='_blank' 
                                className={cn(
                                    'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300',
                                    'bg-blue-500 dark:bg-blue-400 text-white hover:bg-blue-600 dark:hover:bg-blue-500',
                                    'font-medium'
                                )}
                            >
                                <CiGlobe size={20} />
                                <span>{t('actions.viewApp')}</span>
                            </Link>
                        )}
                        {repo && (
                            <Link 
                                href={repo} 
                                target='_blank' 
                                className={cn(
                                    'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300',
                                    'bg-gray-600 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600',
                                    'font-medium'
                                )}
                            >
                                <FaGithub size={20} />
                                <span>{t('actions.viewRepo')}</span>
                            </Link>
                        )}
                    </div>

                    <div className={cn('text-sm', themeClasses.projectText.description)}>
                        <span dangerouslySetInnerHTML={{ __html: description }}></span>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                        <span className={cn('text-sm font-medium', themeClasses.text.primary)}>
                            Tecnologias:
                        </span>
                        <div className='flex flex-wrap gap-1'>
                            {technologies?.map((tech, index) => (
                                <span 
                                    key={index}
                                    className={cn(
                                        'px-2 py-1 rounded-md text-xs font-medium',
                                        'bg-gray-100 dark:bg-gray-700',
                                        'text-gray-700 dark:text-gray-200'
                                    )}
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='space-y-1'>
                        <h3 className={cn('font-medium', themeClasses.text.primary)}>Autores</h3>
                        <div className='space-y-1'>
                            {author.map((auth, index) => (
                                <div key={index}>
                                    <a 
                                        className='text-blue-500 dark:text-blue-400 hover:underline text-sm' 
                                        href={auth.url} 
                                        target={auth.url !== '#home' ? "_blank" : ''}
                                    >
                                        {auth.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {info && (
                    <div className=' flex justify-end'>
                        <button 
                            className={cn(
                                'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300',
                                'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600',
                                'font-medium'
                            )}
                        >
                            <FaInfoCircle size={20} />
                            <span>Mais Informações</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}