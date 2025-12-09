"use client";

import Image from "next/image";
import { FaSearch, FaFilter, FaShoppingCart, FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { motorcycles } from "@/app/data/motorcycles";

export default function ModelsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Models" },
    { id: "vintage", name: "Vintage (1980s-1990s)" },
    { id: "classic", name: "Classic (2000s)" },
    { id: "modern", name: "Modern" },
    { id: "scooter", name: "Scooters" },
  ];

  // Filter logic
  const filteredMotorcycles = motorcycles.filter((bike) => {
    const matchesFilter = activeFilter === "all" || bike.category === activeFilter;
    const matchesSearch = searchQuery === "" || 
      bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.year.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* ======= HERO SECTION ======= */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/models-hero.jpg"
            alt="Motorcycle Models - Asri LuckyStrike Garage"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            OUR <span className="text-red-500">COLLECTION</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse our curated selection of rare vintage motorcycles and modern classics
          </p>
        </div>
      </section>

      {/* ======= SEARCH & FILTER ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 w-full">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search motorcycles by name, model, or year..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Label */}
            <div className="flex items-center gap-2">
              <FaFilter className="text-red-500" />
              <span className="font-semibold">Filter by:</span>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${activeFilter === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======= INVENTORY GRID ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredMotorcycles.length}</span> motorcycles
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Sort by:</span>
            <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-500">
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Year: Oldest First</option>
            </select>
          </div>
        </div>

        {/* Motorcycle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMotorcycles.map((bike) => (
            <div
              key={bike.id}
              className="group bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={bike.image}
                  alt={bike.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {bike.featured && (
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  )}
                  <span className={`px-3 py-1 ${bike.status === 'New' ? 'bg-green-500' : 'bg-blue-500'} text-white text-xs font-bold rounded-full`}>
                    {bike.status}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-black/70 text-white text-xs font-bold rounded-full">
                    {bike.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-oswald text-xl font-semibold mb-2">{bike.name}</h3>
                
                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-gray-800 rounded">
                    <div className="text-xs text-gray-400">Engine</div>
                    <div className="text-sm font-semibold">{bike.engine}</div>
                  </div>
                  <div className="text-center p-2 bg-gray-800 rounded">
                    <div className="text-xs text-gray-400">Power</div>
                    <div className="text-sm font-semibold">{bike.power}</div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{bike.description}</p>

                {/* Price & Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-red-500">{bike.price}</div>
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      href={`/models/${bike.id}`}
                      className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors inline-flex"
                    >
                      <FaInfoCircle className="text-white" />
                    </Link>
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                      <FaShoppingCart />
                      <span className="hidden sm:inline">Inquire</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMotorcycles.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏍️</div>
            <h3 className="text-2xl font-bold mb-2">No Motorcycles Found</h3>
            <p className="text-gray-400">Try adjusting your filters or search terms</p>
          </div>
        )}
      </section>

      {/* ======= SERVICES BANNER ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
                LOOKING FOR SOMETHING <span className="text-red-500">SPECIFIC?</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Can't find what you're looking for? We have access to a wider network of vintage 
                motorcycle collectors and can help source specific models.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Custom model searches</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Import assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Restoration consultations</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-black border border-gray-700 rounded-xl p-8">
              <h3 className="font-oswald text-2xl font-bold mb-4">REQUEST A MODEL</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Model you're looking for"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                />
                <textarea
                  placeholder="Additional details (year, condition, budget)"
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                />
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}