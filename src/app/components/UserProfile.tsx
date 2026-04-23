import { Link, useParams } from "react-router-dom";
import { Star, MapPin, Calendar, Shield, ExternalLink, MessageSquare } from "lucide-react";
import { useUser } from "../UserContext";

export function UserProfile() {
  const { userId } = useParams();
  const { user } = useUser();

  // If viewing own profile, show info from context
  let profile;
  if (userId === "me" && user) {
    profile = {
      name: user.email.split("@")[0],
      avatar: user.email[0]?.toUpperCase() ?? "U",
      role: "Student",
      university: "",
      location: "",
      joinDate: "",
      verified: false,
      rating: 0,
      totalReviews: 0,
      completedServices: 0,
      bio: "",
      skills: [],
      portfolio: [],
    };
  } else {
    profile = {
      name: "Alex Chen",
      avatar: "AC",
      role: "Mathematics Major",
      university: "Batangas State University",
      location: "Manila, Philippines",
      joinDate: "September 2024",
      verified: true,
      rating: 4.9,
      totalReviews: 24,
      completedServices: 32,
      bio: "Passionate about mathematics and helping fellow students succeed in their STEM courses. I believe in breaking down complex problems into simple steps. Whether you're struggling with derivatives or probability, I'm here to help you ace your exams!",
      skills: [
        { name: "Calculus", level: "Expert" },
        { name: "Statistics", level: "Expert" },
        { name: "Linear Algebra", level: "Advanced" },
        { name: "Probability", level: "Advanced" },
        { name: "Differential Equations", level: "Intermediate" },
      ],
      portfolio: [
        { title: "Calculus Study Materials", tech: "Comprehensive Notes", image: "📊" },
        { title: "Statistics Problem Sets", tech: "Practice Exams", image: "📈" },
        { title: "Math Video Tutorials", tech: "Step-by-Step", image: "🎓" },
      ],
    };
  }

  const services = [
    {
      id: 1,
      title: "Calculus & Statistics Tutoring",
      price: 80,
      rating: 4.9,
      reviews: 24,
    },
    {
      id: 2,
      title: "Linear Algebra Help",
      price: 90,
      rating: 5.0,
      reviews: 8,
    },
  ];

  const reviews = [
    {
      author: "Sarah Kim",
      service: "Calculus Tutoring",
      rating: 5,
      date: "2 weeks ago",
      text: "Alex is an amazing tutor! Helped me pass my Calculus finals with an A. Highly recommend!",
    },
    {
      author: "Marcus Johnson",
      service: "Statistics Tutoring",
      rating: 5,
      date: "1 month ago",
      text: "Excellent teaching style. Explains complex statistical concepts in simple terms.",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="bg-white rounded-2xl border border-[#ffd4e5] p-8 mb-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#ffb3c6] to-[#c9a0dc] flex items-center justify-center text-white text-3xl font-semibold flex-shrink-0">
              {user.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-3xl font-semibold text-[#2d2d2d]">{user.name}</h1>
                    {user.verified && (
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#b4d4ff] to-[#d4e8ff] text-[#2d2d2d]">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm">Verified</span>
                      </div>
                    )}
                  </div>
                  <p className="text-lg text-[#6b6b6b] mb-2">{user.role}</p>
                  <div className="flex items-center gap-4 text-sm text-[#6b6b6b]">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {user.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-[#ffd4a3] text-[#ffd4a3]" />
                  <span className="font-semibold text-[#2d2d2d]">{user.rating}</span>
                  <span className="text-[#6b6b6b]">({user.totalReviews} reviews)</span>
                </div>
                <div className="h-4 w-px bg-[#ffd4e5]"></div>
                <div>
                  <span className="font-semibold text-[#2d2d2d]">{user.completedServices}</span>
                  <span className="text-[#6b6b6b]"> completed services</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              to="/messages"
              className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-[#ffb3c6] to-[#ffd4e5] text-[#2d2d2d] hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Send Message
            </Link>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href).then(() => alert('Profile link copied to clipboard!'))}
              className="px-6 py-3 rounded-full bg-white border-2 border-[#ffd4e5] text-[#2d2d2d] hover:bg-[#fef9fc] transition-all"
            >
              Share Profile
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#ffd4e5] p-8 mb-6">
          <h2 className="text-xl font-semibold text-[#2d2d2d] mb-4">About</h2>
          <p className="text-[#2d2d2d] leading-relaxed">{user.bio}</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#ffd4e5] p-8 mb-6">
          <h2 className="text-xl font-semibold text-[#2d2d2d] mb-6">Portfolio</h2>
          <div className="grid grid-cols-3 gap-4">
            {(profile.portfolio as {title: string; tech: string; image: string}[]).map((project, index: number) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-[#fef9fc] to-[#ffe5f0] border border-[#ffd4e5] hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="text-5xl mb-4">{project.image}</div>
                <h3 className="font-semibold text-[#2d2d2d] mb-2 group-hover:text-[#ffb3c6] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6b6b6b]">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#ffd4e5] p-8">
          <h2 className="text-xl font-semibold text-[#2d2d2d] mb-6">
            Reviews ({profile.totalReviews})
          </h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="pb-6 border-b border-[#ffd4e5] last:border-0 last:pb-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-[#2d2d2d]">{review.author}</p>
                    <p className="text-sm text-[#6b6b6b]">{review.service}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#ffd4a3] text-[#ffd4a3]" />
                        ))}
                      </div>
                      <span className="text-sm text-[#6b6b6b]">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#2d2d2d] leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-2xl border border-[#ffd4e5] p-6 mb-6">
          <h2 className="text-lg font-semibold text-[#2d2d2d] mb-4">Skills</h2>
          <div className="space-y-3">
            {(profile.skills as {name: string; level: string}[]).map((skill, index: number) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-[#2d2d2d]">{skill.name}</span>
                  <span className="text-xs text-[#6b6b6b]">{skill.level}</span>
                </div>
                <div className="h-2 rounded-full bg-[#fef9fc] overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-[#ffb3c6] to-[#ffd4e5]`}
                    style={{
                      width:
                        skill.level === "Expert"
                          ? "100%"
                          : skill.level === "Advanced"
                          ? "75%"
                          : "50%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#ffd4e5] p-6">
          <h2 className="text-lg font-semibold text-[#2d2d2d] mb-4">Active Services</h2>
          <div className="space-y-3">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="block p-4 rounded-xl bg-[#fef9fc] border border-[#ffd4e5] hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-[#2d2d2d] mb-2">{service.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#ffb3c6]">₱{service.price}/hr</span>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-3 h-3 fill-[#ffd4a3] text-[#ffd4a3]" />
                    <span className="text-[#2d2d2d]">{service.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
