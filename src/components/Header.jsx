import { useState } from "react";
import { Link } from "react-router";
import { PackageIcon, ShoppingCartIcon, MenuIcon, CloseIcon, UserIcon, ChevronDownIcon } from "./Icons"; 

const Header = ({ setIsCartOpen, getTotalItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const totalItems = getTotalItems ? getTotalItems() : 0;

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <PackageIcon className="h-8 w-8 text-sky-600" />
            <span className="text-xl font-bold text-sky-600 tracking-tight">LaundryExpress</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-sky-600 ${
                item.name === "Pricing" ? "text-sky-600" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* User Menu */}
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-sky-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
            >
              <UserIcon className="h-4 w-4" />
              <span>Account</span>
              <ChevronDownIcon className="h-3 w-3" />
            </button>

            {/* User Dropdown */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-[60]">
                <Link
                  to="/sign-in"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Sign Up
                </Link>
                <hr className="my-1" />
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/orders"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  My Orders
                </Link>
              </div>
            )}
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* Mobile Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-700 hover:text-sky-600 transition-colors duration-200"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-sky-600 hover:text-sky-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded-md"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25 z-[99]" onClick={closeMobileMenu}></div>
          
          {/* Mobile Menu Panel */}
          <div className={`fixed top-0 right-0 h-screen w-80 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[100] will-change-transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-2">
                  <PackageIcon className="h-6 w-6 text-sky-600" />
                  <span className="text-lg font-bold text-sky-600">LaundryExpress</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="space-y-1 mb-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 hover:bg-gray-100 ${
                        item.name === "Pricing" ? "text-sky-600" : "text-gray-700"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Auth Section */}
                <div className="border-t pt-4 mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Account</h3>
                  <div className="space-y-2">
                    <Link
                      to="/sign-in"
                      className="block w-full px-4 py-2 text-center border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/sign-up"
                      className="block w-full px-4 py-2 text-center bg-sky-600 text-white rounded-md text-sm font-medium hover:bg-sky-700 transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>

                {/* Mobile Quick Links */}
                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Links</h3>
                  <div className="space-y-1">
                    <Link
                      to="/profile"
                      className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      My Orders
                    </Link>
                    <Link
                      to="/support"
                      className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      Support
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close user menu */}
      {isUserMenuOpen && (
        <div
          className="fixed inset-0 z-[30]"
          onClick={() => setIsUserMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;