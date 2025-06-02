'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    pt: {
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',
        
        'projects.title': 'Meus Projetos',
        'projects.viewApp': 'Acessar Aplicação',
        'projects.viewCode': 'Ver Código',
        'projects.technologies': 'Tecnologias',
        'projects.authors': 'Autores',
        'projects.moreInfo': 'Mais Informações',
        
        'about.title': 'Sobre Mim',
        'about.description': 'Desenvolvedor Full Stack apaixonado por criar soluções inovadoras',
        
        'contact.title': 'Entre em Contato',
        'contact.email': 'Email',
        'contact.message': 'Mensagem',
        'contact.send': 'Enviar',
        
        'footer.rights': 'Todos os direitos reservados',
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        
        'projects.title': 'My Projects',
        'projects.viewApp': 'View App',
        'projects.viewCode': 'View Code',
        'projects.technologies': 'Technologies',
        'projects.authors': 'Authors',
        'projects.moreInfo': 'More Info',
        
        'about.title': 'About Me',
        'about.description': 'Full Stack Developer passionate about creating innovative solutions',
        
        'contact.title': 'Get in Touch',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.send': 'Send',
        
        'footer.rights': 'All rights reserved',
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('pt');

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations[typeof language]] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

export function useLanguageToggle() {
    const { language, setLanguage } = useLanguage();
    
    const toggleLanguage = () => {
        setLanguage(language === 'pt' ? 'en' : 'pt');
    };

    return { language, toggleLanguage };
} 