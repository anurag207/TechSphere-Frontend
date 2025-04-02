import styles from "./nonLoginPage.module.css";
import Navbar from "../Components/LandingComponents/Navbar.jsx";
import Footer from "../Components/LandingComponents/Footer.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useBookmarks from "../hooks/useBookmark.js"; 
import Eventcard from "../Components/eventCard.jsx";
const NonLoginPage = ({userInfo,setUserInfo,manageLogin}) => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState("all");
  const [sortBy, setSortBy] = useState("");
  const [price, setPrice] = useState("");
  const [isFree, setIsFree] = useState("false");
  const [duration, setDuration] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const [searchText, setSearchText] = useState("");
  const { bookmarkedEvents, toggleBookmark } = useBookmarks({userInfo});

  useEffect(() => {
    console.log("1")
    const fetchEvents = async () => {
      setError(null);
      try {
        const queryParams = new URLSearchParams({
          view,
          sortBy,
          price,
          isFree: isFree.toString(),
          duration,
          page,
          size: 10,
        });

        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL +
            `/api/v1/events/filter?${queryParams}`,{
              method: "GET",
              credentials : "include"
            }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data.events || []);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchEvents();
  }, [view, sortBy, price, isFree, duration, page]);

  const navigate = useNavigate();
  const handleViewDetails = () => navigate("/detail-page");
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getUTCDate()).padStart(2, "0");
    const month = d.toLocaleString("default", { month: "short" });
    const year = d.getUTCFullYear();
    return `${month} ${day}, ${year}`;
  };

  const filteredEvents = events.filter((event) => {
    if (typeof searchText !== "string") {
      console.error("Invalid search text:", searchText);
      return true; // Return all events if searchText is invalid
    }
    return event.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className={styles.eventContainer}>
      <Navbar onSearch={setSearchText} userInfo={userInfo} setUserInfo={setUserInfo} manageLogin={manageLogin}/>
      <h2 className={styles.eventTitle}>Explore Events</h2>
      <ToastContainer />
      <div className={styles.sortContainer}>
        <div>
        <select onChange={(e) => setView(e.target.value)} value={view}>
          <option value="all">View Hackathon</option>
          <option value="upcoming">Upcoming Events</option>
          <option value="past">Past Events</option>
        </select>
        </div>
        <div>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="">Sort By</option>
          <option value="date">Sort By Date</option>
          <option value="location">Sort By Location</option>
          <option value="duration">Sort By Duration</option>
          <option value="prize">Sort By Prize</option>
        </select>
        </div>

        <div>
        <select onChange={(e) => setPrice(e.target.value)} value={price}>
          <option value="">Price</option>
          <option value="5000">5000</option>
          <option value="9000">9000</option>
          <option value="10000">10000</option>
          <option value="12000">12000</option>
          <option value="18000">18000</option>
        </select>
        </div>
        <div>
        <select onChange={(e) => setIsFree(e.target.value)} value={isFree}>
          <option value="false">Paid</option>
          <option value="true">Free</option>
        </select>
        </div>

        <div>
        <select onChange={(e) => setDuration(e.target.value.trim())} value={duration}>
          <option value="">Time</option>
          <option value="36">36 hours </option>
          <option value="46">46 hours</option>
          <option value="48">48 hours</option>
          <option value="2">2 hours</option>
          <option value="4">4 hours</option>
          <option value="57">57 hours</option>
        </select>
        </div>
      </div>

      {error && <p className={styles.errorText}>Error: {error}</p>}

      <div className={styles.eventGrid}>
        {/* {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event._id} className={styles.eventCard}>
              <p className={styles.eventLocation}>{event.location}</p>
              <div className={styles.bookmarkIcon} onClick={() => toggleBookmark(event._id)}>
                <img 
                  src={bookmarkedEvents.has(event._id) ? "/bookmark (1).png" : "/bookmark.png"} 
                  alt="Bookmark Icon"
                />
              </div>
              <h3 className={styles.eventName}>{event.name}</h3>
              <p className={styles.eventDescription}>{event.description}</p>
              <p className={styles.eventDetail}>
              Start: <span className={styles.boldText}>{formatDate(event.start)}</span>
              </p>
              <p className={styles.eventDetail}>
              Duration: <span className={styles.boldText}>{event.duration}</span>
              </p>
              <p className={styles.eventDetail}>
              Prize Pool: <span className={styles.boldText}>{event.prize}</span>
              </p>
              <button onClick={handleViewDetails} className="viewButton">
                View details
              </button>
            </div>
          ))
        ) : (
          <p className={styles.noEventsText}>No events found.</p>
        )} */}
        {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => <Eventcard key={index} eventdata={event} userInfo={userInfo} manageLogin={manageLogin} />)
                  ) : (
                    <p className={styles.noEventsText}>Loading Events...</p>
                  )}
      </div>

      <div className={styles.paginationContainer}>
        <Pagination
          count={10}
          page={page}
          onChange={(e, value) => setPage(value)}
          variant="outlined"
          color="primary"
        />
      </div>
      <Footer />
    </div>
  );
};

export default NonLoginPage;