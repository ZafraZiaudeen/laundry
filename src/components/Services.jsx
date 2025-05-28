import { motion } from "framer-motion";
import { ClockIcon, PlusIcon, StarIcon } from "./Icons"; // Assuming icons are in a separate file

const Services = ({ serviceCategories, activeCategory, setActiveCategory, addToCart }) => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive range of laundry and dry cleaning services. Add items to your cart and book a
            collection.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(serviceCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === key ? "bg-sky-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{serviceCategories[activeCategory].name}</h3>
            <p className="text-gray-600">{serviceCategories[activeCategory].description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories[activeCategory].items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                <div className="p-4">
                  <div className="relative mb-3">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    {item.popular && (
                      <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <StarIcon />
                        Popular
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-sky-600">${item.price.toFixed(2)}</span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <ClockIcon />
                      {item.turnaround}
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(item, activeCategory)}
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 group-hover:scale-105 transition-transform"
                  >
                    <PlusIcon />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;