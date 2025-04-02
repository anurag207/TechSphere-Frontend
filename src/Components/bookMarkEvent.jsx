import PropTypes from 'prop-types';
import Eventcard from './eventCard';
import styles from './bookmarkEvent.module.css';


const SavedEvents = ({ bookmarkedEvents =[]}) => {

  return (
    <div className={styles.eventDisplay_savedEvents}>
      {bookmarkedEvents.length > 0 ? (
        <Eventcard eventdata={bookmarkedEvents} />
      ) : (
        <p>Loading Saved Events</p>
      )}
    </div>
  );
};

SavedEvents.propTypes = {
  bookmarkedEvents: PropTypes.array.isRequired,
};

export default SavedEvents;
