"use client";

import Image from "next/image";
import { FaArrowDown, FaMotorcycle, FaWrench, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredBikes = [
    {
      id: 1,
      name: "Yamaha RD350LC",
      tag: "Vintage (1980s)",
      short: "Classic two-stroke legend. Restored & tuned.",
      image: "/assets/bike/rd350lc.jpeg",
    },
    {
      id: 2,
      name: "Yamaha RZ250",
      tag: "Vintage (1986)",
      short: "Rare YPVS model — collector's favourite.",
      image: "/assets/bike/rz250.jpeg",
    },
    {
      id: 3,
      name: "Honda Compo",
      tag: "Vintage (1990s)",
      short: "Compact folding scooter — urban classic.",
      image: "/assets/bike/honda-compo.jpg",
    },
    {
      id: 4,
      name: "Yamaha R25",
      tag: "New",
      short: "Modern performance — available new.",
      image: "/assets/bike/r25.jpg",
    },
  ];

  const events = [
    {
      title: "Vintage Bike Gathering 2025",
      date: "March 15, 2025",
      desc: "Join our annual vintage motorcycle meetup in Penang — celebrating RD, RZ & YP series history.",
      image: "/assets/gallery/event1.jpg",
    },
    {
      title: "Restoration Workshop",
      date: "April 10, 2025",
      desc: "Hands-on session on carb tuning, repainting, and restoring old Yamaha classics.",
      image: "/assets/gallery/event2.jpg",
    },
  ];

  const merch = [
    {
      name: "Asri Luckystrike T-Shirt",
      price: "RM79",
      image: "/assets/merchandise/merch1.jpg",
    },
    {
      name: "Keychain Collection",
      price: "RM25",
      image: "/assets/merchandise/merch2.jpg",
    },
    {
      name: "Retro Sticker Pack",
      price: "RM19",
      image: "/assets/merchandise/merch3.jpg",
    },
  ];

  const gallery = [
    "/assets/gallery/gallery1.jpg",
    "/assets/gallery/gallery2.jpg",
    "/assets/gallery/gallery3.jpg",
    "/assets/gallery/gallery4.jpg",
    "/assets/gallery/gallery5.jpg",
    "/assets/gallery/gallery6.jpg",
  ];

  // Services data
  const services = [
    {
      icon: <FaMotorcycle className="text-3xl text-red-500" />,
      title: "Restoration",
      description: "Complete vintage bike restoration with authentic parts",
    },
    {
      icon: <FaWrench className="text-3xl text-red-500" />,
      title: "Maintenance",
      description: "Expert servicing for classic and modern motorcycles",
    },
    {
      icon: <FaShoppingCart className="text-3xl text-red-500" />,
      title: "Sales",
      description: "Rare vintage motorcycles and curated new releases",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-montserrat overflow-x-hidden">
      {/* ======= IMPROVED HERO SECTION ======= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/AsriLuckyStrikeGarage.jpg"
            alt="Asri Luckystrike Garage"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
          
          {/* Animated Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(90deg, transparent 95%, rgba(220, 38, 38, 0.1) 100%),
                linear-gradient(0deg, transparent 95%, rgba(220, 38, 38, 0.1) 100%)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Heading */}
            <h1 className="font-oswald text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
              <span className="block text-white drop-shadow-2xl">RIDE THE</span>
              <span className="block text-red-500 drop-shadow-2xl">LEGEND</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
              Specialists in rare & vintage Yamaha machines — RD, RZ, YP series 
              <span className="block text-red-400 font-medium">Restorations • Sales • Heritage Preservation</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#inventory"
                className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/30"
              >
                <span className="relative z-10">EXPLORE COLLECTION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 bg-transparent border-2 border-white/30 hover:border-red-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                <span className="relative z-10">BOOK APPOINTMENT</span>
              </a>
            </div>

            {/* Scroll Indicator - Moved down to prevent overlap */}
            <div className="animate-bounce mt-12 mb-24 md:mb-32">
              <FaArrowDown className="mx-auto text-gray-400 text-xl" />
              <p className="text-sm text-gray-500 mt-2">Scroll to explore</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======= STATS BAR - Now separate from hero section ======= */}
      <div className="relative z-20 -mt-16 md:-mt-24 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-block p-6 bg-black/80 backdrop-blur-sm rounded-2xl border border-red-500/20 mb-4 shadow-2xl shadow-black/50 hover:shadow-red-500/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-oswald text-xl md:text-2xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm md:text-base max-w-xs mx-auto">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======= FEATURED SECTION ======= */}
      <section id="inventory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl font-bold mb-4">
            FEATURED{" "}
            <span className="text-red-500">MOTORCYCLES</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our curated collection of rare vintage machines and modern classics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBikes.map((bike) => (
            <div
              key={bike.id}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <Image
                  src={bike.image}
                  alt={bike.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-red-500 text-xs font-semibold rounded-full">
                    {bike.tag}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-oswald text-xl font-semibold mb-2">{bike.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{bike.short}</p>
                <button className="w-full py-2 text-sm font-semibold text-red-500 border border-red-500/30 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======= EVENTS SECTION ======= */}
      <section id="events" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl font-bold mb-4">
            UPCOMING <span className="text-red-500">EVENTS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our community events and workshops for vintage motorcycle enthusiasts
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black hover:border-red-500/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative lg:w-2/5 h-64 lg:h-auto">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:bg-gradient-to-b" />
                </div>
                
                {/* Content */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex items-center mb-4">
                    <div className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <span className="text-red-400 text-sm font-semibold">{event.date}</span>
                    </div>
                  </div>
                  <h3 className="font-oswald text-2xl font-semibold mb-3">{event.title}</h3>
                  <p className="text-gray-400 mb-6">{event.desc}</p>
                  <button className="px-6 py-2 text-sm font-semibold text-red-500 border border-red-500/30 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======= MERCHANDISE SECTION ======= */}
      <section id="merchandise" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl font-bold mb-4">
            OFFICIAL <span className="text-red-500">MERCHANDISE</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Wear the legacy with our exclusive vintage motorcycle apparel and accessories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {merch.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black hover:border-red-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-oswald text-xl font-semibold mb-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-500">{item.price}</span>
                  <button className="px-4 py-2 text-sm font-semibold bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======= GALLERY SECTION ======= */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl font-bold mb-4">
            <span className="text-red-500">GALLERY</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A glimpse into our world of vintage motorcycle restoration and community events
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((src, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======= CONTACT CTA SECTION ======= */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
            Ready to Own a Piece of History?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a viewing or discuss your restoration project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+60123456789"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Call Now
            </a>
            <a
              href="mailto:asriluckystrikegarage@gmail.com"
              className="px-8 py-3 bg-transparent border-2 border-white/30 hover:border-red-500 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}