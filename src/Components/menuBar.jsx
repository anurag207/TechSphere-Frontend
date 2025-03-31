// import { useState } from "react";
// import "./menuBar.css";

// const MenuBar = () => {
//   const [activeItem, setActiveItem] = useState(null);

//   const menuItems = [
//     { id: 1, name: "Registered Events", icon: "/Icons Library.png" },
//     { id: 2, name: "Saved Events", icon: "/Icons Library (1).png" },
//     { id: 3, name: "Past Events", icon: "/Vector.png" },
//   ];

//   return (
//     <div className="menu-bar">
//       <img className="logo" src="/src/assets/logo.svg" alt="Logo" />

//       <div className="menu-list">
//         {menuItems.map((item) => (
//           <div
//             key={item.id}
//             className={`menu-item ${activeItem === item.id ? "active" : ""}`}
//             onClick={() => setActiveItem(item.id)}
//           >
//             <img src={item.icon} alt={item.name} />
//             <h5>{item.name}</h5>
//           </div>
//         ))}
//       </div>

//       <button className="logout-btn">
//         <img src="/Vector (1).png" alt="Logout Icon" />
//         Log Out
//       </button>
//     </div>
//   );
// };

// export default MenuBar;

import { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./menuBar.module.css"; // Import CSS
import useLogout from "../hooks/useLogout";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const MenuBar = ({ setActiveTab,setUserInfo }) => {  // ✅ Accept setActiveTab as prop
  const {logout}=useLogout({setUserInfo});
  const [activeItem, setActiveItem] = useState("registered");

  const menuItems = [
    { id: "registered", name: "Registered Events", icon: "/Icons Library.png" },
    { id: "saved", name: "Saved Events", icon: "/Icons Library (1).png" },
    { id: "past", name: "Past Events", icon: "/Vector.png" },
  ];
  const handleLogout = async () => {
    logout();
  }

  return (
    <div className={styles.menuBar}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.logo} />
        </Link>

      <div className={styles.menuList}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`${styles.menuItem} ${
              activeItem === item.id ? styles.active : ""
            }`}
            onClick={() => {
              setActiveItem(item.id);
              setActiveTab(item.id);  // ✅ Use setActiveTab to change tab
            }}
          >
            <img src={item.icon} alt={item.name} />
            <h5>{item.name}</h5>
          </div>
        ))}
      </div>

      <button className={styles.logoutBtn} onClick={handleLogout}>
        <img src="/Vector (1).png" alt="Logout Icon" />
        Log Out
      </button>
    </div>
  ); 
};
MenuBar.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default MenuBar;

