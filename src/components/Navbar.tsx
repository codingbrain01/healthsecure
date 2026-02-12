import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-md bg-white/60 shadow-lg px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-bold text-2xl text-slate-900">
          HealthGuard
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          <Link
            to="/"
            className="text-slate-900 font-medium hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to=""
            className="text-slate-900 font-medium hover:text-blue-600 transition"
          >
            Login
          </Link>

          <Link
            to=""
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}
