import { useState } from "react";
import { useNavigate } from "react-router-dom";
import user1 from "/images/userprofile/user1.png";

function EditProfile() {
  const navigate = useNavigate();
  const [firstname, setfirstName] = useState("Ema");
    const [lastname, setlastName] = useState("Rawles");
  const [email, setEmail] = useState("emarawles@gmail.com");
  const [location, setLocation] = useState("Colombo, Sri Lanka");

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
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2zm0-4h-2V7h2z"
              fill="#3B82F6"
            />
          </svg>
          Edit Profile
        </h1>
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#3B82F6] shadow-lg mb-4 flex items-center justify-center ">
          <img
            src={user1}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <form className="w-full flex flex-col gap-4">
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
              className="px-6 py-2 rounded-xl bg-[#FA9231] text-white font-semibold shadow hover:bg-[#F7B267] transition"
            >
              Save Changes
            </button>
          </div>
        </form>
        {/* Security status and quick links */}
        <div className="mt-8 w-full flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2 text-[#1A3A6D]">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6l5.25 3.15-.75 1.23L11 13V7z"
                fill="#1A3A6D"
              />
            </svg>
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
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2zm0-4h-2V7h2z"
                  fill="#FA9231"
                />
              </svg>
              Anomaly Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
