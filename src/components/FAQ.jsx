import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What Is Included With My Purchase Of Avada?",
    answer: "Avada includes premium website templates, a drag-and-drop builder, and lifetime updates.",
  },
  {
    question: "Are There Any Recurring Fees?",
    answer: "No, Avada is a one-time purchase with no recurring fees.",
  },
  {
    question: "Where Can I Get Support?",
    answer: "You can get support via our customer portal, email, and community forums.",
  },
  {
    question: "Are The Prebuilt Websites Fully Customizable?",
    answer: "Yes, Avada offers full customization with its intuitive builder and flexible settings.",
  },
  {
    question: "Why Should I Trust Avada?",
    answer: "Avada is a top-rated theme with thousands of satisfied users and excellent customer reviews.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto my-10 p-6">
      <h2 className="text-5xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-2xl font-medium"
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 text-lg">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
