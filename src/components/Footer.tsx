export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-start">

        {/* Left: Logo & Description */}
        <div className="space-y-2">
          <h1 className="font-bold text-xl text-slate-900">HealthGuard</h1>
          <p className="text-gray-600 text-sm md:text-base">
            Providing affordable, reliable health insurance to protect you and your loved ones.
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm md:text-base">
        &copy; {new Date().getFullYear()} HealthGuard. All rights reserved.
      </div>
    </footer>
  );
}
