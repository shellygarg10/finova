import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-800">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card
                className="p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                key={index}
              >
                <CardContent className="space-y-4 pt-4">
                  {feature.icon &&
                    React.cloneElement(feature.icon, {
                      className: "text-gray-600",
                    })}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-800">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 transition duration-500 ease-in-out transform border-2 border-gray-300 shadow-lg">
                  {step.icon &&
                    React.cloneElement(step.icon, {
                      className: "text-green-600",
                    })}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-800">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-black">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-800">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-800">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Finova
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <div>Start Free Trial</div>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
