import React from 'react'
import DateRow from './DateRow'
import {Button, Group, Loader, Modal, ScrollArea} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {useTranslation} from 'react-i18next'

const LiveGigs = ({futureEvents, pastEvents, todayEvent, selectedLanguage}) => {
    const [opened, {open, close}] = useDisclosure(false)
    const {t} = useTranslation()


    return (
        <section className="schedule-section section-padding" id="section_4">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {todayEvent !== null &&
                            (
                                <div>
                                    {/*<h2 className="text-white mb-4">Questa sera</h2>*/}
                                    <h3 className={'text-white'}>{todayEvent?.venueName}</h3>
                                    <div style={{margin: '0 auto', marginBottom: 40}}>
                                        <a href={todayEvent?.venueLink} target="_blank" rel="noopener noreferrer">
                                            <img src={`https://drive.google.com/uc?export=view&id=${todayEvent?.gigPoster}`}
                                             alt="" style={{width: 350}}/>
                                        </a>
                                    </div>

                                </div>
                            )}
                        <h2 className="text-white mb-4">{t('upcomingLiveDates')}</h2>

                        {futureEvents && futureEvents.length ? (
                            <div className="table-responsive">
                                <table className="schedule-table table table-dark">
                                    <thead>
                                    <tr>
                                        <th scope="col">{t('Date')}</th>

                                        <th scope="col">{t('Location')}</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {futureEvents.map((gig, i) => {
                                        const isEven = i % 2 === 0
                                        // const dateGigPlus = gig.dateGig.split("T")[0];
                                        const dateGigPlus = new Date(gig.dateGig)
                                        let month, day
                                        switch (selectedLanguage) {
                                            case 'en':
                                                month = dateGigPlus
                                                    .toLocaleString('en-GB', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('en-GB', {
                                                    weekday: 'long',
                                                })
                                                break
                                            case 'it':
                                                month = dateGigPlus
                                                    .toLocaleString('it-IT', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('it-IT', {
                                                    weekday: 'long',
                                                })
                                                break
                                            case 'fr':
                                                month = dateGigPlus
                                                    .toLocaleString('fr-FR', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('fr-FR', {
                                                    weekday: 'long',
                                                })
                                                break
                                            case 'es':
                                                month = dateGigPlus
                                                    .toLocaleString('es-ES', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('es-ES', {
                                                    weekday: 'long',
                                                })
                                                break
                                            case 'de':
                                                month = dateGigPlus
                                                    .toLocaleString('de-DE', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('de-DE', {
                                                    weekday: 'long',
                                                })
                                                break
                                            case 'pt':
                                                month = dateGigPlus
                                                    .toLocaleString('pt-BR', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('pt-BR', {
                                                    weekday: 'long',
                                                })
                                                break
                                            case 'ja':
                                                month = dateGigPlus
                                                    .toLocaleString('ja-JA', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('ja-JA', {
                                                    weekday: 'long',
                                                })
                                                break
                                            case 'sv':
                                                month = dateGigPlus
                                                    .toLocaleString('sv-SE', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('sv-SE', {
                                                    weekday: 'long',
                                                })
                                                break
                                            case 'hi':
                                                month = dateGigPlus
                                                    .toLocaleString('hi-IN', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('hi-IN', {
                                                    weekday: 'long',
                                                })
                                                break
                                            case 'cs':
                                                month = dateGigPlus
                                                    .toLocaleString('cs-CZ', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('cs-CZ', {
                                                    weekday: 'long',
                                                })
                                                break
                                            case 'nl':
                                                month = dateGigPlus
                                                    .toLocaleString('nl-NL', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('nl-NL', {
                                                    weekday: 'long',
                                                })
                                                break
                                            case 'pl':
                                                month = dateGigPlus
                                                    .toLocaleString('pl-PL', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('pl-PL', {
                                                    weekday: 'long',
                                                })
                                                break
                                            default:
                                                month = dateGigPlus
                                                    .toLocaleString('en-US', {month: 'long'})
                                                    .toUpperCase()
                                                day = dateGigPlus.toLocaleString('en-US', {
                                                    weekday: 'long',
                                                })
                                        }

                                        const dayNumber = new Date(dateGigPlus).getDate()

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
                                                venueLogo={gig.venueLogo}
                                                isEven={isEven}
                                            />
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        ) : <Loader color="white" size="xl" variant="bars"/>
                        }
                        <Modal
                            opened={opened}
                            onClose={close}
                            title={t('PastGigs')}
                            scrollAreaComponent={ScrollArea.Autosize}
                            centered
                        >
                            {pastEvents?.map((gig, i) => (
                                <p key={i}>
                                    {gig.dateGig.split('T')[0]} -{' '}
                                    <a
                                        href={gig.venueLink}
                                        target={'_blank'}
                                        rel={'noreferrer'}
                                        className={'pastGigLink'}
                                    >
                                        {gig.venueName}
                                    </a>
                                </p>
                            ))}
                        </Modal>

                        <Group position="center" style={{marginTop: 30}}>
                            <Button onClick={open}>{t('PastGigs')}</Button>
                        </Group>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LiveGigs