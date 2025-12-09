import { AttendedEvent } from './eventTypes';

export const attendedEvents: AttendedEvent[] = [
  {
    id: 1,
    title: "Malaysia Vintage Motorcycle Show 2024",
    date: "December 10, 2024",
    location: "KL Convention Center",
    description: "Showcased our fully restored Yamaha RZ250 and TDR250 models. Connected with vintage motorcycle collectors from across Southeast Asia.",
    image: "/assets/events/malaysia-show.jpg",
    type: "recent",
    category: "exhibition",
    highlights: [
      "Displayed 5 fully restored vintage bikes",
      "Networked with international collectors",
      "Featured in Vintage Bike Magazine",
      "Over 3,000 visitors to our booth"
    ],
    ourRole: "Exhibitor & Participant",
    featured: true,
    galleryCount: 45,
    externalLink: "https://malaysiavintagebikeshow.com",
    status: "attended"
  },
  {
    id: 2,
    title: "Penang Heritage Bike Rally 2024",
    date: "November 22-24, 2024",
    location: "Georgetown, Penang",
    description: "Participated in the 3-day heritage bike rally with our collection of 1980s Japanese motorcycles. Won 'Best Restored Classic' award.",
    image: "/assets/events/penang-rally.jpg",
    type: "recent",
    category: "rally",
    highlights: [
      "Award: Best Restored Classic (Yamaha RD350LC)",
      "Led group ride through heritage routes",
      "Live restoration demonstration",
      "Featured in local news coverage"
    ],
    ourRole: "Participant & Award Winner",
    featured: true,
    galleryCount: 32,
    externalLink: "https://penangheritagebikerally.my",
    status: "attended"
  },
  {
    id: 3,
    title: "ASEAN Vintage Motorcycle Meet 2024",
    date: "October 15, 2024",
    location: "Bangkok, Thailand",
    description: "Represented Malaysia at the ASEAN vintage motorcycle gathering. Shared restoration techniques with enthusiasts from neighboring countries.",
    image: "/assets/events/asean-meet.jpg",
    type: "recent",
    category: "international",
    highlights: [
      "International networking opportunity",
      "Technical knowledge exchange",
      "Featured Malaysian vintage bike scene",
      "Built regional partnerships"
    ],
    ourRole: "Malaysian Representative",
    featured: false,
    galleryCount: 28,
    externalLink: "https://aseanvintagebike.org",
    status: "attended"
  },
  {
    id: 4,
    title: "Two-Stroke Enthusiasts Gathering 2024",
    date: "September 8, 2024",
    location: "Sepang International Circuit",
    description: "Joined fellow two-stroke enthusiasts for track day and technical sessions. Demonstrated YPVS system tuning.",
    image: "/assets/events/two-stroke-gathering.jpg",
    type: "recent",
    category: "technical",
    highlights: [
      "Track session with vintage two-strokes",
      "Technical workshop on carburetion",
      "Displayed rare RZ250R model",
      "Over 100 two-stroke bikes present"
    ],
    ourRole: "Participant & Technical Speaker",
    featured: false,
    galleryCount: 52,
    externalLink: "",
    status: "attended"
  },
  {
    id: 5,
    title: "Kuala Lumpur Bike Festival 2023",
    date: "December 2-3, 2023",
    location: "MATRADE Exhibition Centre",
    description: "Participated in Malaysia's premier motorcycle festival with our collection of vintage Yamaha models.",
    image: "/assets/events/kl-festival.jpg",
    type: "past",
    category: "festival",
    highlights: [
      "Largest motorcycle event in Malaysia",
      "Featured 8 restored bikes",
      "Media coverage in major outlets",
      "15,000+ visitors"
    ],
    ourRole: "Exhibitor",
    featured: true,
    galleryCount: 67,
    externalLink: "https://klbikefestival.com",
    status: "attended"
  },
  {
    id: 6,
    title: "Johor Vintage Ride 2023",
    date: "August 20, 2023",
    location: "Johor Bahru to Desaru",
    description: "Joined the scenic coastal ride with vintage motorcycle enthusiasts from Singapore and Malaysia.",
    image: "/assets/events/johor-ride.jpg",
    type: "past",
    category: "ride",
    highlights: [
      "150km coastal ride",
      "Cross-border participation",
      "Charity fundraising component",
      "Great networking opportunity"
    ],
    ourRole: "Participant",
    featured: false,
    galleryCount: 38,
    externalLink: "",
    status: "attended"
  },
  {
    id: 7,
    title: "Motorcycle Restoration Seminar 2023",
    date: "June 10, 2023",
    location: "UTM Skudai",
    description: "Invited as guest speaker to share vintage motorcycle restoration techniques with engineering students.",
    image: "/assets/events/seminar.jpg",
    type: "past",
    category: "education",
    highlights: [
      "Guest speaker engagement",
      "Student workshop session",
      "Live restoration demo",
      "University collaboration"
    ],
    ourRole: "Guest Speaker",
    featured: false,
    galleryCount: 24,
    externalLink: "",
    status: "attended"
  },
];