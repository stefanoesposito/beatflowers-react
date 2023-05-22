import React from 'react'
import { useTranslation } from 'react-i18next'

const MeetTheBand = () => {
    const {t} = useTranslation()

    return (
        <section className="artists-section section-padding" id="section_3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h2 className="mb-4">{t("meetTheBand")}</h2>
                    </div>

                    <div className="col-lg-5 col-12">
                        <div className="artists-thumb">
                            <div className="artists-image-wrap">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/artists/patrizio-buonaiuto.jpeg`}
                                    alt="Patrizio Buonaiuto - Vocals, Minimal Drums"
                                    className="artists-image img-fluid"
                                />
                            </div>

                            <div className="artists-hover">
                                <p>
                                    <strong>{t("band.Name")}</strong>
                                    Patrizio Buonaiuto
                                </p>

                                <p>
                                    <strong>{t("band.Instrument")}</strong>
                                    {t("band.InstrumentPat")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-12">
                        <div className="artists-thumb">
                            <div className="artists-image-wrap">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/artists/marco-di-palo.jpeg`}
                                    alt="Marco Di Palo - Cello and Vocals"
                                    className="artists-image img-fluid"
                                />
                            </div>

                            <div className="artists-hover">
                                <p>
                                    <strong>{t("band.Name")}</strong>
                                    Marco Di Palo
                                </p>

                                <p>
                                    <strong>{t("band.Instrument")}</strong>
                                    {t("band.InstrumentMarco")}
                                </p>
                            </div>
                        </div>

                        <div className="artists-thumb">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/artists/stefano-esposito.jpeg`}
                                alt="Stefano Esposito - Acoustic Guitar and Vocals"
                                className="artists-image img-fluid"
                            />

                            <div className="artists-hover">
                                <p>
                                    <strong>{t("band.Name")}</strong>
                                    Stefano Esposito
                                </p>

                                <p>
                                    <strong>{t("band.Instrument")}</strong>
                                    {t("band.InstrumentStefano")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetTheBand