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
            <MenuItem value="it" title={'Italiano'}>&#x1F1EE;&#x1F1F9;</MenuItem>
            <MenuItem value="en" title={'English'}>&#x1F1EC;&#x1F1E7;</MenuItem>
            <MenuItem value="fr" title={'Français'}>&#x1F1EB;&#x1F1F7;</MenuItem>
            <MenuItem value="es" title={'Español'}>&#x1F1EA;&#x1F1F8;</MenuItem>
            <MenuItem value="de" title={'Deutsch'}>&#x1F1E9;&#x1F1EA;</MenuItem>
            <MenuItem value="nl" title={'Nederlands'}>&#x1F1F3;&#x1F1F1;</MenuItem>
            <MenuItem value="pt" title={'Português'}>&#x1F1E7;&#x1F1F7;</MenuItem>
            <MenuItem value="cs" title={'čeština'}>&#x1F1E8;&#x1F1FF;</MenuItem>
            <MenuItem value="sv" title={'Svenska'}>&#x1F1F8;&#x1F1EA;</MenuItem>
            <MenuItem value="pl" title={'Polski'}>&#x1F1F5;&#x1F1F1;</MenuItem>
            <MenuItem value="ja" title={'日本'}>&#x1F1EF;&#x1F1F5;</MenuItem>
            <MenuItem value="hi" title={'हिंदी'}>&#x1F1EE;&#x1F1F3;</MenuItem>
        </Select>
    );
}

export default LanguageSwitcher;
