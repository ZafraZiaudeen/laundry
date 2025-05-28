"use client";
import { useState } from "react";
import { Link } from "react-router"; // Corrected import for React Router
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Star, Truck, ShieldCheck } from "lucide-react";
import { ClockIcon, HelpCircleIcon, PlusIcon, ShoppingCartIcon, StarIcon, TruckIcon, ShieldIcon, XIcon, MinusIcon } from "@/components/Icons"; // Assuming icons are in a separate file
import "../styles/PricingPage.css"; // Assuming the same CSS is used for styling consistency

export default function Home() {
  // State for cart functionality in Header
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded">
                <XIcon />
              </button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-8">Your cart is empty</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg mb-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-sky-600 font-semibold">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 border rounded hover:bg-gray-50"
                        >
                          <MinusIcon />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 border rounded hover:bg-gray-50"
                        >
                          <PlusIcon />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold text-lg text-sky-600">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-md font-medium">
                      Book Collection
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

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
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Dry Cleaning"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
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
              <Link to="/pricing" className="text-sky-600 font-medium hover:underline transition-colors">
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
              <Link to="#" className="text-sky-600 font-medium hover:underline transition-colors">
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
    </div>
  );
}