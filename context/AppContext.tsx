'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Locale = 'en' | 'ar';
type Theme = 'light' | 'dark';

interface AppContextType {
  locale: Locale;
  theme: Theme;
  setLocale: (locale: Locale) => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  toggleLocale: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load from local storage on initial mount
    const savedLocale = localStorage.getItem('lumina_locale') as Locale;
    const savedTheme = localStorage.getItem('lumina_theme') as Theme;

    if (savedLocale) setLocaleState(savedLocale);
    if (savedTheme) setThemeState(savedTheme);
    else {
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setThemeState('dark');
      }
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Apply theme
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('lumina_theme', theme);

    // Apply locale
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lumina_locale', locale);

  }, [theme, locale, mounted]);

  const setLocale = (newLocale: Locale) => setLocaleState(newLocale);
  const setTheme = (newTheme: Theme) => setThemeState(newTheme);

  const toggleTheme = () => setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  const toggleLocale = () => setLocaleState(prev => prev === 'en' ? 'ar' : 'en');

  // Default context value to use during SSR before mounting
  const contextValue = {
    locale,
    theme,
    setLocale,
    setTheme,
    toggleTheme,
    toggleLocale
  };

  // We can render a hidden div or just render children with default context during SSR.
  // Next.js will hydrate and then useEffect will run to update state.
  return (
    <AppContext.Provider value={contextValue}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden', display: 'contents' }}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
