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
            <MenuItem value="it-IT">🇮🇹</MenuItem>
            <MenuItem value="en-GB">🇬🇧</MenuItem>
            <MenuItem value="fr-FR">🇫🇷</MenuItem>
            <MenuItem value="es-ES">🇪🇸</MenuItem>
            <MenuItem value="de-DE">🇩🇪</MenuItem>
            <MenuItem value="pt-BR">🇧🇷</MenuItem>
            <MenuItem value="ja-JA">🇯🇵</MenuItem>
            <MenuItem value="sv-SE">🇸🇪</MenuItem>
        </Select>
    );
}

export default LanguageSwitcher;
