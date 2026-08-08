import { Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import api from "../../api/api";
import { useAuth } from "../../context/AuthContext";
import loginImage from "../../assets/loginnn.JPEG";

function Loginsection() {
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [servererror, setServererror] = useState("");

  function handlechange(e) {
    setFormdata({
      ...formdata,
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
      password: "",
    };

    if (!formdata.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !formdata.email.includes("@") ||
      !formdata.email.includes(".")
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formdata.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return;
    }

    try {
      setLoading(true);
      setServererror("");

      const response = await api.post("/auth/login", formdata);

      if (response.data.success) {
        // Save logged-in user in AuthContext
        setUser(response.data.user);

        // Go to dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login Error:", error);

      setServererror(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Login Image */}

          <div className="hidden lg:flex justify-center items-center mt-5">
            <img
              src={loginImage}
              alt="Login Illustration"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Login Form */}

          <div className="flex justify-center mt-24">
            <div className="max-w-md w-full">

              <h1 className="text-4xl font-bold text-white">
                Welcome Back
              </h1>

              <p className="text-slate-400 mt-3">
                Sign in to continue your trading journey.
              </p>

              <form
                className="mt-8"
                onSubmit={handleSubmit}
              >

                {/* Email */}

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    autoComplete="username"
                    value={formdata.email}
                    placeholder="Enter Your Email"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500"
                    onChange={handlechange}
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
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      name="password"
                      autoComplete="current-password"
                      value={formdata.password}
                      placeholder="Enter Your Password"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500"
                      onChange={handlechange}
                    />

                    <Eye
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="absolute right-4 top-1/3 cursor-pointer text-slate-400"
                    />

                  </div>

                  {errors.password && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Forgot Password */}

                <div className="mt-4 flex justify-end mb-5">
                  <Link
                    to="/forget-password"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Forget Password
                  </Link>
                </div>

                {/* Server Error */}

                {servererror && (
                  <p className="text-red-500 text-sm mb-4">
                    {servererror}
                  </p>
                )}

                {/* Login Button */}

                <button
                  type="submit"
                  className="rounded-full py-3 border border-slate-700 text-white w-full mb-10 bg-purple-600 hover:bg-purple-500 transition-colors disabled:opacity-60"
                  disabled={loading}
                >
                  {loading
                    ? "Signing In..."
                    : "Sign In"}
                </button>

                {/* Signup */}

                <div className="mt-6 text-center mb-6">
                  <p className="text-slate-400">
                    Don't have an account?{" "}

                    <Link
                      to="/signup"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Sign Up
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

export default Loginsection;