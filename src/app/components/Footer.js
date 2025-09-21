"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function CustomFooter() {
  return (
    <Footer container className="rounded-none shadow-none bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <FooterBrand
              href="/"
              src="/logo.png"
              alt="Company Logo"
              name="TWO PRINTS"
              className="mb-4"
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-xs">
              Creating beautiful designs and functional solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <FooterIcon href="#" icon={BsFacebook} className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white" />
              <FooterIcon href="#" icon={BsInstagram} className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-white" />
              <FooterIcon href="#" icon={BsTwitter} className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-white" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterTitle title="Quick Links" className="mb-4 text-gray-900 dark:text-white uppercase text-sm font-semibold" />
            <FooterLinkGroup col className="space-y-3">
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Home</FooterLink>
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">About</FooterLink>
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Services</FooterLink>
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Contact</FooterLink>
            </FooterLinkGroup>
          </div>

          {/* Resources */}
          <div>
            <FooterTitle title="Resources" className="mb-4 text-gray-900 dark:text-white uppercase text-sm font-semibold" />
            <FooterLinkGroup col className="space-y-3">
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Documentation</FooterLink>
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Tutorials</FooterLink>
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Blog</FooterLink>
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Support</FooterLink>
            </FooterLinkGroup>
          </div>

          {/* Contact */}
          <div>
            <FooterTitle title="Contact" className="mb-4 text-gray-900 dark:text-white uppercase text-sm font-semibold" />
            <FooterLinkGroup col className="space-y-3">
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">twoprintsmji@gmail.com</FooterLink>
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">+91 8086 798 839</FooterLink>
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">+91 9846 606 611</FooterLink>
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Mumbai Square,</FooterLink>
              <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Pandikkad Road,Manjeri</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>

        <FooterDivider className="my-8 border-gray-200 dark:border-gray-700" />
        
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* <FooterCopyright href="#" by="TWO PRINTS™" year={2025} className="text-gray-600 dark:text-gray-400" /> */}
          <p>© {new Date().getFullYear()} Two Prints. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Privacy Policy</FooterLink>
            <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Terms & Conditions</FooterLink>
            <FooterLink href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">Cookie Policy</FooterLink>
          </div>
        </div>
      </div>
    </Footer>
  );
}