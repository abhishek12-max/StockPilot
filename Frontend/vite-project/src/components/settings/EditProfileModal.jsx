import { useEffect, useState } from "react";
import api from "../../api/api";
import { useAuth } from "../../context/AuthContext";

const EditProfileModal = ({
  isOpen,
  onClose,
  user,
  onProfileUpdated,
}) => {

  const { getProfile } = useAuth();

  const [fullname, setFullname] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (user) {
      setFullname(user.fullname);
    }

  }, [user]);

  if (!isOpen) return null;

  async function handleSave() {

    try {

      setLoading(true);

      const response = await api.patch(
        "/auth/profile",
        {
          fullname,
        }
      );

      alert(response.data.message);

      // AuthContext update
      await getProfile();

      // Settings page update
      onProfileUpdated();

      // Close modal
      onClose();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Something went wrong."
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-md rounded-2xl bg-[#0B1023] p-6">

        <h2 className="text-2xl font-bold text-white">
          Edit Profile
        </h2>

        <div className="mt-6">

          <label className="mb-2 block text-sm text-slate-400">
            Full Name
          </label>

          <input
            type="text"
            value={fullname}
            onChange={(e) =>
              setFullname(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white outline-none focus:border-purple-500"
          />

        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-700 px-5 py-3 text-white hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="rounded-xl bg-purple-600 px-5 py-3 text-white hover:bg-purple-700"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </div>

    </div>

  );

};

export default EditProfileModal;