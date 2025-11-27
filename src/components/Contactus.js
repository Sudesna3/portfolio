import React, { useState } from "react";
import { motion } from "framer-motion";

const initialFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contactus() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const validate = (values) => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "Name is required.";
    if (!values.email.trim()) newErrors.email = "Email is required.";
    else if (!isValidEmail(values.email))
      newErrors.email = "Enter a valid email.";
    if (!values.subject.trim()) newErrors.subject = "Subject is required.";
    if (!values.message.trim()) newErrors.message = "Message cannot be empty.";
    else if (values.message.trim().length < 10)
      newErrors.message = "Message should be at least 10 characters.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }

    if (status) setStatus(null);
  };

  const sendContactForm = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus(null);

      await sendContactForm(formValues);

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent.",
      });

      setFormValues(initialFormValues);
      setErrors({});
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-50 px-6 py-16 md:px-10 lg:px-20">

      {/* 🔥 NEW AURORA BACKGROUND */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[conic-gradient(at_top_left,_#17c4ff,_#7b3dff,_#ff2ebe,_#17c4ff)] opacity-40 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles */}
      {[...Array(35)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white/30"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Header */}
      <div className="relative z-10 mx-auto mb-10 max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
          Get In Touch
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Let&apos;s build something together
          </span>
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          Have a project or question? Drop a message anytime.
        </p>
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_20px_60px_rgba(7,14,25,0.8)] backdrop-blur-2xl md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-10"
      >
        {/* Left Section */}
        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Contact details</h2>
            <p className="text-sm text-slate-300">
              Prefer email or social? Choose what works best for you.
            </p>

            <div className="space-y-4 text-sm text-slate-200">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800">
                  📧
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Email
                  </p>
                  <p className="text-sm">youremail@example.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800">
                  📍
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Location
                  </p>
                  <p className="text-sm">India • Open to remote</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800">
                  💼
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Availability
                  </p>
                  <p className="text-sm">Open for new opportunities</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Social
              </p>
              <div className="mt-3 flex gap-4 text-lg text-slate-200">
                {[
                  { icon: "fa-linkedin-in", color: "#0A66C2", link: "#" },
                  { icon: "fa-github", color: "#e5e7eb", link: "#" },
                  { icon: "fa-twitter", color: "#1DA1F2", link: "#" },
                  { icon: "fa-instagram", color: "#E1306C", link: "#" },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="transition-all"
                  >
                    <i
                      className={`fab ${item.icon}`}
                      style={{ color: item.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden text-xs text-slate-400 md:block">
            I usually reply within 1–2 business days.
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {status && (
            <div
              className={`rounded-xl px-3 py-2 text-xs ${
                status.type === "success"
                  ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                  : "bg-rose-500/10 text-rose-300 border border-rose-500/40"
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Name + Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium">
                Name<span className="text-rose-400"> *</span>
              </label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
              />
              {errors.name && (
                <p className="text-[0.7rem] text-rose-400">{errors.name}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">
                Email<span className="text-rose-400"> *</span>
              </label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
              />
              {errors.email && (
                <p className="text-[0.7rem] text-rose-400">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium">
              Subject<span className="text-rose-400"> *</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
              placeholder="Project, collaboration, question..."
              className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
            />
            {errors.subject && (
              <p className="text-[0.7rem] text-rose-400">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium">
              Message<span className="text-rose-400"> *</span>
            </label>
            <textarea
              rows={5}
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
            />
            {errors.message && (
              <p className="text-[0.7rem] text-rose-400">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <motion.button
              type="submit"
              whileHover={!isSubmitting ? { scale: 1.03 } : {}}
              whileTap={!isSubmitting ? { scale: 0.96 } : {}}
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md ${
                isSubmitting ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            <p className="hidden text-[0.7rem] text-slate-400 md:block">
              No spam. Just a reply from me.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Contactus;
