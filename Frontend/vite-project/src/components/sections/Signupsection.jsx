import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signupsection() {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    profileImage: null,
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    profileImage: "",
  });

  function handleChange(e) {

    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      fullname: "",
      email: "",
      password: "",
      profileImage: "",
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
      newErrors.password ||
      newErrors.profileImage
    ) {
      return;
    }

    console.log(formData);
  }

  return (
    <section className="flex-1 flex items-center">

      <div className="max-w-7xl mx-auto w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Left Side */}

          <div className="hidden lg:flex justify-center items-center mt-5">

            <div className="border border-slate-700 rounded-xl h-96 w-full flex items-center justify-center">
              Signup Illustration
            </div>

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
                      type="password"
                      name="password"
                      value={formData.password}
                      placeholder="Enter Your Password"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500"
                      onChange={handleChange}
                    />

                    <Eye className="absolute right-4 top-1/3" />

                  </div>

                  {errors.password && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.password}
                    </p>
                  )}

                </div>

                {/* Profile Image */}

                <div className="mt-6">

                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Profile Image
                  </label>

                  <input
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3"
                    onChange={handleChange}
                  />

                </div>

                {/* Button */}

                <button className="rounded-full py-3 border border-slate-700 text-white w-full mt-8 bg-purple-600 hover:bg-purple-500 transition-colors">

                  Create Account

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