import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-white">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-slate-400">
            We'd love to hear from you. Feel free to reach out for
            support, suggestions or collaboration.
          </p>

        </div>

        <div className="mt-14 grid gap-8">

          {/* Email */}

          <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6 transition hover:border-purple-600">

            <div className="flex items-center gap-5">

              <div className="rounded-full bg-purple-600/20 p-4">

                <FaEnvelope className="text-3xl text-purple-500" />

              </div>

              <div>

                <h2 className="text-xl font-semibold text-white">
                  Email
                </h2>

                <p className="mt-1 text-slate-400">
                  ap7785980@gmail.com
                </p>

              </div>

            </div>

          </div>

          {/* GitHub */}

          <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6 transition hover:border-purple-600">

            <div className="flex items-center gap-5">

              <div className="rounded-full bg-slate-700 p-4">

                <FaGithub className="text-3xl text-white" />

              </div>

              <div>

                <h2 className="text-xl font-semibold text-white">
                  GitHub
                </h2>

                <a
                  href="https://github.com/YOUR_GITHUB_USERNAME"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-purple-400 hover:underline"
                >
                  Visit GitHub
                </a>

              </div>

            </div>

          </div>

          {/* LinkedIn */}

          <div className="rounded-2xl border border-slate-800 bg-[#0B1023] p-6 transition hover:border-purple-600">

            <div className="flex items-center gap-5">

              <div className="rounded-full bg-blue-600/20 p-4">

                <FaLinkedin className="text-3xl text-blue-500" />

              </div>

              <div>

                <h2 className="text-xl font-semibold text-white">
                  LinkedIn
                </h2>

                <a
                  href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-purple-400 hover:underline"
                >
                  Visit LinkedIn
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contact;