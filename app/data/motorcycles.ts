export const motorcycles = [
  {
    id: 1,
    name: "Yamaha TZR 125",
    category: "vintage",
    year: "1980s",
    price: "RM 25,000",
    status: "Available",
    engine: "124cc Two-Stroke",
    power: "25 HP",
    description: "Classic two-stroke sport bike. Fully restored with original parts.",
    image: "/assets/bike/TZR 125.jpeg",
    featured: true,
    // Additional details
    history: "The Yamaha TZR 125 was introduced in the late 1980s as a sport-oriented two-stroke motorcycle. Known for its lightweight chassis and responsive engine, it became popular among young riders in Europe and Asia.",
    restorationDetails: [
      "Complete engine overhaul with new pistons, rings, and bearings",
      "Frame repainted in original red/white Yamaha racing colors",
      "New Mikuni carburetor and exhaust system",
      "Original speedometer and gauges restored",
      "Fresh tires and brake pads installed"
    ],
    specifications: {
      engineType: "124cc Two-Stroke Single",
      fuelSystem: "Mikuni VM24SS Carburetor",
      weight: "112 kg",
      transmission: "6-speed manual",
      topSpeed: "130 km/h",
      fuelCapacity: "12 liters"
    },
    galleryImages: [
      "/assets/bike/TZR 125.jpeg",
      "/assets/bike/TZR 125 - L.jpeg",
      "/assets/bike/TZR 125 - LT.jpeg",
      "/assets/bike/TZR 125 - Meter.jpeg",
      "/assets/bike/TZR 125 - RF.jpeg",
      "/assets/bike/TZR 125 - RT.jpeg",
    ]
  },
  {
    id: 2,
    name: "Yamaha TDR 250",
    category: "vintage",
    year: "1986",
    price: "RM 22,000",
    status: "Available",
    engine: "247cc Two-Stroke",
    power: "35 HP",
    description: "Rare YPVS model with power valve system.",
    image: "/assets/bike/TDR 250.jpeg",
    featured: true,
    // Additional details
    history: "The Yamaha TDR 250 was a dual-sport motorcycle produced from 1987 to 1991. It featured Yamaha's Power Valve System (YPVS) and was known for its excellent power-to-weight ratio.",
    restorationDetails: [
      "YPVS system fully serviced and calibrated",
      "Suspension rebuilt with new seals",
      "Frame and swingarm powder coated",
      "Original graphics and decals applied",
      "Brake system completely overhauled"
    ],
    specifications: {
      engineType: "247cc Liquid-cooled Two-Stroke",
      fuelSystem: "Mikuni TM28SS Carburetor",
      weight: "128 kg",
      transmission: "6-speed manual",
      topSpeed: "160 km/h",
      fuelCapacity: "14 liters"
    },
    galleryImages: [
      "/assets/bike/TDR 250.jpeg",
      "/assets/bike/TDR 250 - RT.jpeg",
      "/assets/bike/TDR 250 - RLT.jpeg",
      "/assets/bike/TDR 250 - Meter.jpeg",
      "/assets/bike/TDR 250 - LT.jpeg",
      "/assets/bike/TDR 250 - LF.jpeg",
      "/assets/bike/TDR 250 - Dashboard.jpeg",
      "/assets/bike/TDR 250 - CORE.jpeg",
    ]
  },
  {
    id: 3,
    name: "Yamaha RZ 250 RR",
    category: "modern",
    year: "2023",
    price: "RM 25,500",
    status: "New",
    engine: "321cc Parallel Twin",
    power: "41 HP",
    description: "Brand new with full warranty and service package.",
    image: "/assets/bike/RZ 250 RR.jpeg",
    featured: false,
    // Additional details
    history: "The Yamaha RZ 250 RR is a modern reinterpretation of the classic RZ series. Combining retro styling with modern technology, it pays homage to the legendary two-strokes of the 1980s.",
    restorationDetails: [
      "Brand new - no restoration needed",
      "Full factory warranty included",
      "Comprehensive service package",
      "Free first service included",
      "Yamaha Roadside Assistance for 2 years"
    ],
    specifications: {
      engineType: "321cc Liquid-cooled Parallel Twin",
      fuelSystem: "Fuel Injection",
      weight: "168 kg",
      transmission: "6-speed with slipper clutch",
      topSpeed: "180 km/h",
      fuelCapacity: "14 liters",
      features: ["ABS", "Traction Control", "LED Lighting", "Digital Dashboard"]
    },
    galleryImages: [
      "/assets/bike/RZ 250 RR.jpeg",
      "/assets/bike/RZ 250 RR - Left.jpeg",
      "/assets/bike/RZ 250 RR - LeftTyre.jpeg",
      "/assets/bike/RZ 250 RR - Meter.jpeg",
      "/assets/bike/RZ 250 RR - RightFront.jpeg",
      "/assets/bike/RZ 250 RR - RightTyre.jpeg",
    ]
  },
  {
    id: 4,
    name: "Honda Compo",
    category: "scooter",
    year: "1990s",
    price: "RM 8,500",
    status: "Restored",
    engine: "49cc Four-Stroke",
    power: "4.5 HP",
    description: "Compact folding scooter - urban classic.",
    image: "/assets/bike/honda-compo.jpg",
    featured: false,
    // Additional details
    history: "The Honda Compo (also known as Motocompo) was a folding scooter produced from 1981 to 1983. Designed to fit in the trunk of Honda's City car, it became a cult classic.",
    restorationDetails: [
      "Engine completely rebuilt",
      "Original folding mechanism restored",
      "Body repainted in factory colors",
      "New seat upholstery",
      "All rubber components replaced"
    ],
    specifications: {
      engineType: "49cc Air-cooled Four-Stroke",
      fuelSystem: "Carburetor",
      weight: "45 kg",
      transmission: "Automatic CVT",
      topSpeed: "50 km/h",
      fuelCapacity: "2 liters",
      foldingSize: "1185 × 535 × 910 mm"
    },
    galleryImages: [
      "/assets/bike/honda-compo.jpg",
      "/assets/bike/compo-folded.jpg",
      "/assets/bike/compo-engine.jpg",
      "/assets/bike/compo-side.jpg"
    ]
  },
  // ... Continue for other motorcycles with similar structure
];