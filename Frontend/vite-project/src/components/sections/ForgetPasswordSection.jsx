import { Link,Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api/api";
import loginImage from "../../assets/loginnn.JPEG";


function ForgetPasswordSection() {
    const navigate= useNavigate();
    const [formData, setFormData] = useState({
  email: "",
});
    
const [errors, setErrors] = useState({
  email: "",
});
const [serverError, setServerError] = useState("");
const [loading, setLoading] = useState(false);
const [successMessage, setSuccessMessage] = useState("");

   function handleChange(e){
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
    email: "",
  };

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !formData.email.includes("@") ||
    !formData.email.includes(".")
  ) {
    newErrors.email = "Please enter a valid email";
  }

  setErrors(newErrors);

  if (newErrors.email) {
    return;
  }

  try {
    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    const response = await api.post("/auth/forget-password", formData);
       console.log(response.data);
    if (response.data.success) {
   
      setSuccessMessage(response.data.message);

        navigate("/reset-password", {
          state: {
            email: formData.email,
          },
        });
     
    }
  } catch (error) {
    setServerError(
      error.response?.data?.message || "Something went wrong"
    );
  } finally {
    setLoading(false);
  }
}
  
  return (
    <section className="flex-1 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Left */}

          <div className="hidden lg:flex justify-center items-center mt-5">

  <div className="h-[300px] w-full overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">

    <img
      src={loginImage}
      alt="Forgot Password"
      className="h-full w-full object-cover"
    />

  </div>

</div>

          {/* Right */}

          <div className="flex justify-center mt-24">

            <div className="max-w-md w-full">

              <h1 className="text-4xl font-bold text-white">
                Forgot Password
              </h1>

              <p className="text-slate-400 mt-3 mb-14">
                Enter your registered email address and we'll send you an OTP to reset your password.
              </p>

              <form className="mt-8" onSubmit={handleSubmit}>

                <div>

                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>

                  <input
                   type="email"
                   name="email"
                   value={formData.email}
                   autoComplete="email"
                   onChange={handleChange}
                   placeholder="Enter Your Email"
                   className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500"
                 />
                    {errors.email && (
                   <p className="text-red-500 text-sm mt-2">
                           {errors.email}
                     </p>
                      )}
                </div>

                 {serverError && (
                 <p className="text-red-500 text-sm mt-4">
                  {serverError}
                    </p>
                  )}

                  {successMessage && (
               <p className="text-green-500 text-sm mt-4">
                  {successMessage}
                    </p>
                  )}
                <button
                  disabled={loading}
                  className="rounded-full py-3 border border-slate-700 text-white w-full mt-8 bg-purple-600 hover:bg-purple-500 transition-colors"
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>                

                <div className="mt-6 text-center">

                  <Link
                    to="/login"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    ← Back to Login
                  </Link>

                </div>

              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ForgetPasswordSection;