import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/Dashboardlayout";
import EditProfileModal from "../components/settings/EditProfileModal";
import api from "../api/api";

import {
  FaUser,
  FaLock,
} from "react-icons/fa";

function Settings() {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [serverError, setServerError] = useState("");

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  async function getProfile() {

    try {

      setLoading(true);

      setServerError("");

      const response = await api.get("/auth/profile");

      setUser(response.data.user);

    } catch (error) {

      setServerError(
        error.response?.data?.message ||
        "Something went wrong."
      );

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    getProfile();

  }, []);

  if (loading) {

    return (

      <DashboardLayout>

        <h2 className="text-center text-white">
          Loading...
        </h2>

      </DashboardLayout>

    );

  }

  if (serverError) {

    return (

      <DashboardLayout>

        <h2 className="text-center text-red-500">
          {serverError}
        </h2>

      </DashboardLayout>

    );

  }

  return (

    <DashboardLayout>

      <div>

        <h1 className="text-3xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your account settings.
        </p>

      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        {/* Profile */}

        <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-xl text-white">

            <FaUser />

          </div>

          <h2 className="text-2xl font-bold text-white">

            Profile

          </h2>

          <div className="mt-6 space-y-5">

            <div>

              <p className="text-sm text-slate-400">
                Full Name
              </p>

              <p className="mt-1 text-lg font-semibold text-white">
                {user?.fullname}
              </p>

            </div>

            <div>

              <p className="text-sm text-slate-400">
                Email
              </p>

              <p className="mt-1 text-lg font-semibold text-white">
                {user?.email}
              </p>

            </div>

            <div>

              <p className="text-sm text-slate-400">
                Role
              </p>

              <p className="mt-1 text-lg font-semibold text-white">
                Investor
              </p>

            </div>

          </div>

          <button
            onClick={() => setIsEditModalOpen(true)}
            className="mt-8 rounded-xl bg-purple-600 px-6 py-3 text-white transition hover:bg-purple-700"
          >
            Edit Profile
          </button>

        </div>

        {/* Security */}

        <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6">

          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-600 text-xl text-white">

            <FaLock />

          </div>

          <h2 className="text-2xl font-bold text-white">

            Security

          </h2>

          <p className="mt-4 leading-7 text-slate-400">

            Keep your account secure by updating your password regularly.

          </p>

          <button

            onClick={() => window.location.href="/forget-password"}

            className="mt-8 rounded-xl bg-yellow-600 px-6 py-3 text-white transition hover:bg-yellow-700"

          >

            Change Password

          </button>

        </div>

      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={user}
        onProfileUpdated={getProfile}
      />

    </DashboardLayout>

  );

}

export default Settings;