'use client'

import React from 'react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('pt')}
        className={`px-2 py-1 rounded ${language === 'pt' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        EN
      </button>
    </div>
  );
} 