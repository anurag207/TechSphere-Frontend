
import "./eventCard.css";
// import eventdata from "../constants/eventData";
import SingleEventCard from "./singleEventCard";
import PropTypes from "prop-types";

const Eventcard = ({eventdata=[],userInfo,manageLogin}) => {
  const eventArray = Array.isArray(eventdata) ? eventdata : [eventdata];
  // console.log("1",eventdata);
//   return (
//     <>
//       {eventdata.map((event, index) => (
//         // <SingleEventCard key={index} event={event} imageBg={event.imageBg} />
//         <SingleEventCard key={event._id} event={event} imageBg={event.imageBg} />
//       ))}
//     </>
//   );
// };

return (
  <>
    {
    eventArray.map((event, index) => (
      <SingleEventCard key={event._id} event={event} imageBg={event.imageBg} userInfo={userInfo} manageLogin={manageLogin}/>
    ))}
  </>
);
};

Eventcard.propTypes = {
  eventdata: PropTypes.array.isRequired};
  

export default Eventcard;


