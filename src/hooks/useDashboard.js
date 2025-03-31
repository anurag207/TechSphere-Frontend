import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useDashboard = ({ userInfo }) => {
  const [bookmarkedEvents, setBookmarkedEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  // const [userId, setUserId] = useState(null);
  const { userId } = userInfo || {};
  // Fetch user profile to get userId
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/auth/profile`, {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //         credentials: "include",
  //       });

  //       const data = await res.json();
  //       if (res.ok && data.userId) {
  //         setUserId(data.userId);
  //       } else {
  //         toast.error("Please log in to access bookmarks.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching profile:", error);
  //       toast.error("Something went wrong while fetching user data.");
  //     }
  //   };

  //   fetchProfile();
  // }, []);

  useEffect(() => {
    console.log("4");
    // 🔹 Don't fetch if userId is null
    if (!userId) return;

    if (!userId)
      //Debugging
      console.log("No UserId!");

    const fetchDashboardData = async () => {
      try {
        const trimmedUserId = userId.trim();
        const res = await fetch(
          import.meta.env.VITE_BACKEND_URL +
            `/api/v1/dashboard/${trimmedUserId}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );

        const data = await res.json();
        console.log("Dashboard API Response:", data);
        // console.log("📌 usedashboard bookmarkedEvents in hook:", bookmarkedEvents);
        // console.log("📌 Type of bookmarkedEvents in hook:", typeof bookmarkedEvents);

        if (res.ok) {
          setBookmarkedEvents(new Set(data.bookmarks || []));
          setPastEvents(data.pastEvents || []);
          setRegisteredEvents(new Set(data.registeredEvents || []));
        } else {
          toast.error("Please log in to access the dashboard.");
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast.error("Something went wrong while fetching data.");
      }
    };

    fetchDashboardData();
  }, [userId]);

  console.log("Current userId:", userId); // Debugging

  return {
    bookmarkedEvents,
    pastEvents,
    userId,
    setBookmarkedEvents,
    registeredEvents,
  };
};

export default useDashboard;
