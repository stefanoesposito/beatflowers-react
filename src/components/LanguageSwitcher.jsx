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
            <MenuItem value="it-IT" title={'Italiano'}>🇮🇹</MenuItem>
            <MenuItem value="en-GB" title={'English'}>🇬🇧</MenuItem>
            <MenuItem value="fr-FR" title={'Français'}>🇫🇷</MenuItem>
            <MenuItem value="es-ES" title={'Español'}>🇪🇸</MenuItem>
            <MenuItem value="de-DE" title={'Deutsch'}>🇩🇪</MenuItem>
            <MenuItem value="pt-BR" title={'Português'}>🇧🇷</MenuItem>
            <MenuItem value="ja-JA" title={'日本'}>🇯🇵</MenuItem>
            <MenuItem value="sv-SE" title={'Svenska'}>🇸🇪</MenuItem>
            <MenuItem value="hi-IN" title={'हिंदी'}>🇮🇳</MenuItem>
        </Select>
    );
}

export default LanguageSwitcher;
