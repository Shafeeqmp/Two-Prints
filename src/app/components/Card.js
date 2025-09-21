"use client";

import { useState } from "react";
import Image from "next/image";

export default function OffsetPrintingGallery() {
  const [cards] = useState([
    {
      id: 1,
      img: "/image/Brochures.jpg",
      title: "Brochure Printing",
      desc: "High-quality brochure printing with vibrant colors and premium paper stock. Perfect for marketing materials.",
      features: ["4-color process", "Glossy/Matte finish", "Various sizes"],
    },
    {
      id: 2,
      img: "/image/card.jpg",
      title: "Business Cards",
      desc: "Premium business card printing with spot UV, foil stamping, and embossing options.",
      features: ["Thick card stock", "Custom finishes", "Quick turnaround"],
    },
    {
      id: 3,
      img: "/image/catalog.jpeg",
      title: "Catalog Printing",
      desc: "Professional catalog printing for showcasing your products with high-resolution images.",
      features: ["Perfect binding", "Saddle stitching", "Layflat options"],
    },
    {
      id: 4,
      img: "/image/Poster-printing.jpg",
      title: "Poster Printing",
      desc: "Large format poster printing with brilliant colors and sharp details for events and promotions.",
      features: ["Large format", "Fade-resistant inks", "Mounting options"],
    },
    {
      id: 5,
      img: "/image/packaging.jpg",
      title: "Packaging Printing",
      desc: "Custom packaging solutions with high-quality printing that makes your products stand out.",
      features: ["Custom die-cutting", "Structural design", "Prototype services"],
    },
    {
      id: 6,
      img: "/image/stickers.jpg",
      title: "Stationery Sets",
      desc: "Elegant stationery printing for businesses including letterheads, envelopes, and notepads.",
      features: ["Matching designs", "Premium papers", "Foil detailing"],
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Offset Printing Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional offset printing services for all your business needs. High quality results with vibrant colors and sharp details.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image using fill */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={card.id <= 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2 break-words">{card.title}</h3>
                <p className="text-gray-600 mb-4 break-words">{card.desc}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {card.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-4 h-4 text-blue-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Services Summary */}
        <div className="mt-16 p-8 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Offset Printing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quality */}
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Superior Quality</h3>
              <p className="text-gray-600">
                Crisp details and vibrant colors with professional offset printing technology.
              </p>
            </div>

            {/* Fast Turnaround */}
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                Quick production times without compromising on quality or attention to detail.
              </p>
            </div>

            {/* Competitive Pricing */}
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                High-quality printing services at competitive prices with volume discounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
