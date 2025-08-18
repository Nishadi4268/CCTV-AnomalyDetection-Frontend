import { useLocation } from "react-router-dom";
import { useState } from "react";
import visaLogo from "/images/visa.png";
import mastercardLogo from "/images/master.png";
import { Checkbox } from "@/components/ui/Checkbox";

interface Plan {
  title: string;
  duration: string;
  price: string;
  features: string[];
  desc: string;
}

const Payment: React.FC = () => {
  const location = useLocation();
  const plan = location.state as Plan;

  const [cardType, setCardType] = useState<"visa" | "mastercard">("visa");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [paying, setPaying] = useState(false);
  const [message, setMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [cardHolder, setCardHolder] = useState("");

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      setMessage("Please accept the terms and conditions");
      return;
    }

    setPaying(true);
    setMessage("");

    setTimeout(() => {
      setPaying(false);
      setMessage(
        `Payment successful for ${plan.title} - $${
          plan.price
        } using ${cardType.toUpperCase()}`
      );
    }, 2000);
  };

  const formatCardNumber = (number: string) => {
    return number
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  return (
      <div className="w-full flex flex-col items-center justify-center font-productsansregular  ">
     <div className="w-full flex flex-col gap-[25px] items-center justify-center font-productsansregular text-center px-4">
  {/* Main Title */}
  <h1 className="text-16 md:text-32 xl:text-36 font-bold text-[#1A3A6D]">
    🛡️ Finalize Your Protection
  </h1>
  
  {/* Primary Description */}
  <p className="text-14 md:text-18 max-w-[800px] text-[#1A3A6D]/90">
    One last step to activate your SafeVision security. Your payment is secured with <span className="font-semibold">256-bit encryption</span>, and your surveillance starts the moment you confirm.
  </p>

  {/* Payment Process Breakdown */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[15px] w-full max-w-[1000px]">
    
    {/* Card 1 - Secure Payment */}
    <div className="bg-white p-[25px] rounded-xl shadow-sm border border-[#E0F0FF]">
      <div className="text-[#3B82F6] text-24 mb-[12px]">🔐</div>
      <h2 className="text-18 font-bold mb-[10px]">Bank-Level Security</h2>
      <p className="text-14 text-[#1A3A6D]/80">
        All transactions processed through PCI-DSS compliant gateways with tokenization technology.
      </p>
    </div>
    
    {/* Card 2 - Plan Validation */}
    <div className="bg-white p-[25px] rounded-xl shadow-sm border border-[#E0F0FF]">
      <div className="text-[#3B82F6] text-24 mb-[12px]">✅</div>
      <h2 className="text-18 font-bold mb-[10px]">Plan Details</h2>
      <p className="text-14 text-[#1A3A6D]/80">
        You're purchasing: <span className="font-semibold">{plan.title}</span> ({plan.duration}). Review features before payment.
      </p>
    </div>
    
    {/* Card 3 - Instant Activation */}
    <div className="bg-white p-[25px] rounded-xl shadow-sm border border-[#E0F0FF]">
      <div className="text-[#3B82F6] text-24 mb-[12px]">⚡</div>
      <h2 className="text-18 font-bold mb-[10px]">Instant Activation</h2>
      <p className="text-14 text-[#1A3A6D]/80">
        Your AI surveillance system will be enabled immediately after successful payment.
      </p>
    </div>
  </div>

  {/* Additional Assurance */}
  <div className="flex items-center gap-[10px] mt-[10px] text-12 md:text-14">
    <svg className="w-[16px] h-[16px] text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-[#1A3A6D]/70">
      30-day money-back guarantee • Cancel anytime • 24/7 Support
    </span>
  </div>
</div>
      <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
        {/* Payment card container with glass morphism effect */}
        <div className="relative z-10 bg-blue-100 backdrop-blur-sm shadow-2xl rounded-3xl max-w-lg w-full p-8 border border-white/20">
          {" "}
          <div className="bg-white shadow-2xl rounded-3xl max-w-lg w-full p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-[#1A3A6D]">
              Payment
            </h1>

            {/* Card Visualization */}
            <div
              className={`mb-8 p-6 rounded-xl shadow-md transition-all duration-300 ${
                cardType === "visa"
                  ? "bg-gradient-to-r from-[#1a3a6d] to-[#3b82f6]"
                  : "bg-gradient-to-r from-[#2e1065] to-[#6d28d9]"
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <img
                  src={cardType === "visa" ? visaLogo : mastercardLogo}
                  alt={cardType}
                  className="h-8"
                />
                <div className="bg-white/20 rounded-full px-3 py-1 text-white text-xs">
                  {cardType.toUpperCase()}
                </div>
              </div>

              <div className="text-white mb-6">
                <p className="text-lg tracking-wider mb-1">
                  {cardNumber
                    ? formatCardNumber(cardNumber)
                    : "•••• •••• •••• ••••"}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-sm">{cardHolder || "CARD HOLDER"}</p>
                  <p className="text-sm">{expiry || "MM/YY"}</p>
                </div>
              </div>
            </div>

            {/* Plan Info */}
            <div className="mb-6 p-5 bg-gradient-to-r from-[#E0F0FF] to-[#F0F5FF] rounded-xl shadow-inner">
              <h2 className="text-xl font-semibold mb-1">{plan.title}</h2>
              <p className="text-gray-600 mb-2">{plan.desc}</p>
              <p className="text-2xl font-bold text-[#FA9231] mb-2">
                ${plan.price}
              </p>
              <ul className="list-disc list-inside text-gray-700">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Select Payment Method
              </h3>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setCardType("visa")}
                  className={`flex-1 p-3 border rounded-xl flex items-center justify-center gap-2 transition ${
                    cardType === "visa"
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <img src={visaLogo} alt="Visa" className="h-6" />
                  Visa
                </button>
                <button
                  type="button"
                  onClick={() => setCardType("mastercard")}
                  className={`flex-1 p-3 border rounded-xl flex items-center justify-center gap-2 transition ${
                    cardType === "mastercard"
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <img src={mastercardLogo} alt="MasterCard" className="h-6" />
                  MasterCard
                </button>
              </div>
            </div>

            {/* Card Details Form */}
            <form onSubmit={handlePayment} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Cardholder Name"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />

              <input
                type="text"
                placeholder="Card Number"
                maxLength={16}
                value={cardNumber}
                onChange={(e) =>
                  setCardNumber(e.target.value.replace(/\D/g, ""))
                }
                className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />

              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  maxLength={5}
                  value={expiry}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length > 2) {
                      setExpiry(`${value.slice(0, 2)}/${value.slice(2)}`);
                    } else {
                      setExpiry(value);
                    }
                  }}
                  className="p-3 border rounded-xl flex-1 focus:ring-2 focus:ring-blue-400 outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="CVC"
                  maxLength={3}
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
                  className="p-3 border rounded-xl w-24 focus:ring-2 focus:ring-blue-400 outline-none"
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  className="border border-black"
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) =>
                    setTermsAccepted(checked === true)
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I accept the{" "}
                  <a
                    href="/terms&condition"
                    className="text-blue-600 hover:underline"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#3B82F6] text-white py-3 rounded-xl font-semibold hover:bg-[#1A3A6D] transition disabled:opacity-50"
                disabled={paying || !termsAccepted}
              >
                {paying ? "Processing..." : `Pay $${plan.price}`}
              </button>

              {message && (
                <p
                  className={`mt-2 text-center font-semibold ${
                    message.includes("success")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
