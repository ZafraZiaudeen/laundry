import { motion } from "framer-motion";
import { CheckIcon } from "./Icons"; // Assuming icons are in a separate file

const MonthlySubscriptions = () => {
  const plans = [
    {
      name: "Basic",
      price: 49,
      description: "Perfect for individuals",
      weight: "20 lbs",
      features: [
        "Weekly collection & delivery",
        "Wash & fold service",
        "48-hour turnaround",
        "Basic stain treatment",
      ],
    },
    {
      name: "Premium",
      price: 89,
      description: "Ideal for couples & small families",
      weight: "40 lbs",
      popular: true,
      features: [
        "Weekly collection & delivery",
        "Wash & fold service",
        "24-hour turnaround",
        "Advanced stain treatment",
        "$20 dry cleaning credit",
      ],
    },
    {
      name: "Family",
      price: 149,
      description: "Perfect for larger families",
      weight: "80 lbs",
      features: [
        "Twice weekly collection & delivery",
        "Wash & fold service",
        "24-hour turnaround",
        "Premium stain treatment",
        "$50 dry cleaning credit",
        "Priority service included",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Monthly Subscription Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Save money with our convenient monthly plans that include regular collection and delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-white rounded-lg shadow-md overflow-hidden relative ${
                plan.popular ? "ring-2 ring-sky-500 shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className={`p-6 ${plan.popular ? "bg-sky-50" : "bg-gray-50"}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Up to {plan.weight} of laundry per month</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon />
                      <span className="text-sm ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-md font-medium">
                  Choose {plan.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonthlySubscriptions;