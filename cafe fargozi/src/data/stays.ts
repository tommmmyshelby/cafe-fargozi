// src/data/stays.ts

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
}

export interface StayType {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export const stayAmenities: Amenity[] = [
  {
    id: "wifi",
    name: "High-Speed WiFi",
    icon: "📶",
    description: "Unlimited 5G-ready connectivity across all residential units, specifically optimized for academic research and high-definition streaming.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000"
  },
  {
    id: "desks",
    name: "Study Desks",
    icon: "📚",
    description: "Ergonomic workstations provided in every unit, designed to remove the logistical burdens of household management for students.",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1000"
  },
  {
    id: "security",
    name: "CCTV Security",
    icon: "🔒",
    description: "24/7 advanced surveillance and monitoring systems. A priority safety architecture making us a trusted choice for parents.",
    image: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=1000"
  },
  {
    id: "common",
    name: "Common Interaction Areas",
    icon: "🛋️",
    description: "Unlike traditional PGs, we emphasize social hubs that foster a supportive community among residents.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaadeff171?q=80&w=1000"
  },
  {
    id: "furnished",
    name: "Fully Furnished",
    icon: "🏠",
    description: "Hassle-free living solutions. Every unit is ready-to-move-in with premium bedding, storage, and essential utilities.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000"
  },
  {
    id: "support",
    name: "On-site Staff Support",
    icon: "👤",
    description: "Professional on-site management team available 24/7 to ensure maintenance and operational integrity.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000"
  }
];

// ADD THIS EXPORT BACK IN (Fixes Error 2)
export const stayTypes: StayType[] = [
  {
    id: "student",
    title: "Student-Centric Housing",
    description: "Designed for academic focus. Located directly opposite AKJM School, removing logistical burdens from students.",
    features: ["Study desks in every room", "Secure storage", "Proximity to educational hubs"],
  },
  {
    id: "traveler",
    title: "Traveler & Business Stays",
    description: "Hassle-free, fully furnished short-term stays for backpackers and professionals on the NH183 corridor.",
    features: ["Short-term flexibility", "Near Kadamapuzha Hospital", "Modern lifestyle amenities"],
  }
];