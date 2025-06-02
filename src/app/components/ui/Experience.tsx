import React from 'react';
import Image from 'next/image';
import { cn, themeClasses } from '@/app/utils/theme';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ExperienceProps {
    companyLogo: string;
    company: string;
    role: string;
    technologies: string[];
    startDate: string;
    endDate: string;
    location?: string;
    description?: string;
    achievements?: string[];
}

export default function Experience({
    companyLogo,
    company,
    role,
    technologies,
    startDate,
    endDate,
    location = 'Remoto',
    description,
    achievements = []
}: ExperienceProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
        >

            <div className={cn(
                'md:ml-8 rounded-xl p-6',
                'border border-gray-200 dark:border-gray-700',
                'bg-white dark:bg-gray-800',
                'shadow-sm hover:shadow-md transition-shadow duration-300'
            )}>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                        <Image
                            src={companyLogo}
                            alt={`${company} logo`}
                            fill
                            className="object-contain p-2"
                        />
                    </div>

                    <div className="flex-1 space-y-2">
                        <div>
                            <h3 className={cn('text-xl font-bold', themeClasses.text.primary)}>
                                {role}
                            </h3>
                            <h4 className={cn('text-lg font-medium text-blue-500 dark:text-blue-400')}>
                                {company}
                            </h4>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <FaCalendarAlt className="text-blue-500" />
                                <span>{startDate} - {endDate}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <FaMapMarkerAlt className="text-blue-500" />
                                <span>{location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {description && (
                    <div className={cn('mt-4 text-sm', themeClasses.text.secondary)}>
                        <p>{description}</p>
                    </div>
                )}

                {achievements.length > 0 && (
                    <div className="mt-4">
                        <h5 className={cn('text-sm font-medium mb-2', themeClasses.text.primary)}>
                            Principais Conquistas:
                        </h5>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            {achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="mt-4">
                    <h5 className={cn('text-sm font-medium mb-2', themeClasses.text.primary)}>
                        Tecnologias:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className={cn(
                                    'px-3 py-1 rounded-full text-xs font-medium',
                                    'bg-blue-50 dark:bg-blue-900/30',
                                    'text-blue-600 dark:text-blue-400',
                                    'border border-blue-100 dark:border-blue-800'
                                )}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
