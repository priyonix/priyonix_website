"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";

type DropdownItem = {
  name: string;
  description: string;
  href: string;
  button: string;
};

const dropdowns: Record<"What We Do" | "Who We Are", DropdownItem[]> = {
  "What We Do": [
    {
      name: "Course",
      description:
        "Explore our range of courses designed to build real-world skills.",
      href: "/courses",
      button: "Start Learning",
    },
    {
      name: "Placement",
      description:
        "Comprehensive services to help organizations grow and transform.",
      href: "/placement",
      button: "Explore Placement",
    },
    {
      name: "Workshop",
      description:
        "Comprehensive services to help organizations grow and transform.",
      href: "/workshop",
      button: "Explore Workshop",
    },
  ],
  "Who We Are": [
    {
      name: "About Us",
      description:
        "Learn about our journey, mission, and commitment to innovation.",
      href: "/about",
      button: "Know More",
    },
    // Uncomment if needed
    // {
    //   name: "Leadership",
    //   description:
    //     "Meet the leadership team driving our success and vision forward.",
    //   href: "/leadership",
    //   button: "Meet Leaders",
    // },
  ],
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<keyof typeof dropdowns | null>(
    null
  );
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useUser();
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setActiveMenu(null);
        setActiveItem(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setActiveItem(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggleMenu = (menu: keyof typeof dropdowns) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      setActiveItem(null);
    } else {
      setActiveMenu(menu);
      setActiveItem(dropdowns[menu][0]?.name ?? null);
    }
  };


  return (
    <nav
      ref={navRef}
      className="bg-black text-white flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full z-50"
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="h-10 w-10"
        />
        <Link href="/" className="flex items-center">
          <Image 
            src="/name.png"   
            alt="Priyonix Logo"
            width={120}       // adjust size
            height={120}
            priority          
          />
        </Link>
        {/* <Link href="/" className="text-2xl font-bold">
          PRIYONIX
        </Link> */}
      </div>

      {/* Center Nav (Desktop) */}
      <div className="hidden md:flex flex-1 justify-center space-x-8 text-lg items-center relative">
        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>

        {/* Who We Are (now 2nd) */}
        <div className="relative">
          <button
            id="whoweare-button"
            className="flex items-center hover:text-gray-400"
            onClick={() => toggleMenu("Who We Are")}
            aria-expanded={activeMenu === "Who We Are"}
            aria-controls="dropdown-whoweare"
            aria-haspopup="true"
          >
            Who We Are <ChevronDown size={18} className="ml-1" />
          </button>
          <AnimatePresence>
            {activeMenu === "Who We Are" && (
              <motion.div
                id="dropdown-whoweare"
                role="menu"
                aria-labelledby="whoweare-button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.18 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[700px] bg-gray-900 text-white shadow-xl rounded-lg p-6 flex z-50"
              >
                {/* Left list */}
                <div className="w-1/3 border-r border-gray-800 pr-4 space-y-4">
                  {dropdowns["Who We Are"].map((item) => (
                    <button
                      key={item.name}
                      role="menuitem"
                      className={`w-full text-left ${
                        activeItem === item.name
                          ? "text-blue-400"
                          : "hover:text-blue-400"
                      }`}
                      onMouseEnter={() => setActiveItem(item.name)}
                      onClick={() => setActiveItem(item.name)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* Right desc */}
                <div className="w-2/3 pl-6 relative min-h-[120px] flex flex-col justify-center">
                  {dropdowns["Who We Are"].map((item) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: activeItem === item.name ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`absolute inset-0 flex flex-col justify-center ${
                        activeItem === item.name ? "block" : "hidden"
                      }`}
                    >
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <Link
                        href={item.href}
                        className="border border-gray-400 text-gray-200 hover:bg-gray-800 px-4 py-2 rounded-full w-fit"
                        onClick={() => setActiveMenu(null)}
                      >
                        {item.button}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* What We Do (now 3rd) */}
        <div className="relative">
          <button
            id="whatwedo-button"
            className="flex items-center hover:text-gray-400"
            onClick={() => toggleMenu("What We Do")}
            aria-expanded={activeMenu === "What We Do"}
            aria-controls="dropdown-whatwedo"
            aria-haspopup="true"
          >
            What We Do <ChevronDown size={18} className="ml-1" />
          </button>
          <AnimatePresence>
            {activeMenu === "What We Do" && (
              <motion.div
                id="dropdown-whatwedo"
                role="menu"
                aria-labelledby="whatwedo-button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.18 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[700px] bg-gray-900 text-white shadow-xl rounded-lg p-6 flex z-50"
              >
                {/* Left side list */}
                <div className="w-1/3 border-r border-gray-800 pr-4 space-y-4">
                  {dropdowns["What We Do"].map((item) => (
                    <button
                      key={item.name}
                      role="menuitem"
                      className={`w-full text-left ${
                        activeItem === item.name
                          ? "text-blue-400"
                          : "hover:text-blue-400"
                      }`}
                      onMouseEnter={() => setActiveItem(item.name)}
                      onClick={() => setActiveItem(item.name)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* Right side description */}
                <div className="w-2/3 pl-6 relative min-h-[120px] flex flex-col justify-center">
                  {dropdowns["What We Do"].map((item) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: activeItem === item.name ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`absolute inset-0 flex flex-col justify-center ${
                        activeItem === item.name ? "block" : "hidden"
                      }`}
                    >
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <Link
                        href={item.href}
                        className="border border-gray-400 text-gray-200 hover:bg-gray-800 px-4 py-2 rounded-full w-fit"
                        onClick={() => setActiveMenu(null)}
                      >
                        {item.button}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="/contact" className="hover:text-gray-400">
          Contact Us
        </Link>
      </div>

      {/* Right (Login / Mobile) */}
      <div className="flex items-center space-x-4">
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton mode="modal">
            <button className="bg-gray-600 px-4 py-1 rounded-full hidden md:block">
              Login
            </button>
          </SignInButton>
        )}
        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-start px-6 py-6 md:hidden z-40 space-y-4"
          >
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="hover:text-gray-400"
            >
              Home
            </Link>

            {/* Who We Are (accordion style) */}
            <div className="w-full">
              <button
                className="flex justify-between w-full py-2 hover:text-gray-400"
                onClick={() =>
                  setExpandedMobileMenu(
                    expandedMobileMenu === "Who We Are" ? null : "Who We Are"
                  )
                }
              >
                Who We Are
                <ChevronDown
                  size={18}
                  className={`ml-2 transform transition-transform ${
                    expandedMobileMenu === "Who We Are" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedMobileMenu === "Who We Are" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="pl-4 flex flex-col space-y-2"
                  >
                    {dropdowns["Who We Are"].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* What We Do (accordion style) */}
            <div className="w-full">
              <button
                className="flex justify-between w-full py-2 hover:text-gray-400"
                onClick={() =>
                  setExpandedMobileMenu(
                    expandedMobileMenu === "What We Do" ? null : "What We Do"
                  )
                }
              >
                What We Do
                <ChevronDown
                  size={18}
                  className={`ml-2 transform transition-transform ${
                    expandedMobileMenu === "What We Do" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedMobileMenu === "What We Do" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="pl-4 flex flex-col space-y-2"
                  >
                    {dropdowns["What We Do"].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="hover:text-gray-400"
            >
              Contact Us
            </Link>

            {/* Login (mobile) */}
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton mode="modal">
                <button className="bg-gray-600 px-4 py-1 rounded-full">
                  Login
                </button>
              </SignInButton>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
