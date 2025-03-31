import { useParams } from "react-router-dom";
import useFetchEvents from "../hooks/useFetchEvents"; // Custom hook to fetch event data
import EventMoreDetails from "../Components/detailpage/eventMoreDetails";
import EventOverview from "../Components/detailpage/eventOverview";
import Footer from "../Components/LandingComponents/Footer";
import Navbar from "../Components/LandingComponents/Navbar";

const DetailPage = ({userInfo,setUserInfo,manageLogin}) => {
  const { eventId } = useParams();
  const { eventData, loading, error } = useFetchEvents(eventId);
// console.log(eventData);
  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!eventData) return <p>No event details available.</p>;

  // Extract embedded schema data
  // const { eventMoreDetails } = eventData; 
  // const { eventOverview, details } = eventMoreDetails; // eventOverview & details come from embedded schema
  const { eventOverview, details } = eventData.eventMoreDetails;
  // console.log("eventOverview",eventOverview);
  // console.log("details", details);
  return (
    <div className="styles.detailpage_main_container">
        <Navbar userInfo={userInfo} setUserInfo={setUserInfo} manageLogin={manageLogin}/>
        <EventOverview eventOverview={eventOverview } eventId={eventId} userInfo={userInfo} manageLogin={manageLogin}/>
        <EventMoreDetails details={details}></EventMoreDetails>
        <Footer></Footer>
    </div>
        
  );
};
export default DetailPage;

