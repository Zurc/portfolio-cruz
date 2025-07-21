import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FrontendPage() {
  const uxuiProjects = projects.filter((p) => p.category === "uxui");

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">UX/UI Design</h1>
        <p className="mb-10 text-center max-w-3xl mx-auto text-1.2rem text-gray-500">
          I craft intuitive and visually engaging designs by applying
          user-centered principles and the latest industry trends. My focus is
          on creating seamless experiences, clear visual hierarchy, and
          aesthetically compelling interfaces that align with users’ needs and
          project goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uxuiProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
