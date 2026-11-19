import { useState } from "react";

function Login() {
  const [error, setError] = useState<string>("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    // Clear out any previous error messages
    setError("");

    // I will make this call an actual backend later on
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const email = data.get("email") as string;
    const password = data.get("password") as string;

    // I'll add a proper backend check later on
    if (email === "mrbeast@gmail.com" && password === "pass123") {
      alert("You have entered the correct email");
    } else {
      setError("You have entered the wrong login details");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-slate-50 to-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg shadow-gray-200/60 p-8 md:p-10 border border-gray-100">
        {/* Logo / Blog name */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            <span className="text-blue-600">Simple</span>Space
          </h1>
          <p className="text-sm text-gray-500 mt-2">Sign in to your account</p>
        </div>

        {/* Login form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-colors text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Password field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-colors text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Remember me + forgot password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Remember me</span>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-sm shadow-blue-200 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 outline-none"
          >
            Sign in
          </button>
          {error && (
            <>
              <div className="w-full bg-red-200 text-red-500 border-red-800 border text-center p-4 rounded-2xl">
                {error}
              </div>
            </>
          )}
        </form>
        {/* Sign up link */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Don't have an account?{" "}
          <a
            href="#"
            className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
