"use client";

import Image from "next/image";
import { FaCamera, FaSearch, FaDownload, FaShare, FaHeart, FaYoutube, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { useState } from "react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "restoration", name: "Restoration Projects" },
    { id: "events", name: "Events" },
    { id: "bikes", name: "Motorcycles" },
    { id: "workshop", name: "Workshop" },
    { id: "vintage", name: "Vintage Collection" },
  ];

  const galleryImages = [
    // RD Durian Weekend 2026
    { id: 1, src: "/assets/events/RD Durian Weekend/RD Durian Weekend1.jpeg", category: "events", title: "RD Durian Weekend 2026", featured: true },
    { id: 2, src: "/assets/events/RD Durian Weekend/RD Durian Weekend2.jpeg", category: "events", title: "RD Durian Weekend - Gathering" },
    { id: 3, src: "/assets/events/RD Durian Weekend/RD Durian Weekend3.jpeg", category: "events", title: "RD Durian Weekend - Bikes" },
    { id: 4, src: "/assets/events/RD Durian Weekend/RD Durian Weekend4.jpeg", category: "events", title: "RD Durian Weekend - Display" },
    { id: 5, src: "/assets/events/RD Durian Weekend/RD Durian Weekend5.jpeg", category: "events", title: "RD Durian Weekend - Participants" },
    { id: 6, src: "/assets/events/RD Durian Weekend/RD Durian Weekend6.jpeg", category: "events", title: "RD Durian Weekend - Community" },
    { id: 7, src: "/assets/events/RD Durian Weekend/RD Durian Weekend7.jpeg", category: "events", title: "RD Durian Weekend - Moment" },
    { id: 8, src: "/assets/events/RD Durian Weekend/RD Durian Weekend8.jpeg", category: "events", title: "RD Durian Weekend - Ride" },
    { id: 9, src: "/assets/events/RD Durian Weekend/RD Durian Weekend9.jpeg", category: "events", title: "RD Durian Weekend - Heritage" },
    { id: 10, src: "/assets/events/RD Durian Weekend/RD Durian Weekend10.jpeg", category: "events", title: "RD Durian Weekend - Show" },
    { id: 11, src: "/assets/events/RD Durian Weekend/RD Durian Weekend11.jpeg", category: "events", title: "RD Durian Weekend - Collection" },
    { id: 12, src: "/assets/events/RD Durian Weekend/RD Durian Weekend12.jpeg", category: "events", title: "RD Durian Weekend - Action" },
    { id: 13, src: "/assets/events/RD Durian Weekend/RD Durian Weekend13.jpeg", category: "events", title: "RD Durian Weekend - Details" },
    { id: 14, src: "/assets/events/RD Durian Weekend/RD Durian Weekend14.jpeg", category: "events", title: "RD Durian Weekend - Showcase" },
    { id: 15, src: "/assets/events/RD Durian Weekend/RD Durian Weekend15.jpeg", category: "events", title: "RD Durian Weekend - Festival" },
    { id: 16, src: "/assets/events/RD Durian Weekend/RD Durian Weekend16.jpeg", category: "events", title: "RD Durian Weekend - Experience" },
    { id: 17, src: "/assets/events/RD Durian Weekend/RD Durian Weekend17.jpeg", category: "events", title: "RD Durian Weekend - Memories" },
    
    // Restoration Projects
    { id: 18, src: "/assets/bike/TZR 125.png", category: "restoration", title: "RD350LC Restoration", featured: false },
    { id: 19, src: "/assets/bike/TDR 250.png", category: "restoration", title: "Engine Rebuild" },
    { id: 20, src: "/assets/bike/RZ 250 RR.png", category: "restoration", title: "Frame Painting" },
    { id: 21, src: "/assets/bike/RZ 250 R.png", category: "restoration", title: "Final Assembly" },
    
    // Events
    { id: 22, src: "/assets/gallery/event1.jpg", category: "events", title: "2024 Gathering" },
    { id: 23, src: "/assets/gallery/event2.jpg", category: "events", title: "Workshop Session" },
    { id: 24, src: "/assets/gallery/event3.jpg", category: "events", title: "Charity Ride" },
    { id: 25, src: "/assets/gallery/event4.jpg", category: "events", title: "Awards Ceremony" },
    
    // Motorcycles
    { id: 26, src: "/assets/bike/AprilliaRS250GP1.png", category: "bikes", title: "Aprillia RS250 GP1", featured: true },
    { id: 27, src: "/assets/bike/RD250LC.png", category: "bikes", title: "Yamaha RD350LC" },
    { id: 28, src: "/assets/bike/RZ250.png", category: "bikes", title: "Yamaha RZ250" },
    { id: 29, src: "/assets/bike/RZV500.png", category: "bikes", title: "Yamaha RZV500" },
    
    // Workshop
    { id: 30, src: "/assets/gallery/event5.jpg", category: "workshop", title: "Workshop Interior" },
    { id: 31, src: "/assets/gallery/event6.jpg", category: "workshop", title: "Tool Collection" },
    { id: 32, src: "/assets/bike/Honda MBX 125.png", category: "workshop", title: "Parts Storage" },
    { id: 33, src: "/assets/gallery/Riding.jpg", category: "workshop", title: "Work in Progress" },
    
    // Vintage Collection
    { id: 34, src: "/assets/gallery/Posing.jpg", category: "vintage", title: "1970s Collection" },
    { id: 35, src: "/assets/gallery/Soldout.jpg", category: "vintage", title: "Classic Parts" },
    { id: 36, src: "/assets/gallery/backhelmet.jpg", category: "vintage", title: "Vintage Showroom" },
    { id: 37, src: "/assets/gallery/helmet.jpg", category: "vintage", title: "Restoration Archive" },
    
    // Additional images
    { id: 38, src: "/assets/gallery/gallery1.jpg", category: "events", title: "Community Meet" },
    { id: 39, src: "/assets/gallery/gallery2.jpg", category: "bikes", title: "Custom Build" },
    { id: 40, src: "/assets/gallery/gallery3.jpg", category: "restoration", title: "Before & After" },
    { id: 41, src: "/assets/gallery/gallery4.jpg", category: "events", title: "Group Photo" },
    { id: 42, src: "/assets/gallery/gallery5.jpg", category: "workshop", title: "Detail Work" },
    { id: 43, src: "/assets/gallery/gallery6.jpg", category: "vintage", title: "Heritage Display" },
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const featuredImages = galleryImages.filter(img => img.featured);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsLightboxOpen(false);
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
              id: "rd350lc",
              title: "KARI KEPALA IKAN PANTAI REMIS | WCE CALLING 2025",
              description: "PRODRUGSRACING | GARANGRACINGMOTOSPORT | RD350 LC",
              duration: "5:21",
              thumbnail: "/assets/videos/video1.jpg",
              youtubeId: "pwJThnlYdw0",
              youtubeUrl: "https://www.youtube.com/watch?v=pwJThnlYdw0",
            },
            {
              id: "workshop",
              title: "GARANG RACING RIDE SILATULRAHIM",
              description: "KERATONG 3.0 | 2025",
              duration: "21:33",
              thumbnail: "/assets/videos/video2.jpg",
              youtubeId: "-v7lKnGZI-Y",
              youtubeUrl: "https://www.youtube.com/watch?v=-v7lKnGZI-Y",
            },
            {
              id: "gathering",
              title: "RD MEMBER’s MALAYSIA",
              description: "13th GATHERING | 2025",
              duration: "14:37",
              thumbnail: "/assets/videos/video3.jpg",
              youtubeId: "rQ3ZTXic0rE",
              youtubeUrl: "https://www.youtube.com/watch?v=rQ3ZTXic0rE",
            },
          ].map((video) => (
            <div
              key={video.id}
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
                <div className="absolute top-4 right-4 px-2 py-1 bg-black/70 text-white text-sm rounded flex items-center gap-2">
                  <FaYoutube className="text-red-500" />
                  {video.duration}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-oswald text-xl font-semibold mb-1">{video.title}</h3>
                  <p className="text-gray-300 text-sm">{video.description}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedVideo(video.youtubeId)}
                    className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
                  >
                    <div className="text-2xl">▶</div>
                  </button>
                </div>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 left-4 p-2 bg-black/70 hover:bg-red-500 rounded-full transition-colors duration-300 opacity-0 group-hover:opacity-100"
                  title="Open on YouTube"
                >
                  <FaExternalLinkAlt className="text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======= SHARE YOUR PHOTOS ======= */}
      {/*<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
      </section>*/}

      {/* ======= YOUTUBE VIDEO MODAL ======= */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-3 bg-black/70 hover:bg-black/90 rounded-full transition-colors z-10"
            >
              ✕
            </button>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* ======= LIGHTBOX MODAL ======= */}
      {isLightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            <div
              className="relative w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Enlarged view"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              </div>
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Download functionality
                    const link = document.createElement('a');
                    link.href = selectedImage;
                    link.download = 'asri-garage-photo.jpg';
                    link.click();
                  }}
                  className="p-3 bg-black/70 hover:bg-red-600 rounded-full transition-colors"
                  title="Download image"
                >
                  <FaDownload className="text-white" />
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-3 bg-black/70 hover:bg-red-600 rounded-full transition-colors"
                  title="Close lightbox"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}