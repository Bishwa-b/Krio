// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, Search, ShoppingCart, User } from "lucide-react";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setMobileMenuOpen(false);
//   }, [location.pathname]);

//   const isActive = (path) => location.pathname === path;

//   // Updated navLinks to rename "AMBASSADOR" → "KREW"
//   const navLinks = [
//     { path: "/", label: "HOME" },
//     { path: "/products", label: "PRODUCTS" },
//     { path: "/science", label: "SCIENCE" },
//     { path: "/about", label: "OUR STORY" },
//     { path: "/ambassador", label: "KREW" },
//   ];

//   return (
//     <header
//       className={`absolute w-full z-50 transition-all duration-300 bg-transparent`}
//     >
//       <div className="container h-[80px] mx-auto px-4">
//         <div className="flex justify-between items-center h-full text-krio-dark font-medium">
//           {/* Brand Name */}
//           <Link to="/" className="flex items-center">
//             <img src="/lovable-uploads/krio-icon.png" alt="icon" className="w-[15%]"/>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-20">
//             {/* Left side links */}
//             <div className="flex items-center space-x-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`relative font-medium transition-colors duration-200 group ${
//                     isActive(link.path)
//                       ? "text-krio-blue"
//                       : "text-white hover:text-krio-blue"
//                   }`}
//                 >
//                   {link.label}
//                   <span
//                     className={`absolute -bottom-2 left-0 w-full h-0.5 bg-krio-blue transform origin-left transition-transform duration-200 ${
//                       isActive(link.path)
//                         ? "scale-x-100"
//                         : "scale-x-0 group-hover:scale-x-100"
//                     }`}
//                   />
//                 </Link>
//               ))}
//             </div>

//             {/* Right side icons: Search, Cart, Login */}
//             <div className="flex items-center space-x-6">
//               <button
//                 aria-label="Search"
//                 className="text-white hover:text-krio-blue"
//               >
//                 <Search size={24} />
//               </button>
//               <button
//                 aria-label="Cart"
//                 className="text-white hover:text-krio-blue"
//               >
//                 <ShoppingCart size={24} />
//               </button>
//               <button
//                 aria-label="Login"
//                 className="text-white hover:text-krio-blue"
//               >
//                 <User size={24} />
//               </button>
//             </div>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden fixed inset-0 top-[70px] bg-white/98 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out">
//           <div className="container mx-auto px-4 py-8">
//             <nav className="flex flex-col space-y-6">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`text-xl px-4 py-2 rounded-lg transition-colors ${
//                     isActive(link.path)
//                       ? "bg-krio-blue/30 font-medium text-white"
//                       : "text-white hover:bg-krio-blue hover:text-white"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               {/* Icons for Search, Cart, Login in mobile menu */}
//               <div className="flex items-center justify-center space-x-8 pt-6">
//                 <button
//                   aria-label="Search"
//                   className="text-white hover:text-krio-blue"
//                 >
//                   <Search size={24} />
//                 </button>
//                 <button
//                   aria-label="Cart"
//                   className="text-white hover:text-krio-blue"
//                 >
//                   <ShoppingCart size={24} />
//                 </button>
//                 <button
//                   aria-label="Login"
//                   className="text-white hover:text-krio-blue"
//                 >
//                   <User size={24} />
//                 </button>
//               </div>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300  ${
          isScrolled
            ? "py-2 bg-[#ffffff80] backdrop-blur-md shadow-sm"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="relative mx-auto px-4 flex items-center ">
          {/* Left Section: Visible only on desktop */}
          <nav className="hidden md:flex items-center gap-16 justify-center w-full animate-fade-in">
            {/* Left links */}
            <NavLink to="/products">
              <span className="text-white hover:text-krio-blue font-medium text-xl">
                Products
              </span>
            </NavLink>
            <NavLink to="/science">
              <span className="text-white hover:text-krio-blue font-medium text-xl">
                Science
              </span>
            </NavLink>

            {/* Center logo */}
            <Link to="/">
              <img
                src="/lovable-uploads/krio-icon.png"
                alt="Krio logo"
                className="h-14 w-auto"
              />
            </Link>

            {/* Right NavLinks */}
            <NavLink to="/ambassador">
              <span className="text-white hover:text-krio-blue font-medium text-xl">
              Our Story
              </span>
            </NavLink>
            <NavLink to="/about">
              <span className="text-white hover:text-krio-blue font-medium text-xl">
               Krew
              </span>
            </NavLink>
          </nav>

          <nav className="md:hidden flex items-center justify-center w-full ">
            <Link to="/">
              <img
                src="/lovable-uploads/krio-icon.png"
                alt="Krio logo"
                className="h-14 w-auto"
              />
            </Link>
          </nav>

          {/* Mobile Toggle Button: Visible only on mobile */}
          <button
            className="md:hidden absolute right-4 "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black my-1.5 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-krio-blue z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink
            to="/products"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Product
          </MobileNavLink>
          <MobileNavLink
            to="/science"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Science
          </MobileNavLink>

          <MobileNavLink
            to="/ambassador"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Krew
          </MobileNavLink>
          <div className="pt-4">
            <a href="https://amzn.in/d/5CWQ2pX" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#c2f587] px-6 py-3 rounded-full flex items-center space-x-2 text-[#3b6326] transition-all duration-300 hover:bg-[#aee066]">
                <ShoppingCart size={20} />
                <span>Shop Now</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="font-medium text-[#3b6326] uppercase text-sm tracking-wide transition-all hover:text-white relative pb-1 group"
  >
    {children}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-krio-blue transition-all duration-300 group-hover:w-full"></span>
  </Link>
);
const MobileNavLink = ({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="font-medium uppercase text-3xl tracking-tighter text-white hover:text-krio-blue transition-colors relative group pb-1"
  >
    {children}
    <span className="absolute left-0 bottom-0 w-0 h-1 bg-krio-blue transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

export default Header;
