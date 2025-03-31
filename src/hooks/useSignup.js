import { toast } from "react-toastify";

const useSignup = ({ setIsResendAllowed,onClose, setIsRegistering }) => {
  const registerUser = async ({  email, password, otp, name }) => {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL +"/api/v1/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password, otp, name }),
        headers: {
          "content-type": "application/json",
          credentials: "include",
        },
      });
      // console.log(res);
      const data = await res.json();
      if (res.status == 201) {
        toast.success("User Registered");
        onClose();
      } else if (res.status === 401) {
        toast.error(data.message);
        setIsResendAllowed(true);
      } else if (res.status === 409) {
        toast.error(data.message);
        //redirect to login as user already exists,duplicate key error
      } else {
        toast(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
    finally {
      setIsRegistering(false);
    }
  };
  return { registerUser };
};
export default useSignup;
