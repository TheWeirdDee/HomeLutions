import React from "react";

const testimonials = [
  {
    name: "Mehwish Devin",
    image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3nFGupGZ6y2O56us0L5VJNJ7eOjZtmzmXw&s.jpg",
    text: "Fantastic work! The repairs were quick and clean. Very professional.",
    highlighted: false,
  },
  {
    name: "Elizabeth Jeff",
    image: "https://t3.ftcdn.net/jpg/05/13/50/12/360_F_513501298_MSHd0MeF7V8bipNupeiKGzz1r7PB8AYf.jpg",
    text: "Door repair was spot on. Polite, on time, and fixed everything perfectly.",
    highlighted: true,
  },
  {
    name: "Danny Thomas",
    image: "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
    text: "They mounted my TV and fixed a leak in the same visit. Super efficient!",
    highlighted: false
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Section */}
        <div className="md:w-1/2">
           
          <div className="flex items-center space-x-1 mb-4">
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <span key={idx} className="text-yellow-400 text-xl">⭐</span>
              ))}
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 frunchy">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 mb-6 playfair text-lg">
            We take pride in delivering fast, reliable, and expert handyman
            services. But don’t just take our word for it—see what our happy
            customers have to say.
          </p>
          <button className="bg-gradient-to-r from-gray-900 to-blue-500 hover:from-blue-800 hover:to-blue-900 text-white px-6 py-3 rounded-md font-semibold shadow hover:shadow-lg transition font">
            View More
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-4 playfair text-md">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`flex items-start p-4 rounded-xl shadow ${
                t.highlighted
                  ? "bg-white border-l-4 border-blue-500"
                  : "bg-gray-50"
              }`}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{t.name}</h4>
                <p className="text-gray-500 text-sm mt-1">{t.text}</p>
              </div>
              <div className="ml-auto">
                <span className="text-blue-400 text-2xl font-bold leading-none">
                  {t.highlighted ? '“”' : '”'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;