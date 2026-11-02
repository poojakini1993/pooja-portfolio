"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="portfolio-page not-found-page min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-neutral-950 dark:via-purple-950 dark:to-blue-950 flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Abstract Face Artwork */}
          <div className="relative w-64 h-80 mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/art-face.jpg"
              alt="Creative abstract face artwork"
              fill
              className="object-cover"
              priority
              sizes="256px"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100"
          >
            Oops! You&apos;ve Discovered a Creative Detour
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto"
          >
            This page doesn&apos;t exist, but you&apos;ve found a piece of Pooja&apos;s creative world. 
            While you&apos;re here, enjoy this abstract artwork before heading back!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Home className="w-5 h-5" /> Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" /> Go Back
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}
