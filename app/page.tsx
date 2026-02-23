"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      
      {/* HERO SECTION */}
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          One Inbox. Every DM. Zero Chaos.
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Manage Instagram, WhatsApp and more from one powerful workspace 
          built for creators, agencies and growing businesses.
        </p>

        {/* EMAIL INPUT */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 border rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            onClick={handleCheckout}
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Start Free Trial
          </button>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="mt-20 grid md:grid-cols-3 gap-10 max-w-5xl text-center">
        <div>
          <h3 className="text-xl font-semibold">Unified Inbox</h3>
          <p className="mt-3 text-gray-600">
            All conversations in one clean dashboard.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Team Collaboration</h3>
          <p className="mt-3 text-gray-600">
            Assign, respond and manage DMs together.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Revenue Focused</h3>
          <p className="mt-3 text-gray-600">
            Convert conversations into customers.
          </p>
        </div>
      </div>
    </main>
  );
}