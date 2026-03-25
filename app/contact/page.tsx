"use client";

import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: "Address", info: "Selangor, Malaysia", description: "Visit our garage" },
    { icon: <FaPhone />, title: "Phone", info: "+60 12-345 6789", description: "Mon-Fri, 9AM-7PM" },
    { icon: <FaEnvelope />, title: "Email", info: "asriluckystrikegarage@gmail.com", description: "We reply within 24 hours" },
    { icon: <FaClock />, title: "Business Hours", info: "Mon-Fri: 9AM-7PM", description: "Sat: 10AM-5PM, Sun: Appointment" },
  ];

  const socialMedia = [
    { icon: <FaFacebook />, name: "Facebook", link: "https://www.facebook.com/Asriluckystrikegarage/" },
    { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/asriluckystrikegarage/" },
    { icon: <FaYoutube />, name: "YouTube", link: "https://www.youtube.com/c/AsriLuckystrikeGarage" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* ======= HERO SECTION ======= */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/contact-hero.jpg"
            alt="Contact Us - Asri LuckyStrike Garage"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            GET IN <span className="text-red-500">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our motorcycles or services? We're here to help.
          </p>
        </div>
      </section>

      {/* ======= CONTACT INFO ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:border-red-500/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
                <span className="text-2xl text-red-500">{info.icon}</span>
              </div>
              <h3 className="font-oswald text-xl font-semibold mb-2">{info.title}</h3>
              <p className="text-lg font-semibold mb-1">{info.info}</p>
              <p className="text-gray-400 text-sm">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ======= CONTACT FORM & MAP ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-6">
              SEND US A <span className="text-red-500">MESSAGE</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                    placeholder="+60 12-345 6789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="inquiry">Motorcycle Inquiry</option>
                    <option value="restoration">Restoration Service</option>
                    <option value="parts">Parts Request</option>
                    <option value="event">Event Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                  placeholder="Tell us about your motorcycle needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map & Social */}
          <div>
            {/* Map Placeholder */}
            <div className="mb-8">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl overflow-hidden h-64">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📍</div>
                    <h3 className="font-oswald text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-400">Selangor, Malaysia</p>
                    <a 
                      href="https://www.google.com/maps/search/ASRI+LUCKYSTRIKE+GARAGE,LOT+6015-A3+JALAN+IPOH+BATU+7+1,+4,+Jalan+Selayang+Baru,+68100+Batu+Caves,+Selangor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              <h3 className="font-oswald text-2xl font-bold mb-4">FOLLOW US</h3>
              <p className="text-gray-400 mb-6">
                Stay updated with our latest restorations, events, and motorcycle news.
              </p>
              
              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="flex items-center gap-4 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                  >
                    <span className="text-2xl text-red-500 group-hover:text-red-400 transition-colors">
                      {social.icon}
                    </span>
                    <div>
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-sm text-gray-400">@asriluckystrikegarage</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="mt-8 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              <h3 className="font-oswald text-2xl font-bold mb-4">QUICK QUESTIONS</h3>
              <div className="space-y-3">
                {[
                  "Do you offer test rides?",
                  "What is your restoration timeline?",
                  "Do you ship motorcycles internationally?",
                  "Can you source specific parts?",
                ].map((question, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{question}</span>
                      <span className="text-red-500">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= APPOINTMENT BANNER ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
            SCHEDULE A <span className="text-red-500">VISIT</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Prefer to visit in person? Book an appointment to see our collection and discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+60123456789"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Call to Book
            </a>
            <a
              href="mailto:asriluckystrikegarage@gmail.com?subject=Appointment%20Request"
              className="px-8 py-3 bg-transparent border-2 border-white/30 hover:border-red-500 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Email for Appointment
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}