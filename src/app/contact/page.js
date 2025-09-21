"use client";
import Swal from "sweetalert2";
import { useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  // ✅ Reusable Toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      phone: e.target.phone.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        Toast.fire({
          icon: "success",
          title: "Message sent successfully!",
        });
        e.target.reset();
      } else {
        Toast.fire({
          icon: "error",
          title: data.error || "❌ Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setLoading(false);
      Toast.fire({
        icon: "error",
        title: "❌ Something went wrong. Please try again later.",
      });
    }
  }
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Contact Two Prints</h1>
         <p className="text-lg">
           Have a question or a project in mind? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="text-gray-600">
              Whether you&apos;re looking for a quick quote, have a technical
              question, or want to discuss a custom project, our team is ready
              to help.
            </p>

            {/* Info Blocks */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <HiMail className="text-purple-600 h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-gray-600">twoprintsmji@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HiPhone className="text-purple-600 h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-gray-600">+91 8086 798 839</p>
                  <p className="text-gray-600">+91 9846 606 611</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HiLocationMarker className="text-purple-600 h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Visit Our Office</h3>
                  <p className="text-gray-600">
                    Mumbai Square
                    <br />
                    Pandikkad Road,Manjeri
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.9186645526556!2d76.11961827402186!3d11.119435452775246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba637533745dfe5%3A0xc9c6a648faae07d3!2sMumbai%20Square%20Shopping%20Complex!5e0!3m2!1sen!2sin!4v1758165116234!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-8 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-center">
                Send Us a Message
              </h2>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your Name" />
                </div>
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your Email" />
                </div>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="Your phone" />
                </div>
                <TextInput
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="subject" value="Subject" />
                </div>
                <TextInput
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Regarding a new project"
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="message" value="Your Message" />
                </div>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Leave a comment..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" color="purple" size="lg">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
