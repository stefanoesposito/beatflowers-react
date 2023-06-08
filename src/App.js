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
import CookieConsent from 'react-cookie-consent'
import Stef from './images/Stefano.jpeg'
import {FloatingWhatsApp} from 'react-floating-whatsapp'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {useMediaQuery} from '@mui/material'


function App() {
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})
    const {t, i18n} = useTranslation()
    const [gigs, setGigs] = useState([])
    const [isStickyInitialized, setIsStickyInitialized] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    // const URL = 'https://script.google.com/macros/s/AKfycbzCxuZAmM6xE0HNRcPMPgFTshmMU5zryez-jVPloxrg4c9VHo3CsuSFhmlfmySfeHOn/exec'
    const URL = 'https://script.google.com/macros/s/AKfycbwZpeq4v_TSnjAgento9RmcukZJtClAuSq5jmswlKnkJMGaXxsuPLXoQ2Eq-7f07cuW/exec'
    const selectedLanguage = i18n.language

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
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
            <ThemeProvider theme={theme}>
                <CookieConsent
                    location="bottom"
                    buttonText={t('cookieStrip.OK')}
                    declineButtonText={t('cookieStrip.Decline')}
                    cookieName="myAwesomeCookieName2"
                    style={{background: '#2B373B'}}
                    buttonStyle={{color: '#4e503b', fontSize: 13}}
                    expires={150}
                    enableDeclineButton
                >
                    {t('cookieStrip.Text')}
                </CookieConsent>
                <Fragment>
                    <main>
                        <Header/>
                        <NavBar/>
                        <HeroSection/>
                        <About/>
                        <MeetTheBand/>
                        <LiveGigs futureEvents={futureEvents} pastEvents={pastEvents} todayEvent={todayEvent}
                                  selectedLanguage={selectedLanguage} isLoading={isLoading}/>
                        <Videos/>
                    </main>
                    <Footer currentYear={currentYear}/>
                </Fragment>
                <FloatingWhatsApp
                    phoneNumber="+393931518521"
                    accountName={'Stefano 🎸'}
                    statusMessage={t('whatsApp.repliesWithinHour')}
                    chatMessage={t('whatsApp.helloThere')}
                    placeholder={t('whatsApp.typeAMessage')}
                    buttonStyle={{transform: 'scale(0.8)', bottom: isMobile ? 10 : 50, right: isMobile ? 10 : 50}}
                    chatboxStyle={{bottom: isMobile ? 80 : 130}}
                    avatar={Stef}
                    messageDelay={1}
                    allowClickAway
                    allowEsc
                />
            </ThemeProvider>
        </>
    )
}

export default App
