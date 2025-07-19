"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-emerald-400 to-indigo-600 text-white py-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Creative Professional
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Frontend Developer • UX/UI Designer • Digital Artist
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore My Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
