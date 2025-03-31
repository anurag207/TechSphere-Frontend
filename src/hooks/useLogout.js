import { toast } from "react-toastify";

const useLogout=({setUserInfo})=>{
    const logout=async()=>{
        try {
            const res = await fetch(import.meta.env.VITE_BACKEND_URL +"/api/v1/auth/logout", {
              method: "POST",
              credentials: "include",
              headers: {
                "content-type": "application/json",
                
              },
            });
            // console.log(res);
            const data = await res.json();
            if (res.status == 200) {
                setUserInfo({ isAuthenticated: false, email: "",userId: "",name:""});
              toast.success("Logout Succesful!");
            //   navigate('/');
            } 
              else {
              toast(data.message);
            }
          } 
          catch (err) {
            console.log("catch");
            toast.error(err.message);
          }
    }
    return {logout};    
}
export default useLogout;