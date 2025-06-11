import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "What handyman services do you offer?",
    answer: "We cover plumbing, electrical work, furniture assembly, painting, minor renovations, and general maintenance.",
  },
  {
    question: "How quickly can you arrive?",
    answer: "We offer same-day and next-day services depending on availability and location.",
  },
  {
    question: "Is there a minimum charge?",
    answer: "Yes, we have a one-hour minimum service charge. Pricing varies based on task complexity.",
  },
  {
    question: "Are your workers certified?",
    answer: "All our handymen are trained professionals and fully insured for your peace of mind.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [questionInput, setQuestionInput] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your question was submitted: "${questionInput}"`);
    setQuestionInput('');
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-6 playfair text-lg">
            Answers to some common questions about our handyman services. We’re here to help you feel confident.
          </p>

          <p className="text-md font-medium text-gray-700 mb-2">Can’t locate the answers you need?</p>
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full border border-gray-400 rounded-md p-3 text-sm resize-none focus:outline-none focus:border-blue-500 mb-4"
              rows="4"
              placeholder="Ask your question here..."
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-gray-900 to-blue-500 hover:from-blue-800 hover:to-blue-900 text-white px-5 py-2 rounded hover:bg-blue-100 transition chloe text-xl"
            >
              Submit Question
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 playfair">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaMinus className="text-gray-500" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 text-md">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;