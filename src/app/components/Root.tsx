import { Outlet, Link, useLocation } from "react-router-dom";
import { Bell, MessageSquare, User, Search } from "lucide-react";

export function Root() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  if (isLanding) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fef9fc] to-[#ffe5f0]">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#ffd4e5]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffb3c6] to-[#ffd4e5] flex items-center justify-center">
                <span className="text-white font-semibold">SS</span>
              </div>
              <span className="text-xl font-semibold text-[#2d2d2d]">SkillSwap</span>
            </Link>

            <div className="flex items-center gap-6">
              <Link
                to="/browse"
                className="text-[#6b6b6b] hover:text-[#ffb3c6] transition-colors flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Browse</span>
              </Link>
              <Link
                to="/dashboard"
                className="text-[#6b6b6b] hover:text-[#ffb3c6] transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/messages"
                className="relative text-[#6b6b6b] hover:text-[#ffb3c6] transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff6b9d] rounded-full"></span>
              </Link>
              <button
                onClick={() => alert('You have 2 new notifications')}
                className="relative text-[#6b6b6b] hover:text-[#ffb3c6] transition-colors"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff6b9d] rounded-full"></span>
              </button>
              <Link
                to="/profile/me"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ffb3c6] to-[#c9a0dc] flex items-center justify-center"
              >
                <User className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
