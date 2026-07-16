export type Professional = {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  location: string;
  distance: number; // in km
  isVerified: boolean;
  avatarUrl: string;
  skills: string[];
};

export const MOCK_PROFESSIONALS: Professional[] = [
  {
    id: "p1",
    name: "Kwame Mensah",
    category: "Electrical",
    rating: 4.9,
    reviews: 128,
    hourlyRate: 50,
    location: "Accra, Ghana",
    distance: 2.4,
    isVerified: true,
    avatarUrl: "https://i.pravatar.cc/150?u=kwame",
    skills: ["Solar Installation", "Wiring", "Generator Repair"],
  },
  {
    id: "p2",
    name: "Aisha Bello",
    category: "Plumbing",
    rating: 4.7,
    reviews: 84,
    hourlyRate: 45,
    location: "Lagos, Nigeria",
    distance: 5.1,
    isVerified: true,
    avatarUrl: "https://i.pravatar.cc/150?u=aisha",
    skills: ["Pipe Fitting", "Water Heater", "Leak Detection"],
  },
  {
    id: "p3",
    name: "Sipho Ndlovu",
    category: "Carpentry",
    rating: 4.8,
    reviews: 215,
    hourlyRate: 55,
    location: "Johannesburg, SA",
    distance: 8.0,
    isVerified: true,
    avatarUrl: "https://i.pravatar.cc/150?u=sipho",
    skills: ["Cabinet Making", "Furniture Repair", "Roofing"],
  },
  {
    id: "p4",
    name: "Grace Omondi",
    category: "HVAC",
    rating: 5.0,
    reviews: 62,
    hourlyRate: 60,
    location: "Nairobi, Kenya",
    distance: 3.5,
    isVerified: true,
    avatarUrl: "https://i.pravatar.cc/150?u=grace",
    skills: ["AC Installation", "Refrigeration", "Maintenance"],
  },
];

export type ServiceCategory = {
  id: string;
  name: string;
  icon: string;
  count: number;
};

export const MOCK_CATEGORIES: ServiceCategory[] = [
  { id: "c1", name: "Electrical", icon: "⚡", count: 1250 },
  { id: "c2", name: "Plumbing", icon: "🚰", count: 850 },
  { id: "c3", name: "Carpentry", icon: "🪚", count: 620 },
  { id: "c4", name: "HVAC", icon: "❄️", count: 430 },
  { id: "c5", name: "Painting", icon: "🎨", count: 310 },
  { id: "c6", name: "Cleaning", icon: "🧹", count: 1540 },
];
