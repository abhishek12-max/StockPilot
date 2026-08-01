import {
  FaUser,
  FaLock,
  FaMoon,
  FaSignOutAlt,
} from "react-icons/fa";

import SettingsCard from "../components/settings/SettingsCard";
import DashboardLayout from "../components/layout/Dashboardlayout";

const Settings = () => {
  const settings = [
    {
      id: 1,
      title: "Profile",
      description: "View and update your profile information.",
      icon: <FaUser />,
      button: "Edit Profile",
    },
    {
      id: 2,
      title: "Password",
      description: "Change your account password.",
      icon: <FaLock />,
      button: "Change Password",
    },
    {
      id: 3,
      title: "Theme",
      description: "Switch between light and dark mode.",
      icon: <FaMoon />,
      button: "Change Theme",
    },
    {
      id: 4,
      title: "Logout",
      description: "Sign out from your account.",
      icon: <FaSignOutAlt />,
      button: "Logout",
    },
  ];

  return (
    <DashboardLayout>
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-1 text-slate-400">
          Manage your account settings.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {settings.map((item) => (
          <SettingsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
    </DashboardLayout>
  );
};

export default Settings;