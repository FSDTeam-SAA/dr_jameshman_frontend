"use client";

import React from "react";
import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";
import { Phone, Camera, Sparkles, ScanLine } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function SmileLanding() {
  // Change this to your real domain
  const simulatorUrl = "https://yourwebsite.com/smile-simulator";

  const steps = [
    { icon: Phone, text: "Grab your phone" },
    { icon: ScanLine, text: "Open your camera and scan the QR code" },
    { icon: Camera, text: "Snap a quick selfie" },
    { icon: Sparkles, text: "See your smile transformation — instantly! your phone" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* ---- LEFT: QR + Scan Now ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <QRCode value={simulatorUrl} size={220} />
          </div>

          <Button asChild size="lg" className="w-full max-w-xs">
            <Link href="/smile-simulator" target="_blank" rel="noopener noreferrer">
              Scan Now
            </Link>
          </Button>
        </motion.div>

        {/* ---- RIGHT: Title + Steps ---- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            See Your Invisalign® Smile in Seconds!
          </h1>

          <ol className="space-y-4 text-lg text-gray-700">
            {steps.map((step, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="flex items-center gap-3"
                role="listitem"
              >
                <step.icon className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                <span>
                  <strong>{idx + 1}.</strong> {step.text}
                </span>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}