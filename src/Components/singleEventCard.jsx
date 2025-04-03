import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./eventCard.css";
import useBookmarks from "../hooks/useBookmark";
import LoginSignupPopup from "./LandingComponents/loginSignupPopUp";
import { toast } from "react-toastify";


const SingleEventCard = ({ event, imageBg, userInfo, manageLogin }) => {
  // console.log("event",event);
  const navigate = useNavigate();
  // const [bookmarked, setBookmarked] = useState(false);
  const { bookmarkedEvents, toggleBookmark } = useBookmarks({userInfo});
  const [showLoginSignupPopup, setShowLoginSignupPopup] = useState(false);

 
  const handleViewDetails = () => {
    // navigate("/detail-page");
    navigate(`/detail-page/${event._id}`) //ckajksdf
  };
   const formatDate = (date) => {
    const d = new Date(date);
    // const day = String(d.getDate()).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    const month = d.toLocaleString("default", { month: "short" });
    // const year = d.getFullYear();
    const year = d.getUTCFullYear();
    return `${month} ${day}, ${year}`;
  };

  const formattedStartDate = formatDate(event.start);
  const getPrizeDisplay = (prize) => {
    return prize === "Free" || prize === 0 ? "Free" : `$${prize}`;
  };
  
  return (
    <div className="event-card">
      {/* <div className="image-container" style={{ backgroundColor: imageBg }}> */}
      <div className="image-container">
      {/* <img className="img" src="/Illustration.png" alt="Illustration"/> */}
        <img className="img" src={event.image_url} alt={event.name} />
      </div>
      <div className="event-header">
        <p className="event-location">{event.location}</p>
        {/* <div className="bookmark-icon" onClick={() => setBookmarked(!bookmarked)}>
          {bookmarked ? (
            <img src="/bookmark (1).png" alt="Bookmarked" />
          ) : (
            <img src="/bookmark.png" alt="Bookmark" />
          )}
        </div> */}
        {/* <div className="bookmark-icon" onClick={() => toggleBookmark(event._id)}>
        <img 
                  src={bookmarkedEvents.has(event._id) ? "/bookmark (1).png" : "/bookmark.png"} 
                  alt="Bookmark Icon"
                />
        </div> */}
        <div 
  className="bookmark-icon" 
  onClick={() => {
    if (!userInfo?.isAuthenticated) {
      toast.warning("Please login/signup to bookmark this event.");
      setShowLoginSignupPopup(true);
      return;
    }
    toggleBookmark(event._id);
  }}
>
  <img 
    src={userInfo?.isAuthenticated && bookmarkedEvents.has(event._id) 
      ? "/bookmark (1).png" 
      : "/bookmark.png"} 
    alt="Bookmark Icon"
  />
</div>

      </div>
      <h4 className="event-name">{event.name}</h4>
      <p className="event-description">{event.description}</p>
      <p className="event-detail">
      Start: <span className="bold-text">{formattedStartDate}
      </span>
      </p>
      <p className="event-detail">
        Duration: <span className="bold-text">{event.duration} hours</span>
      </p>
      <p className="event-detail">
        Prize Pool: <span className="bold-text">{getPrizeDisplay(event.prize)}</span>
      </p>
      <button onClick={handleViewDetails} className="viewButton">
        View details
      </button>
      {showLoginSignupPopup && <LoginSignupPopup onClose={() => setShowLoginSignupPopup(false)} manageLogin={manageLogin }/>}
      {/* <button className="viewButton">View details</button> */}
    </div>
  );
};

SingleEventCard.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    prize: PropTypes.string.isRequired,
  }).isRequired,
  imageBg: PropTypes.string,
  userInfo: PropTypes.object.isRequired,
  manageLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default SingleEventCard;
