import React from 'react'
import {useTranslation} from 'react-i18next'

const Videos = () => {
    const {t} = useTranslation()

    return (
        <section className="pricing-section section-padding" id="section_5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12 mx-auto">
                        <h2 className="text-center mb-4">{t('menu.Videos')}</h2>
                    </div>

                    {/* Nowhere Man */}
                    <div className="col-lg-6 col-12 mb-lg-4 mt-lg-0">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/OPNwFwallZk"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Yesterday */}
                    <div className="col-lg-6 col-12 mb-lg-4 mt-4 mt-lg-0">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/-e-DEtGV9jo"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Kestè */}
                    <div className="col-lg-6 col-12 mt-4 mb-lg-4 mt-lg-0">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/-U0Eqo_ZbpU"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Penny Lane */}
                    <div className="col-lg-6 col-12 mb-lg-4 mt-4 mt-lg-0">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/VdVE4My-MsA"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* JAM Cave */}
                    <div className="col-lg-6 col-12 mb-lg-4 mt-4 mt-lg-0">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/1U7nGymJ8XE"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* I'm Only Sleeping */}
                    <div className="col-lg-6 col-12 mb-lg-4 mt-4 mt-lg-0">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/hVCZRIIlWIs"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Videos