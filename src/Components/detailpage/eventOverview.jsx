// import styles from "./eventOverview.module.css";
// const EventOverview = () => {
//   return (
//     <div className={styles.eventoverview_main_container}>
//       <div className={styles.eventimage}>
//         <img src="/src/assets/detailpage/techInnovatorHackathon.svg" className={styles.techhackathon_img} />
//       </div>
//        <div className={styles.eventdetails_container}> {/*image side main container which contains 3 other major containers: event_details,grid,2 buttons   */}
//         <div className={styles.title_container}> {/*First major container on image side*/}
//         <div className={styles.header_container}>
//             <h1>Tech Innovators Hackathon 2025</h1>
//             <button className={styles.button_free}>Free</button>
//         </div>
//         <div className={styles.eventoverview_subtitle}>
//         <p>Dive into a 48-hour coding marathon where innovation meets collaboration. This hackathon is designed for tech enthusiasts to showcase their skills and create real-world solutions.</p>
//         </div>
//         </div>

//         <div className={styles.grid_eventsubdetails_main}>   {/*Second major container on image side (grid)*/}
//             <div className={styles.grid_item_eventsubdetails}><p>Mode: Online</p></div>
//             <div className={styles.grid_item_eventsubdetails}><p>Start: April 20, 2025</p></div>
//             <div className={styles.grid_item_eventsubdetails}><p>Duration: 36 hours</p></div>
//             <div className={styles.grid_item_eventsubdetails}><p>Prize Pool: $12,000 + Certification</p></div>
//             <div className={styles.grid_item_eventsubdetails}><p>Hosted by: InnoHack Events</p></div>
//             <div className={styles.grid_item_eventsubdetails}><p>Contact: events@innohack.com</p></div>
//         </div>
//         <div className={styles.button_container}> {/*Third major container with 2 buttons(grid)*/}
//         <button className={`${styles.button_common} ${styles.button_save_later}`}>Save For Later</button>
//         <button className={`${styles.button_common} ${styles.button_register}`}>Register Now</button>
//         </div> 
//     </div>
    
//     </div>
//   );
// };
// export default EventOverview;

import { useState } from "react";
import useFetchEvents from "../../hooks/useFetchEvents";
import styles from "./eventOverview.module.css";
import RegistrationForm from "./RegistrationFormPopup";
import SuccessPopup from "./SuccessPopup";
import { toast } from "react-toastify";
import LoginSignupPopup from "../LandingComponents/loginSignupPopUp";

const EventOverview = ({ eventOverview, eventId,userInfo,manageLogin }) => {
  const { eventData, loading, error } = useFetchEvents(eventId);
  // console.log(eventData,"eventdata");
  const [showForm, setShowForm] = useState(false);
  const [formFields, setFormFields] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoginSignupPopup, setShowLoginSignupPopup] = useState(false);

  // Show loading or error states
  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>Error loading event: {error}</p>;
  if (!eventData) return null; // Prevent crashing if no event data
  if (!eventOverview) return null;

  // const {registration} = eventData.registration;
  // console.log("registration",registration);

  const { image, heading, subtitle, button, subdetails } = eventOverview;

  const handleRegisterClick = async () => {
    if (!userInfo?.isAuthenticated) {
      toast.warning("Please login/signup to register."); // Show toast message
      setShowLoginSignupPopup(true); // Show login/signup popup
      return;
    }
    if (eventData.registration) {
      setFormFields(eventData.registration); // Use already fetched registration fields
      setShowForm(true);
    }
  };


  return (
    <div className={styles.eventoverview_main_container}>
      <div className={styles.eventimage}>
        <img src={image} alt={heading} className={styles.techhackathon_img} />
      </div>

      <div className={styles.eventdetails_container}>
        <div className={styles.title_container}>
          <div className={styles.header_container}>
            <h1>{heading}</h1>
            <button className={styles.button_free}>{button}</button>
          </div>
          <div className={styles.eventoverview_subtitle}>
            <p>{subtitle}</p>
          </div>
        </div>

        <div className={styles.grid_eventsubdetails_main}>
          {subdetails.map((detail, index) => (
            <div key={index} className={styles.grid_item_eventsubdetails}>
              <p>{detail.label}: {detail.value}</p>
            </div>
          ))}
        </div>

        <div className={styles.button_container}>
          <button className={`${styles.button_common} ${styles.button_save_later}`}>Save For Later</button>
          <button className={`${styles.button_common} ${styles.button_register}`} onClick={handleRegisterClick}>Register Now</button>
        </div>
      </div>
      {/* {showForm && <RegistrationForm fields={formFields} onClose={() => setShowForm(false)} />} */}
      {showForm && (
        <RegistrationForm
          fields={formFields}
          eventId={eventId}
          userInfo={userInfo}
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            setShowForm(false);
            setShowSuccess(true);
          }}
        />
      )}
      {showSuccess && <SuccessPopup onClose={() => setShowSuccess(false)} />}
      {showLoginSignupPopup && <LoginSignupPopup onClose={() => setShowLoginSignupPopup(false)} manageLogin={manageLogin }/>}
    </div>
  );
};

export default EventOverview;
