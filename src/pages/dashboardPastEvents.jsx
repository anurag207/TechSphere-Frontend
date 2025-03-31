import MenuBar from "../Components/menuBar";
import "./dashboardHomePage.css";
const DashboardPastEvents = () => {
    return (
        <div className="dashboard-container">
            <MenuBar />
            <div className="dashboard-content">
                <div className="header">
                    <h2 className="heading">Past Events</h2>
                </div>
             
            </div>
        </div>
    );
};

export default DashboardPastEvents;
