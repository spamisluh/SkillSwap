import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Palette, PenTool, Star, Users, Shield, Sparkles } from "lucide-react";
import { useUser } from "../UserContext";

export function LandingPage() {
  const { user } = useUser();
  const navigate = useNavigate();
  const categories = [
    { name: "Tutoring", icon: BookOpen, color: "from-[#ffb3c6] to-[#ffd4e5]", link: "/browse" },
    { name: "Design", icon: Palette, color: "from-[#c9a0dc] to-[#e5d4f0]", link: "/browse" },
    { name: "Writing", icon: PenTool, color: "from-[#ffd4a3] to-[#ffe8c2]", link: "/browse" },
    { name: "Programming", icon: Star, color: "from-[#b4d4ff] to-[#d4e8ff]", link: "/browse" },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student",
      text: "I exchanged web design help for calculus tutoring. Best decision ever!",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Art Major",
      text: "Made ₱3,000 last month doing graphic design for fellow students. Love this platform!",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "English Literature Student",
      text: "The barter system is genius. I've improved my skills while helping others.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fef9fc] to-[#ffe5f0]">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#ffd4e5]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffb3c6] to-[#ffd4e5] flex items-center justify-center">
                <span className="text-white font-semibold">SS</span>
              </div>
              <span className="text-xl font-semibold text-[#2d2d2d]">SkillSwap</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/browse"
                className="text-[#6b6b6b] hover:text-[#ffb3c6] transition-colors"
              >
                Browse Services
              </Link>
              <button
                onClick={() => user ? navigate("/dashboard") : navigate("/login")}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ffb3c6] to-[#ffd4e5] text-[#2d2d2d] hover:shadow-lg transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#ffd4e5] mb-6">
            <Sparkles className="w-4 h-4 text-[#ffb3c6]" />
            <span className="text-sm text-[#6b6b6b]">The Future of Peer Learning</span>
          </div>
          <h1 className="text-6xl font-bold text-[#2d2d2d] mb-6 leading-tight">
            Exchange Skills,
            <br />
            <span className="bg-gradient-to-r from-[#ffb3c6] to-[#c9a0dc] bg-clip-text text-transparent">
              Earn & Grow Together
            </span>
          </h1>
          <p className="text-xl text-[#6b6b6b] mb-10 leading-relaxed">
            Connect with fellow students to trade skills, offer services, and build your expertise.
            <br />
            Get paid or barter — the choice is yours.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/browse"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#ffb3c6] to-[#ffd4e5] text-[#2d2d2d] hover:shadow-xl transition-all flex items-center gap-2"
            >
              Find a Service
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => user ? navigate("/dashboard") : navigate("/login")}
              className="px-8 py-4 rounded-full bg-white border-2 border-[#ffd4e5] text-[#2d2d2d] hover:bg-[#fef9fc] transition-all"
            >
              Offer a Skill
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-20">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-[#ffd4e5] hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d2d2d]">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-[#ffd4e5]">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ffb3c6] to-[#ffd4e5] flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#2d2d2d] mb-3">Trusted Community</h3>
            <p className="text-[#6b6b6b] leading-relaxed">
              Verified students with ratings and reviews to ensure quality exchanges.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-[#ffd4e5]">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c9a0dc] to-[#e5d4f0] flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#2d2d2d] mb-3">Secure Payments</h3>
            <p className="text-[#6b6b6b] leading-relaxed">
              Safe and secure payment processing for paid services.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-[#ffd4e5]">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ffd4a3] to-[#ffe8c2] flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#2d2d2d] mb-3">Flexible Exchange</h3>
            <p className="text-[#6b6b6b] leading-relaxed">
              Choose between paid services or skill-for-skill barter system.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold text-center text-[#2d2d2d] mb-12">
          What Students Are Saying
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-[#ffd4e5]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ffd4a3] text-[#ffd4a3]" />
                ))}
              </div>
              <p className="text-[#2d2d2d] mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-[#2d2d2d]">{testimonial.name}</p>
                <p className="text-sm text-[#6b6b6b]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#ffd4e5] bg-white/60 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffb3c6] to-[#ffd4e5] flex items-center justify-center">
                <span className="text-white font-semibold">SS</span>
              </div>
              <span className="text-lg font-semibold text-[#2d2d2d]">SkillSwap</span>
            </div>
            <p className="text-sm text-[#6b6b6b]">
              © 2026 SkillSwap. Empowering students to learn and grow together.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
