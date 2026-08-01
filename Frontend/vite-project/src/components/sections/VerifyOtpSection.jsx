import { Link ,useLocation, useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import api from "../../api/api";
function VerifyOtpSection() {

    const navigate= useNavigate();
   const location = useLocation();

   const [otp, setOtp] = useState("");
   const[servererror,setServererror]=useState("");
   const[successmessage,setSuccessmessage]=useState("");
   const [loading, setLoading] = useState(false);
   const email = location.state?.email;
   useEffect(() => {
  if (!email) {
    navigate("/signup");
  }
}, [email, navigate]);
   async function handleSubmit(e){
       e.preventDefault();

       try {
              setLoading(true)
           setServererror("");
           const response = await api.post("/auth/verify-Otp", {
           email,
            otp,
          });
         
          if(response.data.success){
              navigate("/login");
          }
       } catch (error) {

     setServererror(
    error.response?.data?.message || "something went wrong"
  );
}
finally{
          setLoading(false)
       }
      
   }

   async function handleResendOtp(e){
      e.preventDefault();
      
      try {
        setLoading(true)
        setServererror("")
        setSuccessmessage("")
       const response= await api.post("/auth/resend-otp",{
        email
       })
          if(response.data.success){
              setSuccessmessage(response.data.message);

          }
      } catch (error) {
         console.log(error.response?.data);
          setServererror(error.response?.data?.message||"something went wrong")
        
      }finally{
         setLoading(false)
      }
   }


  return (
    <section className="flex-1 flex items-center">

      <div className="max-w-7xl mx-auto w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Left Side */}

          <div className="hidden lg:flex justify-center items-center mt-24 mb-10">

            <div className="border border-slate-700 rounded-xl h-96 w-full flex items-center justify-center">
              OTP Illustration
            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center mt-24">

            <div className="max-w-md w-full">

              <h1 className="text-4xl font-bold text-white">
                Verify Your Email
              </h1>

              <p className="text-slate-400 mt-3">
                We've sent a verification code to your email.
              </p>

              <form className="mt-8 mb-14 " onSubmit={handleSubmit}>

                {/* OTP */}

                <div>

                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    OTP
                  </label>

                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500"
                   onChange={(e)=>setOtp(e.target.value)} value={otp} maxLength={6} inputMode="numeric"/>

                </div>
                     {servererror && (
                <p className="text-red-500 text-sm mb-4">
               {servererror}
                </p>
                )}
                
               
                
                {/* Verify Button */}


                <button
                  className="rounded-full py-3 border border-slate-700 text-white w-full mt-8 bg-purple-600 hover:bg-purple-500 transition-colors"
                  disabled={loading}>
                 {loading?"Verifying OTP...":"Verify OTP"} 
                </button>
                   
                   {successmessage && (
                <p className="text-green-500 mt-4">
                 {successmessage}
                </p>
               )}
                {/* Resend */}

                <div className="mt-6 text-center">

                  <p className="text-slate-400">

                    Didn't receive the code?{" "}

                    <button
                      onClick={handleResendOtp}
                      className="text-purple-400 hover:text-purple-300 transition-colors rounded-2xl "
                    >
                      Resend OTP
                    </button>

                  </p>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default VerifyOtpSection;