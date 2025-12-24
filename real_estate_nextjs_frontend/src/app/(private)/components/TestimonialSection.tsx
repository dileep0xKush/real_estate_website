"use client";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Michael Papirov",
      role: "Customer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum.",
    },
    {
      name: "Josh Rossi",
      role: "Manager",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80",
      text:
        "Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.",
    },
    {
      name: "Daniel Greem",
      role: "Customer",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque odio.",
    },
    {
      name: "John Doe",
      role: "Manager",
      img: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&q=80",
      text:
        "Excepturi facere magnam illum, at accusantium doloremque odio.",
    },
    {
      name: "Michael Papirov",
      role: "Customer",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300&q=80",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 mt-2">
            Real feedback from our satisfied customers
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[340px] bg-white rounded-xl shadow hover:shadow-xl transition flex-shrink-0 p-6"
              >
                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  “{item.text}”
                </p>

                {/* Client */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
