
// import styles from './EventCard.module.css';

// const events = [
//   { id: 1, image: 'event1.jpg', name: 'Event 1', type: 'Workshop', duration: '2h', fees: '$20', date: '2023-10-15', location: 'New York, NY' },
//   { id: 2, image: 'event2.jpg', name: 'Event 2', type: 'Concert', duration: '3h', fees: '$50', date: '2023-11-05', location: 'Los Angeles, CA' },
//   { id: 3, image: 'event3.jpg', name: 'Event 3', type: 'Seminar', duration: '1h', fees: 'Free', date: '2023-10-20', location: 'Chicago, IL' },
//   { id: 4, image: 'event4.jpg', name: 'Event 4', type: 'Workshop', duration: '2h', fees: '$30', date: '2023-11-10', location: 'San Francisco, CA' },
//   { id: 5, image: 'event5.jpg', name: 'Event 5', type: 'Concert', duration: '4h', fees: '$60', date: '2023-12-01', location: 'Miami, FL' },
//   { id: 6, image: 'event6.jpg', name: 'Event 6', type: 'Seminar', duration: '1.5h', fees: 'Free', date: '2023-11-25', location: 'Seattle, WA' },
// ];

// const EventCard = ({ filter }) => {
//   const filteredEvents = filter === 'all' ? events : events.filter(event => event.type.toLowerCase() === filter);

//   return (
//     <>
//       {filteredEvents.map((event) => (
//         <div key={event.id} className={styles.eventCard}>
//           <img src={event.image} alt={event.name} className={styles.eventImage} />
//           <div className={styles.eventDetails}>
//             <h3>{event.name}</h3>
//             <div className={styles.detailRow}>
//               <span className={styles.detailLabel}>Type:</span>
//               <span className={styles.detailValue}>{event.type}</span>
//             </div>
//             <div className={styles.detailRow}>
//               <span className={styles.detailLabel}>Date:</span>
//               <span className={styles.detailValue}>{event.date}</span>
//             </div>
//             <div className={styles.detailRow}>
//               <span className={styles.detailLabel}>Duration:</span>
//               <span className={styles.detailValue}>{event.duration}</span>
//             </div>
//             <div className={styles.detailRow}>
//               <span className={styles.detailLabel}>Location:</span>
//               <span className={styles.detailValue}>{event.location}</span>
//             </div>
//             <div className={styles.detailRow}>
//               <span className={styles.detailLabel}>Fees:</span>
//               <span className={styles.detailValue}>{event.fees}</span>
//             </div>
//           </div>
//           <button className={styles.ViewDetailsButton}>View Details</button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default EventCard;