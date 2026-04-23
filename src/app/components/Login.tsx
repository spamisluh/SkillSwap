import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login({ onLogin }: { onLogin?: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Demo: Accept any non-empty credentials
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email }));
      onLogin?.();
      navigate("/dashboard");
    } else {
      setError("Please enter email and password");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <button type="submit" className="w-full bg-[#ffb3c6] text-white py-2 rounded font-semibold">Login</button>
        <div className="mt-4 text-sm">
          Don't have an account? <a href="/register" className="text-[#ff6b9d] underline">Register</a>
        </div>
      </form>
    </div>
  );
}
