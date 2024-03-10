import './index.css'

const activeStatus = {
  notRegistered: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const initialPageRender = () => (
    <p className="initial-h1">
      Click on an event, to view its registration details
    </p>
  )

  const notRegisteredPageRender = () => (
    <div className="yet-cont">
      <img
        className="yet-img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yet-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fail totally in love with this
        beautiful art form.
      </p>
      <button className="yet-btn" type="button">
        Register Here
      </button>
    </div>
  )

  const registeredPageRender = () => (
    <div className="yet-cont">
      <img
        className="reg-img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="reg-para">You have already registered for the event</h1>
    </div>
  )

  const closedPageRender = () => (
    <div className="yet-cont">
      <img
        className="yet-img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="closed-h1">Registrations Are Closed Now!</h1>
      <p className="closed-p">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (status) {
    case activeStatus.notRegistered:
      return notRegisteredPageRender()
    case activeStatus.registered:
      return registeredPageRender()
    case activeStatus.closed:
      return closedPageRender()
    default:
      return initialPageRender()
  }
}

export default ActiveEventRegistrationDetails
