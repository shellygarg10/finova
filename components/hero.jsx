"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const HeroSection = () => {
  return (
    <section className="pt-40 pb-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/heroimg.png"
            width={600}
            height={600}
            alt="AI and Finance Illustration"
            className="mx-auto"
            priority
          />
        </div>
        <div className="md:w-1/2 p-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl pb-6 text-black font-bold"
          >
            Manage Your Finances <br /> with Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 mb-8 max-w-md"
          >
            An AI-powered financial management platform that helps you track,
            analyze, and optimize your spending with real-time insights.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-start space-x-4"
          >
            <SignedIn>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="px-8 bg-black text-white hover:bg-gray-800"
                >
                  Get Started
                </Button>
              </Link>
            </SignedIn>
            <SignedOut>
              <Link href="/signin">
                <Button
                  size="lg"
                  className="px-8 bg-black text-white hover:bg-gray-800"
                >
                  Get Started
                </Button>
              </Link>
            </SignedOut>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
