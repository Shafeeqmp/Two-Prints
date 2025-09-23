"use client";

import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function CustomFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image 
                src="/logo/logo.png" 
                alt="TWO PRINTS" 
                width={40} 
                height={40} 
                className="h-10 w-auto"
              />
              <span className="text-xl font-semibold dark:text-white">TWO PRINTS</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-xs">
              Creating beautiful designs and functional solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors">
                <BsFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-white transition-colors">
                <BsInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-white transition-colors">
                <BsTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4 dark:text-white">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "Tutorials", "Blog", "Support"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4 dark:text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:twoprintsmji@gmail.com" 
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                twoprintsmji@gmail.com
              </a>
              <a 
                href="tel:+918086798839" 
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                +91 8086 798 839
              </a>
              <a 
                href="tel:+919846606611" 
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                +91 9846 606 611
              </a>
              <div className="text-gray-600 dark:text-gray-400 pt-2">
                <p>Mumbai Square,</p>
                <p>Pandikkad Road, Manjeri</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Two Prints. All rights reserved.
            </div>
            <div className="mt-4 flex space-x-6 sm:mt-0">
              {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}