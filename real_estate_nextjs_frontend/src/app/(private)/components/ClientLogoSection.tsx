"use client";

export default function ClientLogoSection() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title (optional) */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Trusted by Leading Companies
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
