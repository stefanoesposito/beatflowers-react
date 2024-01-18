import React from 'react'
import {useTranslation} from 'react-i18next'
import mapIcon from '../images/icons/google-maps.svg'

const DateRow = ({month, dayNumber, day, venueLink, venueName, timeGig, venueMaps, isEven, venueLogo}) => {
    const {t} = useTranslation()

    console.log(venueLogo)
    return (
        <tr>
            <th scope="row" className={isEven ? "clearerTh" : ""}>
                <div className="dateCalendar">
                    <div className="rowMonthCalendar">
                        {month}
                    </div>
                    <div className="dayNumber">
                        {dayNumber}
                    </div>
                    <div className="weekDay">
                        {day}
                    </div>
                </div>
            </th>
            <td className={`table-background-image-wrap ${isEven ? 'pop-background-image' : 'band-background-image'}`}>
                <a href={venueLink} target="_blank" rel="noopener noreferrer">
                    <h3>{venueName}</h3>
                </a>
                {/*<div className={'circularVenueLogo'}>*/}
                {/*    <a href={venueLink} target="_blank" rel="noopener noreferrer">*/}
                {/*        <img src={`https://drive.google.com/uc?export=view&id=${venueLogo}`} alt={`${venueName} logo`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />*/}
                {/*    </a>*/}
                {/*</div>*/}
                <p className="mb-2">{t('Start')} {timeGig}</p>
                <a href={venueMaps} target="_blank" rel="noopener noreferrer">
                    <img alt="Map" className={'circularVenueMapRow'} style={{ position: 'relative', zIndex: 2}} src={mapIcon} />
                </a>
                <div className="section-overlay"></div>
            </td>
        </tr>
    )
}

export default DateRow