import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const ProductFooter = () => {
  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 8, transition: { duration: 0.2 } },
  };

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.5,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const LinkWrapper = ({
    children,
    href,
    to,
  }: {
    children: React.ReactNode;
    href?: string;
    to?: string;
  }) => {
    const content = (
      <motion.div
        variants={linkVariants}
        initial="initial"
        whileHover="hover"
        className="flex items-center gap-2 text-white hover:text-krio-blue transition"
      >
        {children}
        <ChevronRight size={16} />
      </motion.div>
    );

    return href ? (
      <a href={href}>{content}</a>
    ) : (
      <Link to={to || "/"}>{content}</Link>
    );
  };

  const SocialIcon = ({ href, icon: Icon }: { href: string; icon: any }) => (
    <motion.a
      href={href}
      className="text-white hover:text-krio-blue transition"
      variants={socialIconVariants}
      initial="initial"
      whileHover="hover"
    >
      <Icon size={24} />
    </motion.a>
  );

  return (
    <footer className="bg-krio-main text-white relative hidden md:block">
      {/* Wavy Border Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          className="relative block w-full h-[70px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-28 pb-8">
        {/* Main Container as a Flex Row on medium screens and up */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:gap-32 gap-8">
          {/* Section 1: About the Company with Social Links */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="max-w-[150px]">
              <img
                src="/lovable-uploads/krio-logo.png"
                alt="KRIO Logo"
                className="w-full"
              />
            </div>
            <div className="space-y-6 my-4">
              <p className="text-white text-2xl tracking-wider font-light">
                Cacao Scapes is a new-age Food-Tech Company, working to develop
                innovative, sustainable, clean functional product solutions that
                harness the goodness of Theobroma Cacao fruit.
              </p>
              <p className="text-white text-2xl tracking-wider font-light">
                It is on a mission to uplift consumers in their journey toward a
                healthier, upbeat, energized lifestyle helping them to be
                different and be limitless!
              </p>
              <p className="text-white text-2xl tracking-wider font-light">
                Contact us: +91-7042008640
              </p>
            </div>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={Facebook} />
              <SocialIcon href="#" icon={Twitter} />
              <SocialIcon href="#" icon={Instagram} />
              <SocialIcon href="#" icon={Mail} />
            </div>
          </div>

          {/* Section 2: Quick Links and Support arranged in a flex row */}
          <div className="w-full md:w-1/2 flex flex-row justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-2xl">
                <li>
                  <LinkWrapper to="/">Home</LinkWrapper>
                </li>
                <li>
                  <LinkWrapper to="/products">Products</LinkWrapper>
                </li>
                <li>
                  <LinkWrapper to="/science">Science</LinkWrapper>
                </li>
                <li>
                  <LinkWrapper to="/about">Our Story</LinkWrapper>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-2xl">
                <li>
                  <LinkWrapper href="#">FAQ</LinkWrapper>
                </li>
                <li>
                  <LinkWrapper href="#">Shipping</LinkWrapper>
                </li>
                <li>
                  <LinkWrapper href="#">Returns</LinkWrapper>
                </li>
                <li>
                  <LinkWrapper href="#">Privacy Policy</LinkWrapper>
                </li>
                <li>
                  <LinkWrapper href="#">Terms of Service</LinkWrapper>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-8 border-t border-white/30 text-center md:flex md:justify-between md:text-left">
          <p className="text-white mb-4 md:mb-0">
            © 2025 Krio Energy. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <LinkWrapper href="#">Privacy Policy</LinkWrapper>
            <LinkWrapper href="#">Terms of Service</LinkWrapper>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProductFooter;
