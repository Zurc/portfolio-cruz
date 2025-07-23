"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";
import { getImagePath } from "@/lib/utils";
interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div
        className="relative h-48 overflow-hidden"
        style={{ position: "relative", width: "500px", height: "300px" }}
      >
        <img
          src={getImagePath(project.image)}
          alt={project.title}
          className="object-cover h-full w-full hover:scale-105 transition-transform duration-300"
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-dark-800 mb-2">
          {project.title}
        </h3>

        <p className="text-dark-600 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{ background: "#2b8091", color: "#fff" }}
              className="px-3 py-1 bg-secondary-500 text-white text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.link && (
            <Link
              href={`/${project.category}/${project.id}`}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ExternalLink size={16} />
              View Project
            </Link>
          )}

          {project.github && (
            <Link
              href={project.github}
              passHref
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-dark-600 hover:text-dark-800 transition-colors"
            >
              <Github size={16} />
              Code
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
