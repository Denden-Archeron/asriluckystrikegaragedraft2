"use client";

import Image from "next/image";
import { FaShoppingCart, FaHeart, FaStar, FaTshirt, FaFilter } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function MerchandisePage() {
  const [cart, setCart] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Items" },
    { id: "apparel", name: "Apparel" },
    { id: "accessories", name: "Accessories" },
    { id: "collectibles", name: "Collectibles" },
    { id: "parts", name: "Model Parts" },
  ];

  const merchandise = [
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
        care: "Machine wash 30°C"
      }
    },
  ];

  const filteredItems = activeCategory === "all" 
    ? merchandise 
    : merchandise.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* ======= HERO SECTION ======= */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/merch-hero.jpg"
            alt="Merchandise - Asri LuckyStrike Garage"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            OFFICIAL <span className="text-red-500">MERCHANDISE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wear the legacy. Shop our exclusive vintage motorcycle collection
          </p>
        </div>
      </section>

      {/* ======= SHOP CONTROLS ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Filter Label */}
            <div className="flex items-center gap-2">
              <FaFilter className="text-red-500" />
              <span className="font-semibold">Filter by:</span>
            </div>

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
                  {category.name}
                </button>
              ))}
            </div>

            {/* Cart */}
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <FaShoppingCart />
                <span>Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======= PRODUCT GRID ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredItems.length}</span> items
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {item.featured && (
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  )}
                  {item.originalPrice && (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                      SALE
                    </span>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <button className="p-2 bg-black/70 hover:bg-red-500 rounded-full transition-colors">
                    <FaHeart className="text-white" />
                  </button>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 bg-black/70 text-white text-xs font-bold rounded-full">
                    {item.stock} left
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-oswald text-xl font-semibold mb-2">{item.name}</h3>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-gray-800 rounded">
                    <div className="text-xs text-gray-400">Material</div>
                    <div className="text-sm font-semibold">{item.specs?.material || 'N/A'}</div>
                  </div>
                  <div className="text-center p-2 bg-gray-800 rounded">
                    <div className="text-xs text-gray-400">Rating</div>
                    <div className="text-sm font-semibold flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500" size={12} />
                      {item.rating}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                {/* Sizes & Colors */}
                {item.sizes && (
                  <div className="mb-3">
                    <span className="text-sm text-gray-400">Sizes:</span>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {item.sizes.map((size) => (
                        <span
                          key={size}
                          className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.colors && (
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">Colors:</span>
                    <div className="flex gap-2 mt-1">
                      {item.colors.map((color) => (
                        <div
                          key={color}
                          className="w-6 h-6 rounded-full border-2 border-gray-600 hover:border-red-500 transition-colors cursor-pointer"
                          style={{
                            backgroundColor: color.toLowerCase() === 'red' ? '#ef4444' : color.toLowerCase(),
                          }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Price & Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-red-500">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">{item.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <Link 
                    href={`/merchandise/${item.id}`}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <FaTshirt className="text-6xl mx-auto mb-4 text-gray-600" />
            <h3 className="text-2xl font-bold mb-2">No Products Found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </section>

      {/* ======= SHIPPING INFO ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-oswald text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-400">Free delivery for orders above RM150 within Malaysia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-oswald text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-400">30-day return policy for unworn items</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="font-oswald text-xl font-semibold mb-2">Gift Cards</h3>
              <p className="text-gray-400">Digital gift cards available for any amount</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}