import React from 'react'
import {useTranslation} from 'react-i18next'

const Footer = ({currentYear}) => {
    const { t } = useTranslation();

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
        <footer className="site-footer" id="section_6">
            <div className="site-footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <h2 className="text-white mb-lg-0 beatles">BeaT FlowerS</h2>
                        </div>

                        <div className="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
                            <ul className="social-icon d-flex justify-content-lg-end">
                                <li className="social-icon-item">
                                    <a href="https://facebook.com/people/Beat-FlowerS/100063526721631" target="_blank"
                                       rel="noopener noreferrer" className="social-icon-link">
                                        <span className="bi-facebook"></span>
                                    </a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="https://instagram.com/beat.flowers" target="_blank" rel="noopener noreferrer"
                                       className="social-icon-link">
                                        <span className="bi-instagram"></span>
                                    </a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="https://www.youtube.com/@beat.flowers" target="_blank" rel="noopener noreferrer"
                                       className="social-icon-link">
                                        <span className="bi-youtube"></span>
                                    </a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="https://www.tiktok.com/@beat.flowers" target="_blank" rel="noopener noreferrer"
                                       className="social-icon-link">
                                        <span className="bi-tiktok"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12 mb-4 pb-2">
                        <h5 className="site-footer-title mb-3">{t('Links')}</h5>

                        <ul className="site-footer-links">
                            <li className="site-footer-link-item">
                                <a href="#section_1" className="site-footer-link">{t('menu.Home')}</a>
                            </li>

                            <li className="site-footer-link-item">
                                <a href="#section_2" className="site-footer-link">{t('menu.About')}</a>
                            </li>

                            <li className="site-footer-link-item">
                                <a href="#section_3" className="site-footer-link">{t('menu.Band')}</a>
                            </li>

                            <li className="site-footer-link-item">
                                <a href="#section_4" className="site-footer-link">{t('menu.Live')}</a>
                            </li>

                            <li className="site-footer-link-item">
                                <a href="#section_5" className="site-footer-link">{t('menu.Videos')}</a>
                            </li>

                            <li className="site-footer-link-item">
                                <a href="#section_6" className="site-footer-link">{t('menu.Contacts')}</a>
                            </li>

                            <li className="site-footer-link-item" onClick={handleAddToHomeScreen}>
                                <i className="nav-link click-scroll text-white bi-download" style={{cursor: 'pointer'}} title={t('Install')}></i>
                            </li>
                        </ul>

                        <ul className="social-icon d-flex justify-content-lg-start">
                            <li className="social-icon-item">
                                <a href="https://facebook.com/people/Beat-FlowerS/100063526721631" target="_blank"
                                   rel="noopener noreferrer" className="social-icon-link">
                                    <span className="bi-facebook"></span>
                                </a>
                            </li>

                            <li className="social-icon-item">
                                <a href="https://instagram.com/beat.flowers" target="_blank" rel="noopener noreferrer"
                                   className="social-icon-link">
                                    <span className="bi-instagram"></span>
                                </a>
                            </li>

                            <li className="social-icon-item">
                                <a href="https://www.youtube.com/@beat.flowers" target="_blank" rel="noopener noreferrer"
                                   className="social-icon-link">
                                    <span className="bi-youtube"></span>
                                </a>
                            </li>

                            <li className="social-icon-item">
                                <a href="https://www.tiktok.com/@beat.flowers" target="_blank" rel="noopener noreferrer"
                                   className="social-icon-link">
                                    <span className="bi-tiktok"></span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                        <h5 className="site-footer-title mb-3">{t('menu.Contacts')}</h5>

                        <p className="text-white d-flex mb-1">
                            <a href="tel:00393395962296" className="site-footer-link">
                                +39 339 596 22 96 (Marco)
                            </a>
                        </p>
                        <p className="text-white d-flex mb-1">
                            <a href="tel:00393931518521" className="site-footer-link">
                                +39 393 151 85 21 (Stefano)
                            </a>
                        </p>
                        <p className="text-white d-flex mb-1">
                            <a href="tel:00393389333810" className="site-footer-link">
                                +39 338 933 38 10 (Patrizio)
                            </a>
                        </p>

                        <p className="text-white d-flex">
                            <a href="mailto:beatflowers.it@gmail.com" className="site-footer-link">
                                beatflowers.it@gmail.com
                            </a>
                        </p>
                    </div>

                </div>
            </div>

            <div className="site-footer-bottom">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-12 mt-5">
                            <p className="copyright-text">&copy; <span>{currentYear}</span> - <span className={'beatles'}>BeaT FlowerS</span></p>
                            <p className="copyright-text">Made by: <a href="https://www.linkedin.com/in/stefanoesposito75" target={'_blank'} rel={'noreferrer'}>ilFaro</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer