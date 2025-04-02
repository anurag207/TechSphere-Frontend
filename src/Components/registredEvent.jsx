import PropTypes from 'prop-types';
import Eventcard from './eventCard';
import styles from './registredEvent.module.css';


const RegisteredEvents = ({ registeredEvents }) => {
  return (
    <div className={styles.eventDisplay_registeredEvents}>
      {registeredEvents.length > 0 ? (
        <Eventcard eventdata={registeredEvents} />
      ) : (
        <p>Loading Registered Events...</p>
      )}
    </div>
  );
};

RegisteredEvents.propTypes = {
  registeredEvents: PropTypes.array.isRequired,
};
  
  export default RegisteredEvents;
  