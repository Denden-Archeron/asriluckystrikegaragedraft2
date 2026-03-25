import { AttendedEvent } from './eventTypes';

export const attendedEvents: AttendedEvent[] = [
  {
    id: 1,
    title: "RD Durian Weekend 2026",
    date: "January 11, 2026",
    location: "KG. SEPERI, JELEBU, N.S",
    description: "Ride and gathering of RD350LC enthusiasts amidst the durian orchards of Jelebu.",
    image: "/assets/events/RD Durian Weekend/RD Durian Weekend1.jpeg",
    type: "recent",
    category: "ride",
    highlights: [
      "Scenic ride through durian orchards",
      "Gourmet durian tasting session",
      "Various RD350LC models",
      "Networking with fellow enthusiasts"
    ],
    ourRole: "Participant",
    featured: true,
    galleryCount: 17,
    externalLink: "https://www.facebook.com/OfficialRDMembersMalaysia/",
    status: "attended"
  },
  {
    id: 2,
    title: "RD MEMBERS MALAYSIA",
    date: "September 5, 2025",
    location: "KEDA RESORT AND HOLIDAYS SDN BHD, KG. BENDANG MAN, 08200 SIK, KEDAH",
    description: "13th Annual Gathering of RD350LC Enthusiasts in Malaysia.",
    image: "/assets/events/RDMEMBERS.png",
    type: "recent",
    category: "exhibition",
    highlights: [
      "Displayed 5 fully restored vintage bikes",
      "Networked with international collectors",
      "Featured in Vintage Bike Magazine",
      "Over 3,000 visitors to our booth"
    ],
    ourRole: "Participant",
    featured: true,
    galleryCount: 45,
    externalLink: "https://www.facebook.com/OfficialRDMembersMalaysia/",
    status: "attended"
  },
];