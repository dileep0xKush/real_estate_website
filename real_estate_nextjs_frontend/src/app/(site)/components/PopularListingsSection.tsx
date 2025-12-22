import Link from "next/link";

export default function PopularListingsSection() {
  const listings = [
    {
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
      label: "For Sale",
      labelColor: "bg-red-600",
      title: "Amazing oceanfront apartment",
      address: "Drive Street, Los Angeles, US",
      price: "$1,500",
      meta: "4 bds · 4 ba · 2500 Sqft",
    },
    {
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      label: "For Rent",
      labelColor: "bg-blue-600",
      title: "Family Condo",
      address: "Louis, Missouri, US",
      price: "$2,700",
      meta: "6 bds · 8 ba · 2600 Sqft",
    },
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      label: "New",
      labelColor: "bg-yellow-500",
      title: "Guaranteed modern home",
      address: "Avenue C, New York, US",
      price: "$1,750",
      meta: "8 bds · 8 ba · 3000 Sqft",
    },
    {
      img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
      label: "For Rent",
      labelColor: "bg-blue-600",
      title: "Family home for sale",
      address: "Sacramento, Chicago, US",
      price: "$1,400",
      meta: "2 bds · 2 ba · 2200 Sqft",
    },
    {
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      label: "New",
      labelColor: "bg-yellow-500",
      title: "Oceanview luxury apartment",
      address: "53 W 88th St, Dallas, US",
      price: "$1,750",
      meta: "6 bds · 6 ba · 2700 Sqft",
    },
    {
      img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      label: "For Sale",
      labelColor: "bg-red-600",
      title: "Luxury home for sale",
      address: "365 Webber Street, Washington",
      price: "$1,800",
      meta: "5 bds · 7 ba · 2800 Sqft",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Popular Listings
          </h2>
          <p className="text-gray-500 mt-2">
            Duis aute irure dolor in reprehed in volupted velit esse dolore
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <Link href="/property">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                </Link>
                <span
                  className={`absolute top-4 left-4 ${item.labelColor} text-white text-xs font-semibold px-3 py-1 rounded`}
                >
                  {item.label}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  <Link href="/property" className="hover:text-blue-600">
                    {item.title}
                  </Link>
                </h3>

                <p className="text-sm text-gray-500 mb-3">{item.address}</p>

                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold text-lg">
                    {item.price}
                  </span>
                  <span className="text-sm text-gray-500">{item.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All */}
        <div className="text-center mt-12">
          <Link
            href="/listing"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-900 transition"
          >
            Browse All
          </Link>
        </div>
      </div>
    </section>
  );
}
