import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
// import './App.css';
import './index.css'
import Footer from './components/Footer'
import {useTranslation} from 'react-i18next'
import {addSmoothScroll, clickScroll, initializeStickyNavbar} from './scripts/customScripts'
import About from './components/About'
import MeetTheBand from './components/MeetTheBand'
import Videos from './components/Videos'
import LiveGigs from './components/LiveGigs'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'

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
                    <NavBar />

                    {/*HERO SECTION*/}
                    <HeroSection />

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
