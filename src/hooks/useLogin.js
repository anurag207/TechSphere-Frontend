import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const useLogin = ({manageLogin,onClose}) => {
  const navigate = useNavigate();
    const [loading, setLoading]= useState(false);   
    const login = async ({email, password}) => {
        setLoading(true);   
      try {
        const userInfo={email,password};
        const res = await fetch(import.meta.env.VITE_BACKEND_URL +"/api/v1/auth/login", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(userInfo),
          headers: {
            "content-type": "application/json",
            
          },
        });
        // console.log(res);
        const data = await res.json();
        if (res.status == 200) {
          toast.success("Login Succesful!");
          // console.log(data);
          manageLogin(data.userData); //data is response inside which data inside which userinfo with name,email as object
          onClose();
          // navigate('/'); //Redirect on successful login
        } else if (res.status === 400) { // user is not registered
          // navigate('/signup');

            //redirect
            toast.error('Email is not registered. Please sign up !');
            // alert(data.message);
        }
        else if (res.status === 401) { // user is not registered
          // navigate('/signup');

            //redirect
            toast.error('Email or password is incorrect !');
            // alert(data.message);
        }
        
        else {
          toast(data.message);
        }
      } 
      catch (err) {
        console.log("catch");
        toast.error(err.message);
      }
      finally{  //This code executes irrespective of try,catch block 
        setLoading(false);
      }
    };
    return { login, loading };
  };
  export default useLogin;
  