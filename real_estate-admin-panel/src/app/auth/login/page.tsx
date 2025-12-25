export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left side — Image / Branding */}
      <div className="relative hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80"
          alt="Real Estate"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-3xl font-extrabold tracking-wide">
            RealEstate Admin
          </h1>
          <p className="text-gray-200 mt-1">
            Manage properties, clients & analytics in one place
          </p>
        </div>
      </div>

      {/* Right side — Login Form */}
      <div className="flex items-center justify-center bg-gray-50">
        <form className="bg-white shadow-xl rounded-xl p-8 w-[380px] space-y-5 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">Welcome back 👋</h2>
          <p className="text-sm text-gray-500 -mt-2">
            Sign in to access your admin dashboard
          </p>

          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full mt-1 border rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 border rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition">
            Login
          </button>

          <div className="text-center text-sm">
            Don’t have an account?{" "}
            <a href="/auth/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
