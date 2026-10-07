interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
}
export default function ProjectCard(
  { name, description, technologies }: ProjectCardProps) {
  return (
    <div className="h-64 w-64 bg-gray-200 rounded-lg shadow-md p-4">
      <h4>{name}</h4>
      <p>{description}</p>
      <ul>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}