import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FrontendPage() {
  const frontendProjects = projects.filter((p) => p.category === "frontend");

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Frontend Development
        </h1>
        <p className="mb-10 text-center max-w-3xl mx-auto text-1.2rem text-gray-500">
          I design and develop modern, responsive web applications by leveraging
          the latest technologies and industry best practices. I prioritize
          clean, maintainable code, optimal performance, and delivering
          exceptional user experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frontendProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
