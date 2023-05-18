import React from "react";
import { useTranslation } from "react-i18next";
import {Select, MenuItem} from '@mui/material'

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Select value={i18n.language} onChange={handleChange}>
            <MenuItem value="it">🇮🇹</MenuItem>
            <MenuItem value="en">🇬🇧</MenuItem>
            <MenuItem value="fr">🇫🇷</MenuItem>
            <MenuItem value="es">🇪🇸</MenuItem>
            <MenuItem value="de">🇩🇪</MenuItem>
            <MenuItem value="br">🇧🇷</MenuItem>
            <MenuItem value="ja">🇯🇵</MenuItem>
        </Select>
    );
}

export default LanguageSwitcher;
