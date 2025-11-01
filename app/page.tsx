"use client";

import Image from "next/image";

export default function Home() {
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

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center font-sans overflow-x-hidden">
      {/* ======= TOP MENU ======= */}
      <nav className="flex flex-wrap justify-center bg-[#111] text-[13px] font-semibold w-full max-w-[1200px] border-b border-red-700">
        {[
          "HOME",
          "ABOUT",
          "MODELS",
          "MERCHANDISE",
          "EVENTS",
          "GALLERY",
          "CONTACT",
        ].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-3 py-2 hover:text-red-500 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* ======= HERO SECTION ======= */}
      <section className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60 z-10" />
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/grunge-wall.png')",
            opacity: 0.15,
            mixBlendMode: "overlay",
          }}
        />
        <div className="max-w-[1200px] mx-auto">
          <div className="relative aspect-[16/7] sm:aspect-[16/6] w-full overflow-hidden">
            <Image
              src="/assets/images/AsriLuckyStrikeGarage.jpg"
              alt="Asri Luckystrike Garage"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center px-4 z-30">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
                Ride the Legend.{" "}
                <span className="text-red-500">Feel the Past.</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-gray-200 max-w-2xl">
                Specialists in rare & vintage Yamaha machines — RD, RZ, YP
                series (1980s — early 2000s). Restorations, sales, and curated
                new releases.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap justify-center">
                <a
                  href="#inventory"
                  className="inline-block px-4 py-2 rounded border border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-black transition"
                >
                  View Inventory
                </a>
                <a
                  href="#contact"
                  className="inline-block px-4 py-2 rounded bg-white/10 text-white border border-transparent hover:bg-white/20 transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= FEATURED SECTION ======= */}
      <section id="inventory" className="max-w-[1200px] w-full px-4 mt-10 mb-10 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Featured{" "}
          <span className="text-red-500 border-b-2 border-red-500">
            Motorcycles
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredBikes.map((b) => (
            <article
              key={b.id}
              className="border border-[#222] bg-[#0d0d0d] rounded-lg overflow-hidden shadow-lg hover:shadow-red-700/30 transition-shadow"
            >
              <div className="relative h-44 sm:h-40 md:h-44 overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold">{b.name}</h3>
                <p className="text-sm text-red-400">{b.tag}</p>
                <p className="text-sm text-gray-400 mt-1">{b.short}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ======= EVENTS SECTION ======= */}
      <section id="events" className="max-w-[1200px] w-full px-4 mt-10 mb-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Latest <span className="text-red-500 border-b-2 border-red-500">Events</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((e, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row bg-[#0d0d0d] border border-[#222] rounded-lg overflow-hidden hover:shadow-red-700/30 transition"
            >
              <div className="relative w-full md:w-1/2 h-52">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 flex flex-col justify-center">
                <h3 className="text-lg font-semibold">{e.title}</h3>
                <p className="text-sm text-red-400">{e.date}</p>
                <p className="text-sm text-gray-400 mt-2">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======= MERCHANDISE SECTION ======= */}
      <section id="merchandise" className="max-w-[1200px] w-full px-4 mt-10 mb-10 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Official{" "}
          <span className="text-red-500 border-b-2 border-red-500">
            Merchandise
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {merch.map((m, i) => (
            <div
              key={i}
              className="border border-[#222] bg-[#0d0d0d] rounded-lg overflow-hidden shadow hover:shadow-red-700/30 transition"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="text-red-400">{m.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======= GALLERY SECTION ======= */}
      <section id="gallery" className="max-w-[1200px] w-full px-4 mt-10 mb-10 text-center">
        <h2 className="text-2xl font-bold mb-6">
          <span className="text-red-500 border-b-2 border-red-500">Gallery</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {gallery.map((src, i) => (
            <div key={i} className="relative w-full h-36 sm:h-44 md:h-52 overflow-hidden rounded">
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover object-center hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ======= FOOTER ======= */}
      <footer className="w-full bg-[#0a0a0a] border-t border-[#222] text-gray-400 text-sm mt-10">
        <div className="max-w-[1200px] mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {/* Column 1 */}
          <div>
            <h3 className="text-red-500 font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Models", "Merchandise", "Events", "Gallery"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-red-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-red-500 font-semibold mb-3">Contact</h3>
            <p>📍 Selangor, Malaysia</p>
            <p>📞 +60 12-345 6789</p>
            <p>
              ✉️{" "}
              <a
                href="mailto:asriluckystrikegarage@gmail.com"
                className="hover:text-red-400"
              >
                asriluckystrikegarage@gmail.com
              </a>
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-red-500 font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <a href="#" className="hover:text-red-400">
                Facebook
              </a>
              <a href="#" className="hover:text-red-400">
                Instagram
              </a>
              <a href="#" className="hover:text-red-400">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#111] py-4 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Asri Luckystrike Garage. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
