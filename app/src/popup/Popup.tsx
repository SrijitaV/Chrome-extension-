import "../styles/globals.css";

function Popup() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-96 rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-blue-600">
          🚀 LeetPilot
        </h1>

        <p className="mt-3 text-gray-600">
          Your AI-powered LeetCode Companion.
        </p>

        <div className="mt-6 rounded-lg bg-green-100 p-4 text-green-700">
          ✅ Tailwind CSS is working!
        </div>
      </div>
    </main>
  );
}

export default Popup;