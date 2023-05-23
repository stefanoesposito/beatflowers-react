import React from "react";
import { useTranslation } from "react-i18next";
import {Select, MenuItem} from '@mui/material'

const supportedLanguages = ['en', 'it', 'fr', 'es', 'de', 'nl', 'pt', 'cs', 'sv', 'pl', 'ja', 'hi'];

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };


    return (
        <Select value={supportedLanguages.includes(i18n.language) ? i18n.language : 'en'} onChange={handleChange}>
            <MenuItem value="en" title={'English'}>🇬🇧</MenuItem>
            <MenuItem value="it" title={'Italiano'}>🇮🇹</MenuItem>
            <MenuItem value="fr" title={'Français'}>🇫🇷</MenuItem>
            <MenuItem value="es" title={'Español'}>🇪🇸</MenuItem>
            <MenuItem value="de" title={'Deutsch'}>🇩🇪</MenuItem>
            <MenuItem value="nl" title={'Nederlands'}>🇳🇱</MenuItem>
            <MenuItem value="pt" title={'Português'}>🇧🇷</MenuItem>
            <MenuItem value="cs" title={'čeština'}>🇨🇿</MenuItem>
            <MenuItem value="sv" title={'Svenska'}>🇸🇪</MenuItem>
            <MenuItem value="pl" title={'Polski'}>🇵🇱</MenuItem>
            <MenuItem value="ja" title={'日本'}>🇯🇵</MenuItem>
            <MenuItem value="hi" title={'हिंदी'}>🇮🇳</MenuItem>
        </Select>
    );
}

export default LanguageSwitcher;
