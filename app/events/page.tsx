"use client";

import Image from "next/image";
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaImages, 
  FaStar,
  FaMotorcycle,
  FaTrophy,
  FaShareAlt,
  FaExternalLinkAlt
} from "react-icons/fa";
import { useState } from "react";
import { attendedEvents } from "@/app/data/events";
import type { EventType } from "@/app/data/eventTypes";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "recent" | "past">("recent");

  // Event types for badges
  const eventTypes: Record<EventType, { label: string; color: string }> = {
    exhibition: { label: "Exhibition", color: "bg-blue-500" },
    rally: { label: "Rally", color: "bg-green-500" },
    international: { label: "International", color: "bg-purple-500" },
    technical: { label: "Technical", color: "bg-yellow-500" },
    festival: { label: "Festival", color: "bg-pink-500" },
    ride: { label: "Ride", color: "bg-cyan-500" },
    education: { label: "Education", color: "bg-orange-500" },
  };

  const filteredEvents = activeTab === "all" 
    ? attendedEvents 
    : attendedEvents.filter(event => event.type === activeTab);

  const featuredEvents = attendedEvents.filter(event => event.featured);

  // Event categories for filtering
  const categories = [
    { id: "all" as const, name: "All Events" },
    { id: "recent" as const, name: "Recent (2024)" },
    { id: "past" as const, name: "Past Events" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* ======= HERO SECTION ======= */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/events-hero.jpg"
            alt="Events We've Attended - Asri LuckyStrike Garage"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            EVENTS <span className="text-red-500">WE&apos;VE ATTENDED</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our participation in motorcycle exhibitions, rallies, and gatherings across the region
          </p>
        </div>
      </section>

      {/* ======= FEATURED EVENTS ======= */}
      {featuredEvents.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-oswald text-3xl font-bold mb-8 text-center">
            <span className="text-red-500">HIGHLIGHTED</span> PARTICIPATIONS
          </h2>
          
          <div className="space-y-8">
            {featuredEvents.map((event) => (
              <div 
                key={event.id}
                className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                        FEATURED
                      </span>
                      <span className={`px-3 py-1 ${eventTypes[event.category].color} text-white text-xs font-bold rounded-full`}>
                        {eventTypes[event.category].label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-2 p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-red-500" />
                          <span className="font-semibold">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-red-500" />
                          <span className="font-semibold">{event.location}</span>
                        </div>
                      </div>
                      <div className="text-sm px-3 py-1 bg-gray-800 rounded-full">
                        {event.ourRole}
                      </div>
                    </div>

                    <h2 className="font-oswald text-2xl md:text-3xl font-bold mb-4">
                      {event.title}
                    </h2>
                    <p className="text-gray-400 mb-6">{event.description}</p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {event.highlights.slice(0, 4).map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <FaStar className="text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <FaImages className="text-red-500" />
                          <span className="text-sm text-gray-400">
                            {event.galleryCount} photos
                          </span>
                        </div>
                        {event.externalLink && (
                          <a 
                            href={event.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <FaExternalLinkAlt />
                            Event Website
                          </a>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2">
                          <FaShareAlt />
                          Share
                        </button>
                        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                          View Gallery
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ======= EVENT FILTERS ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-red-500" />
              <span className="font-semibold">Filter Events:</span>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${activeTab === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="text-sm text-gray-400">
              Showing {filteredEvents.length} events
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="py-8">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {event.featured && (
                        <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                          FEATURED
                        </span>
                      )}
                      <span className={`px-3 py-1 ${eventTypes[event.category].color} text-white text-xs font-bold rounded-full`}>
                        {eventTypes[event.category].label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <FaCalendarAlt />
                      <span>{event.date}</span>
                    </div>

                    <h3 className="font-oswald text-xl font-semibold mb-2 line-clamp-1">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <FaMapMarkerAlt className="text-red-500 text-sm" />
                      <span className="text-sm text-gray-400">{event.location}</span>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaMotorcycle className="text-red-500" />
                        <span className="text-sm font-semibold">Our Role:</span>
                      </div>
                      <span className="text-sm text-gray-300">{event.ourRole}</span>
                    </div>

                    {/* Highlights Preview */}
                    {event.highlights.length > 0 && (
                      <div className="mb-4">
                        <div className="text-xs text-gray-500 mb-1">Highlights:</div>
                        <div className="text-xs text-gray-400 line-clamp-2">
                          {event.highlights.slice(0, 2).join(" • ")}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <FaImages />
                        <span>{event.galleryCount}</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors">
                          Details
                        </button>
                        <button className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors">
                          Photos
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <FaCalendarAlt className="text-6xl mx-auto mb-4 text-gray-600" />
              <h3 className="text-2xl font-bold mb-2">No Events Found</h3>
              <p className="text-gray-400">No events match the selected filter</p>
            </div>
          )}
        </div>
      </section>

      {/* ======= YEARLY HIGHLIGHTS ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-8 text-center">
            YEARLY <span className="text-red-500">HIGHLIGHTS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2024", events: 8, countries: 2, awards: 3 },
              { year: "2023", events: 12, countries: 3, awards: 5 },
              { year: "2022", events: 6, countries: 1, awards: 2 },
              { year: "2021", events: 4, countries: 1, awards: 1 },
            ].map((stats, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">{stats.year}</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Events</span>
                    <span className="font-semibold">{stats.events}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Countries</span>
                    <span className="font-semibold">{stats.countries}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Awards</span>
                    <span className="font-semibold flex items-center gap-1">
                      <FaTrophy className="text-yellow-500" />
                      {stats.awards}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}