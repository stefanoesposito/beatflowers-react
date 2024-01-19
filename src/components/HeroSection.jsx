import React from 'react'
import {useTranslation} from 'react-i18next'
import MyGigzLogo from '../images/MiGigz-logo-social.jpg'

const HeroSection = () => {
    const {t} = useTranslation()

    return (
        <section className="hero-section" id="section_1">
            <div className="section-overlay"></div>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12 mt-auto mb-5 text-center">
                        <small className={'beatles'}>the</small>

                        <h1 className="text-white mb-5 beatles">BeaT FlowerS</h1>

                        <a className="btn custom-btn smoothscroll" href="#section_2">
                            {t('letsBegin')}
                        </a>
                    </div>

                    <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
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
                                        href="https://www.mygigz.live/beatflowers"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon-link"
                                    >
                                        <img src={MyGigzLogo} alt={MyGigzLogo} className="mygigzLogo"></img>
                                    </a>
                                </li>
                                <li className="social-icon-item facebook-link">
                                    <a
                                        href="https://facebook.com/people/Beat-FlowerS/100063526721631"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon-link"
                                    >
                                        <span className="bi-facebook"></span>
                                    </a>
                                </li>

                                <li className="social-icon-item instagram-link">
                                    <a
                                        href="https://instagram.com/beat.flowers"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon-link"
                                    >
                                        <span className="bi-instagram"></span>
                                    </a>
                                </li>

                                <li className="social-icon-item youtube-link">
                                    <a
                                        href="https://www.youtube.com/@beat.flowers"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon-link"
                                    >
                                        <span className="bi-youtube"></span>
                                    </a>
                                </li>

                                <li className="social-icon-item tiktok-link">
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
    )
}

export default HeroSection