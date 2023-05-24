import React from 'react'
import {useTranslation} from 'react-i18next'

const DateRow = ({month, dayNumber, day, venueLink, venueName, timeGig, venueMaps, isEven, venueLogo}) => {
    const {t} = useTranslation()

    console.log(isEven)
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
                <div className={'circularVenueLogo'}>
                    <a href={venueLink} target="_blank" rel="noopener noreferrer">
                        <img src={`https://drive.google.com/uc?export=view&id=${venueLogo}`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </a>
                </div>
                <p className="mb-2">{t('Start')} {timeGig}</p>
                <a href={venueMaps} target="_blank" rel="noopener noreferrer">
                    <span style={{fontSize: 40, color: '#F8CB2E', position: 'relative', zIndex: 2}} className="bi bi-geo-alt-fill"></span>
                </a>
                <div className="section-overlay"></div>
            </td>
        </tr>
    )
}

export default DateRow