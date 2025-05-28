import { Link } from "react-router";
import { PackageIcon, ShoppingCartIcon,XIcon } from "./Icons"; // Assuming icons are in a separate file
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react"

const Header = ({ setIsCartOpen, getTotalItems }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <PackageIcon />
            <span className="text-xl font-bold text-sky-600">LaundryExpress</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-sky-600 transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-sm font-medium hover:text-sky-600 transition-colors">
            Services
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-sky-600 transition-colors">
            How It Works
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-sky-600 transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-sky-600 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-sky-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <SignedOut>
              
                <Link to="/sign-in">Login</Link>
              
                <Link to="/sign-up">Sign Up</Link>
             
            </SignedOut>
            <SignedIn>
              <UserButton />
              
            </SignedIn>
          <button
           
            className="relative inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
          >
            <ShoppingCartIcon />
           
           
          </button>
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;