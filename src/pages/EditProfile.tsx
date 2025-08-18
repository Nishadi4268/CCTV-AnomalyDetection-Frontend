import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import user1 from "/images/userprofile/user1.png";
import { LuClock3 } from "react-icons/lu";
import axios from "axios";

function EditProfile() {
  const navigate = useNavigate();
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false); // For Save button state
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Make sure this matches Signin.tsx
        if (!token) {
          console.error("No token found in localStorage");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          "http://localhost:5000/api/auth/user",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const user = response.data.data;

        setfirstName(user.firstName || "");
        setlastName(user.lastName || "");
        setEmail(user.email || "");
        setLocation(user.location || "Unknown");
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleSaveChanges = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setMessage("No authentication token found. Please login again.");
        setSaving(false);
        return;
      }

      const response = await axios.put(
        "http://localhost:5000/api/auth/user", // Make sure your backend supports PUT/PATCH
        { firstName: firstname, lastName: lastname, email, location },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage("Profile updated successfully!");
      console.log("Updated user data:", response.data);
    } catch (error: any) {
      console.error("Error updating profile:", error);
      setMessage(error.response?.data?.message || "Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background icon for CCTV theme */}
      <div className="absolute top-8 right-8 z-0 opacity-10 animate-spin-slow">
        <svg width="80" height="80" fill="none" viewBox="0 0 24 24">
          <path
            d="M2 12l1.5-1.5L12 19l8.5-8.5L22 12l-10 10-10-10z"
            fill="#3B82F6"
          />
        </svg>
      </div>
      <div className="w-full max-w-lg mx-auto p-8 rounded-3xl shadow-2xl backdrop-blur-lg bg-white/70 border border-blue-100 flex flex-col items-center animate-fade-in relative z-10">
        <h1 className="font-productsans text-2xl font-bold text-[#1A3A6D] mb-6 flex items-center gap-2">
          <span className="text-white rounded-full bg-[#1A3A6D] w-6 h-6 flex items-center justify-center text-20">
            !
          </span>
          Edit Profile
        </h1>
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#3B82F6] shadow-lg mb-4 flex items-center justify-center ">
          <img src={user1} className="w-full h-full object-cover" />
        </div>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSaveChanges}>
  <div className="flex flex-row w-full gap-4">
    <label className="font-semibold text-[#1A3A6D]">
      First Name
      <input
        type="text"
        value={firstname}
        onChange={(e) => setfirstName(e.target.value)}
        className="w-full mt-2 p-2 rounded-lg border border-blue-200 bg-white/80 focus:ring-2 focus:ring-[#3B82F6] transition"
      />
    </label>
    <label className="font-semibold text-[#1A3A6D]">
      Last Name
      <input
        type="text"
        value={lastname}
        onChange={(e) => setlastName(e.target.value)}
        className="w-full mt-2 p-2 rounded-lg border border-blue-200 bg-white/80 focus:ring-2 focus:ring-[#3B82F6] transition"
      />
    </label>
  </div>

  <label className="font-semibold text-[#1A3A6D]">
    Email
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full mt-2 p-2 rounded-lg border border-blue-200 bg-white/80 focus:ring-2 focus:ring-[#3B82F6] transition"
    />
  </label>

  <label className="font-semibold text-[#1A3A6D]">
    Location
    <input
      type="text"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="w-full mt-2 p-2 rounded-lg border border-blue-200 bg-white/80 focus:ring-2 focus:ring-[#3B82F6] transition"
    />
  </label>

  {message && <div className="text-green-600">{message}</div>}

  <div className="flex gap-4 mt-6">
    <button
      type="button"
      className="px-6 py-2 rounded-xl bg-[#3B82F6] text-white font-semibold shadow hover:bg-[#1A3A6D] transition"
      onClick={() => navigate(-1)}
    >
      Cancel
    </button>
    <button
      type="submit"
      className={`px-6 py-2 rounded-xl bg-[#FA9231] text-white font-semibold shadow hover:bg-[#F7B267] transition ${
        saving ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={saving}
    >
      {saving ? "Saving..." : "Save Changes"}
    </button>
  </div>
</form>

        {/* Security status and quick links */}
        <div className="mt-8 w-full flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2 text-[#1A3A6D]">
            <LuClock3 />
            Last login: Tue, 07 Feb 2025, Colombo
          </div>
          <div className="flex gap-4 mt-2">
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
              <h1 className="text-white rounded-full bg-[#FA9231] w-5 h-5 flex items-center justify-center">
                !
              </h1>
              Anomaly Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
