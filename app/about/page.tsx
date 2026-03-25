"use client";

import Image from "next/image";
import { FaMotorcycle, FaHistory, FaUsers, FaAward } from "react-icons/fa";

export default function AboutPage() {
  const milestones = [
    { year: "2014", title: "Garage Founded", description: "Started as a small motorcycle repair shop in Selangor" },
    { year: "2015", title: "First Restoration", description: "Completed full restoration of Yamaha RD350LC" },
    { year: "2016", title: "Specialization", description: "Became specialists in Yamaha vintage models" },
    { year: "2018", title: "Expansion", description: "Opened showroom and merchandise line" },
    { year: "2020", title: "Community Hub", description: "Became gathering spot for vintage bike enthusiasts" },
  ];

  const team = [
    { name: "Asri", role: "Founder & Master Mechanic", image: "/assets/team/Founder-Asri.jpg", experience: "12+ years" },
    { name: "Hassan", role: "Restoration Specialist", image: "/assets/team/hassan.jpg", experience: "10+ years" },
    { name: "Ramli", role: "Parts & Merchandise", image: "/assets/team/lisa.jpg", experience: "8+ years" },
    { name: "Razif", role: "Sales & Customer Relations", image: "/assets/team/razif.jpg", experience: "10+ years" },
  ];

  const values = [
    { icon: <FaMotorcycle />, title: "Authenticity", description: "Using original parts and following factory specifications" },
    { icon: <FaHistory />, title: "Heritage", description: "Preserving motorcycle history for future generations" },
    { icon: <FaUsers />, title: "Community", description: "Building relationships with fellow enthusiasts" },
    { icon: <FaAward />, title: "Excellence", description: "Striving for perfection in every restoration" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* ======= HERO SECTION ======= */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/about-hero.jpg"
            alt="About Us - Asri LuckyStrike Garage"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            OUR <span className="text-red-500">STORY</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Preserving motorcycle heritage since 1990. Specialists in rare & vintage Yamaha machines.
          </p>
        </div>
      </section>

      {/* ======= INTRODUCTION ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-6">
              The <span className="text-red-500">Asri LuckyStrike</span> Legacy
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded in 1990 by Asri himself, what started as a small motorcycle repair shop has evolved into 
                Malaysia&apos;s premier destination for vintage Yamaha motorcycle restoration and preservation.
              </p>
              <p>
                Our passion for two-stroke engines and classic motorcycle design drove us to specialize in the 
                iconic Yamaha RD, RZ, and YP series - machines that represent the golden era of motorcycle engineering.
              </p>
              <p>
                Today, we&apos;re not just a garage; we're a community hub for enthusiasts, collectors, and anyone 
                who appreciates the art of vintage motorcycle craftsmanship.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-xl overflow-hidden border-2 border-red-500/30">
            <Image
              src="/assets/images/Asriluckystrikegaragebranding.jpeg"
              alt="Garage Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ======= OUR VALUES ======= */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
              OUR <span className="text-red-500">VALUES</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide our work and define our community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:border-red-500/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
                  <span className="text-2xl text-red-500">{value.icon}</span>
                </div>
                <h3 className="font-oswald text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= MILESTONES ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
            OUR <span className="text-red-500">JOURNEY</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Key moments in our history of preserving motorcycle heritage
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-500/30 hidden md:block" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Year */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0">
                  <div className="flex items-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-500">{milestone.year}</div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-12">
                  <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-black" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 max-w-md">
                    <h3 className="font-oswald text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= TEAM ======= */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
              MEET THE <span className="text-red-500">TEAM</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The passionate experts behind every restoration
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-red-500/50 transition-colors"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-oswald text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-red-500 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">
                    Dedicated to preserving motorcycle heritage with passion and expertise
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
            VISIT OUR <span className="text-red-500">GARAGE</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the legacy firsthand. Schedule a visit to our garage in Selangor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Contact Us
            </a>
            <a 
              href="https://www.google.com/maps/search/ASRI+LUCKYSTRIKE+GARAGE,LOT+6015-A3+JALAN+IPOH+BATU+7+1,+4,+Jalan+Selayang+Baru,+68100+Batu+Caves,+Selangor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-white/30 hover:border-red-500 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}