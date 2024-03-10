import './index.css'

const EventItem = props => {
  const {eventDetails, onClickCardDetails, isActiveId} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickCard = () => {
    onClickCardDetails(id)
  }

  const btnClassName = isActiveId === id ? 'border-btn' : ''

  return (
    <li className="li-cont">
      <button
        className={`li-btn ${btnClassName}`}
        type="button"
        onClick={onClickCard}
      >
        <img className="event-img" src={imageUrl} alt="event" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
