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

function App() {
    const {i18n} = useTranslation()
    const [gigs, setGigs] = useState([])
    const [isStickyInitialized, setIsStickyInitialized] = useState(false)
    const URL =
        'https://script.google.com/macros/s/AKfycbwAqux2KkczlwJ6ZrKfPVy0rdm7qBs0E8THxrnkZeZF6zInIHm0SYBbH6mQy-ArsH09/exec'

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
            <Fragment>
                <main>
                    <Header/>
                    <NavBar/>
                    <HeroSection/>
                    <About/>
                    <MeetTheBand/>
                    <LiveGigs gigs={gigs} selectedLanguage={selectedLanguage}/>
                    <Videos/>
                </main>
                <Footer currentYear={currentYear}/>
            </Fragment>
        </>
    )
}

export default App
