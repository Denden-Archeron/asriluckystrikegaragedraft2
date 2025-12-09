"use client";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "MODELS", href: "/models" },
    { 
      name: "MERCHANDISE", 
      href: isHomePage ? "#merchandise" : "/merchandise" 
    },
    { 
      name: "EVENTS", 
      href: isHomePage ? "#events" : "/events" 
    },
    { 
      name: "GALLERY", 
      href: isHomePage ? "#gallery" : "/gallery" 
    },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="flex flex-wrap justify-center bg-[#111] text-[13px] font-semibold w-full border-b border-red-700">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-2 hover:text-red-500 transition-colors whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;