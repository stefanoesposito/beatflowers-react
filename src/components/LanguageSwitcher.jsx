import React from "react";
import { useTranslation } from "react-i18next";
import {Select, MenuItem} from '@mui/material'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const supportedLanguages = ['en', 'it', 'fr', 'es', 'de', 'nl', 'pt', 'cs', 'sv', 'pl', 'ja', 'hi'];

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };


    return (
        <Select value={supportedLanguages.includes(i18n.language) ? i18n.language : 'en'} onChange={handleChange}>
            <MenuItem value="it" title={'Italiano'}><span className="flag fi fi-it"></span></MenuItem>
            <MenuItem value="en" title={'English'}><span className="flag fi fi-gb"></span></MenuItem>
            <MenuItem value="fr" title={'Français'}><span className="flag fi fi-fr"></span></MenuItem>
            <MenuItem value="es" title={'Español'}><span className="flag fi fi-es"></span></MenuItem>
            <MenuItem value="de" title={'Deutsch'}><span className="flag fi fi-de"></span></MenuItem>
            <MenuItem value="nl" title={'Nederlands'}><span className="flag fi fi-nl"></span></MenuItem>
            <MenuItem value="pt" title={'Português'}><span className="flag fi fi-br"></span></MenuItem>
            <MenuItem value="cs" title={'čeština'}><span className="flag fi fi-cz"></span></MenuItem>
            <MenuItem value="sv" title={'Svenska'}><span className="flag fi fi-se"></span></MenuItem>
            <MenuItem value="pl" title={'Polski'}><span className="flag fi fi-pl"></span></MenuItem>
            <MenuItem value="ja" title={'日本'}><span className="flag fi fi-jp"></span></MenuItem>
            <MenuItem value="hi" title={'हिंदी'}><span className="flag fi fi-in"></span></MenuItem>
        </Select>
    );
}

export default LanguageSwitcher;
