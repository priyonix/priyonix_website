import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Industry-Driven Curriculum",
      description:
        "Our courses are designed with direct input from industry experts to ensure relevance and applicability.",
    },
    {
      title: "Experienced Mentors & Trainers",
      description:
        "Learn from professionals with years of real-world experience in their respective fields.",
    },
    {
      title: "Project-Based Learning",
      description:
        "Hands-on experience through real projects that build your portfolio and confidence.",
    },
    {
      title: "End-to-End Career Support",
      description:
        "From skill development to job placement, we support you throughout your career journey.",
    },
    {
      title: "A Community of Innovators",
      description:
        "Join a thriving community of learners, mentors, and industry professionals.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Priyonix?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the reasons that make us the preferred choice for Students and Professionals
            Aiming to Accelerate their Careers.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
                {index + 1}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
