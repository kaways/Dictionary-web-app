

import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { BookMinus, Moon } from 'lucide-react';

interface FontSelectorProps {
    selectedFont: string;
    onFontChange: (value: string) => void;
    theme: string;
    onThemeChange: (theme: string) => void;
}

export const DictionaryHeader = ({ onFontChange, selectedFont, theme, onThemeChange }: FontSelectorProps) => {
    const handleFontChange = (value: string) => {
        onFontChange(value);
    };

    const handleToggle = (checked: boolean) => {
        onThemeChange(checked ? "dark" : "light");
    };

    return (

        <div className="flex justify-between mb-8 items-center">
            <BookMinus color="#757575" strokeWidth={1} className="size-6 shrink-0" />

            <div className="flex gap-4 items-center">
                <Select onValueChange={handleFontChange} value={selectedFont}>
                    <SelectTrigger>
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Inter">Sans Seriff</SelectItem>
                        <SelectItem value="Lora">Seriff</SelectItem>
                        <SelectItem value="Inconsolata">Mono</SelectItem>
                    </SelectContent>
                </Select>
                <div>
                    <Switch id="theme-switch" className="dark:bg-[#A445ED]" checked={theme === "dark"} onCheckedChange={handleToggle} />
                </div>
                <div>
                    <Moon className="size-6 shrink-0 text-[#757575] dark:text-[#A445ED]" />
                </div>
            </div>
        </div>
    );
}

export default DictionaryHeader;
