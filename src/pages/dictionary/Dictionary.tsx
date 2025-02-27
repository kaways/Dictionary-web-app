
import { useState, useEffect } from 'react';
import { DictionaryHeader } from '@/pages/dictionary/DictionaryHeader';
import { DictionaryContent } from '@/pages/dictionary/DictionaryContent';

export const Dictionary = () => {
    const [selectedFont, setSelectedFont] = useState('Inter');
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div style={{ fontFamily: selectedFont }} className="mx-auto max-w-2xl items-center gap-x-4 p-6 text-black dark:text-white">
            <DictionaryHeader onFontChange={setSelectedFont} selectedFont={selectedFont} theme={theme} onThemeChange={setTheme} />
            <DictionaryContent />
        </div>
    )
}

export default Dictionary;
