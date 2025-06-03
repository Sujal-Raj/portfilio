// app/contact/page.tsx

"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted", form);
    // Hook into email API or backend here
  };

  return (
    <div className="relative min-h-screen text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-black/30 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT SIDE – Image / Visual */}
        <div className="relative flex items-center justify-center p-6 bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 ">
          {/* <Image
            src="/contact-mockup.svg" // Replace with your own
            alt="Contact Visual"
            width={500}
            height={500}
            className="object-contain drop-shadow-2xl"
          /> */}
           <h2 className="mt-6 text-2xl font-semibold text-gray-800">Let's Get Connected</h2>
  <p className="mt-2 text-center text-gray-600 max-w-md">
    We'd love to hear from you! Reach out with any questions, feedback, or just to say hello.
  </p>
        </div>

        {/* RIGHT SIDE – Form */}
        <div className="p-10">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Let’s Connect</h2>
          <p className="text-gray-400 mb-10">Have a project or want to say hi? Drop a message below.</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="peer w-full border border-gray-700 bg-black/50 px-4 pt-6 pb-2 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                placeholder="Name"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400">
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="peer w-full border border-gray-700 bg-black/50 px-4 pt-6 pb-2 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                placeholder="Email"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400">
                Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="peer w-full border border-gray-700 bg-black/50 px-4 pt-6 pb-2 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
                placeholder="Message"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400">
                Message
              </label>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
