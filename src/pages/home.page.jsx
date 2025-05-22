import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, MapPin, Package, ShieldCheck, Star, Truck } from "lucide-react"
import { Phone } from "@/components/ui/phone"
import { Mail } from "@/components/ui/mail"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:text-sky-700 transition-colors">
              <Package className="h-6 w-6 text-sky-600" />
              <span className="text-xl font-bold">LaundryExpress</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-sky-600 transition-colors">
              How It Works
            </Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-sky-600 transition-colors">
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
            <Button className="bg-sky-600 hover:bg-sky-700 text-white transition-colors">Book Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-sky-600 to-sky-800 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 space-y-6 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Laundry & Dry Cleaning with Free Collection & Delivery
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Professional cleaning services at your doorstep. Schedule a pickup in just 30 seconds!
              </p>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-sky-800 font-medium mb-3">Book Your Collection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-gray-600 text-sm block mb-1">Your Postcode</label>
                    <div className="flex">
                      <Input type="text" placeholder="Enter your postcode" className="rounded-r-none text-gray-800" />
                      <Button className="bg-sky-600 hover:bg-sky-700 rounded-l-none text-white">Check</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Laundry Service"
                width="500"
                height="400"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why Choose LaundryExpress?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-sky-100 p-3 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">24-Hour Turnaround</h3>
                <p className="text-gray-600">
                  Get your clean clothes back in just 24 hours. Perfect for busy professionals.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-sky-100 p-3 rounded-full mb-4">
                  <Truck className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Free Collection & Delivery</h3>
                <p className="text-gray-600">
                  We pick up and deliver your clothes at no extra cost, saving you time and effort.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-sky-100 p-3 rounded-full mb-4">
                  <ShieldCheck className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Quality Guaranteed</h3>
                <p className="text-gray-600">
                  Professional cleaning with eco-friendly products and satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our simple 3-step process makes laundry and dry cleaning hassle-free
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Book Online</h3>
                <p className="text-gray-600">
                  Schedule a collection in just 30 seconds. Choose a time slot that works for you.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">We Collect & Clean</h3>
                <p className="text-gray-600">
                  Our driver picks up your items and our professionals clean them to perfection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">We Deliver</h3>
                <p className="text-gray-600">We return your fresh, clean clothes at your chosen time and location.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 transition-colors">Book Now</Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional cleaning for all your garments and household items
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Laundry Service"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Wash & Fold</h3>
                  <p className="text-gray-600 text-sm mb-3">Your everyday laundry washed, dried, and neatly folded.</p>
                  <p className="text-sky-600 font-medium">From $1.50/lb</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
                <div className="h-48 bg-gray-200 relative">
                  <img src="/placeholder.svg?height=200&width=300" alt="Dry Cleaning" className="absolute inset-0 w-full h-full object-cover rounded-t-lg" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Dry Cleaning</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Professional care for your suits, dresses, and delicate items.
                  </p>
                  <p className="text-sky-600 font-medium">From $4.99/item</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Ironing Service"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Ironing</h3>
                  <p className="text-gray-600 text-sm mb-3">Perfectly pressed clothes ready to wear or hang.</p>
                  <p className="text-sky-600 font-medium">From $2.50/item</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Bedding & Linens"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Bedding & Linens</h3>
                  <p className="text-gray-600 text-sm mb-3">Fresh, clean bedding, towels, and household linens.</p>
                  <p className="text-sky-600 font-medium">From $15.00/item</p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="#" className="text-sky-600 font-medium hover:underline transition-colors">
                View all services →
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="flex items-center text-yellow-400 mb-4">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-gray-600 mb-4">
                  "LaundryExpress has been a game-changer for me. The quality is excellent, and the convenience of
                  pickup and delivery fits perfectly with my busy schedule."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Marketing Executive</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="flex items-center text-yellow-400 mb-4">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-gray-600 mb-4">
                  "I've tried several laundry services, and LaundryExpress is by far the best. Their attention to detail
                  and customer service is outstanding."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">Michael Chen</p>
                    <p className="text-sm text-gray-500">Software Developer</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="flex items-center text-yellow-400 mb-4">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-gray-600 mb-4">
                  "The 24-hour turnaround is incredible! I never have to worry about running out of clean clothes.
                  Highly recommend their service."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">Emma Rodriguez</p>
                    <p className="text-sm text-gray-500">Teacher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Everything you need to know about our laundry and dry cleaning services
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">How does the collection and delivery work?</h3>
                <p className="text-gray-600">
                  Our driver will collect your items at your chosen time slot. You'll receive notifications when they're
                  on the way. The same process applies for delivery, with real-time tracking available.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">What areas do you service?</h3>
                <p className="text-gray-600">
                  We currently operate in major metropolitan areas. Enter your postcode in the booking form to check if
                  we service your area.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">How are my clothes cleaned?</h3>
                <p className="text-gray-600">
                  We use professional-grade equipment and eco-friendly detergents. Each item is treated according to its
                  care label instructions to ensure the best results.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">What if I'm not satisfied with the service?</h3>
                <p className="text-gray-600">
                  We offer a 100% satisfaction guarantee. If you're not happy with the results, we'll re-clean your
                  items at no extra cost or provide a refund.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="#" className="text-sky-600 font-medium hover:underline transition-colors">
                View all FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-sky-700 to-sky-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to save time on laundry?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made laundry day a thing of the past.
            </p>
            <Button className="bg-white text-sky-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-colors">
              Book Your Collection Now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="h-6 w-6 text-sky-400" />
                <span className="text-xl font-bold text-white">LaundryExpress</span>
              </div>
              <p className="mb-4 text-gray-400">Professional laundry and dry cleaning with free collection and delivery.</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-sky-400 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-sky-400 transition-colors">
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
                  <Link href="#" className="hover:text-sky-400 transition-colors text-gray-400">
                    Wash & Fold
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400 transition-colors text-gray-400">
                    Dry Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400 transition-colors text-gray-400">
                    Ironing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400 transition-colors text-gray-400">
                    Bedding & Linens
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400 transition-colors text-gray-400">
                    Business Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-sky-400 transition-colors text-gray-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400 transition-colors text-gray-400">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400 transition-colors text-gray-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400 transition-colors text-gray-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400 transition-colors text-gray-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-400">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-sky-400" />
                  <span>123 Laundry Street, City, Country</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-2 text-sky-400" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-2 text-sky-400" />
                  <span>info@laundryexpress.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} LaundryExpress. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:text-sky-400 transition-colors text-gray-400">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-sky-400 transition-colors text-gray-400">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-sky-400 transition-colors text-gray-400">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}