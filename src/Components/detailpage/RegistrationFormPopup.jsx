// import { useState } from "react";
// import styles from "./RegistrationFormPopup.module.css";

// const RegistrationForm = ({ fields, onClose }) => {
//   const [formData, setFormData] = useState({});

//   const handleChange = (e, field) => {
//     setFormData({ ...formData, [field.title]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <div className={styles.modal}>
//       <div className={styles.modalContent}>
//         <span className={styles.close} onClick={onClose}>&times;</span>
//         <h2>Register for Event</h2>
//         <form onSubmit={handleSubmit}>
//           {fields.map((field) => (
//             <div key={field.title} className={styles.formGroup}>
//               <label>{field.title}</label>
//               {field.type === "select" ? (
//                 <select onChange={(e) => handleChange(e, field)} required={field.isRequired}>
//                   {field.options.map((option, index) => (
//                     <option key={index} value={option}>{option}</option>
//                   ))}
//                 </select>
//               ) : (
//                 <input
//                   type={field.type}
//                   onChange={(e) => handleChange(e, field)}
//                   required={field.isRequired}
//                 />
//               )}
//             </div>
//           ))}
//           <button type="submit" className={styles.submitButton}>Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

import { useState } from "react";
import styles from "./RegistrationFormPopup.module.css";
import { toast } from "react-toastify";

const RegistrationForm = ({ fields, eventId, onClose, onSuccess,userInfo }) => {
  console.log("registrationform",userInfo);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const {userId}=userInfo || {};


  const handleChange = (e, field) => {
    setFormData({ ...formData, [field.title]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Constructing API request body
    const requestBody = {
      registered: [
        {
          userId, //received from props using userinfo from app
          registeredDetails: Object.keys(formData).map((key) => ({
            title: key,
            value: formData[key],
          })),
        },
      ],
    };
    console.log("requestBody",requestBody);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/events/${eventId}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        onSuccess(); // Show success popup
      } else {
        toast.error(data.message); // Show proper error message
      }
    } catch (error) {
      // toast.error("Error while registering!", error);
      toast.error(`Error while registering! ${error.message || "Please try again."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <div className={styles.form_heading_container}>
        <h2 className={styles.form_heading}>Join Tech Innovators Hackathon 2025!</h2>
    
        <p className={styles.form_subheading} >Innovate. Build. Compete. Register now and be part of a global tech revolution!</p>
        </div>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.title} className={styles.formGroup}>
              {/* <label>{field.title}</label> */}
              {field.type === "select" ? (
                <select onChange={(e) => handleChange(e, field)} required={field.isRequired}>
                    <option value="" disabled selected>Select {field.title}</option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  placeholder={field.title}
                  onChange={(e) => handleChange(e, field)}
                  required={field.isRequired}
                />
              )}
            </div>
          ))}
    
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Registering..." : "Register Now"}
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default RegistrationForm;
