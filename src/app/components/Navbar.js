"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Component() {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    const isActive = (path) => pathname === path;
    
    return (
        <Navbar fluid rounded className="bg-blue-100 dark:bg-gray-900 shadow-lg py-3 sticky top-0 z-50 border-b border-gray-200">
            <NavbarBrand as={Link} href="#" className="flex items-center space-x-3 ml-2 md:ml-4">
                {/* Logo container with Next.js Image component */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg flex items-center justify-center">
                    {isMounted ? (
                        <Image 
                            src="/logo.png" 
                            width={32}
                            height={32}
                            className="object-contain" 
                            alt="Two Prints Logo" 
                        />
                    ) : (
                        <div className="h-8 w-8 bg-white opacity-20 rounded"></div>
                    )}
                </div>
                <span className="self-center text-2xl font-bold text-gray-800">
                    TWO <span className="text-purple-600">PRINTS</span>
                </span>
            </NavbarBrand>
            
            <div className="flex md:order-2 space-x-4 mr-2 md:mr-4">
                <NavbarToggle className="focus:ring-2 focus:ring-blue-300 border-0 hover:bg-gray-100" />
            </div>
            
            <NavbarCollapse className="mt-3 md:mt-0 bg-blue-100 dark:bg-gray-900 md:bg-transparent rounded-lg md:rounded-none shadow-md md:shadow-none p-4 md:p-0">
                <NavbarLink 
                    href="/" 
                    className={`px-4 py-2.5 rounded-lg transition-all duration-300 font-medium ${
                        isActive("/") 
                            ? "bg-gradient-to-r from-amber-300 to-amber-400 text-gray-900 shadow-md" 
                            : "text-gray-700 hover:bg-blue-200 hover:text-gray-900"
                    }`}
                >
                    Home
                </NavbarLink>
                <NavbarLink 
                    as={Link} 
                    href="/about"
                    className={`px-4 py-2.5 rounded-lg transition-all duration-300 font-medium ${
                        isActive("/about") 
                            ? "bg-gradient-to-r from-amber-300 to-amber-400 text-gray-900 shadow-md" 
                            : "text-gray-700 hover:bg-blue-200 hover:text-gray-900"
                    }`}
                >
                    About
                </NavbarLink>
                <NavbarLink 
                    href="/services"
                    className={`px-4 py-2.5 rounded-lg transition-all duration-300 font-medium ${
                        isActive("/services") 
                            ? "bg-gradient-to-r from-amber-300 to-amber-400 text-gray-900 shadow-md" 
                            : "text-gray-700 hover:bg-blue-200 hover:text-gray-900"
                    }`}
                >
                    Services
                </NavbarLink>
                <NavbarLink 
                    href="/contact"
                    className={`px-4 py-2.5 rounded-lg transition-all duration-300 font-medium ${
                        isActive("/contact") 
                            ? "bg-gradient-to-r from-amber-300 to-amber-400 text-gray-900 shadow-md" 
                            : "text-gray-700 hover:bg-blue-200 hover:text-gray-900"
                    }`}
                >
                    Contact
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}