'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserButton, SignInButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Course', href: '/course' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      <nav
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        className="text-white flex items-center justify-between p-4 shadow-lg fixed top-0 left-0 w-full z-50"
      >
        {/* Logo */}
        <div className="flex flex-row items-center">
          <Image
            src="/LOGO_PRIYONIX_1.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-12 w-12"
          />
          <Link
            href="/"
            className="logo-text text-2xl font-bold cursor-pointer hover:text-gray-400 ml-1"
            style={{ lineHeight: '1' }}
          >
            Priyonix
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center text-lg">
          {navLinks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                className={`px-4 py-1 rounded-full transition-colors duration-300 ${
                  pathname === item.href
                    ? 'bg-gray-400 text-white'
                    : 'hover:text-gray-400'
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          {/* Authentication Button */}
          {user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <button className="hover:bg-gray-600 bg-gray-400 px-4 py-1 rounded-full">
                Login
              </button>
            </SignInButton>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center space-y-4 py-4 md:hidden z-50"
          >
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-1 rounded-full transition-colors duration-300 ${
                  pathname === item.href
                    ? 'bg-gray-400 text-white'
                    : 'hover:text-gray-400'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Authentication Button */}
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton mode="modal">
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-gray-600 bg-gray-400 px-4 py-1 rounded-full"
                >
                  Login
                </button>
              </SignInButton>
            )}
          </motion.div>
        )}
      </nav>
    </>
  );
}
