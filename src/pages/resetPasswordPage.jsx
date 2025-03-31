import { useState } from "react";
 import { useSearchParams, useNavigate } from "react-router-dom";
 import styles from "./resetPassword.module.css"; // Import CSS module
 
 const ResetPassword = () => {
   const [searchParams] = useSearchParams();
   const resetPasswordToken = searchParams.get("reset_pasword_token");
   const [newPassword, setNewPassword] = useState("");
   const [message, setMessage] = useState("");
   const navigate = useNavigate();
 
   console.log("token is", resetPasswordToken);
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/updatePassword`, {
       method: "POST",
       credentials: "include",
       headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${resetPasswordToken}`,
       },
       body: JSON.stringify({ password: newPassword }),
     });
 
     const data = await response.json();
     setMessage(data.message);
     if (response.ok) {
       setTimeout(() => {
         navigate("/"); // Redirect after successful reset
       }, 2000);
     }
   };
 
   return (
     <div className={styles.resetPasswordContainer}>
       <div className={styles.resetPasswordBox}>
         <h2 className={styles.resetPasswordTitle}>Reset Password</h2>
         <form onSubmit={handleSubmit}>
           <input
             type="password"
             placeholder="Enter new password"
             value={newPassword}
             onChange={(e) => setNewPassword(e.target.value)}
             className={styles.resetPasswordInput}
             required
           />
           <button type="submit" className={styles.resetPasswordButton}>Update Password</button>
         </form>
         {message && <p className={styles.resetPasswordMessage}>{message}</p>}
       </div>
     </div>
   );
 };
 export default ResetPassword;