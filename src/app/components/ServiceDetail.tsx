import { Link, useParams } from "react-router-dom";
import { Star, Clock, DollarSign, Repeat, Shield, MessageSquare, Calendar } from "lucide-react";

export function ServiceDetail() {
  const { id } = useParams();

  const service = {
    id: 1,
    title: "Calculus & Statistics Tutoring",
    provider: {
      name: "Alex Chen",
      avatar: "AC",
      rating: 4.9,
      totalReviews: 24,
      verified: true,
      responseTime: "2 hours",
      completionRate: "98%",
    },
    description:
      "I'm a Mathematics major with 3+ years of tutoring experience. I specialize in Calculus I-III, Statistics, and Probability. I've helped engineering, business, and science students ace their math courses. My approach is patient and step-by-step, making sure you understand the concepts, not just memorize formulas.",
    price: 80,
    barterAvailable: true,
    category: "Tutoring",
    rating: 4.9,
    totalReviews: 24,
    skills: ["Calculus", "Statistics", "Algebra", "Probability", "Linear Algebra"],
    availability: "Weekdays 4-8 PM, Weekends flexible",
    image: "📊",
  };

  const reviews = [
    {
      author: "Sarah Kim",
      rating: 5,
      date: "2 weeks ago",
      text: "Alex is an amazing tutor! Helped me pass my Calculus midterms with flying colors. Very patient and explains concepts clearly.",
    },
    {
      author: "Marcus Johnson",
      rating: 5,
      date: "1 month ago",
      text: "Excellent teaching style. Alex breaks down complex problems into simple steps. Went from failing to getting A's!",
    },
    {
      author: "Emily Chen",
      rating: 4,
      date: "1 month ago",
      text: "Great tutor, very knowledgeable. Sometimes moves a bit fast, but always willing to slow down and review.",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="bg-white rounded-2xl border border-[#ffd4e5] overflow-hidden mb-6">
          <div className="h-64 bg-gradient-to-br from-[#fef9fc] to-[#ffe5f0] flex items-center justify-center text-9xl">
            {service.image}
          </div>
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-[#ffb3c6] to-[#ffd4e5] text-[#2d2d2d] mb-3 inline-block">
                  {service.category}
                </span>
                <h1 className="text-3xl font-semibold text-[#2d2d2d] mb-2">
                  {service.title}
                </h1>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-[#ffd4a3] text-[#ffd4a3]" />
                    <span className="font-semibold text-[#2d2d2d]">{service.rating}</span>
                    <span className="text-[#6b6b6b]">({service.totalReviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-[#ffb3c6]" />
                  <span className="text-3xl font-semibold text-[#2d2d2d]">₱{service.price}</span>
                  <span className="text-[#6b6b6b]">/hour</span>
                </div>
                {service.barterAvailable && (
                  <div className="flex items-center justify-end gap-1 text-sm px-3 py-1 rounded-full bg-gradient-to-r from-[#c9a0dc] to-[#e5d4f0] text-[#2d2d2d]">
                    <Repeat className="w-4 h-4" />
                    Barter Available
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-[#ffd4e5] pt-6 mb-6">
              <h2 className="text-xl font-semibold text-[#2d2d2d] mb-3">About This Service</h2>
              <p className="text-[#2d2d2d] leading-relaxed mb-4">{service.description}</p>
            </div>

            <div className="border-t border-[#ffd4e5] pt-6 mb-6">
              <h2 className="text-xl font-semibold text-[#2d2d2d] mb-3">Skills Covered</h2>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-[#fef9fc] border border-[#ffd4e5] text-[#2d2d2d]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-[#ffd4e5] pt-6">
              <h2 className="text-xl font-semibold text-[#2d2d2d] mb-3">Availability</h2>
              <div className="flex items-center gap-2 text-[#2d2d2d]">
                <Clock className="w-5 h-5 text-[#ffb3c6]" />
                <span>{service.availability}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#ffd4e5] p-8">
          <h2 className="text-xl font-semibold text-[#2d2d2d] mb-6">Reviews ({service.totalReviews})</h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="pb-6 border-b border-[#ffd4e5] last:border-0 last:pb-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-[#2d2d2d]">{review.author}</p>
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
          <Link
            to={`/profile/${service.provider.name.toLowerCase().replace(" ", "-")}`}
            className="flex items-center gap-3 mb-6 group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffb3c6] to-[#c9a0dc] flex items-center justify-center text-white text-xl font-semibold">
              {service.provider.avatar}
            </div>
            <div>
              <p className="font-semibold text-[#2d2d2d] group-hover:text-[#ffb3c6] transition-colors">
                {service.provider.name}
              </p>
              {service.provider.verified && (
                <div className="flex items-center gap-1 mt-1">
                  <Shield className="w-4 h-4 text-[#b4d4ff]" />
                  <span className="text-sm text-[#6b6b6b]">Verified Student</span>
                </div>
              )}
            </div>
          </Link>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6b6b6b]">Rating</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-[#ffd4a3] text-[#ffd4a3]" />
                <span className="font-semibold text-[#2d2d2d]">{service.provider.rating}</span>
                <span className="text-sm text-[#6b6b6b]">({service.provider.totalReviews})</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6b6b6b]">Response Time</span>
              <span className="font-semibold text-[#2d2d2d]">{service.provider.responseTime}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6b6b6b]">Completion Rate</span>
              <span className="font-semibold text-[#2d2d2d]">{service.provider.completionRate}</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => alert('Service request sent! The provider will contact you soon.')}
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#ffb3c6] to-[#ffd4e5] text-[#2d2d2d] hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Request Service
            </button>
            <button
              onClick={() => alert('Skill exchange proposal sent! Describe what skill you can offer in exchange.')}
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#c9a0dc] to-[#e5d4f0] text-[#2d2d2d] hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Repeat className="w-5 h-5" />
              Propose Skill Exchange
            </button>
            <Link
              to="/messages"
              className="w-full px-6 py-3 rounded-full bg-white border-2 border-[#ffd4e5] text-[#2d2d2d] hover:bg-[#fef9fc] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Send Message
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#ffd4e5] p-6">
          <h3 className="font-semibold text-[#2d2d2d] mb-4">Safety Tips</h3>
          <ul className="space-y-2 text-sm text-[#6b6b6b]">
            <li className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-[#ffb3c6] mt-0.5 flex-shrink-0" />
              <span>Always communicate through SkillSwap messaging</span>
            </li>
            <li className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-[#ffb3c6] mt-0.5 flex-shrink-0" />
              <span>Meet in public places for in-person sessions</span>
            </li>
            <li className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-[#ffb3c6] mt-0.5 flex-shrink-0" />
              <span>Report any suspicious behavior immediately</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
