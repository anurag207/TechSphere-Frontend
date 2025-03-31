// import MenuBar from "../Components/menuBar";
// import "./dashboardHomePage.css";

// const DashboardHomePage = () => {
//     return (
//         <div className="dashboard-container">
//             <MenuBar />
//             <div className="dashboard-content">
//                 <div className="header">
//                     <h2 className="heading">Registered Events</h2>
//                     <button className="explore-btn">Explore Events</button>
//                 </div>
             
//             </div>
//         </div>
//     );
// };

// export default DashboardHomePage;

import { useState } from "react";
import MenuBar from "../Components/menuBar.jsx";
import RegisteredEvents from "../Components/registredEvent.jsx";
import SavedEvents from "../Components/bookMarkEvent.jsx";
import PastEvents from "../Components/pastEvent.jsx";
import useDashboard from "../hooks/useDashboard.js";
import "./dashboardHomePage.css";
import { useNavigate } from "react-router-dom";


const Dashboard = ({userInfo,setUserInfo}) => {
  console.log("dashboard userinfo", userInfo);
  const [activeTab, setActiveTab] = useState("registered");
  const navigate = useNavigate();
   const { bookmarkedEvents, pastEvents, registeredEvents } = useDashboard({userInfo});
  // console.log("bookmarkedEvents in dashboardhomepage", bookmarkedEvents);

  return (
    <div className="dashboard-container">
      <MenuBar setActiveTab={setActiveTab} setUserInfo={setUserInfo} />

      <div className="dashboard-content">
        <div className="header">
          <h2 className="heading">
            {activeTab === "registered"
              ? "Registered Events"
              : activeTab === "saved"
              ? "Saved Events"
              : "Past Events"}
          </h2>
          <button  onClick={() => navigate("/nonlogin")} className="explore-btn">Explore Events</button>
      
        </div>

        {/* Pass fetched data to respective components */}
        {activeTab === "registered" && <RegisteredEvents registeredEvents={Array.from(registeredEvents)}/>}
        {activeTab === "saved" && <SavedEvents bookmarkedEvents={Array.from(bookmarkedEvents)} />}
        {activeTab === "past" && <PastEvents pastEvents={pastEvents} />}
      </div>
    </div>
  );
};


export default Dashboard;
