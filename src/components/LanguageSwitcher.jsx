import React from "react";
import { useTranslation } from "react-i18next";
import {Select, MenuItem} from '@mui/material'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const supportedLanguages = ['en', 'it', 'fr', 'es', 'de', 'nl', 'pt', 'cs', 'sv', 'pl', 'ja', 'hi', 'zh'];

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };


    return (
        <Select value={supportedLanguages.includes(i18n.language) ? i18n.language : 'en'} onChange={handleChange}>
            <MenuItem value="it" title={'Italiano'} aria-label={'Cambia lingua in Italiano'}><span className="flag fi fi-it"></span></MenuItem>
            <MenuItem value="en" title={'English'} aria-label={'Switch language to English'}><span className="flag fi fi-gb"></span></MenuItem>
            <MenuItem value="fr" title={'Français'} aria-label={'Changer la langue en Français'}><span className="flag fi fi-fr"></span></MenuItem>
            <MenuItem value="es" title={'Español'} aria-label={'Cambiar idioma a Español'}><span className="flag fi fi-es"></span></MenuItem>
            <MenuItem value="de" title={'Deutsch'} aria-label={'Sprache wechseln zu Deutsch'}><span className="flag fi fi-de"></span></MenuItem>
            <MenuItem value="nl" title={'Nederlands'} aria-label={'Taal wijzigen in Nederlands'}><span className="flag fi fi-nl"></span></MenuItem>
            <MenuItem value="pt" title={'Português'} aria-label={'Mudar idioma para Português'}><span className="flag fi fi-br"></span></MenuItem>
            <MenuItem value="cs" title={'čeština'} aria-label={'Změnit jazyk na češtinu'}><span className="flag fi fi-cz"></span></MenuItem>
            <MenuItem value="sv" title={'Svenska'} aria-label={'Byt språk till Svenska'}><span className="flag fi fi-se"></span></MenuItem>
            <MenuItem value="pl" title={'Polski'} aria-label={'Zmień język na Polski'}><span className="flag fi fi-pl"></span></MenuItem>
            <MenuItem value="ja" title={'日本'} aria-label={'言語を日本語に切り替える'}><span className="flag fi fi-jp"></span></MenuItem>
            <MenuItem value="hi" title={'हिंदी'} aria-label={'भाषा हिंदी में बदलें'}><span className="flag fi fi-in"></span></MenuItem>
            <MenuItem value="zh" title={'中文'} aria-label={'切换语言为中文'}><span className="flag fi fi-cn"></span></MenuItem>

        </Select>
    );
}

export default LanguageSwitcher;
