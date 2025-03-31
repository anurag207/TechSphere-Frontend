import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {useState} from "react";
const useGetIsAuthorized = ({ setUserInfo }) => {
  const navigate = useNavigate();
  const getIsAuthorized = async () => {
    const res = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/api/v1/isAuthenticated",
      {
        credentials: "include",
      }
    );

    const resObj = await res.json();
    if (res.status === 200 && resObj.isAuthenticated === true) {
      setUserInfo({
        isAuthenticated: true,
        name: resObj.user.name,
        email: resObj.user.email,
        userId: resObj.user.userId,
      });
    } else {
      // navigate("/login");
    }
  };
  useEffect(() => {
    console.log("2");
    getIsAuthorized();
  }, []);
};

export default useGetIsAuthorized;
