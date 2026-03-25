"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaArrowLeft,
  FaPhone,
  FaWhatsapp,
  FaShareAlt,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";

interface MerchandiseItem {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  description: string;
  image: string;
  sizes: string[];
  colors: string[];
  featured: boolean;
  rating: number;
  stock: number;
  specs: {
    material: string;
    weight: string;
    fit: string;
    care: string;
  };
}

// Mock merchandise data - in a real app, this would come from a database
const merchandiseData: MerchandiseItem[] = [
  {
    id: 1,
    name: "Asri LuckyStrike Vintage T-Shirt",
    category: "apparel",
    price: "RM80",
    originalPrice: "RM99",
    description: "Premium cotton t-shirt with vintage garage logo",
    image: "/assets/merchandise/MerchShirtFront.jpeg",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Black"],
    featured: true,
    rating: 4.8,
    stock: 25,
    specs: {
      material: "100% Cotton",
      weight: "180-190 gsm",
      fit: "Regular Fit",
      care: "Machine wash 30°C",
    },
  },
];

export default function MerchandiseDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [item, setItem] = useState<MerchandiseItem | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundItem = merchandiseData.find((m) => m.id === parseInt(id));
    setItem(foundItem || null);
    if (foundItem) {
      setSelectedSize(foundItem.sizes[0]);
      setSelectedColor(foundItem.colors[0]);
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-400 mb-6">
            The merchandise you're looking for doesn't exist.
          </p>
          <Link
            href="/merchandise"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <FaArrowLeft />
            Back to Merchandise
          </Link>
        </div>
      </div>
    );
  }

  // Gallery images for shirt (front, back views)
  const galleryImages = [
    item.image,
    "/assets/merchandise/MerchShirtBack.jpeg",
    "/assets/merchandise/MerchShirtPrevFront.jpeg",
    "/assets/merchandise/MerchShirtPrevBack.jpeg", // Back view (placeholder - user should provide)
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* ======= BACK BUTTON ======= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/merchandise"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <FaArrowLeft />
          Back to Merchandise
        </Link>
      </div>

      {/* ======= HERO SECTION ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div>
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-black">
                <Image
                  src={galleryImages[selectedImage]}
                  alt={item.name}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-red-500 text-white font-bold rounded-full text-sm">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {galleryImages.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 md:h-24 w-20 md:w-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-red-500"
                        : "border-gray-700 hover:border-gray-500"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${item.name} view ${index + 1}`}
                      fill
                      className="object-contain bg-black"
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </button>
                ))}
              </div>

              {/* View Labels */}
              <div className="mt-4 flex gap-2 text-sm text-gray-400">
                <span>Front</span>
                <span>|</span>
                <span>Front Detail</span>
                <span>|</span>
                <span>Back (coming soon)</span>
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="mb-6">
                <span className="text-red-500 font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <h1 className="font-oswald text-4xl md:text-5xl font-bold mt-2 mb-4">
                  {item.name}
                </h1>
                <p className="text-gray-300 text-lg">{item.description}</p>
              </div>

              {/* Price & Rating */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-3xl md:text-4xl font-bold text-red-500">
                    {item.price}
                  </div>
                  {item.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {item.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.floor(item.rating)
                          ? "text-yellow-500"
                          : "text-gray-600"
                      }
                    />
                  ))}
                  <span className="text-gray-400 ml-2">({item.rating} rating)</span>
                </div>
              </div>

              {/* Material & Specs */}
              <div className="mb-8">
                <h3 className="font-oswald text-xl font-bold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Material</div>
                    <div className="font-semibold">{item.specs.material}</div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Weight</div>
                    <div className="font-semibold">{item.specs.weight}</div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Fit</div>
                    <div className="font-semibold">{item.specs.fit}</div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Care</div>
                    <div className="font-semibold text-sm">{item.specs.care}</div>
                  </div>
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-oswald text-lg font-bold mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {item.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg transition-colors font-semibold ${
                        selectedSize === size
                          ? "bg-red-600 text-white"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <h3 className="font-oswald text-lg font-bold mb-3">Select Color</h3>
                <div className="flex gap-3">
                  {item.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedColor === color
                          ? "border-red-500 bg-gray-800"
                          : "border-gray-700 hover:border-gray-500 bg-gray-800/50"
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full border border-gray-600 mb-2 mx-auto"
                        style={{
                          backgroundColor:
                            color.toLowerCase() === "red"
                              ? "#ef4444"
                              : color.toLowerCase(),
                        }}
                      />
                      <div className="text-sm font-semibold">{color}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stock Status */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-green-400">
                  <FaCheckCircle />
                  <span>{item.stock} items in stock</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/60126736445?text=Hi%20I%20am%20interested%20in%20this%20merchandise%20-%20${encodeURIComponent(
                        item.name
                      )}%20(Size:%20${selectedSize},%20Color:%20${selectedColor})`,
                      "_blank"
                    )
                  }
                  className="flex-1 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Inquiry
                </button>
                <button
                  onClick={() => window.open("tel:+60126736445")}
                  className="flex-1 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
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

      {/* ======= SIZE GUIDE SECTION ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
            SIZE <span className="text-red-500">GUIDE</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find the perfect fit with our comprehensive sizing information
          </p>
        </div>

        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 overflow-x-auto">
          {/* Size Chart Table */}
          <table className="w-full text-left text-gray-300">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="px-4 py-4 text-red-500 font-bold">Size</th>
                <th className="px-4 py-4 text-red-500 font-bold">S</th>
                <th className="px-4 py-4 text-red-500 font-bold">M</th>
                <th className="px-4 py-4 text-red-500 font-bold">L</th>
                <th className="px-4 py-4 text-red-500 font-bold">XL</th>
                <th className="px-4 py-4 text-red-500 font-bold">2XL</th>
                <th className="px-4 py-4 text-red-500 font-bold">3XL</th>
              </tr>
            </thead>
            <tbody>
              {/* Shoulder Width */}
              <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-4 font-semibold text-white">Shoulder Width (in)</td>
                <td className="px-4 py-4">20"</td>
                <td className="px-4 py-4">20.5"</td>
                <td className="px-4 py-4">21"</td>
                <td className="px-4 py-4">22"</td>
                <td className="px-4 py-4">23"</td>
                <td className="px-4 py-4">23.5"</td>

              </tr>
              {/* Chest Width */}
              <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-4 font-semibold text-white">Chest Width (in)</td>
                <td className="px-4 py-4">41"</td>
                <td className="px-4 py-4">44"</td>
                <td className="px-4 py-4">46"</td>
                <td className="px-4 py-4">49"</td>
                <td className="px-4 py-4">52"</td>
                <td className="px-4 py-4">55"</td>
              </tr>
              {/* Sleeve Length */}
              <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-4 font-semibold text-white">Sleeve Length (in)</td>
                <td className="px-4 py-4">10"</td>
                <td className="px-4 py-4">10.5"</td>
                <td className="px-4 py-4">11"</td>
                <td className="px-4 py-4">11.5"</td>
                <td className="px-4 py-4">12"</td>
                <td className="px-4 py-4">12.5"</td>
              </tr>
              {/* Body Length */}
              <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-4 font-semibold text-white">Body Length (in)</td>
                <td className="px-4 py-4">27.5"</td>
                <td className="px-4 py-4">28.5"</td>
                <td className="px-4 py-4">30"</td>
                <td className="px-4 py-4">30.5"</td>
                <td className="px-4 py-4">31"</td>
                <td className="px-4 py-4">31.5"</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Sizing Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-6">
            <div className="text-3xl mb-3">📏</div>
            <h3 className="font-oswald text-lg font-bold mb-2">How to Measure</h3>
            <p className="text-gray-400 text-sm">
              Lay the shirt flat and measure across the chest (armpit to armpit)
              and from the shoulder to the bottom hem.
            </p>
          </div>
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-oswald text-lg font-bold mb-2">Perfect Fit</h3>
            <p className="text-gray-400 text-sm">
              Choose your size based on chest width. If between sizes, we
              recommend sizing up for a comfortable regular fit.
            </p>
          </div>
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-6">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-oswald text-lg font-bold mb-2">After Washing</h3>
            <p className="text-gray-400 text-sm">
              Wash in cold water and lay flat to dry to maintain the original
              size. Heat may cause slight shrinkage.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
