import React from "react";

function Animation() {
  return (
    <div className="fixed inset-0 -z-0">
      {/* Glowing orbs with violet theme */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-indigo-400/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating geometric shapes in violet tones */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-4 h-4 bg-violet-400/40 rotate-45 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-6 h-6 bg-purple-400/40 rounded-full animate-bounce"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-3 h-3 bg-indigo-400/40 rotate-45 animate-bounce"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-5 h-5 bg-violet-300/30 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
}

export default Animation;
