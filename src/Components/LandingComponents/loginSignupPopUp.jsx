import  { useState, useRef } from "react";
import styles from "./loginSignupPopUp.module.css";
import useOTP from "../../hooks/useOTP";
import useSignup from "../../hooks/useSignup";
import useLogin from "../../hooks/useLogin";
import { toast } from "react-toastify";
import PropTypes from "prop-types";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/forgotPassword`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      console.log("Response Data:", data); 

      if (response.ok) {
        setMessage("Reset link sent to your email.");
        setIsSubmitted(true);
      } else {
        setMessage(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setMessage("Failed to send request. Please try again.");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {isSubmitted ? (
        <p>{message}</p> 
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

const LoginSignupPopup = ({ onClose,userInfo,manageLogin}) => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [isResendAllowed, setIsResendAllowed] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const { sendOtp } = useOTP({ setIsOtpSent, setIsResendAllowed, setShowOtpSection,setIsSendingOtp });
  const {registerUser}= useSignup({setIsResendAllowed,onClose,setIsRegistering});
  const {login,loading}=useLogin({manageLogin,onClose});
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isResetPassword, setIsResetPassword] = useState(false);
  // const [newPassword, setNewPassword] = useState("");
  const otpInputs = useRef([]);

  const handleLogin = async (e) => {
    e.preventDefault();
    login({email,password});
    // try {
    //   const response = await fetch("http://localhost:5000/api/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //     credentials: "include",
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     localStorage.setItem("userEmail", email);
    //     onClose();
    //   } else {
    //     alert(data.error || "Login failed");
    //   }
    // } catch (err) {
    //   alert("An error occurred. Please try again.");
    // }
  };

  const handleSendOtp = async (e,isResend) => {
    e.preventDefault();

      // validation(REGEX)
      if (email.length <= 5) {
        toast.error("Invalid Email!");
        return;
      }
      setIsSendingOtp(true);
      await sendOtp(email, isResend);
      setIsSendingOtp(false);

    // try {
    //   const response = await fetch("http://localhost:5000/api/auth/signup", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //     credentials: "include",
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     setShowOtpSection(true);
    //   } else {
    //     alert(data.error || "Signup failed");
    //   }
    // } catch (err) {
    //   alert("An error occurred. Please try again.");
    // }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const otp = otpInputs.current.map(input => input.value).join("");
    setIsRegistering(true);
    await registerUser({ otp, password, email, name });
    setIsRegistering(false);
  //   registerUser({
  //     otp,
  //     password,
  //     // name: fullName,//Passed as argument to function with name (not fullname)
  //     email
  // });
    // try {
    //   const response = await fetch("http://localhost:5000/api/auth/verify-otp", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, otp }),
    //     credentials: "include",
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     localStorage.setItem("userEmail", email);
    //     window.location.reload();
    //     onClose();
    //   } else {
    //     alert(data.error || "OTP verification failed");
    //   }
    // } catch (err) {
    //   alert("An error occurred. Please try again.");
    // }
  };

  // const sendResetOtp = async () => {
  //   try {
  //      import.meta.env.VITE_BACKEND_URL + "/api/v1/eventcard"
  //     const response = await fetch( import.meta.env.VITE_BACKEND_URL + "/api/auth/reset-password/send-otp", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email }),
  //     });
  //     const data = await response.json();
  //     if (response.ok) {
  //       setShowOtpSection(true);
  //       setIsResetPassword(true);
  //     } else {
  //       toast.error(data.error || "Failed to send OTP");
  //     }
  //   } catch (err) {
  //     toast.error("An error occurred. Please try again.");
  //   }
  // };

  // const resetPassword = async (e) => {
  //   e.preventDefault();
  //   const otp = otpInputs.current.map(input => input.value).join("");
  //   try {
  //     const response = await fetch(import.meta.env.VITE_BACKEND_URL +"/api/auth/reset-password/verify-otp", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, otp, newPassword }),
  //     });
  //     const data = await response.json();
  //     if (response.ok) {
  //       toast.success("Password reset successful! Please log in.");
  //       setIsResetPassword(false);
  //       setShowOtpSection(false);
  //       setIsLogin(true);
  //     } else {
  //       toast.error(data.error || "OTP verification failed");
  //     }
  //   } catch (err) {
  //     toast.error("An error occurred. Please try again.");
  //   }
  // };

  const handleOtpChange = (index, e) => {
    const value = e.target.value;
    if (value.length === 1 && index < 3) {
      otpInputs.current[index + 1].focus();
    }
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupOuter}>
        <div className={styles.logoContainer}>
          <img src="/images/logoPopup.svg" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.popupContent}>
          <div className={styles.closeBtnContainer}>
            <button className={styles.closeBtn} onClick={onClose}>
              &times;
            </button>
          </div>

          <div className={styles.authTabs}>
            <button
              onClick={() => { setIsLogin(true); setIsResetPassword(false); setShowOtpSection(false); }}
              className={isLogin ? styles.active : ""}
            >
              Login
            </button>
            <button
              onClick={() => { setIsLogin(false); setIsResetPassword(false); setShowOtpSection(false); }}
              className={!isLogin ? styles.active : ""}
            >
              Sign Up
            </button>
          </div>

          {isResetPassword ? (
            <ForgotPassword />
          ) : (
          !showOtpSection ? (
            <form onSubmit={(e) => isLogin ? handleLogin(e) : handleSendOtp(e, false)}>
              {!isLogin && (
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
    )}
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              {isLogin && (
                <p className={styles.resetPassword} onClick={() => setIsResetPassword(true)}>
                  Reset password?
                </p>
              )}
              {isLogin ? (<button disabled={loading} type="submit">{loading ? "Logging in..." : "Login"}</button>) : ( <button type="submit" disabled={isSendingOtp}>{isSendingOtp ? "Sending OTP..." : "Send OTP"}</button>)}
              {/* <button type="submit">{isLogin ? "Login" : "Send OTP"}</button> */}
            </form>
          ) : (
            <form onSubmit={handleCreateUser}>
              <div className={styles.otpContainer}>
                <p>Enter the OTP sent to your email</p>
                <div className={styles.otpInputs}>
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      ref={(el) => (otpInputs.current[index] = el)}
                      onChange={(e) => handleOtpChange(index, e)}
                      // required
                    />
                  ))}
                </div>
      <button type="button" hidden={!isResendAllowed} onClick={(e)=>handleSendOtp(e,true)}>Resend</button>

                {/* {isResetPassword && (
                  <input type="password" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                )} */}
                {/* <button type="submit">{isResetPassword ? "Reset Password" : "Verify OTP"}</button> */}
                <button type="submit" disabled={isRegistering}>
  {isResetPassword ? "Reset Password" : isRegistering ? "Registering..." : "Verify OTP"}
</button>
              </div>
            </form>
          ))}

          <div className={styles.thirdPartyAuth}>
            <button onClick={() => toast("Login with Google")}>Login with Google</button>
          </div>

          {isLogin && <p className={styles.signupPrompt}>Don't have an account? <span onClick={() => setIsLogin(false)}>Sign Up</span></p>}
        </div>
      </div>
    </div>
  );
};

LoginSignupPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  manageLogin: PropTypes.func.isRequired,
};

export default LoginSignupPopup;