import React from "react";
import handyman from "../assets/Dashimgg.png"; 
import { CheckCircle } from "lucide-react";

const WhoWeAre = () => {


  

  return (
    <section className="bg-white text-black px-6 py-12 md:px-16 relative overflow-hidden">
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* Left: Mascot + Main Text */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img
              src={handyman}
              alt="Handyman mascot"
              className="w-24 h-auto"
            />
            <h2 className="text-3xl font-bold text-black">Who We Are</h2>
          </div>
          <p className="text-black text-lg">
            We are a passionate team dedicated to providing reliable, top-quality
            home services that make your life easier.
          </p>
          <p className="text-black">
            With a focus on professionalism, trust, and customer satisfaction, we
            connect you with skilled experts to get the job done right — every
            time.
          </p>
          <p className="text-black">
            With a focus on professionalism, trust, and customer satisfaction, we
            connect you with skilled experts to get the job done right — every
            time.
          </p>

          <button className="bg-blue-950 hover:bg-gray-900 transition px-6 py-2 text-white rounded-lg w-fit mt-4">
            Book a Service
          </button>
        </div>

        </div>
        
         
 
    </section>
  );
};

export default WhoWeAre;
