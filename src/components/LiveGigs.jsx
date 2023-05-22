import React from 'react'
import DateRow from './DateRow'
import {Button, Group, Modal, ScrollArea} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {useTranslation} from 'react-i18next'

const LiveGigs = ({gigs, selectedLanguage}) => {
    const [opened, {open, close}] = useDisclosure(false)
    const {t} = useTranslation()

    const pastGigs = []

    const sortedPastGigs = pastGigs.sort((a, b) =>
        a.dateGig > b.dateGig ? 1 : b.dateGig > a.dateGig ? -1 : 0
    )

    return (
        <section className="schedule-section section-padding" id="section_4">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-white mb-4">{t('upcomingLiveDates')}</h2>

                        <div className="table-responsive">
                            <table className="schedule-table table table-dark">
                                <thead>
                                <tr>
                                    <th scope="col">{t('Date')}</th>

                                    <th scope="col">{t('Location')}</th>
                                </tr>
                                </thead>

                                <tbody>
                                {gigs?.map((gig, i) => {
                                    const dateNowParsed = new Date()
                                    const dateGigPlus = new Date(gig.dateGig)
                                    dateGigPlus.setDate(dateGigPlus.getDate())
                                    let month, day
                                    switch (selectedLanguage) {
                                        case 'en-GB':
                                            month = dateGigPlus
                                                .toLocaleString('en-GB', {month: 'long'})
                                                .toUpperCase()
                                            day = dateGigPlus.toLocaleString('en-GB', {
                                                weekday: 'long',
                                            })
                                            break
                                        case 'it-IT':
                                            month = dateGigPlus
                                                .toLocaleString('it-IT', {month: 'long'})
                                                .toUpperCase()
                                            day = dateGigPlus.toLocaleString('it-IT', {
                                                weekday: 'long',
                                            })
                                            break
                                        case 'fr-FR':
                                            month = dateGigPlus
                                                .toLocaleString('fr-FR', {month: 'long'})
                                                .toUpperCase()
                                            day = dateGigPlus.toLocaleString('fr-FR', {
                                                weekday: 'long',
                                            })
                                            break
                                        case 'es-ES':
                                            month = dateGigPlus
                                                .toLocaleString('es-ES', {month: 'long'})
                                                .toUpperCase()
                                            day = dateGigPlus.toLocaleString('es-ES', {
                                                weekday: 'long',
                                            })
                                            break
                                        case 'de-DE':
                                            month = dateGigPlus
                                                .toLocaleString('de-DE', {month: 'long'})
                                                .toUpperCase()
                                            day = dateGigPlus.toLocaleString('de-DE', {
                                                weekday: 'long',
                                            })
                                            break
                                        case 'pt-BR':
                                            month = dateGigPlus
                                                .toLocaleString('pt-BR', {month: 'long'})
                                                .toUpperCase()
                                            day = dateGigPlus.toLocaleString('pt-BR', {
                                                weekday: 'long',
                                            })
                                            break
                                        case 'ja-JA':
                                            month = dateGigPlus
                                                .toLocaleString('ja-JA', {month: 'long'})
                                                .toUpperCase()
                                            day = dateGigPlus.toLocaleString('ja-JA', {
                                                weekday: 'long',
                                            })
                                            break
                                        case 'sv-SE':
                                            month = dateGigPlus
                                                .toLocaleString('sv-SE', {month: 'long'})
                                                .toUpperCase()
                                            day = dateGigPlus.toLocaleString('sv-SE', {
                                                weekday: 'long',
                                            })
                                            break
                                        case 'hi-IN':
                                            month = dateGigPlus
                                                .toLocaleString('hi-IN', {month: 'long'})
                                                .toUpperCase()
                                            day = dateGigPlus.toLocaleString('hi-IN', {
                                                weekday: 'long',
                                            })
                                            break
                                        case 'cs-CZ':
                                            month = dateGigPlus
                                                .toLocaleString('cs-CZ', {month: 'long'})
                                                .toUpperCase()
                                            day = dateGigPlus.toLocaleString('cs-CZ', {
                                                weekday: 'long',
                                            })
                                            break
                                        case 'nl-NL':
                                            month = dateGigPlus
                                                .toLocaleString('nl-NL', {month: 'long'})
                                                .toUpperCase()
                                            day = dateGigPlus.toLocaleString('nl-NL', {
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

                                    const dayNumber = new Date(gig.dateGig).getDate()

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
                                        )
                                    } else {
                                        pastGigs.push(gig)
                                        return null
                                    }
                                })}
                                </tbody>
                            </table>
                        </div>
                        <Modal
                            opened={opened}
                            onClose={close}
                            title={t('PastGigs')}
                            scrollAreaComponent={ScrollArea.Autosize}
                            centered
                        >
                            {sortedPastGigs?.map((gig, i) => (
                                <p key={i}>
                                    {gig.dateGig} -{' '}
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

                        <Group position="center">
                            <Button onClick={open}>{t('PastGigs')}</Button>
                        </Group>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LiveGigs