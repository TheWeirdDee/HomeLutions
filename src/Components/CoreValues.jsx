import trust from "../assets/trust.png";
 

const values = [
  {
    title: "Trustworthiness",
    description:
      "Building trust with clients by being transparent, honest, and reliable in all interactions, including respecting privacy.",
    icon: trust,
  },
  {
    title: "Professionalism",
    description:
      "Conducting all fixes with professionalism, including arriving on time, adhering to safety standards.",
    icon: trust,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Prioritizing the needs and preferences of customers and striving to exceed their expectations.",
    icon: trust,
  },
];


const CoreValues = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center"
          >
            <img
              src={value.icon}
              alt={value.title}
              className="mx-auto mb-4 w-20 h-20"
            />
            <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
            <p className="text-sm text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;