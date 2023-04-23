import React, { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div>
      <div className="lg:px-8 mx-auto ml-0 max-w-3xl py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
          <div className="mt-12">
            <dl className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <dt className="text-lg">
                    <button
                      className="flex w-full items-start justify-between rounded-xl border border-gray-500 text-left"
                      onClick={() => handleItemClick(index)}
                    >
                      <span className=" py-2 px-2 font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex items-center px-2 py-2">
                        <svg
                          className={`${
                            openIndex === index ? "-rotate-180" : "rotate-0"
                          } h-6 w-6 transform`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd
                    className={`mt-2 pr-12 ${
                      openIndex === index ? "" : "hidden"
                    }`}
                  >
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

const faqs = [
  {
    question: "Which region do we function?",
    answer:
      "We currently only operate in Port Harcourt, Nigeria, but with your assistance and backing, we can expand the geographic scope of our services.",
  },
  {
    question: "How is our method of payment?",
    answer:
      "If you need services that cost more than #30,000, you will have to pay it into our account upfront so we can assist you in buying it; otherwise, you can pay after delivery.",
  },
  {
    question: "How are the charges for each service provided",
    answer:
      "To learn more about our service that is including the pricing for each service, check out our Terms of Service or get in touch with us by phone, email, or Whatsapp.",
  },
  {
    question: "How long does it take you to deliver?",
    answer:
      "This is dependent on the sort of service we are providing to you. For project based services, it may extend for days, weeks, or months, depending on how large the project is. But the purchase and delivery of services usually just takes a couple of hours.",
  },
];
