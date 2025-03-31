import { useState } from "react";
import styles from "./registrationPopUp.module.css";

const Registration = () => {
  const [isVisible, setIsVisible] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    teamName: "",
    teamMember1: "",
    teamMember2: "",
    teamMember3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    isVisible && (
      <div className={styles.formwrapper}>
        <div className={styles.container}>
       
          <form className={styles.main} onSubmit={handleSubmit}>
        
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsVisible(false)}
            >
              ✖
            </button>

            <h3>Join Tech Innovators Hackathon 2025!</h3>
            <p>Innovate. Build. Compete. Register now and be part of a global tech revolution!</p>

            <div>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Team Name"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Team Member 1"
                name="teamMember1"
                value={formData.teamMember1}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Team Member 2"
                name="teamMember2"
                value={formData.teamMember2}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Team Member 3"
                name="teamMember3"
                value={formData.teamMember3}
                onChange={handleChange}
              />
            </div>
            <button className={styles.regbutton} type="submit">
              Register Now
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default Registration;
