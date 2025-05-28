import { Link } from "react-router";
import { PackageIcon } from "./Icons"; 
import { Phone } from "@/components/ui/phone";
import { Mail } from "@/components/ui/mail";
import { MapPin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PackageIcon />
              <span className="text-xl font-bold text-white">LaundryExpress</span>
            </div>
            <p className="mb-4">Professional laundry and dry cleaning with free collection and delivery.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/wash-fold" className="hover:text-sky-400">
                  Wash & Fold
                </Link>
              </li>
              <li>
                <Link to="/services/dry-cleaning" className="hover:text-sky-400">
                  Dry Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/ironing" className="hover:text-sky-400">
                  Ironing
                </Link>
              </li>
              <li>
                <Link to="/services/specialty" className="hover:text-sky-400">
                  Specialty Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-sky-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-sky-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-sky-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400">
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
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} LaundryExpress. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;