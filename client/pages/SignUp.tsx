import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("Oliver Bennet");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black flex items-center justify-center p-4">
      {/* Background gradient patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-purple-950/20" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(29,146,242,0.1)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1)_0%,transparent_70%)]" />

      {/* Background image on right corner */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-30">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/49d0f5ecc51bdd31675891f1d4e6293eebab806d?placeholderIfAbsent=true"
          alt="Background decoration"
          className="w-full h-full object-cover mix-blend-screen"
        />
      </div>

      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <div
              className="w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
              style={{
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          </div>
        ))}

        {/* Larger moving stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse" />
          </div>
        ))}
      </div>

      {/* SignUp Card */}
      <div className="relative w-full max-w-sm mx-auto">
        {/* Enhanced outer glow */}
        <div className="absolute inset-0 rounded-[33px] shadow-[0_0_100px_rgba(29,146,242,0.4)] blur-sm" />
        <div className="absolute inset-0 rounded-[33px] shadow-[0_0_200px_rgba(29,146,242,0.2)]" />

        <div className="relative bg-black/40 backdrop-blur-xl rounded-[33px] border border-blue-500/30 p-6 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
          {/* Card glow effect */}
          <div className="absolute inset-0 rounded-[33px] bg-gradient-to-b from-blue-500/20 via-transparent to-transparent opacity-50" />
          <div className="absolute inset-0 rounded-[33px] shadow-[0_0_50px_rgba(29,146,242,0.3)]" />

          <div className="relative z-10 space-y-6">
            {/* Logo */}
            <div className="flex flex-col items-center space-y-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc8cfca53adb66b3b9c9418de9b79a129b6ae610?placeholderIfAbsent=true"
                alt="Logo"
                className="w-14 h-14 rounded-full"
              />
            </div>

            {/* Heading */}
            <div className="text-center space-y-2">
              <h1 className="bg-gradient-to-r from-purple-400 via-pink-300 to-purple-500 bg-clip-text text-transparent text-lg font-medium">
                Be Inspired by the Unexpected
              </h1>
              <p className="text-white/60 text-xs">
                Play responsibly, platform for over 18s only
              </p>
            </div>

            {/* Name Input */}
            <div className="relative">
              <div className="relative rounded-full border border-blue-500/60 bg-black/20 backdrop-blur-sm shadow-[0_0_10px_rgba(29,146,242,0.3)] overflow-hidden">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-white/60 border-none outline-none text-sm"
                  placeholder="Oliver Bennet"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-px h-6 bg-white/20" />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="relative rounded-full border border-white/20 bg-black/20 backdrop-blur-sm overflow-hidden">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-white/60 border-none outline-none text-sm"
                  placeholder="Email Address"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="relative rounded-full border border-white/20 bg-black/20 backdrop-blur-sm overflow-hidden">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-white/60 border-none outline-none text-sm"
                  placeholder="Enter Password"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(29,146,242,0.8)]">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* CPF Input */}
            <div className="relative">
              <div className="relative rounded-full border border-white/20 bg-black/20 backdrop-blur-sm overflow-hidden">
                <input
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-white/60 border-none outline-none text-sm"
                  placeholder="CPF document"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_11px_rgba(29,146,242,0.7)]">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-center space-x-2 text-xs mt-2">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                  acceptPolicy
                    ? "border-blue-500 bg-blue-500 shadow-[0_0_10px_rgba(29,146,242,1)]"
                    : "border-white/40"
                }`}
                onClick={() => setAcceptPolicy(!acceptPolicy)}
              >
                {acceptPolicy && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="text-blue-400">Privacy Policy</span>
            </div>

            {/* Sign Up Button */}
            <button
              onClick={() => navigate("/home")}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 rounded-full transition-all duration-300 shadow-[0_-35px_10px_rgba(40,146,234,0)] hover:shadow-[0_0_20px_rgba(29,146,242,0.5)]"
            >
              Sign Up
            </button>

            {/* Login Link */}
            <div className="text-center text-xs">
              <span className="text-white/60">Already have an account? </span>
              <Link
                to="/"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          >
            <div
              className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
              style={{
                filter: "blur(0.5px)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
