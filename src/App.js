import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
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
import Header from './components/Header'
import CookieConsent from "react-cookie-consent";

function App() {
    const {i18n} = useTranslation()
    const [gigs, setGigs] = useState([])
    const [isStickyInitialized, setIsStickyInitialized] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    // const URL = 'https://script.google.com/macros/s/AKfycbzCxuZAmM6xE0HNRcPMPgFTshmMU5zryez-jVPloxrg4c9VHo3CsuSFhmlfmySfeHOn/exec'
    const URL = 'https://script.google.com/macros/s/AKfycbwZpeq4v_TSnjAgento9RmcukZJtClAuSq5jmswlKnkJMGaXxsuPLXoQ2Eq-7f07cuW/exec'
    const selectedLanguage = i18n.language
    const getData = async () => {
        try {
            const response = await axios.get(URL)
            setGigs(response.data.data)
            setIsLoading(false)
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

    const futureEvents = gigs.futureEvents || []
    const pastEvents = gigs.pastEvents || []
    const todayEvent = gigs.todayEvent || null
    return (
        <>
            <CookieConsent
                location="bottom"
                buttonText="OK"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: 13 }}
                expires={150}
                enableDeclineButton
            >
                This website uses cookies to enhance the user experience.
                {/*<span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>*/}
            </CookieConsent>
            <Fragment>
                <main>
                    <Header/>
                    <NavBar/>
                    <HeroSection/>
                    <About/>
                    <MeetTheBand/>
                    <LiveGigs futureEvents={futureEvents} pastEvents={pastEvents} todayEvent={todayEvent} selectedLanguage={selectedLanguage} isLoading={isLoading} />
                    <Videos/>
                </main>
                <Footer currentYear={currentYear}/>
            </Fragment>
        </>
    )
}

export default App
