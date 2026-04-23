import { Link, useNavigate } from "react-router-dom";
import { Plus, TrendingUp, Clock, CheckCircle, DollarSign, Repeat } from "lucide-react";
import { useUser } from "../UserContext";

export function Dashboard() {
  const { user } = useUser();
  const navigate = useNavigate();
  if (!user) {
    return (
      <div className="h-[calc(100vh-12rem)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#2d2d2d] mb-4">Login Required</h2>
          <p className="text-[#6b6b6b] mb-6">You need to login or create an account to access your dashboard.</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 rounded bg-[#ffb3c6] text-white font-semibold hover:bg-[#ff6b9d]"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-2 rounded border border-[#ffb3c6] text-[#ffb3c6] font-semibold hover:bg-[#ffb3c6] hover:text-white"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
  const activeServices = [
    {
      id: 1,
      title: "Calculus & Statistics Tutoring",
      type: "offered",
      status: "active",
      requests: 3,
      earnings: 1200,
    },
    {
      id: 2,
      title: "Filipino/Tagalog Tutoring",
      type: "requested",
      status: "in-progress",
      provider: "Maria Garcia",
      payment: "Barter",
    },
  ];

  const stats = [
    {
      label: "Total Earnings",
      value: "₱4,500",
      icon: DollarSign,
      color: "from-[#ffb3c6] to-[#ffd4e5]",
    },
    {
      label: "Barter Credits",
      value: "12",
      icon: Repeat,
      color: "from-[#c9a0dc] to-[#e5d4f0]",
    },
    {
      label: "Completed",
      value: "8",
      icon: CheckCircle,
      color: "from-[#b4d4ff] to-[#d4e8ff]",
    },
    {
      label: "In Progress",
      value: "3",
      icon: Clock,
      color: "from-[#ffd4a3] to-[#ffe8c2]",
    },
  ];

  const notifications = [
    {
      text: "New service request for React Tutoring",
      time: "2 hours ago",
      type: "request",
    },
    {
      text: "Maria accepted your Spanish practice request",
      time: "5 hours ago",
      type: "accepted",
    },
    {
      text: "Payment received: ₱400 from John Doe",
      time: "1 day ago",
      type: "payment",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-[#2d2d2d] mb-2">Welcome back!</h1>
          <p className="text-[#6b6b6b]">Here's what's happening with your services</p>
        </div>
        <Link
          to="/browse"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ffb3c6] to-[#ffd4e5] text-[#2d2d2d] hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Post New Service
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white border border-[#ffd4e5] hover:shadow-lg transition-all"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-[#6b6b6b] mb-1">{stat.label}</p>
            <p className="text-3xl font-semibold text-[#2d2d2d]">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="bg-white rounded-2xl border border-[#ffd4e5] p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[#2d2d2d]">Active Services</h2>
              <Link to="/browse" className="text-sm text-[#ffb3c6] hover:text-[#ff6b9d] transition-colors">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {activeServices.map((service) => (
                <Link
                  key={service.id}
                  to={`/service/${service.id}`}
                  className="block p-5 rounded-xl bg-[#fef9fc] border border-[#ffd4e5] hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-[#2d2d2d] mb-1">{service.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-white border border-[#ffd4e5] text-[#6b6b6b]">
                          {service.type === "offered" ? "Offering" : "Requesting"}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[#b4d4ff] to-[#d4e8ff] text-[#2d2d2d]">
                          {service.status}
                        </span>
                      </div>
                    </div>
                    {service.type === "offered" && (
                      <div className="text-right">
                        <p className="text-sm text-[#6b6b6b]">{service.requests} requests</p>
                        <p className="font-semibold text-[#ffb3c6]">₱{service.earnings}</p>
                      </div>
                    )}
                    {service.type === "requested" && (
                      <div className="text-right">
                        <p className="text-sm text-[#6b6b6b]">Provider</p>
                        <p className="font-semibold text-[#2d2d2d]">{service.provider}</p>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#ffd4e5] p-6 mt-6">
            <h2 className="text-xl font-semibold text-[#2d2d2d] mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/browse"
                className="p-4 rounded-xl bg-gradient-to-br from-[#ffb3c6] to-[#ffd4e5] text-[#2d2d2d] hover:shadow-lg transition-all text-center"
              >
                <Plus className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">Post New Service</p>
              </Link>
              <Link
                to="/browse"
                className="p-4 rounded-xl bg-gradient-to-br from-[#c9a0dc] to-[#e5d4f0] text-[#2d2d2d] hover:shadow-lg transition-all text-center"
              >
                <TrendingUp className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">Browse Skills</p>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl border border-[#ffd4e5] p-6">
            <h2 className="text-xl font-semibold text-[#2d2d2d] mb-6">Notifications</h2>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#fef9fc] border border-[#ffd4e5]"
                >
                  <p className="text-sm text-[#2d2d2d] mb-2">{notification.text}</p>
                  <p className="text-xs text-[#6b6b6b]">{notification.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
