import { useState } from "react";

export default function Index() {
  const [username, setUsername] = useState("hello!");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black flex items-center justify-center p-4">
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

      {/* Login Card */}
      <div className="relative w-full max-w-sm mx-auto">
        <div className="relative bg-black/30 backdrop-blur-xl rounded-[33px] border border-white/10 p-6 overflow-hidden">
          {/* Card glow effect */}
          <div className="absolute inset-0 rounded-[33px] bg-gradient-to-b from-blue-500/20 via-transparent to-transparent opacity-50" />
          <div className="absolute inset-0 rounded-[33px] shadow-[0_0_50px_rgba(29,146,242,0.3)]" />

          <div className="relative z-10 space-y-6">
            {/* Logo */}
            <div className="flex flex-col items-center space-y-3">
              <div className="relative">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border border-white/20">
                  <div className="text-yellow-400 text-xl">✨</div>
                </div>
                <div className="absolute -top-1 -right-1 text-yellow-400 text-sm animate-pulse">
                  ✨
                </div>
              </div>
              <div className="text-white font-semibold text-lg tracking-wide">
                starz
              </div>
            </div>

            {/* Heading */}
            <div className="text-center space-y-2">
              <h1 className="text-white text-lg font-medium">
                Be Inspired by the Unexpected
              </h1>
              <p className="text-white/60 text-xs">
                Play responsibly, platform for over 18s only
              </p>
            </div>

            {/* Username Input */}
            <div className="relative">
              <div className="relative rounded-full border border-blue-500/60 bg-black/20 backdrop-blur-sm shadow-[0_0_10px_rgba(29,146,242,0.3)] overflow-hidden">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-white/60 border-none outline-none text-sm"
                  placeholder="hello!"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-px h-6 bg-white/20" />
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
                  placeholder="Enter password"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(29,146,242,0.8)]">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                    rememberMe
                      ? "border-blue-500 bg-blue-500 shadow-[0_0_10px_rgba(29,146,242,1)]"
                      : "border-white/40"
                  }`}
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  {rememberMe && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <span className="text-blue-400">Crisr account</span>
              </div>
              <button className="text-white/60 hover:text-white transition-colors">
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 rounded-full transition-all duration-300 shadow-[0_-35px_10px_rgba(40,146,234,0)] hover:shadow-[0_0_20px_rgba(29,146,242,0.5)]">
              Login
            </button>

            {/* Sign Up Link */}
            <div className="text-center text-xs">
              <span className="text-white/60">Don't have an account? </span>
              <button className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                Sign Up
              </button>
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
