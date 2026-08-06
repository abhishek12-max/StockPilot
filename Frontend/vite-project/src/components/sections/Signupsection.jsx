import { Eye } from "lucide-react";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api/api";
import SigupImage from "../../assets/signuup.JPEG"
function Signupsection() {
const navigate= useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
   
  });
  const[loading,setLoading]=useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
   
  });

  const [servererror,setServererror]=useState("");

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  }

 async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      fullname: "",
      email: "",
      password: "",
      
    };

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !formData.email.includes("@") ||
      !formData.email.includes(".")
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (
      newErrors.fullname ||
      newErrors.email ||
      newErrors.password 
    ) {
      return;
    }
     
    try {
          setLoading(true);
          setServererror("");
        const response= await api.post("/auth/register",formData);
       if (response.data.success) {
        navigate("/verify-otp", {
          state: {            // ye state usestate nhi hai react router navigation ki state hai
         email: formData.email,
         },
       });
    }
        
    } catch (error) {
        setServererror(error.response?.data?.message||"something went wrong");
    }finally{
       setLoading(false)
    }
  
  }

  return (
    <section className="flex-1 flex items-center">

      <div className="max-w-7xl mx-auto w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Left Side */}

          <div className="h-[400px] w-full overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">
          
              <img
                src={SigupImage}
                alt="Signup Illustration"
                className="h-full w-full object-cover"
              />
          
            </div>

          {/* Right Side */}

          <div className="flex justify-center mt-24">

            <div className="max-w-md w-full">

              <h1 className="text-4xl font-bold text-white">
                Create Your Account
              </h1>

              <p className="text-slate-400 mt-3">
                Join TradeX and start your smarter investing journey.
              </p>

              <form className="mt-8" onSubmit={handleSubmit}>

                {/* Full Name */}

                <div>

                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    autoComplete="name"
                    placeholder="Enter Your Full Name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500"
                    onChange={handleChange}
                  />

                  {errors.fullname && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.fullname}
                    </p>
                  )}

                </div>

                {/* Email */}

                <div className="mt-6">

                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    autoComplete="email"
                    placeholder="Enter Your Email"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500"
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email}
                    </p>
                  )}

                </div>

                {/* Password */}

                <div className="mt-6">

                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Password
                  </label>

                  <div className="relative">

                   <input
  type={showPassword ? "text" : "password"}
  name="password"
  value={formData.password}
  autoComplete="new-password"
  placeholder="Enter Your Password"
  className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500"
  onChange={handleChange}
/>

<Eye
  onClick={() => setShowPassword(!showPassword)}
  className="absolute right-4 top-1/3 cursor-pointer text-slate-400 hover:text-white transition-colors"
/>

                  </div>

                  {errors.password && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.password}
                    </p>
                  )}

                </div>

                   {servererror && (
                <p className="text-red-500 text-sm mb-4">
               {servererror}
                </p>
                )}

              

                {/* Button */}
                <button
                disabled={loading}
            className="rounded-full py-3 border border-slate-700 text-white w-full mt-8 bg-purple-600 hover:bg-purple-500 transition-colors"
             >
             {loading ? "Creating Account..." : "Create Account"}
           </button>

                <div className="mt-6 text-center mb-6">

                  <p className="text-slate-400">

                    Already have an account?{" "}

                    <Link
                      to="/login"
                      className="text-purple-400 hover:text-purple-300"
                     >
                      Sign In
                    </Link>

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

export default Signupsection;