import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../api/api";
import signupImage from "../../assets/signuup.JPEG";

function ResetPasswordSection() {

  const navigate = useNavigate();
const location = useLocation();

const email = location.state?.email;

const [formData, setFormData] = useState({
  otp: "",
  password: "",
  confirmPassword: "",
});

const [errors, setErrors] = useState({
  otp: "",
  password: "",
  confirmPassword: "",
});

const [serverError, setServerError] = useState("");
const [successMessage, setSuccessMessage] = useState("");
const [loading, setLoading] = useState(false);

useEffect(() => {
  if (!email) {
    navigate("/forget-password");
  }
}, [email, navigate]);


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
    otp: "",
    password: "",
    confirmPassword: "",
  };

  if (!formData.otp.trim()) {
    newErrors.otp = "OTP is required";
  }

  if (!formData.password.trim()) {
    newErrors.password = "Password is required";
  } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  if (!formData.confirmPassword.trim()) {
    newErrors.confirmPassword = "Confirm Password is required";
  } else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  setErrors(newErrors);

  if (
    newErrors.otp ||
    newErrors.password ||
    newErrors.confirmPassword
  ) {
    return;
  }

  try {
    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    const response = await api.post("/auth/reset-password", {
      email,
      otp: formData.otp,
      password: formData.password,
    });

    if (response.data.success) {

      setSuccessMessage(response.data.message);

      
        navigate("/login");
     

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
      src={signupImage}
      alt="Reset Password"
      className="h-full w-full object-cover"
    />

  </div>

</div>

          {/* Right */}

          <div className="flex justify-center mt-24">

            <div className="max-w-md w-full">

              <h1 className="text-4xl font-bold text-white">
                Reset Password
              </h1>

              <p className="text-slate-400 mt-3">
                Enter the OTP sent to your email and create a new password.
              </p>

              <form className="mt-8 " onSubmit={handleSubmit}>

                {/* OTP */}

                <div>

                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    OTP
                  </label>

                    <input
                     type="text"
                     name="otp"
                     value={formData.otp}
                     
                     onChange={handleChange}
                     placeholder="Enter OTP"
                     maxLength={6}
                     inputMode="numeric"
                     className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500"
                   />
                   
                   {errors.otp && (
                     <p className="text-red-500 text-sm mt-2">
                       {errors.otp}
                     </p>
                   )}

                </div>

                {/* Password */}

                <div className="mt-6">

                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    New Password
                  </label>

                    <input
               type="password"
               name="password"
               value={formData.password}
               autoComplete="new-password"
               onChange={handleChange}
               className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500"
             />

             {errors.password && (
       <p className="text-red-500 text-sm mt-2">
          {errors.password}
         </p>
         )}

                </div>

                {/* Confirm Password */}

                <div className="mt-6">

                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Confirm Password
                  </label>

                 <input
          type="password"
       name="confirmPassword"
     value={formData.confirmPassword}
     autoComplete="new-password"
  onChange={handleChange}
  placeholder="Confirm New Password"
  className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500"
/>

  {errors.confirmPassword && (
  <p className="text-red-500 text-sm mt-2">
    {errors.confirmPassword}
  </p>
   )}
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

                </div>

                <button
            disabled={loading}
            className="rounded-full py-3 border border-slate-700 text-white w-full mt-8 bg-purple-600 hover:bg-purple-500 transition-colors">
          {loading ? "Updating Password..." : "Update Password"}
             </button>

                <div className="mt-6 text-center">

                   <Link to="/login" className="text-purple-400 hover:text-purple-300">
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

export default ResetPasswordSection;