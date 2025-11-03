// src/components/SmileLanding.tsx
"use client";

import React from "react";
import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";
import { Phone, Scan, Camera, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function SmileLanding() {
  const simulatorUrl = "/smile-simulator";

  const steps = [
    { icon: Phone, text: "Grab your phone" },
    { icon: Scan, text: "Open your camera and scan the QR code" },
    { icon: Camera, text: "Snap a quick selfie" },
    { icon: Sparkles, text: "See your smile transformation — instantly! your phone" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT – QR + Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <QRCode value={simulatorUrl} size={220} />
          </div>

          <Button asChild size="lg" className="w-full max-w-xs font-medium">
            <Link href={simulatorUrl} target="_blank" rel="noopener noreferrer">
              Scan Now
            </Link>
          </Button>
        </motion.div>

        {/* RIGHT – Title + Steps */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            See Your Invisalign® Smile in Seconds!
          </h1>

          <ol className="space-y-5 text-lg text-gray-700">
            {steps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-4"
              >
                <step.icon className="w-7 h-7 text-indigo-600 flex-shrink-0" />
                <span>
                  <strong className="text-indigo-600">{i + 1}.</strong> {step.text}
                </span>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}