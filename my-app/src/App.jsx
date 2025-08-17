import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold">Tailwind is working 🎉</h1>
        <p className="mt-3 text-gray-600">If this is styled, you’re good.</p>
        <button className="mt-6 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;
