/*
  PRODUCT DATA
  ------------
  Add a new product object to the array below.
  The product card, price, old price, badge, category and 3-image
  detail slider will automatically appear on the website.

  Required:
  id, name, category, price, images, description

  Optional:
  oldPrice, badge, sku, featured, serviceAvailable, features
*/

import laptopFront from "../assets/laptop/ChatGPT Image Sep 12, 2026, 05_41_53 PM.png";
import laptopSide from "../assets/laptop/ChatGPT Image Sep 12, 2026, 05_42_10 PM.png";
import laptopDetail from "../assets/laptop/ChatGPT Image Sep 12, 2026, 05_42_34 PM.png";

import printerOne from "../assets/Printer/WhatsApp Image 2026-09-12 at 5.28.24 PM.jpeg";
import printerTwo from "../assets/Printer/WhatsApp Image 2026-09-12 at 5.28.24 PM (1).jpeg";
import printerThree from "../assets/Printer/WhatsApp Image 2026-09-12 at 5.28.24 PM (2).jpeg";

import cctvOne from "../assets/cctv/HiLook CCTV Security Camera Kit Layout.png";
import cctvTwo from "../assets/cctv/WhatsApp Image 2026-09-12 at 5.28.24 PM.jpeg";
import cctvThree from "../assets/cctv/WhatsApp Image 2026-09-12 at 5.28.24 PM (1).jpeg";

import networkOne from "../assets/Networking/network_solution.jpg";
import networkTwo from "../assets/Networking/photo-1544197150-b99a580bb7a8.avif";
import networkThree from "../assets/Networking/photo-1558494949-ef010cbdcc31.avif";

export const products = [
  {
    id: "COMP-001",
    name: "HP 15 (2026), AMD Ryzen 3 Quad Core 7335U ",
    category: "Computers",
    price: 47700,
    oldPrice: 55000,
    badge: "New",
    sku: "TN-LAP-001",
    featured: true,
    serviceAvailable: true,
    images: [
      laptopSide,
      laptopFront,
      laptopDetail
    ],
    description:
      "AMD Ryzen 3 7335U Quad-Core processor, 8 GB DDR5 RAM, and a fast 512 GB SSD",
    features: [
      "Display: 15.6-inch",
      "Weight: Approx. 1.5 kg",
      "Colour: Turbo Silver",
      "Ideal for: Office work, students, browsing, online classes, coding, and everyday use"
    ]
  },
  {
    id: "ACC-001",
    name: "Wireless Keyboard & Mouse",
    category: "Accessories",
    price: 1199,
    oldPrice: 1599,
    badge: "Sale",
    sku: "TN-ACC-003",
    featured: true,
    serviceAvailable: false,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1000&q=85"
    ],
    description:
      "Clean wireless desk setup with comfortable typing and responsive mouse control.",
    features: [
      "Wireless connection",
      "Comfortable key layout",
      "Precise optical mouse",
      "Suitable for office and home"
    ]
  },
  {
    id: "ACC-002",
    name: "24-inch LED Monitor",
    category: "Accessories",
    price: 8999,
    oldPrice: 9999,
    badge: "Popular",
    sku: "TN-MON-004",
    featured: true,
    serviceAvailable: true,
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=1000&q=85"
    ],
    description:
      "Sharp and comfortable display for workstations, CCTV monitoring, study and entertainment.",
    features: [
      "24-inch Full HD panel",
      "Slim bezel design",
      "HDMI connectivity",
      "Good for CCTV viewing"
    ]
  },
  {
    id: "CCTV-001",
    name: "CP Plus 2.4MP 4 Channel DVR, 2.4MP 4 Bullet Cameras",
    category: "CCTV",
    price: 19999,
    oldPrice: 25999,
    badge: "Best Seller",
    sku: "TN-CCTV-005",
    featured: true,
    serviceAvailable: true,
    images: [
      cctvOne,
      cctvTwo,
      cctvThree
    ],
    description:
      "The cameras feature night vision, Crystal IR LEDs, and motion detection, allowing reliable surveillance during both daytime and low-light conditions.",
    features: [
      "4 × 2.4MP Bullet CCTV Cameras",
      "Built-in Microphone & Audio Recording",
      "Night Vision",
      "Crystal IR LEDs"
    ]
  },
  {
    id: "NET-001",
    name: "Cat6 Network Cable 105m",
    category: "Networking",
    price: 4499,
    oldPrice: 5499,
    badge: "Popular",
    sku: "TN-NET-009",
    featured: false,
    serviceAvailable: true,
    images: [
      networkOne,
      networkTwo,
      networkThree
    ],
    description:
      "Structured networking cable for office networks, CCTV installations and reliable data connections.",
    features: [
      "Cat6 network cable",
      "Long 305m roll",
      "Suitable for CCTV",
      "Installation service available"
    ]
  },
  {
    id: "PRN-001",
    name: "Canon PIXMA MegaTank G3010 All-in-One Wireless Ink Tank Colour Printer",
    category: "Printer",
    price: 13999,
    oldPrice: 15499,
    badge: "Recommended",
    sku: "TN-PRN-010",
    featured: false,
    serviceAvailable: true,
    images: [
      printerOne,
      printerTwo,
      printerThree
    ],
    description:
      "The Canon PIXMA MegaTank G3010 is an efficient All-in-One Wireless Ink Tank Colour Printer designed for home, office, and small-business printing need.",
    features: [
      "Functions: Print, Scan & Copy",
      "Print Type: Colour & Black-and-White",
      "Ink System: Refillable MegaTank Ink Tank",
      "Connectivity: Wireless / Wi-Fi"
    ]
  },
  {
    id: "SVC-001",
    name: "Computer Cleaning & Service",
    category: "Services",
    price: 299,
    badge: "Service",
    sku: "TN-SVC-011",
    featured: false,
    serviceAvailable: true,
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=85"
    ],
    description:
      "Basic computer cleaning, inspection and performance service for desktops and laptops.",
    features: [
      "Dust cleaning",
      "Hardware inspection",
      "Performance check",
      "Service guidance"
    ]
  },
  {
    id: "SVC-002",
    name: "CCTV Installation & Setup",
    category: "Services",
    price: 1499,
    badge: "Service",
    sku: "TN-SVC-012",
    featured: false,
    serviceAvailable: true,
    images: [
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1580982327559-c1202864eb14?auto=format&fit=crop&w=1000&q=85"
    ],
    description:
      "Professional CCTV camera mounting, DVR setup, cable routing and basic remote-view configuration.",
    features: [
      "Camera mounting",
      "DVR setup",
      "Cable routing",
      "Mobile viewing setup"
    ]
  }
];

export const categories = [
  "All",
  "Computers",
  "CCTV",
  "Accessories",
  "Networking",
  "Printer",
  "Services"
];
