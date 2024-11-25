"use client";
import { useState, FormEvent } from "react";

interface ProfileFormData {
  firstName: string;
  email: string;
  phone: string;
}

interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState<ProfileFormData>({
    firstName: "",
    email: "",
    phone: "",
  });
  const [passwordData, setPasswordData] = useState<PasswordFormData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileSubmit = (e: FormEvent) => {
    e.preventDefault();
    //backend logic
    setProfileData({
      firstName: "",
      email: "",
      phone: "",
    });
  };

  const handlePasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    //backend logic
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleLogout = () => {
    //backend logic
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 max-sm:px-4 py-20 max-sm:py-12">
      <div className="flex justify-between items-center mb-8 max-sm:mb-6">
        <h1 className="text-zinc-100 text-4xl max-sm:text-3xl font-bold">
          My Account
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition max-sm:text-sm max-sm:px-4 max-sm:py-1"
        >
          Logout
        </button>
      </div>

      <div className="bg-zinc-800 rounded-lg p-6 max-sm:p-4">
        <div className="flex gap-4 max-sm:gap-2 border-b border-zinc-700 mb-6 max-sm:mb-4">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 text-zinc-100 max-sm:text-sm ${
              activeTab === "profile" ? "border-b-2 border-purple-500" : ""
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-2 text-zinc-100 max-sm:text-sm ${
              activeTab === "settings" ? "border-b-2 border-purple-500" : ""
            }`}
          >
            Settings
          </button>
        </div>

        {activeTab === "profile" && (
          <form
            onSubmit={handleProfileSubmit}
            className="space-y-6 max-sm:space-y-4"
          >
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={profileData.firstName}
                onChange={(e) =>
                  setProfileData({ ...profileData, firstName: e.target.value })
                }
                className="bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none w-full"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
                className="bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none w-full"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={profileData.phone}
                onChange={(e) =>
                  setProfileData({ ...profileData, phone: e.target.value })
                }
                className="bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none w-full"
                required
                maxLength={10}
                minLength={10}
                inputMode="numeric"
                pattern="[0-9]*"
                title="Phone number must be 10 digits"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition max-sm:text-sm"
            >
              Save Changes
            </button>
          </form>
        )}

        {activeTab === "settings" && (
          <form
            onSubmit={handlePasswordSubmit}
            className="space-y-6 max-sm:space-y-4"
          >
            <div className="space-y-4">
              <h3 className="text-zinc-100 font-semibold max-sm:text-sm">
                Password
              </h3>
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      currentPassword: e.target.value,
                    })
                  }
                  className="bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none w-full"
                  required
                />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      newPassword: e.target.value,
                    })
                  }
                  className="bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none w-full"
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none w-full"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition max-sm:text-sm"
            >
              Update Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Account;
