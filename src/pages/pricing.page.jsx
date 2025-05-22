import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Check, HelpCircle, Package } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Package className="h-6 w-6 text-sky-600" />
              <span className="text-xl font-bold">LaundryExpress</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-sky-600 transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-sky-600 transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-sky-600 transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden md:block text-sm font-medium hover:text-sky-600 transition-colors">
              Login
            </Link>
            <Button className="bg-sky-600 hover:bg-sky-700">Book Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-12 md:py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Professional laundry and dry cleaning services at competitive prices with no hidden fees
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Choose Your Plan</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Select the plan that best fits your laundry needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow w-full max-w-xs">
                <div className="p-6 bg-gray-50 border-b">
                  <h3 className="text-xl font-bold mb-2">Basic</h3>
                  <p className="text-gray-600 mb-4">Perfect for individuals</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="text-gray-600 ml-2">/ month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Up to 20 lbs of laundry per month</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Weekly collection & delivery</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Wash & fold service</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>48-hour turnaround</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Basic stain treatment</span>
                    </li>
                    <li className="flex items-start text-gray-400">
                      <Check className="h-5 w-5 mr-2 mt-0.5" />
                      <span>Dry cleaning (not included)</span>
                    </li>
                    <li className="flex items-start text-gray-400">
                      <Check className="h-5 w-5 mr-2 mt-0.5" />
                      <span>Priority service (not included)</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-sky-600 hover:bg-sky-700">Choose Basic</Button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden shadow-lg relative w-full max-w-xs">
                <div className="absolute top-0 right-0 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-bl">
                  MOST POPULAR
                </div>
                <div className="p-6 bg-sky-50 border-b">
                  <h3 className="text-xl font-bold mb-2">Premium</h3>
                  <p className="text-gray-600 mb-4">Ideal for couples & small families</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">$89</span>
                    <span className="text-gray-600 ml-2">/ month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Up to 40 lbs of laundry per month</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Weekly collection & delivery</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Wash & fold service</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>24-hour turnaround</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Advanced stain treatment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>$20 dry cleaning credit</span>
                    </li>
                    <li className="flex items-start text-gray-400">
                      <Check className="h-5 w-5 mr-2 mt-0.5" />
                      <span>Priority service (not included)</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-sky-600 hover:bg-sky-700">Choose Premium</Button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow w-full max-w-xs">
                <div className="p-6 bg-gray-50 border-b">
                  <h3 className="text-xl font-bold mb-2">Family</h3>
                  <p className="text-gray-600 mb-4">Perfect for larger families</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">$149</span>
                    <span className="text-gray-600 ml-2">/ month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Up to 80 lbs of laundry per month</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Twice weekly collection & delivery</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Wash & fold service</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>24-hour turnaround</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Premium stain treatment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>$50 dry cleaning credit</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Priority service included</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-sky-600 hover:bg-sky-700">Choose Family</Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">
                All plans include free delivery, eco-friendly detergents, and our satisfaction guarantee
              </p>
              <Link href="#" className="text-sky-600 hover:underline font-medium">
                Need a custom plan? Contact us
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Individual Service Pricing</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Prefer to pay per item? Check out our individual service rates
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              <motion.div
                className="bg-white rounded-lg shadow-sm overflow-hidden w-full max-w-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={cardVariants}
              >
                <div className="bg-sky-600 text-white p-4">
                  <h3 className="text-xl font-bold">Laundry Services</h3>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Wash & Fold (per lb)</td>
                        <td className="py-3 text-right font-medium">$1.99</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Wash & Iron Shirts</td>
                        <td className="py-3 text-right font-medium">$4.50</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Wash & Iron Pants</td>
                        <td className="py-3 text-right font-medium">$5.50</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Bed Sheets (per set)</td>
                        <td className="py-3 text-right font-medium">$15.00</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Duvet Cover (Queen/King)</td>
                        <td className="py-3 text-right font-medium">$18.00</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Towels (per piece)</td>
                        <td className="py-3 text-right font-medium">$2.50</td>
                      </tr>
                      <tr>
                        <td className="py-3">Comforter (Queen/King)</td>
                        <td className="py-3 text-right font-medium">$25.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-sm overflow-hidden w-full max-w-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={cardVariants}
              >
                <div className="bg-sky-600 text-white p-4">
                  <h3 className="text-xl font-bold">Dry Cleaning Services</h3>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Shirts/Blouses</td>
                        <td className="py-3 text-right font-medium">$6.50</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Pants/Trousers</td>
                        <td className="py-3 text-right font-medium">$7.50</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Suits (2-piece)</td>
                        <td className="py-3 text-right font-medium">$18.00</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Dresses (Simple)</td>
                        <td className="py-3 text-right font-medium">$12.00</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Dresses (Formal)</td>
                        <td className="py-3 text-right font-medium">$20.00+</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Coats/Jackets</td>
                        <td className="py-3 text-right font-medium">$15.00+</td>
                      </tr>
                      <tr>
                        <td className="py-3">Ties/Scarves</td>
                        <td className="py-3 text-right font-medium">$5.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={cardVariants}
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full max-w-2xl mx-auto">
                <div className="bg-sky-600 text-white p-4">
                  <h3 className="text-xl font-bold">Additional Services & Fees</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3">Express Service (Same Day)</td>
                          <td className="py-3 text-right font-medium">+50%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3">Rush Service (24 Hours)</td>
                          <td className="py-3 text-right font-medium">+25%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3">Stain Treatment (Basic)</td>
                          <td className="py-3 text-right font-medium">$3.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3">Stain Treatment (Advanced)</td>
                          <td className="py-3 text-right font-medium">$5.00+</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3">Special Handling (Delicates)</td>
                          <td className="py-3 text-right font-medium">+20%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3">Eco-Friendly Detergent</td>
                          <td className="py-3 text-right font-medium">Included</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Business Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Special rates for businesses, hotels, and commercial clients
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="bg-white rounded-lg shadow-sm border p-6 w-full max-w-xs">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sky-600"
                  >
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Office & Workplace</h3>
                <p className="text-gray-600 mb-4">
                  Regular service for office uniforms, towels, and other workplace textiles
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Volume discounts available</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Regular scheduled pickups</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Link href="#" className="text-sky-600 hover:underline font-medium">
                  Request a quote →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6 w-full max-w-xs">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sky-600"
                  >
                    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                    <path d="m17 18h1" />
                    <path d="m12 18h1" />
                    <path d="m7 18h1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Hotels & Hospitality</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive linen service for hotels, B&Bs, and hospitality businesses
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Bulk pricing for linens</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Daily or weekly service</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Quality control process</span>
                  </li>
                </ul>
                <Link href="#" className="text-sky-600 hover:underline font-medium">
                  Request a quote →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6 w-full max-w-xs">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sky-600"
                  >
                    <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
                    <path d="m13 11 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Restaurants & Cafes</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning for restaurant linens, uniforms, and kitchen textiles
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Stain treatment expertise</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Flexible pickup schedule</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Food-safe cleaning processes</span>
                  </li>
                </ul>
                <Link href="#" className="text-sky-600 hover:underline font-medium">
                  Request a quote →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Pricing FAQs</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Common questions about our pricing and services
            </p>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-sky-600 mr-2" />
                  Are there any hidden fees?
                </h3>
                <p className="text-gray-600">
                  No, our pricing is completely transparent. The prices listed include all standard cleaning processes.
                  Additional services like stain treatment or express service will be clearly communicated before
                  processing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-sky-600 mr-2" />
                  How does the monthly subscription work?
                </h3>
                <p className="text-gray-600">
                  Our monthly plans include a set amount of laundry by weight. You can schedule pickups until you reach
                  your monthly limit. Unused capacity doesn't roll over to the next month. You can upgrade, downgrade,
                  or cancel your plan at any time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-sky-600 mr-2" />
                  What if I exceed my monthly allowance?
                </h3>
                <p className="text-gray-600">
                  If you exceed your monthly allowance, additional laundry will be charged at our standard per-pound
                  rate. We'll always notify you before processing any additional charges.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-sky-600 mr-2" />
                  Do you offer discounts for recurring orders?
                </h3>
                <p className="text-gray-600">
                  Yes, our subscription plans offer significant savings compared to our pay-per-use pricing. For
                  businesses with large volumes, we offer custom pricing with additional discounts based on volume and
                  frequency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-sky-600 mr-2" />
                  Is delivery included in the price?
                </h3>
                <p className="text-gray-600">
                  Yes, all our prices include free collection and delivery within our service areas. There are no
                  additional delivery fees or minimum order requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-sky-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made laundry day a thing of the past.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Book Your Collection
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-sky-700 px-8 py-6 text-lg"
                variant="outline"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="h-6 w-6 text-sky-400" />
                <span className="text-xl font-bold text-white">LaundryExpress</span>
              </div>
              <p className="mb-4">Professional laundry and dry cleaning with free collection and delivery.</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-sky-400">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-sky-400">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.63c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.344-1.857.182-.466.399-.8.748 1.15.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041v.08c0 2.597-.01 2.917-.058 3.96-.045.976-.207 1.505-.344 1.858a3.097 3.097 0 00-.748 1.15 3.098 3.098 0 00-1.15.748c-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-sky-400">
                    Wash & Fold
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400">
                    Dry Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400">
                    Ironing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400">
                    Bedding & Linens
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400">
                    Business Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-sky-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-sky-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sky-400 mr-2 mt-0.5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>123 Laundry Street, City, Country</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sky-400 mr-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sky-400 mr-2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>info@laundryexpress.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} LaundryExpress. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:text-sky-400">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-sky-400">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-sky-400">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}