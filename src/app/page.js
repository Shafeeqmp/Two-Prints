"use client";
import { useState, useEffect } from "react";
import Cardcomp from "./components/Card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const heroContent = [
    {
      title: "Precision Offset Printing",
      description:
        "Professional printing services with unmatched quality and attention to detail",
    },
    {
      title: "Vibrant Color Reproduction",
      description:
        "Experience true-to-life colors that make your materials stand out",
    },
    {
      title: "Custom Design Solutions",
      description:
        "From concept to finished product, we bring your vision to life",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroContent.length);
    }, 4000);

    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [heroContent.length]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading premium experience...</p>
        </div>
      </div>
    );
  }

  const currentHeroContent = heroContent[currentTextIndex] || heroContent[0];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[70vh] min-h-[300px] sm:min-h-[500px] overflow-hidden">
        {/* Dark overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-purple-900/50 z-10"></div>

        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/image/Hero_img.jpg"
            alt="Premium Printing Services"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="w-16 sm:w-20 h-1 bg-amber-400 mx-auto mb-4 sm:mb-6"></div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 tracking-tight text-amber-400 drop-shadow-md leading-tight">
              {currentHeroContent.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 text-amber-200 drop-shadow-md leading-relaxed">
              {currentHeroContent.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 md:px-8 md:py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="px-6 py-3 md:px-8 md:py-3 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/10 transition-all duration-300">
                View Services
              </button>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTextIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTextIndex
                  ? "bg-amber-400 scale-125"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "10K+", label: "Projects Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="w-10 h-1 bg-amber-400 mx-auto mb-3"></div>
                <p className="text-gray-600 uppercase tracking-wider text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Premium Services
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering exceptional print solutions for businesses and
              individuals who demand the best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🖨️",
                title: "Offset Printing",
                desc: "High-volume professional printing with impeccable color accuracy",
              },
              {
                icon: "💼",
                title: "Branding Materials",
                desc: "Business cards, letterheads, and corporate stationery",
              },
              {
                icon: "📊",
                title: "Marketing Collateral",
                desc: "Brochures, flyers, and promotional materials",
              },
              {
                icon: "📦",
                title: "Packaging Solutions",
                desc: "Custom boxes, labels, and product packaging",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
                <div className="mt-4">
                  <button className="text-amber-500 font-medium hover:text-amber-600 flex items-center justify-center text-sm">
                    Learn more
                    <svg
                      className="w-3 h-3 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cardcomp />

      {/* CTA Section */}
      <section className="bg-black from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Print Projects?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to create something extraordinary. Get in touch for
            a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <button className="px-8 py-3 bg-amber-500 text-gray-900 font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg">
                Request Quote
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Contact Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
