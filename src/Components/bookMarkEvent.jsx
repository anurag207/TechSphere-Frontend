import PropTypes from 'prop-types';
import Eventcard from './eventCard';
import styles from './bookmarkEvent.module.css';


const SavedEvents = ({ bookmarkedEvents =[]}) => {

  return (
    <div className={styles.eventDisplay_savedEvents}>
      {bookmarkedEvents.length > 0 ? (
        <Eventcard eventdata={bookmarkedEvents} />
      ) : (
        <p>No saved events found</p>
      )}
    </div>
  );
};

SavedEvents.propTypes = {
  bookmarkedEvents: PropTypes.array.isRequired,
};

export default SavedEvents;
