import { useState } from "react";
import { Search, Send, Paperclip, MoreVertical, Star } from "lucide-react";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";

export function Messages() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState("");

  if (!user) {
    return (
      <div className="h-[calc(100vh-12rem)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#2d2d2d] mb-4">Login Required</h2>
          <p className="text-[#6b6b6b] mb-6">You need to login or create an account to view messages.</p>
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

  const conversations = [
    {
      id: 0,
      name: "Sarah Martinez",
      avatar: "SM",
      lastMessage: "That sounds perfect! When are you available?",
      time: "2m ago",
      unread: 2,
      online: true,
    },
    {
      id: 1,
      name: "Marcus Johnson",
      avatar: "MJ",
      lastMessage: "Thanks for the session today!",
      time: "1h ago",
      unread: 0,
      online: false,
    },
    {
      id: 2,
      name: "Emma Williams",
      avatar: "EW",
      lastMessage: "Can we reschedule to tomorrow?",
      time: "3h ago",
      unread: 1,
      online: true,
    },
  ];

  const messages = [
    {
      sender: "other",
      text: "Hi! I'm interested in your React tutoring service.",
      time: "10:30 AM",
    },
    {
      sender: "me",
      text: "Great to hear from you! I'd be happy to help. What specifically would you like to learn?",
      time: "10:32 AM",
    },
    {
      sender: "other",
      text: "I'm struggling with hooks and state management. Also want to learn about context API.",
      time: "10:35 AM",
    },
    {
      sender: "me",
      text: "Perfect! Those are essential topics. I usually do 1-hour sessions. We can start with hooks basics and work our way up to context.",
      time: "10:37 AM",
    },
    {
      sender: "other",
      text: "That sounds perfect! When are you available?",
      time: "10:40 AM",
    },
  ];

  return (
    <div className="h-[calc(100vh-12rem)]">
      <h1 className="text-3xl font-semibold text-[#2d2d2d] mb-6">Messages</h1>

      <div className="grid grid-cols-3 gap-6 h-full">
        <div className="bg-white rounded-2xl border border-[#ffd4e5] overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#ffd4e5]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-[#fef9fc] border border-[#ffd4e5] focus:outline-none focus:ring-2 focus:ring-[#ffb3c6] text-sm"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className={`p-4 border-b border-[#ffd4e5] cursor-pointer transition-all ${
                  selectedChat === conv.id ? "bg-[#fef9fc]" : "hover:bg-[#fef9fc]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ffb3c6] to-[#c9a0dc] flex items-center justify-center text-white font-semibold">
                      {conv.avatar}
                    </div>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#4ade80] border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-[#2d2d2d] truncate">{conv.name}</p>
                      <span className="text-xs text-[#6b6b6b] flex-shrink-0 ml-2">
                        {conv.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-[#6b6b6b] truncate">{conv.lastMessage}</p>
                      {conv.unread > 0 && (
                        <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#ffb3c6] to-[#ffd4e5] flex items-center justify-center text-xs text-[#2d2d2d] font-semibold flex-shrink-0 ml-2">
                          {conv.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 bg-white rounded-2xl border border-[#ffd4e5] overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#ffd4e5] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ffb3c6] to-[#c9a0dc] flex items-center justify-center text-white font-semibold">
                  {conversations[selectedChat].avatar}
                </div>
                {conversations[selectedChat].online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#4ade80] border-2 border-white rounded-full"></div>
                )}
              </div>
              <div>
                <p className="font-semibold text-[#2d2d2d]">
                  {conversations[selectedChat].name}
                </p>
                <p className="text-sm text-[#6b6b6b]">
                  {conversations[selectedChat].online ? "Active now" : "Offline"}
                </p>
              </div>
            </div>
            <button
              onClick={() => alert('More options: Block, Report, Archive')}
              className="p-2 hover:bg-[#fef9fc] rounded-full transition-colors"
            >
              <MoreVertical className="w-5 h-5 text-[#6b6b6b]" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-br from-white to-[#fef9fc]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] ${
                    msg.sender === "me"
                      ? "bg-gradient-to-r from-[#ffb3c6] to-[#ffd4e5] text-[#2d2d2d]"
                      : "bg-white border border-[#ffd4e5] text-[#2d2d2d]"
                  } rounded-2xl px-4 py-3`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.sender === "me" ? "text-[#2d2d2d]/70" : "text-[#6b6b6b]"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-[#ffd4e5]">
            <div className="flex items-center gap-3">
              <button
                onClick={() => alert('File attachment feature coming soon!')}
                className="p-2 hover:bg-[#fef9fc] rounded-full transition-colors"
              >
                <Paperclip className="w-5 h-5 text-[#6b6b6b]" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full bg-[#fef9fc] border border-[#ffd4e5] focus:outline-none focus:ring-2 focus:ring-[#ffb3c6]"
                onKeyPress={(e) => {
                  if (e.key === "Enter" && message.trim()) {
                    setMessage("");
                  }
                }}
              />
              <button
                onClick={() => message.trim() && setMessage("")}
                className="p-3 rounded-full bg-gradient-to-r from-[#ffb3c6] to-[#ffd4e5] text-[#2d2d2d] hover:shadow-lg transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
