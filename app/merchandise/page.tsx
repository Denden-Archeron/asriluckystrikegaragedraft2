"use client";

import Image from "next/image";
import { FaShoppingCart, FaHeart, FaStar, FaTshirt, FaTag } from "react-icons/fa";
import { useState } from "react";

export default function MerchandisePage() {
  const [cart, setCart] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

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
      price: "RM79",
      originalPrice: "RM99",
      description: "Premium cotton t-shirt with vintage garage logo",
      image: "/assets/merchandise/tshirt.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Red"],
      featured: true,
      rating: 4.8,
      stock: 25,
    },
    {
      id: 2,
      name: "Limited Edition Keychain Set",
      category: "accessories",
      price: "RM25",
      originalPrice: "RM35",
      description: "Three-piece keychain set with vintage bike designs",
      image: "/assets/merchandise/keychain.jpg",
      featured: true,
      rating: 4.9,
      stock: 50,
    },
    {
      id: 3,
      name: "Retro Sticker Pack",
      category: "accessories",
      price: "RM19",
      description: "10 high-quality vinyl stickers for bikes and helmets",
      image: "/assets/merchandise/stickers.jpg",
      featured: true,
      rating: 4.7,
      stock: 100,
    },
    {
      id: 4,
      name: "Garage Hoodie",
      category: "apparel",
      price: "RM149",
      description: "Premium fleece hoodie with embroidered logo",
      image: "/assets/merchandise/hoodie.jpg",
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Black", "Gray"],
      featured: false,
      rating: 4.6,
      stock: 15,
    },
    {
      id: 5,
      name: "Vintage Bike Scale Model",
      category: "collectibles",
      price: "RM199",
      description: "1:12 scale model of Yamaha RD350LC",
      image: "/assets/merchandise/model.jpg",
      featured: false,
      rating: 5.0,
      stock: 10,
    },
    {
      id: 6,
      name: "Garage Cap",
      category: "apparel",
      price: "RM45",
      description: "Adjustable cap with vintage embroidery",
      image: "/assets/merchandise/cap.jpg",
      colors: ["Black", "Navy"],
      featured: false,
      rating: 4.5,
      stock: 30,
    },
    {
      id: 7,
      name: "Leather Key Holder",
      category: "accessories",
      price: "RM35",
      description: "Genuine leather key holder with metal plate",
      image: "/assets/merchandise/keyholder.jpg",
      featured: false,
      rating: 4.4,
      stock: 40,
    },
    {
      id: 8,
      name: "RD350LC Patch Set",
      category: "parts",
      price: "RM29",
      description: "Official Yamaha patches for restoration",
      image: "/assets/merchandise/patches.jpg",
      featured: false,
      rating: 4.8,
      stock: 60,
    },
  ];

  const filteredItems = activeCategory === "all" 
    ? merchandise 
    : merchandise.filter(item => item.category === activeCategory);

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low": return parseInt(a.price.replace('RM', '')) - parseInt(b.price.replace('RM', ''));
      case "price-high": return parseInt(b.price.replace('RM', '')) - parseInt(a.price.replace('RM', ''));
      case "rating": return b.rating - a.rating;
      default: return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    }
  });

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

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
                  <FaTag />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort & Cart */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
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
        </div>
      </section>

      {/* ======= PRODUCT GRID ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedItems.map((item) => (
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
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-oswald text-xl font-semibold">{item.name}</h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className="text-sm">{item.rating}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                {/* Sizes & Colors */}
                {item.sizes && (
                  <div className="mb-3">
                    <span className="text-sm text-gray-400">Sizes:</span>
                    <div className="flex gap-1 mt-1">
                      {item.sizes.map((size) => (
                        <button
                          key={size}
                          className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded text-sm"
                        >
                          {size}
                        </button>
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
                          className="w-6 h-6 rounded-full border border-gray-600"
                          style={{
                            backgroundColor: color.toLowerCase(),
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
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(item.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      <FaShoppingCart />
                      <span className="hidden sm:inline">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedItems.length === 0 && (
          <div className="text-center py-16">
            <FaTshirt className="text-6xl mx-auto mb-4 text-gray-600" />
            <h3 className="text-2xl font-bold mb-2">No Products Found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </section>

      {/* ======= FEATURED COLLECTION ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
            LIMITED <span className="text-red-500">EDITION</span> COLLECTION
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exclusive items celebrating our vintage motorcycle heritage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Item 1 */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden">
            <div className="relative h-96">
              <Image
                src="/assets/merchandise/featured1.jpg"
                alt="Limited Edition Jacket"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="px-4 py-1 bg-red-500 text-white text-sm font-bold rounded-full mb-4 inline-block">
                  LIMITED STOCK
                </span>
                <h3 className="font-oswald text-3xl font-bold mb-2">Vintage Garage Jacket</h3>
                <p className="text-gray-300 mb-4">Premium leather jacket with custom embroidery</p>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-red-500">RM499</span>
                  <button className="px-6 py-2 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-colors">
                    Pre-order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Item 2 */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden">
            <div className="relative h-96">
              <Image
                src="/assets/merchandise/featured2.jpg"
                alt="Anniversary Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="px-4 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full mb-4 inline-block">
                  30TH ANNIVERSARY
                </span>
                <h3 className="font-oswald text-3xl font-bold mb-2">Anniversary Collection</h3>
                <p className="text-gray-300 mb-4">Special edition celebrating 30 years of heritage</p>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-red-500">From RM199</span>
                  <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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