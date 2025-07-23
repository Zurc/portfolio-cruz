export function generateStaticParams() {
  return projects
    .filter((project) => project.category === "frontend")
    .map((project) => ({
      id: project.id,
    }));
}
import { projects } from "@/data/projects";
import { getImagePath } from "@/lib/utils";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">{project.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 whitespace-break-spaces">
              {project.description}
            </p>
            <ul className="list-disc list-inside mb-4">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {/* <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Live
            </a> */}
          </div>
          <div className="rounded-lg">
            <img
              src={getImagePath(project.image)}
              alt={project.title}
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
