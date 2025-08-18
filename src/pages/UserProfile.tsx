import user1 from "/images/userprofile/user1.png";
import signin from "/images/signup/signin.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "Loading...",
    lastName: "",
    email: "Loading...",
    lastLogin: new Date().toISOString(),
    location: "Unknown"
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("No token found in localStorage");
          setLoading(false);
          return;
        }

        // Call backend route correctly
        const response = await axios.get(
          "http://localhost:5000/api/auth/user",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        console.log("Frontend received:", response.data); // check received data

        // Access user data inside response.data.data
        const user = response.data.data;

        setUserData({
          firstName: user.firstName || "User",
          lastName: user.lastName || "",
          email: user.email || "Not available",
          lastLogin: user.lastLogin || new Date().toISOString(),
          location: user.location || "Unknown"
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#cbdefd] via-[#e8f0fd] to-[#ffffff] relative overflow-hidden">
      {/* Background image with low opacity */}
      <img
        src={signin}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-5 z-0 pointer-events-none"
      />
      {/* Glassmorphism card and content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto mt-12 p-8 rounded-3xl shadow-2xl backdrop-blur-lg bg-white/60 border border-blue-100 flex flex-col items-center animate-fade-in">
        {/* Avatar */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#3B82F6] shadow-lg mb-4 flex items-center justify-center">
          <img
            src={user1}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="font-productsans text-2xl font-bold text-[#1A3A6D] mb-1 flex items-center gap-2">
          {userData.firstName} {userData.lastName}
          <span
            className="inline-block w-4 h-4 bg-green-400 rounded-full animate-pulse"
            title="Active"
          ></span>
        </h1>
        <h2 className="text-base text-[#3B82F6] mb-2">{userData.email}</h2>
        <h3 className="text-sm text-gray-400 mb-2 flex items-center gap-2">
          <span>Last login: {userData.lastLogin}</span>
          <span className="inline-flex items-center gap-1 text-[#1A3A6D]">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6l5.25 3.15-.75 1.23L11 13V7z"
                fill="#1A3A6D"
              />
            </svg>
            {userData.location}
          </span>
        </h3>
        <div className="flex gap-4 mb-6">
          <button
            className="px-6 py-2 rounded-xl bg-[#3B82F6] text-white font-semibold shadow hover:bg-[#1A3A6D] transition"
            onClick={() => {
              navigate("/signin/verifyotp");
            }}
          >
            CHANGE PASSWORD
          </button>
          <button
            className="px-6 py-2 rounded-xl bg-white text-[#3B82F6] font-semibold border border-[#3B82F6] shadow hover:bg-[#E3F0FF] transition"
            onClick={() => navigate("/editprofile")}
          >
            EDIT PROFILE
          </button>
        </div>
        {/* Quick Links */}
        <div className="flex gap-6 mb-6">
          <a
            href="/cctv-logs"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E3F0FF] text-[#1A3A6D] font-semibold shadow hover:bg-[#B6D6F2] transition"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4zm0 4h10v2H4z"
                fill="#1A3A6D"
              />
            </svg>
            CCTV Logs
          </a>
          <a
            href="/anomaly-events"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E3F0FF] text-[#FA9231] font-semibold shadow hover:bg-[#B6D6F2] transition"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2zm0-4h-2V7h2z"
                fill="#FA9231"
              />
            </svg>
            Anomaly Events
          </a>
        </div>
        {/* Recent Activity Logs */}
        <div className="w-full mb-6">
          <h4 className="text-lg font-semibold text-[#1A3A6D] mb-2">
            Recent Activity Logs
          </h4>
          <ul className="bg-white/80 rounded-xl p-4 shadow divide-y divide-blue-50">
            <li className="py-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#FA9231] rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-700">
                Anomaly detected at Camera 3 - 10:32 AM
              </span>
              <span className="ml-auto text-xs text-[#FA9231] font-bold">
                Critical
              </span>
            </li>
            <li className="py-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#3B82F6] rounded-full"></span>
              <span className="text-sm text-gray-700">
                Normal activity at Camera 1 - 09:15 AM
              </span>
              <span className="ml-auto text-xs text-[#3B82F6] font-bold">
                Info
              </span>
            </li>
            <li className="py-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#1A3A6D] rounded-full"></span>
              <span className="text-sm text-gray-700">
                User login from new device - 08:50 AM
              </span>
              <span className="ml-auto text-xs text-[#1A3A6D] font-bold">
                Security
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Booking/Activity History Section */}
      <div className="w-full max-w-5xl mx-auto mt-16">
        <h1 className="font-productsans text-xl md:text-2xl text-[#1A3A6D] mb-6">
          Anomaly & Booking History
        </h1>
      </div>
    </div>
  );
}

export default UserProfile;
