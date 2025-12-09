"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  FaArrowLeft, 
  FaCalendarAlt, 
  FaCog, 
  FaTachometerAlt, 
  FaGasPump, 
  FaWeight,
  FaPhone,
  FaWhatsapp,
  FaShareAlt,
  FaCogs,
  FaRoad,
  FaOilCan,
  FaCheckCircle
} from "react-icons/fa";
import { motorcycles } from "@/app/data/motorcycles";
import Link from "next/link";

export default function MotorcycleDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [bike, setBike] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the motorcycle by ID
    const foundBike = motorcycles.find(b => b.id === parseInt(id));
    setBike(foundBike);
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading motorcycle details...</p>
        </div>
      </div>
    );
  }

  if (!bike) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Motorcycle Not Found</h2>
          <p className="text-gray-400 mb-6">The motorcycle you're looking for doesn't exist.</p>
          <Link 
            href="/models"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <FaArrowLeft />
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  // Use bike-specific gallery images if available, otherwise use defaults
  const galleryImages = bike.galleryImages || [
    bike.image,
    `/assets/bike/${bike.name.toLowerCase().replace(/\s+/g, '-')}-side.jpg`,
    `/assets/bike/${bike.name.toLowerCase().replace(/\s+/g, '-')}-engine.jpg`,
    `/assets/bike/${bike.name.toLowerCase().replace(/\s+/g, '-')}-rear.jpg`,
  ];

  // Detailed specs - combine static and dynamic specs
  const detailedSpecs = [
    { icon: <FaCog />, label: "Engine Type", value: bike.engine },
    { icon: <FaTachometerAlt />, label: "Power", value: bike.power },
    { icon: <FaGasPump />, label: "Fuel System", value: bike.specifications?.fuelSystem || "Carburetor" },
    { icon: <FaWeight />, label: "Weight", value: bike.specifications?.weight || "N/A" },
    { icon: <FaRoad />, label: "Top Speed", value: bike.specifications?.topSpeed || "N/A" },
    { icon: <FaOilCan />, label: "Transmission", value: bike.specifications?.transmission || "N/A" },
  ];

  // Additional features if available
  const features = bike.specifications?.features || [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* ======= BACK BUTTON ======= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/models"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <FaArrowLeft />
          Back to Collection
        </Link>
      </div>

      {/* ======= HERO SECTION ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div>
              <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                <Image
                  src={galleryImages[selectedImage]}
                  alt={bike.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-2 ${bike.status === 'New' ? 'bg-green-500' : 'bg-blue-500'} text-white font-bold rounded-full text-sm`}>
                    {bike.status}
                  </span>
                </div>
                {bike.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-red-500 text-white font-bold rounded-full text-sm">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-2">
                {galleryImages.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 flex-1 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-red-500' : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${bike.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 25vw, 12.5vw"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="mb-6">
                <span className="text-red-500 font-semibold uppercase tracking-wider">
                  {bike.category}
                </span>
                <h1 className="font-oswald text-4xl md:text-5xl font-bold mt-2 mb-4">
                  {bike.name}
                </h1>
                <p className="text-gray-300 text-lg">{bike.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  {bike.price}
                </div>
                <p className="text-gray-400 text-sm">Inclusive of GST (where applicable)</p>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="font-oswald text-2xl font-bold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {detailedSpecs.map((spec, index) => (
                    <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2 text-red-500">
                        {spec.icon}
                        <span className="text-sm text-gray-400">{spec.label}</span>
                      </div>
                      <div className="font-semibold">{spec.value}</div>
                    </div>
                  ))}
                </div>

                {/* Additional Features */}
                {features.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {features.map((feature: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Inquiry
                </button>
                <button className="flex-1 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                  <FaPhone />
                  Call Now
                </button>
                <button className="px-4 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <FaShareAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= DETAILED DESCRIPTION ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
          <h2 className="font-oswald text-3xl font-bold mb-6">About This Motorcycle</h2>
          
          <div className="prose prose-invert max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-500">History & Background</h3>
                <p className="text-gray-300 mb-4">
                  {bike.history || `The ${bike.name} is a legendary motorcycle that represents the pinnacle of engineering from the ${bike.year}s. Known for its distinctive characteristics and impressive performance.`}
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-red-500">Condition Report</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>Frame: Excellent condition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>Engine: Fully serviced and running perfectly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>Electrics: All systems functional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>Paperwork: Complete with ownership documents</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-500">Restoration Details</h3>
                {bike.restorationDetails ? (
                  <ul className="space-y-3">
                    {bike.restorationDetails.map((detail: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-300">Complete engine rebuild with new pistons and rings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-300">Fresh paint job in original factory colors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-300">New tires, chain, and sprockets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-300">Carburetor overhaul and tuning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-300">Brake system completely overhauled</span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= CONTACT FORM ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
          <h2 className="font-oswald text-3xl font-bold mb-2">Interested in this {bike.name}?</h2>
          <p className="text-gray-400 mb-6">Schedule a viewing or request more information</p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
              />
            </div>
            
            <div className="space-y-4">
              <textarea
                placeholder={`Your message or questions about this ${bike.name}...`}
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                defaultValue={`I'm interested in the ${bike.name} (ID: ${bike.id}). Please contact me with more details.`}
              />
              <button
                type="submit"
                className="w-full px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300"
              >
                Send Inquiry
              </button>
              <p className="text-gray-500 text-sm text-center">
                We'll respond within 24 hours
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ======= RELATED MOTORCYCLES ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="font-oswald text-3xl font-bold mb-6">Related Motorcycles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {motorcycles
            .filter(b => b.id !== bike.id && b.category === bike.category)
            .slice(0, 3)
            .map((relatedBike) => (
              <div key={relatedBike.id} className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all group">
                <div className="relative h-48">
                  <Image
                    src={relatedBike.image}
                    alt={relatedBike.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {relatedBike.featured && (
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                        FEATURED
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{relatedBike.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{relatedBike.year} • {relatedBike.engine}</p>
                  <p className="text-red-500 font-bold mb-3">{relatedBike.price}</p>
                  <Link
                    href={`/models/${relatedBike.id}`}
                    className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}