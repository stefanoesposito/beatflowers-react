import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
// import './App.css';
import './index.css'
import Footer from './components/Footer'
import {useTranslation} from 'react-i18next'
import LanguageSwitcher from './components/LanguageSwitcher'
import {addSmoothScroll, clickScroll, initializeStickyNavbar} from './scripts/customScripts'
import About from './components/About'
import MeetTheBand from './components/MeetTheBand'
import Videos from './components/Videos'
import LiveGigs from './components/LiveGigs'

function App() {
    const {t, i18n} = useTranslation()
    const [gigs, setGigs] = useState([])
    const [isStickyInitialized, setIsStickyInitialized] = useState(false)
    const URL =
        'https://script.google.com/macros/s/AKfycbyuWMRenGVIhCmF67ThXYyJSYvSO-NzO1D_cLM5xsqL2iKTz54Ek9OygqzBLCzhibty/exec'

    const selectedLanguage = i18n.language
    const getData = async () => {
        try {
            const response = await axios.get(URL)
            setGigs(response.data.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    let currentYear = new Date().getFullYear()

    useEffect(() => {
        clickScroll(window.jQuery)
        addSmoothScroll(window.jQuery)
        if (!isStickyInitialized) {
            initializeStickyNavbar(window.jQuery)
            setIsStickyInitialized(true)
        }
    }, [isStickyInitialized])



    return (
        <>
            {/*HEADER AND NAV*/}
            <Fragment>
                <main>
                    <header className="site-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12 d-flex flex-wrap">
                                    <p className="d-flex me-4 mb-0">
                                        <i className="bi bi-music-note-beamed me-2"></i>
                                        <strong className="text-dark">
                                            #BeatlesCover Acoustic Trio
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </header>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                                Beat FlowerS
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
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <section className="hero-section" id="section_1">
                        <div className="section-overlay"></div>

                        <div className="container d-flex justify-content-center align-items-center">
                            <div className="row">
                                <div className="col-12 mt-auto mb-5 text-center">
                                    <small>The</small>

                                    <h1 className="text-white mb-5">Beat FlowerS</h1>

                                    <a className="btn custom-btn smoothscroll" href="#section_2">
                                        {t('letsBegin')}
                                    </a>
                                </div>

                                <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
                                    <div className="date-wrap">
                                        <h5 className="text-white"></h5>
                                    </div>

                                    <div className="location-wrap mx-auto py-3 py-lg-0">
                                        <h5 className="text-white">
                                            <i className="custom-icon bi-geo-alt me-2"></i>
                                            Naples, Italy
                                        </h5>
                                    </div>

                                    <div className="social-share">
                                        <ul className="social-icon d-flex align-items-center justify-content-center">
                                            <span className="text-white me-3">{t('Follow')}:</span>

                                            <li className="social-icon-item">
                                                <a
                                                    href="https://facebook.com/people/Beat-FlowerS/100063526721631"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="social-icon-link"
                                                >
                                                    <span className="bi-facebook"></span>
                                                </a>
                                            </li>

                                            <li className="social-icon-item">
                                                <a
                                                    href="https://instagram.com/beat.flowers"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="social-icon-link"
                                                >
                                                    <span className="bi-instagram"></span>
                                                </a>
                                            </li>

                                            <li className="social-icon-item">
                                                <a
                                                    href="https://www.youtube.com/@beat.flowers"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="social-icon-link"
                                                >
                                                    <span className="bi-youtube"></span>
                                                </a>
                                            </li>

                                            <li className="social-icon-item">
                                                <a
                                                    href="https://www.tiktok.com/@beat.flowers"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="social-icon-link"
                                                >
                                                    <span className="bi-tiktok"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="video-wrap">
                            <video autoPlay loop muted className="custom-video" poster="">
                                <source
                                    src={
                                        process.env.PUBLIC_URL + '/assets/video/beat-flowers.mp4'
                                    }
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    {/*ABOUT*/}
                    <About/>


                    {/*MEET THE BAND*/}
                    <MeetTheBand/>

                    {/*GIGS*/}
                    <LiveGigs gigs={gigs} selectedLanguage={selectedLanguage} />

                    {/*VIDEOS*/}
                    <Videos/>
                </main>
                <Footer currentYear={currentYear}/>
            </Fragment>
        </>
    )
}

export default App
