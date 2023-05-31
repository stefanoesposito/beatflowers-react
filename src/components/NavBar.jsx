import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import {useTranslation} from 'react-i18next'

const NavBar = () => {
    const {t} = useTranslation()

    const handleAddToHomeScreen = () => {
        if ('deferredPrompt' in window) {
            window.deferredPrompt.prompt();
            window.deferredPrompt.userChoice.then((choiceResult) => {
                // Reset the deferredPrompt variable
                window.deferredPrompt = null;
            });
        }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand beatles" href="/">
                    BeaT FlowerS
                </a>
                <LanguageSwitcher/>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_1">
                                {t('menu.Home')}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_2">
                                {t('menu.About')}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_3">
                                {t('menu.Band')}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_4">
                                {t('menu.Live')}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_5">
                                {t('menu.Videos')}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_6">
                                {t('menu.Contacts')}
                            </a>
                        </li>

                        <li className="nav-item" onClick={handleAddToHomeScreen}>
                            <i className="nav-link click-scroll text-white bi-box-arrow-down" style={{cursor: 'pointer'}}></i>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar