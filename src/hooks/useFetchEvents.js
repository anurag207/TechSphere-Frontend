import { useState, useEffect } from "react";

const useFetchEvents = (eventId = null) => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("3");
    const fetchEvents = async () => {
      try {
        let url = import.meta.env.VITE_BACKEND_URL + "/api/v1/events";
        if (eventId) {
          url += `?eventId=${eventId}`;
        }

        const res = await fetch(url, {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch events");
        }

        const resObj = await res.json();
        setEventData(resObj.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [eventId]);

  return { eventData, loading, error };
};

export default useFetchEvents;
