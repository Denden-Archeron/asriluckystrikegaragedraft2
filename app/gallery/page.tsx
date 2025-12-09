"use client";

import Image from "next/image";
import { FaCamera, FaSearch, FaDownload, FaShare, FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "restoration", name: "Restoration Projects" },
    { id: "events", name: "Events" },
    { id: "bikes", name: "Motorcycles" },
    { id: "workshop", name: "Workshop" },
    { id: "vintage", name: "Vintage Collection" },
  ];

  const galleryImages = [
    // Restoration Projects
    { id: 1, src: "/assets/gallery/restore1.jpg", category: "restoration", title: "RD350LC Restoration", featured: true },
    { id: 2, src: "/assets/gallery/restore2.jpg", category: "restoration", title: "Engine Rebuild" },
    { id: 3, src: "/assets/gallery/restore3.jpg", category: "restoration", title: "Frame Painting" },
    { id: 4, src: "/assets/gallery/restore4.jpg", category: "restoration", title: "Final Assembly" },
    
    // Events
    { id: 5, src: "/assets/gallery/event1.jpg", category: "events", title: "2024 Gathering", featured: true },
    { id: 6, src: "/assets/gallery/event2.jpg", category: "events", title: "Workshop Session" },
    { id: 7, src: "/assets/gallery/event3.jpg", category: "events", title: "Charity Ride" },
    { id: 8, src: "/assets/gallery/event4.jpg", category: "events", title: "Awards Ceremony" },
    
    // Motorcycles
    { id: 9, src: "/assets/bike/rd350lc.jpeg", category: "bikes", title: "Yamaha RD350LC", featured: true },
    { id: 10, src: "/assets/bike/rz250.jpeg", category: "bikes", title: "Yamaha RZ250" },
    { id: 11, src: "/assets/bike/r25.jpg", category: "bikes", title: "Yamaha R25" },
    { id: 12, src: "/assets/bike/honda-compo.jpg", category: "bikes", title: "Honda Compo" },
    
    // Workshop
    { id: 13, src: "/assets/gallery/workshop1.jpg", category: "workshop", title: "Workshop Interior" },
    { id: 14, src: "/assets/gallery/workshop2.jpg", category: "workshop", title: "Tool Collection" },
    { id: 15, src: "/assets/gallery/workshop3.jpg", category: "workshop", title: "Parts Storage" },
    { id: 16, src: "/assets/gallery/workshop4.jpg", category: "workshop", title: "Work in Progress" },
    
    // Vintage Collection
    { id: 17, src: "/assets/gallery/vintage1.jpg", category: "vintage", title: "1970s Collection" },
    { id: 18, src: "/assets/gallery/vintage2.jpg", category: "vintage", title: "Classic Parts" },
    { id: 19, src: "/assets/gallery/vintage3.jpg", category: "vintage", title: "Vintage Showroom" },
    { id: 20, src: "/assets/gallery/vintage4.jpg", category: "vintage", title: "Restoration Archive" },
    
    // Additional images
    { id: 21, src: "/assets/gallery/gallery1.jpg", category: "events", title: "Community Meet" },
    { id: 22, src: "/assets/gallery/gallery2.jpg", category: "bikes", title: "Custom Build" },
    { id: 23, src: "/assets/gallery/gallery3.jpg", category: "restoration", title: "Before & After" },
    { id: 24, src: "/assets/gallery/gallery4.jpg", category: "events", title: "Group Photo" },
    { id: 25, src: "/assets/gallery/gallery5.jpg", category: "workshop", title: "Detail Work" },
    { id: 26, src: "/assets/gallery/gallery6.jpg", category: "vintage", title: "Heritage Display" },
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const featuredImages = galleryImages.filter(img => img.featured);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* ======= HERO SECTION ======= */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/gallery-hero.jpg"
            alt="Gallery - Asri LuckyStrike Garage"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            PHOTO <span className="text-red-500">GALLERY</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A visual journey through our restoration projects and community events
          </p>
        </div>
      </section>

      {/* ======= GALLERY CONTROLS ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <FaCamera />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search photos..."
                className="pl-12 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======= FEATURED IMAGES ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="font-oswald text-3xl font-bold mb-6">
          <span className="text-red-500">FEATURED</span> COLLECTION
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
              onClick={() => openLightbox(image.src)}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{image.title}</h3>
                    <span className="px-2 py-1 bg-red-500 text-xs font-bold rounded-full">
                      {image.category.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======= MAIN GALLERY ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-oswald text-3xl font-bold">
            {activeCategory === 'all' ? 'ALL PHOTOS' : activeCategory.toUpperCase()}
          </h2>
          <div className="text-gray-400">
            {filteredImages.length} photos
          </div>
        </div>

        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors">
                      <FaHeart className="text-white" />
                    </button>
                    <button className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors">
                      <FaShare className="text-white" />
                    </button>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">{image.title}</div>
                    <div className="text-sm text-gray-300">{image.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <FaCamera className="text-6xl mx-auto mb-4 text-gray-600" />
            <h3 className="text-2xl font-bold mb-2">No Photos Found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </section>

      {/* ======= VIDEO GALLERY ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-8 text-center">
          VIDEO <span className="text-red-500">DOCUMENTARIES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "RD350LC Restoration",
              description: "Full restoration journey from start to finish",
              duration: "15:23",
              thumbnail: "/assets/videos/restoration.jpg",
            },
            {
              title: "Workshop Tour",
              description: "Behind the scenes at our garage",
              duration: "08:45",
              thumbnail: "/assets/videos/workshop.jpg",
            },
            {
              title: "Vintage Gathering 2024",
              description: "Highlights from our annual event",
              duration: "12:10",
              thumbnail: "/assets/videos/gathering.jpg",
            },
          ].map((video, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 px-2 py-1 bg-black/70 text-white text-sm rounded">
                  {video.duration}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-oswald text-xl font-semibold mb-1">{video.title}</h3>
                  <p className="text-gray-300 text-sm">{video.description}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                    <div className="text-2xl">▶</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======= SHARE YOUR PHOTOS ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
            SHARE <span className="text-red-500">YOUR</span> PHOTOS
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Have photos from our events or your restored bike? Share them with our community!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
              <FaCamera />
              Upload Photos
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white/30 hover:border-red-500 text-white font-semibold rounded-lg transition-colors duration-300">
              View Community Gallery
            </button>
          </div>
        </div>
      </section>

      {/* ======= LIGHTBOX MODAL ======= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] rounded-lg"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // Download functionality
                  const link = document.createElement('a');
                  link.href = selectedImage;
                  link.download = 'asri-garage-photo.jpg';
                  link.click();
                }}
                className="p-3 bg-black/70 hover:bg-black/90 rounded-full transition-colors"
              >
                <FaDownload className="text-white" />
              </button>
              <button
                onClick={closeLightbox}
                className="p-3 bg-black/70 hover:bg-black/90 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}