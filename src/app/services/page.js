"use client"

import Link from "next/link";
import Image from "next/image";
import { Button, Card } from "flowbite-react";
import { FaIdCard, FaTshirt, FaMugHot, FaPrint, FaBook, FaBriefcase } from "react-icons/fa";

export default function ServicesPage() {
  // Service categories with icons
  const serviceCategories = [
    {
      title: "Identification Products",
      icon: <FaIdCard className="text-3xl text-purple-600" />,
      services: [
        "ID Cards",
        "Lanyards",
        "Volunteer Badge",
        "Uniform Badge",
        "Button Badge"
      ]
    },
    {
      title: "Printing Services",
      icon: <FaPrint className="text-3xl text-purple-600" />,
      services: [
        "Flag Printing",
        "Screen Printing",
        "Ribbon Printing",
        "Sticker Printing",
        "Seal Printing"
      ]
    },
    {
      title: "Promotional Products",
      icon: <FaMugHot className="text-3xl text-purple-600" />,
      services: [
        "T-Shirt Printing",
        "Mug Printing",
        "Bottle Printing",
        "Umbrella Printing"
      ]
    },
    {
      title: "Stationery & Office",
      icon: <FaBriefcase className="text-3xl text-purple-600" />,
      services: [
        "Visiting Card",
        "Letter Pad",
        "Bill Books",
        "Envelopes",
        "Notice",
        "Paper Bag"
      ]
    },
    {
      title: "Publications",
      icon: <FaBook className="text-3xl text-purple-600" />,
      services: [
        "School Diary",
        "Supplement",
        "Brochure",
        "Magazine"
      ]
    },
    {
      title: "Other Products",
      icon: <FaTshirt className="text-3xl text-purple-600" />,
      services: [
        "Students Belt",
        "Photo Frame"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-purple-600 to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Premium printing solutions for all your personal and business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Printing Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From corporate branding to personal items, we deliver quality prints with precision and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="text-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold mt-4 mb-4">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.services.map((service, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your requirements and provide expert recommendations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Production</h3>
              <p className="text-gray-600">Our team creates your products with attention to detail and quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">We ensure timely delivery of your finished products</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote on any of our printing services
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-8">
                Contact Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" outline className="border-white text-white hover:bg-white/10 px-8">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}