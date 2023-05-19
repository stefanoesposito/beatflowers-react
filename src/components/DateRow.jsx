import React from 'react'
import {useTranslation} from 'react-i18next'
const DateRow = ({month, dayNumber, day, venueLink, venueName, timeGig, venueMaps}) => {
    const {t}=useTranslation()

    return (
        <tr>
            <th scope="row">
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
            <td className="table-background-image-wrap pop-background-image">
                <a href={venueLink} target="_blank" rel="noopener noreferrer">
                    <h3>{venueName}</h3>
                </a>
                <p className="mb-2">{t('Start')} {timeGig}</p>
                <a href={venueMaps} target="_blank" rel="noopener noreferrer">
                    <span style={{fontSize: 40, color: 'white'}} className="bi bi-geo-alt-fill"></span>
                </a>
                <div className="section-overlay"></div>
            </td>
        </tr>
    )
}

export default DateRow