import React from 'react'
import {useTranslation} from 'react-i18next'


const About = () => {
    const {t} = useTranslation()

    return (
        <section className="about-section section-padding" id="section_2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                        <div className="services-info">
                            <h2 className="text-white mb-4">
                                {t('aBeatlesCoverTrioTitle')}
                            </h2>
                            <img
                                src="assets/images/beatflowers-beatles-monet-min.png"
                                className="about-image img-fluid"
                                alt=""
                            />

                            <h6 className="text-white mt-4">{t('beatlesImpressionists')}</h6>

                            <p className="text-white">
                                {t('aBeatlesCoverTrioDescription')}
                            </p>

                            <h6 className="text-white mt-4">{t('whoTheyAre')}</h6>
                            <p className="text-white">{t('whoTheyAreDescription')}</p>

                            <h6 className="text-white mt-4">{t('aUniqueTitle')}</h6>

                            <p className="text-white">{t('aUniqueDescription')}</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="about-text-wrap">
                            <img
                                src="assets/images/beat-flowers.jpeg"
                                className="about-image img-fluid"
                                alt=""
                            />

                            <div className="about-text-info d-flex">
                                <div className="d-flex">
                                    <i className="about-text-icon text-white bi-whatsapp"></i>
                                </div>

                                <div className="ms-4">
                                    <h3>{t('hireUs')}</h3>

                                    <p className="mb-0">{t('yourAmazingLiveExperience')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About