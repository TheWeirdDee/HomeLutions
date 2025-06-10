import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 8000, suffix: "+", label: "Homes helped" },
  { value: 250, suffix: "m", label: "Revenue gained" },
  { value: 600, suffix: "+", label: "Team members" },
  { value: 9500, suffix: "+", label: "Successful projects" },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-blue-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="flex flex-wrap justify-center gap-6 bg-blue-100 py-8 px-4 rounded-lg shadow-sm"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-40 sm:w-48 md:w-56 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-900">
                {inView ? (
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                ) : (
                  <>0{stat.suffix}</>
                )}
              </h2>
              <p className="text-sm text-green-800 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
