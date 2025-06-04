"use client";

import { useState } from "react";
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";

import ButtonForm from "@/components/ButtonForm";

export const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: "", email: "", service: "", message: "" });
    }, 3000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="w-full max-w-2xl bg-dark text-light rounded-3xl px-4 py-8 sm:px-6 md:px-10 lg:py-10 mx-auto relative overflow-hidden z-0 shadow-2xl border border-gray-800"
    >
      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />

      {/* Fields */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-sm mb-2 text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-magenta transition"
            placeholder="e.g. John Doe"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm mb-2 text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-magenta transition"
            placeholder="you@example.com"
          />
        </div>

        {/* Service */}
        <div className="flex flex-col">
          <label htmlFor="service" className="text-sm mb-2 text-gray-300">
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-magenta transition appearance-none"
          >
            <option value="" disabled>
              — Select Service —
            </option>
            <option value="Landing Page">Landing Page</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Web Portfolio">Web Portfolio</option>
            <option value="Web App">Web App</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm mb-2 text-gray-300">
            Enter your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 placeholder-gray-500 text-sm text-light focus:outline-none focus:ring-2 focus:ring-magenta transition resize-none"
            placeholder="Write your message here..."
          />
        </div>
      </div>

      {/* Submit */}
      <div className="w-full flex flex-col items-center mt-6 space-y-2 md:space-y-4">
        <ButtonForm
          text={submitted ? "Done Deal!" : "Send Message"}
          disabled={submitted}
          success={submitted} // ← activa el ícono de check
        />
        {submitted && (
          <p className="text-green-400 text-sm text-center animate-fadeIn">
            We will contact you soon.
          </p>
        )}
      </div>
    </motion.form>
  );
};
