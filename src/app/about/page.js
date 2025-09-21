"use client"

import Link from "next/link";
import Image from "next/image";
import { Button, Card, Avatar } from "flowbite-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-purple-600 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">About Two Prints</h1>
          <p className="text-lg">
            Bringing your ideas to life with precision printing — sharp, vibrant, and professional results
            for all your print needs.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Why Choose Two Prints</h2>
            <p className="text-gray-600 mb-4">
              At Two Prints, we combine modern offset printing technology with an experienced team to deliver 
              consistent, color-accurate results. From business stationery to packaging and large-format marketing 
              materials, we treat every project with meticulous attention to detail.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                <span>High-quality, color-accurate prints</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                <span>Fast turnaround and reliable delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                <span>Sustainable paper and eco-friendly inks available</span>
              </div>
            </div>
            
            <Link href="/contact">
              <Button color="purple">Get a Free Quote</Button>
            </Link>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="h-64 w-full relative rounded-lg overflow-hidden">
              <Image src="/image/printer.jpg" alt="Printer" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-6">Meet the Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Muhammed shafeeq', role: 'Print Manager', img: '/image/shafeeq.jpg' },
              { name: 'Muhammed fauzan', role: 'Prepress Specialist', img: '/image/fauzan.jpg' },
            ].map((member) => (
              <div key={member.name} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image src={member.img} alt={member.name} fill className="object-cover rounded-full" />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-purple-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">Contact us today for a free quote on your printing project.</p>
          <Link href="/contact">
            <Button color="purple" size="lg">Contact Us</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}