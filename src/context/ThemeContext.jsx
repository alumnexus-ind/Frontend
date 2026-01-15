import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    // Check system preference or local storage, default to 'light'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('site-theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Optional: check system preference
        // return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        return 'light';
    });

    useEffect(() => {
        // Update the HTML attribute so CSS knows which variables to use
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('site-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
