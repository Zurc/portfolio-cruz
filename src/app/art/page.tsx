import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FrontendPage() {
  const artProjects = projects.filter((p) => p.category === "art");

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Art</h1>
        <p className="mb-10 text-center max-w-3xl mx-auto text-1.2rem text-gray-500">
          With gratitude and a deep love for nature, I aim to share the beauty
          and art that inspire us all. I believe in creating with joy and hope,
          striving each day to contribute to a better world through my passion
          for art and
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
