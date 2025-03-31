// import React, { useState } from "react";
// import styles from "./Navbar.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../LandingComponents/Navbar.module.css";
import Logo from "/src/assets/logo.svg";
import LoginSignupPopup from "./loginSignupPopUp"; // Importing the popup component
import useLogout from "../../hooks/useLogout";
import SearchBar from "../searchBar.jsx";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = ({manageLogin,userInfo,setUserInfo,onSearch,filter=""  }) => {
   console.log("Navbar",userInfo);

  const {isAuthenticated, email,name}=userInfo || {};
  const {logout}=useLogout({setUserInfo});
  // console.log(isAuthenticated);
  // console.log(email);
  console.log(name);
  const [showPopup, setShowPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const userEmail = localStorage.getItem("userEmail");

  const handleLogout = async () => {
      logout();
    // try {
    //   const response = await fetch("http://localhost:5000/api/auth/logout", {
    //     method: "POST",
    //     credentials: "include", // Ensures cookies are sent with the request
    //   });
  
    //   if (response.ok) {
    //     localStorage.removeItem("userEmail"); // Remove email from local storage
    //     // localStorage.removeItem("token"); 
    //     document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Clear cookie
    //     window.location.reload(); // Reload the page to reflect logout
    //     alert("Logged out!");
    //   } else {
    //     console.error("Logout failed");
    //   }
    // } catch (error) {
    //   console.error("Error during logout:", error);
    // }
  };
  
  
  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.logoImage} />
        </Link>
      </div>
      <div className={styles.searchContainer}>
        {/* <input type="text" placeholder="Search..." className={styles.searchBar} /> */}
        <SearchBar onSearch={(value) => onSearch(value?.toString() || "")} filter={filter} />
      </div>
      <div className={styles.buttons}>
        {isAuthenticated ? (
          <div className={styles.userDropdown}>
            <button className={styles.dropdown_button} onClick={() => setShowDropdown(!showDropdown)}>
              <span>
              {name}
              </span> 
              <ChevronDown 
          className={`${styles.chevron} ${showDropdown ? styles.chevronRotated : ""}`} 
        />
            </button>
            {showDropdown && (
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownContent_myEvents_container}>
                <a className={styles.dropdownContent_myEvents} href="/dashboard">My Events</a>
                </div>
                <div className={styles.dropdownContent_logout_container}>
                <button className={styles.dropdownContent_logout} onClick={handleLogout}>Log Out</button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className={styles.loginButton} onClick={() => setShowPopup(true)}>
              Log In
            </button>
            <button className={styles.signupButton} onClick={() => setShowPopup(true)}>
              Sign Up
            </button>
          </>
        )}
      </div>

      {/* Render the login/signup popup when needed */}
      {showPopup && <LoginSignupPopup manageLogin={manageLogin} onClose={() => setShowPopup(false)} />}
    </nav>
    </>
  );
};

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  filter: PropTypes.string,
  SetFilter: PropTypes.func,
  manageLogin: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
  setUserInfo: PropTypes.func.isRequired,

};

export default Navbar;
