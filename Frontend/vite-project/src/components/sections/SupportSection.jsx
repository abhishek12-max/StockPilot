import { CircleHelp, Headset, Mail, Phone } from "lucide-react";

function SupportSection() {
  return (
    <section className="py-20 px-6">

      {/* Hero */}

      <div className="max-w-3xl mx-auto text-center space-y-5">
        <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full">
          <Headset className="w-5 h-5" />
          <span>Support</span>
        </div>

        <h2 className="text-4xl font-bold text-white">
          We're Here to Help
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed">
          Need assistance? Our team is here to help with your account,
          pricing, and everything in between.
        </p>
      </div>

      {/* Cards */}

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Email */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center space-y-6 hover:-translate-y-2 hover:border-purple-500 transition-all duration-300">

          <Mail className="w-12 h-12 text-purple-500 mx-auto" />

          <h3 className="text-2xl font-semibold text-white">
            Email Us
          </h3>

          <p className="text-slate-400">
            support@tradex.com
          </p>

          <a href="mailto:support@tradex.com">
            <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-all text-white">
              Send Email
            </button>
          </a>

        </div>

        {/* Phone */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center space-y-6 hover:-translate-y-2 hover:border-purple-500 transition-all duration-300">

          <Phone className="w-12 h-12 text-purple-500 mx-auto" />

          <h3 className="text-2xl font-semibold text-white">
            Call Us
          </h3>

          <p className="text-slate-400">
            +91 98765 43210
          </p>

          <a href="tel:+919876543210">
            <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-all text-white">
              Call Now
            </button>
          </a>

        </div>

        {/* FAQ */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center space-y-6 hover:-translate-y-2 hover:border-purple-500 transition-all duration-300">

          <CircleHelp className="w-12 h-12 text-purple-500 mx-auto" />

          <h3 className="text-2xl font-semibold text-white">
            Help Center
          </h3>

          <p className="text-slate-400">
            Browse our frequently asked questions.
          </p>

          <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-all text-white">
            View FAQs
          </button>

        </div>

      </div>

    </section>
  );
}

export default SupportSection;