"use client";
import {useState} from "react";
import { motion } from "framer-motion";
import Services from "@/components/Services";
import MonthlySubscriptions from "@/components/MonthlySubscriptions";
import { ClockIcon, HelpCircleIcon, TruckIcon, ShieldIcon } from "@/components/Icons"; 
import "../styles/PricingPage.css";

const serviceCategories = {
  "wash-fold": {
    name: "Wash & Fold",
    description: "Professional washing and folding services",
    icon: "👕",
    items: [
      {
        id: "wf-regular",
        name: "Regular Clothes (per lb)",
        price: 1.99,
        description: "Everyday clothing items washed and neatly folded",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",
        turnaround: "24-48 hours",
        popular: true,
      },
      {
        id: "wf-delicate",
        name: "Delicate Items (per piece)",
        price: 3.5,
        description: "Special care for delicate fabrics and garments",
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=200&h=200&fit=crop",
        turnaround: "48-72 hours",
      },
      {
        id: "wf-bedding",
        name: "Bed Sheets Set",
        price: 15.0,
        description: "Complete bed sheet set including pillowcases",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200&h=200&fit=crop",
        turnaround: "24-48 hours",
      },
      {
        id: "wf-comforter",
        name: "Comforter (Queen/King)",
        price: 25.0,
        description: "Large comforters and duvets professionally cleaned",
        image: "https://images.unsplash.com/photo-1586023312681-425c7b97ccd7?w=200&h=200&fit=crop",
        turnaround: "48-72 hours",
      },
      {
        id: "wf-towels",
        name: "Towels (per piece)",
        price: 2.5,
        description: "Bath towels, hand towels, and washcloths",
        image: "https://images.unsplash.com/photo-1620912189531-c4c3c8b6e8b8?w=200&h=200&fit=crop",
        turnaround: "24-48 hours",
      },
    ],
  },
  "dry-cleaning": {
    name: "Dry Cleaning",
    description: "Professional dry cleaning for special garments",
    icon: "🧥",
    items: [
      {
        id: "dc-shirts",
        name: "Dress Shirts/Blouses",
        price: 6.5,
        description: "Professional cleaning and pressing for dress shirts",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop",
        turnaround: "24-48 hours",
        popular: true,
      },
      {
        id: "dc-pants",
        name: "Pants/Trousers",
        price: 7.5,
        description: "Dry cleaning for dress pants and trousers",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop",
        turnaround: "24-48 hours",
      },
      {
        id: "dc-suits",
        name: "Suits (2-piece)",
        price: 18.0,
        description: "Complete suit cleaning including jacket and pants",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        turnaround: "48-72 hours",
      },
      {
        id: "dc-dresses",
        name: "Dresses (Simple)",
        price: 12.0,
        description: "Everyday dresses and simple formal wear",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop",
        turnaround: "24-48 hours",
      },
      {
        id: "dc-formal",
        name: "Formal Dresses",
        price: 20.0,
        description: "Evening gowns and special occasion dresses",
        image: "https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?w=200&h=200&fit=crop",
        turnaround: "72-96 hours",
      },
      {
        id: "dc-coats",
        name: "Coats/Jackets",
        price: 15.0,
        description: "Winter coats, blazers, and outerwear",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop",
        turnaround: "48-72 hours",
      },
    ],
  },
  ironing: {
    name: "Ironing & Pressing",
    description: "Professional ironing and pressing services",
    icon: "🔥",
    items: [
      {
        id: "ir-shirts",
        name: "Shirts (per piece)",
        price: 4.5,
        description: "Professional ironing for casual and dress shirts",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop",
        turnaround: "24 hours",
        popular: true,
      },
      {
        id: "ir-pants",
        name: "Pants (per piece)",
        price: 5.5,
        description: "Crisp pressing for all types of pants",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop",
        turnaround: "24 hours",
      },
      {
        id: "ir-dresses",
        name: "Dresses (per piece)",
        price: 8.0,
        description: "Careful ironing for dresses and skirts",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop",
        turnaround: "24-48 hours",
      },
      {
        id: "ir-linens",
        name: "Table Linens",
        price: 6.0,
        description: "Tablecloths, napkins, and other linens",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200&h=200&fit=crop",
        turnaround: "24-48 hours",
      },
    ],
  },
  specialty: {
    name: "Specialty Services",
    description: "Special care for unique items",
    icon: "✨",
    items: [
      {
        id: "sp-wedding",
        name: "Wedding Dress Cleaning",
        price: 150.0,
        description: "Specialized cleaning and preservation for wedding gowns",
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop",
        turnaround: "7-10 days",
      },
      {
        id: "sp-leather",
        name: "Leather Cleaning",
        price: 25.0,
        description: "Professional cleaning for leather jackets and items",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop",
        turnaround: "5-7 days",
      },
      {
        id: "sp-alterations",
        name: "Basic Alterations",
        price: 15.0,
        description: "Hemming, taking in, and basic garment alterations",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",
        turnaround: "3-5 days",
      },
      {
        id: "sp-stain",
        name: "Stain Treatment",
        price: 5.0,
        description: "Specialized treatment for tough stains",
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=200&h=200&fit=crop",
        turnaround: "24-48 hours",
      },
    ],
  },
};

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState("wash-fold");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-12 md:py-20">
          <div className="container mx-auto text-center">
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional Laundry Services
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose from our comprehensive range of services with transparent pricing and no hidden fees
            </motion.p>
            <motion.div
              className="flex justify-center gap-6 mt-8 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <TruckIcon />
                <span>Free Collection & Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon />
                <span>24-48 Hour Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldIcon />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </motion.div>
          </div>
        </section>

        <Services
          serviceCategories={serviceCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <MonthlySubscriptions />

        {/* FAQ Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Common questions about our pricing and services</p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Are there any hidden fees?",
                  answer:
                    "No, our pricing is completely transparent. The prices listed include all standard cleaning processes. Additional services like stain treatment or express service will be clearly communicated before processing.",
                },
                {
                  question: "How does the monthly subscription work?",
                  answer:
                    "Our monthly plans include a set amount of laundry by weight. You can schedule pickups until you reach your monthly limit. Unused capacity doesn't roll over to the next month. You can upgrade, downgrade, or cancel your plan at any time.",
                },
                {
                  question: "What if I exceed my monthly allowance?",
                  answer:
                    "If you exceed your monthly allowance, additional laundry will be charged at our standard per-pound rate. We'll always notify you before processing any additional charges.",
                },
                {
                  question: "Is delivery included in the price?",
                  answer:
                    "Yes, all our prices include free collection and delivery within our service areas. There are no additional delivery fees or minimum order requirements.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <HelpCircleIcon />
                    <span className="ml-2">{faq.question}</span>
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-sky-600 text-white">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have made laundry day a thing of the past.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-transparent border-2 border-white hover:bg-sky-700 px-8 py-3 rounded-md text-lg font-medium">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}