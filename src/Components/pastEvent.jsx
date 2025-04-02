import PropTypes from 'prop-types';
import Eventcard from './eventCard';
import styles from './pastEvent.module.css';


const PastEvents = ({ pastEvents }) => {
 
  const filteredPastEvents = pastEvents.filter(event => new Date(event.start) < new Date());

  return (
    <div className={styles.eventDisplay_pastEvents}>
      {filteredPastEvents.length > 0 ? (
        <Eventcard eventdata={filteredPastEvents} />
      ) : (
        <p>Loading Past Events...</p>
      )}
    </div>
  );
};

PastEvents.propTypes = {
  pastEvents: PropTypes.array.isRequired,
};

export default PastEvents;
