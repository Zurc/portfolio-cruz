"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Service } from "@/types";
import { getImagePath } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-100 p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="mb-4">
        {typeof service.icon === "string" ? (
          <img
            src={getImagePath(service.icon)}
            alt={service.title}
            width={64}
            height={64}
            className="mx-auto mb-8"
          />
        ) : (
          <div className="text-5xl">{service.icon}</div>
        )}
      </div>

      <h3 className="text-3xl font-semibold text-dark-800 mb-4">
        {service.title}
      </h3>

      <p className="text-dark-600 mb-6 leading-relaxed">
        {service.description}
      </p>

      <Link
        href={service.link}
        className="inline-flex items-center gap-2 text-teal-700 font-medium hover:text-secondary-600 transition-colors group-hover:gap-3"
      >
        View Projects
        <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}
