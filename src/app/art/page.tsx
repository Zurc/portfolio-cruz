import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FrontendPage() {
  const artProjects = projects.filter((p) => p.category === "art");

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Art</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
