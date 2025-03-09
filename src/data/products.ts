
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    description: "The most advanced iPhone ever with a powerful A17 Pro chip, titanium design, and an enhanced camera system.",
    price: 999,
    category: "Smartphones",
    images: [
      "https://images.unsplash.com/photo-1694588708141-0071d3fca40d?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1695048133142-1a20484bce71?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1695048132819-76cb7106f98a?q=80&w=2940&auto=format&fit=crop"
    ],
    features: [
      "A17 Pro chip with 6-core CPU",
      "48MP main camera with Photonic Engine",
      "Titanium design, lightest Pro ever",
      "Action mode for smooth, steady handheld videos",
      "All-day battery life with up to 29 hours video playback"
    ]
  },
  {
    id: 2,
    name: "MacBook Pro 16\"",
    description: "Supercharged by M3 Pro or M3 Max. Built for AI workflows with a stunning Liquid Retina XDR display.",
    price: 1999,
    category: "Laptops",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2952&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=2874&auto=format&fit=crop"
    ],
    features: [
      "Apple M3 Pro or M3 Max chip",
      "16-inch Liquid Retina XDR display",
      "Up to 36 hours of battery life",
      "Up to 128GB unified memory",
      "Up to 8TB SSD storage"
    ]
  },
  {
    id: 3,
    name: "iPad Pro",
    description: "The ultimate iPad experience with the M2 chip, 12.9-inch Liquid Retina XDR display, and Apple Pencil hover.",
    price: 799,
    category: "Tablets",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2944&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557825835-70d97c4aa567?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569070299509-88da59123f98?q=80&w=2940&auto=format&fit=crop"
    ],
    features: [
      "M2 chip with 8-core CPU and 10-core GPU",
      "12.9-inch Liquid Retina XDR display",
      "Ultra Wide front camera with Center Stage",
      "Compatible with Apple Pencil and Magic Keyboard",
      "All-day battery life"
    ]
  },
  {
    id: 4,
    name: "AirPods Pro",
    description: "Active Noise Cancellation, Transparency mode, and Adaptive Audio in a lightweight, in-ear design.",
    price: 249,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1588156979401-db3dc31817cb?q=80&w=2942&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592921870789-04563d55041c?q=80&w=2874&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?q=80&w=2942&auto=format&fit=crop"
    ],
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Adaptive Audio and Conversation Awareness",
      "Personalized Spatial Audio",
      "Up to 6 hours of listening time"
    ]
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    description: "More powerful than ever with the new S9 chip, a brighter display, and carbon neutral options.",
    price: 399,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2864&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=2864&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434494619865-7679fffb3365?q=80&w=2880&auto=format&fit=crop"
    ],
    features: [
      "S9 SiP with 64-bit dual-core processor",
      "Always-On Retina LTPO OLED display",
      "Blood oxygen and ECG apps",
      "Crash Detection and Fall Detection",
      "Water resistant to 50 meters"
    ]
  },
  {
    id: 6,
    name: "HomePod mini",
    description: "Room-filling sound in a compact speaker with Siri and smart home capabilities.",
    price: 99,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1614111345871-88c460899dc7?q=80&w=2829&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617175581263-bc0f059cce33?q=80&w=2948&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=2940&auto=format&fit=crop"
    ],
    features: [
      "Full-range driver and dual passive radiators",
      "Computational audio for optimal sound",
      "Four-microphone design for Siri",
      "Multiroom audio with AirPlay 2",
      "Smart home hub with Thread and Matter support"
    ]
  },
  {
    id: 7,
    name: "Magic Keyboard",
    description: "A wireless keyboard with a built-in trackpad and floating cantilever design for iPad Pro.",
    price: 299,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1589739900843-a2270094d54d?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613398774227-db844371724f?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519219788971-8d9797e0928e?q=80&w=2940&auto=format&fit=crop"
    ],
    features: [
      "Full-size, backlit keys with scissor mechanism",
      "Floating cantilever design",
      "Trackpad for Multi-Touch gestures",
      "USB-C port for charging",
      "Front and back protection for iPad"
    ]
  },
  {
    id: 8,
    name: "Studio Display",
    description: "A 27-inch 5K Retina display with an A13 Bionic chip, 12MP Ultra Wide camera, and studio-quality mics.",
    price: 1599,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642702821-c8e775f4aa8a?q=80&w=2942&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2942&auto=format&fit=crop"
    ],
    features: [
      "27-inch 5K Retina display",
      "A13 Bionic chip for Center Stage and Spatial Audio",
      "12MP Ultra Wide camera with Center Stage",
      "Studio-quality three-mic array",
      "Six-speaker sound system with Spatial Audio"
    ]
  }
];
