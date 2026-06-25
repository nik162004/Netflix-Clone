import "./Page3.css"
import { useState } from "react";

const faqs = [
    {
        question: "What is Netflix",
        answer:
            "Netflix is a streaming platform",
    },
    {
        question: "How much does Netflix cost?",
        answer:
        "Plans range depending on your region and subscription type.",
    },
    {
        question: "Where can I watch?",
        answer: "You can watch on Smart TVs, phones, tablets, laptops, and more.",
    },
    {
        question: "How do I cancel",
        answer: "Why? do you want to cancel it on the first place?",
    },
    {
        question: "What can I watch on Netflix",
        answer: "Literally any kind of premium quality content",
    },
    {
        question: "Is Netflix good for kids?",
        answer: "Absolutely, if you know what's good for your child.",
    }
]

const Page3 = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

  return (
    <section>
      <div className="page3">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "×" : "+"}</span>
            </button>

            <div
              className={`faq-answer ${
                openIndex === index ? "open" : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page3