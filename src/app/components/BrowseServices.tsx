import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Star, DollarSign, Repeat, BookOpen, Palette, PenTool, Code } from "lucide-react";

export function BrowseServices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");

  const categories = ["All", "Tutoring", "Design", "Writing", "Programming", "Editing", "Languages", "Engineering", "Science", "Business"];

  const services = [
    {
      id: 1,
      title: "Calculus & Statistics Tutoring",
      provider: "Alex Chen",
      rating: 4.9,
      reviews: 24,
      price: 80,
      barterAvailable: true,
      category: "Tutoring",
      verified: true,
      image: "📊",
    },
    {
      id: 2,
      title: "Logo Design & Social Media Graphics",
      provider: "Sarah Martinez",
      rating: 5.0,
      reviews: 18,
      price: 150,
      barterAvailable: true,
      category: "Design",
      verified: true,
      image: "🎨",
    },
    {
      id: 3,
      title: "Essay Editing & Proofreading",
      provider: "Emma Johnson",
      rating: 4.8,
      reviews: 31,
      price: 50,
      barterAvailable: false,
      category: "Editing",
      verified: true,
      image: "✏️",
    },
    {
      id: 4,
      title: "Filipino/Tagalog Tutoring",
      provider: "Maria Garcia",
      rating: 4.9,
      reviews: 42,
      price: 60,
      barterAvailable: true,
      category: "Languages",
      verified: true,
      image: "🇵🇭",
    },
    {
      id: 5,
      title: "AutoCAD Drawing & 3D Modeling",
      provider: "David Kim",
      rating: 4.7,
      reviews: 15,
      price: 120,
      barterAvailable: true,
      category: "Engineering",
      verified: true,
      image: "📐",
    },
    {
      id: 6,
      title: "Python & Data Analysis Help",
      provider: "Jordan Lee",
      rating: 5.0,
      reviews: 28,
      price: 100,
      barterAvailable: true,
      category: "Programming",
      verified: true,
      image: "🐍",
    },
    {
      id: 7,
      title: "Organic Chemistry Study Guide",
      provider: "Miguel Santos",
      rating: 4.8,
      reviews: 19,
      price: 90,
      barterAvailable: true,
      category: "Science",
      verified: true,
      image: "🧪",
    },
    {
      id: 8,
      title: "Business Plan Writing",
      provider: "Isabella Cruz",
      rating: 4.9,
      reviews: 22,
      price: 200,
      barterAvailable: true,
      category: "Business",
      verified: true,
      image: "💼",
    },
    {
      id: 9,
      title: "Web Development (HTML/CSS/JS)",
      provider: "Carlos Reyes",
      rating: 5.0,
      reviews: 35,
      price: 120,
      barterAvailable: true,
      category: "Programming",
      verified: true,
      image: "💻",
    },
    {
      id: 10,
      title: "Photography & Photo Editing",
      provider: "Ana Mendoza",
      rating: 4.7,
      reviews: 16,
      price: 100,
      barterAvailable: true,
      category: "Design",
      verified: true,
      image: "📷",
    },
    {
      id: 11,
      title: "Accounting & Financial Statements",
      provider: "Luis Tan",
      rating: 4.9,
      reviews: 27,
      price: 110,
      barterAvailable: false,
      category: "Business",
      verified: true,
      image: "📈",
    },
    {
      id: 12,
      title: "Physics Problem Solving",
      provider: "Sofia Ramos",
      rating: 5.0,
      reviews: 21,
      price: 85,
      barterAvailable: true,
      category: "Science",
      verified: true,
      image: "⚛️",
    },
    {
      id: 13,
      title: "Research Paper Writing",
      provider: "Marco Fernandez",
      rating: 4.8,
      reviews: 33,
      price: 150,
      barterAvailable: true,
      category: "Writing",
      verified: true,
      image: "📝",
    },
    {
      id: 14,
      title: "Java & C++ Programming",
      provider: "Kathy Lim",
      rating: 4.9,
      reviews: 29,
      price: 95,
      barterAvailable: true,
      category: "Programming",
      verified: true,
      image: "☕",
    },
    {
      id: 15,
      title: "Video Editing (Premiere/DaVinci)",
      provider: "Ryan Velasco",
      rating: 5.0,
      reviews: 14,
      price: 130,
      barterAvailable: true,
      category: "Design",
      verified: true,
      image: "🎬",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-[#2d2d2d] mb-2">Browse Services</h1>
        <p className="text-[#6b6b6b]">Discover skills and connect with talented students</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#ffd4e5] p-6 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b6b6b]" />
            <input
              type="text"
              placeholder="Search for services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-[#fef9fc] border border-[#ffd4e5] focus:outline-none focus:ring-2 focus:ring-[#ffb3c6] text-[#2d2d2d]"
            />
          </div>
          <button
            onClick={() => alert('Filter options would open here')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ffb3c6] to-[#ffd4e5] text-[#2d2d2d] hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-[#6b6b6b]">Category:</span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#ffb3c6] to-[#ffd4e5] text-[#2d2d2d]"
                    : "bg-white border border-[#ffd4e5] text-[#6b6b6b] hover:border-[#ffb3c6]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-[#6b6b6b]">Price:</span>
          <div className="flex gap-2">
            {["All", "Under ₱75", "₱75-₱125", "Over ₱125", "Barter Only"].map((filter) => (
              <button
                key={filter}
                onClick={() => setPriceFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  priceFilter === filter
                    ? "bg-gradient-to-r from-[#c9a0dc] to-[#e5d4f0] text-[#2d2d2d]"
                    : "bg-white border border-[#ffd4e5] text-[#6b6b6b] hover:border-[#c9a0dc]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/service/${service.id}`}
            className="group bg-white rounded-2xl border border-[#ffd4e5] overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="h-40 bg-gradient-to-br from-[#fef9fc] to-[#ffe5f0] flex items-center justify-center text-6xl">
              {service.image}
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-[#2d2d2d] mb-1 group-hover:text-[#ffb3c6] transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-[#6b6b6b]">
                      {service.provider}
                    </span>
                    {service.verified && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-[#b4d4ff] to-[#d4e8ff] text-[#2d2d2d]">
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-[#ffd4a3] text-[#ffd4a3]" />
                    <span className="text-sm font-semibold text-[#2d2d2d]">{service.rating}</span>
                    <span className="text-sm text-[#6b6b6b]">({service.reviews})</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-[#ffd4e5]">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#ffb3c6]" />
                  <span className="font-semibold text-[#2d2d2d]">₱{service.price}/hr</span>
                </div>
                {service.barterAvailable && (
                  <div className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[#c9a0dc] to-[#e5d4f0] text-[#2d2d2d]">
                    <Repeat className="w-3 h-3" />
                    Barter OK
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
