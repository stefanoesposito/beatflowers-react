import React, { useEffect, useState } from "react";
import axios from "axios";
// import './App.css';
import "./index.css";
import { Fragment } from "react";
import DateRow from "./components/DateRow";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const { t, i18n } = useTranslation();
  const [gigs, setGigs] = useState([]);
  const URL =
      "https://script.google.com/macros/s/AKfycbwgjFeSg67eAv2gffxY02YLZPoY26J1Q6dV1RBsWV05NFzDOAFNxmTIsSAR2B6fBLic/exec";

  const selectedLanguage = i18n.language;
  const getData = async () => {
    try {
      const response = await axios.get(URL);
      setGigs(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  let currentYear = new Date().getFullYear();

  return (
      <>
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
                  <LanguageSwitcher />
                  <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
                    <li className="nav-item">
                      <a className="nav-link click-scroll" href="#section_1">
                        {t("menu.Home")}
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link click-scroll" href="#section_2">
                        {t("menu.About")}
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link click-scroll" href="#section_3">
                        {t("menu.Band")}
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link click-scroll" href="#section_4">
                        {t("menu.Schedule")}
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link click-scroll" href="#section_5">
                        {t("menu.Videos")}
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link click-scroll" href="#section_6">
                        {t("menu.Contacts")}
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
                      {t("letsBegin")}
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
                        <span className="text-white me-3">{t("Follow")}:</span>

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
                          process.env.PUBLIC_URL + "/assets/video/beat-flowers.mp4"
                      }
                      type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>

            <section className="about-section section-padding" id="section_2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                    <div className="services-info">
                      <h2 className="text-white mb-4">
                        {t("aBeatlesCoverTrioTitle")}
                      </h2>

                      <p className="text-white">
                        {t("aBeatlesCoverTrioDescription")}
                      </p>

                      <h6 className="text-white mt-4">{t("whoTheyAre")}</h6>
                      <p className="text-white">{t("whoTheyAreDescription")}</p>

                      <h6 className="text-white mt-4">{t("aUniqueTitle")}</h6>

                      <p className="text-white">{t("aUniqueDescription")}</p>
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
                          <i className="about-text-icon bi-person"></i>
                        </div>

                        <div className="ms-4">
                          <h3>{t("hireUs")}</h3>

                          <p className="mb-0">{t("yourAmazingLiveExperience")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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

            <section className="schedule-section section-padding" id="section_4">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2 className="text-white mb-4">{t("upcomingLiveDates")}</h2>

                    <div className="table-responsive">
                      <table className="schedule-table table table-dark">
                        <thead>
                        <tr>
                          <th scope="col">{t("Date")}</th>

                          <th scope="col">{t("Location")}</th>
                        </tr>
                        </thead>

                        <tbody>
                        {gigs?.map((gig, i) => {
                          const dateNowParsed = new Date();
                          const dateGigPlus = new Date(gig.dateGig);
                          dateGigPlus.setDate(dateGigPlus.getDate());
                          let month, day;
                          switch (selectedLanguage) {
                            case "en":
                              month = dateGigPlus
                                  .toLocaleString("en-US", { month: "long" })
                                  .toUpperCase();
                              day = dateGigPlus.toLocaleString("en-US", {
                                weekday: "long",
                              });
                              break;
                            case "it":
                              month = dateGigPlus
                                  .toLocaleString("it-IT", { month: "long" })
                                  .toUpperCase();
                              day = dateGigPlus.toLocaleString("it-IT", {
                                weekday: "long",
                              });
                              break;
                            case "fr":
                              month = dateGigPlus
                                  .toLocaleString("fr-FR", { month: "long" })
                                  .toUpperCase();
                              day = dateGigPlus.toLocaleString("fr-FR", {
                                weekday: "long",
                              });
                              break;
                            case "es":
                              month = dateGigPlus
                                  .toLocaleString("es-ES", { month: "long" })
                                  .toUpperCase();
                              day = dateGigPlus.toLocaleString("es-ES", {
                                weekday: "long",
                              });
                              break;
                            case "de":
                              month = dateGigPlus
                                  .toLocaleString("de-DE", { month: "long" })
                                  .toUpperCase();
                              day = dateGigPlus.toLocaleString("de-DE", {
                                weekday: "long",
                              });
                              break;
                            case "br":
                              month = dateGigPlus
                                  .toLocaleString("br-BR", { month: "long" })
                                  .toUpperCase();
                              day = dateGigPlus.toLocaleString("br-BR", {
                                weekday: "long",
                              });
                              break;
                            case "ja":
                              month = dateGigPlus
                                  .toLocaleString("ja-JA", { month: "long" })
                                  .toUpperCase();
                              day = dateGigPlus.toLocaleString("ja-JA", {
                                weekday: "long",
                              });
                              break;
                            default:
                              month = dateGigPlus
                                  .toLocaleString("en-US", { month: "long" })
                                  .toUpperCase();
                              day = dateGigPlus.toLocaleString("en-US", {
                                weekday: "long",
                              });
                          }

                          const dayNumber = new Date(gig.dateGig).getDate();

                          if (dateNowParsed <= dateGigPlus) {
                            return (
                                <DateRow
                                    key={i}
                                    day={day}
                                    month={month}
                                    dayNumber={dayNumber}
                                    venueLink={gig.venueLink}
                                    venueName={gig.venueName}
                                    timeGig={gig.timeGig}
                                    venueMaps={gig.venueMaps}
                                />
                            );
                          } else {
                            return null;
                          }
                        })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pricing-section section-padding" id="section_5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-12 mx-auto">
                    <h2 className="text-center mb-4">{t("menu.Videos")}</h2>
                  </div>

                  <div className="col-lg-6 col-12">
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

                  <div className="col-lg-6 col-12 mt-4 mt-lg-0">
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

                  <div className="col-lg-6 col-12">
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

                  <div className="col-lg-6 col-12 mt-4 mt-lg-0">
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
                </div>
              </div>
            </section>
          </main>
          <Footer currentYear={currentYear} />
        </Fragment>
      </>
  );
}

export default App;
