import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      name: "Sisphus",
      description: "A web application that allows users to track their daily tasks and habits.",
      technologies: ["React", "TypeScript", "TailwindCSS"]
    },
    {
      name: "Portfolio",
      description: "My personal portfolio website built with React and TailwindCSS.",
      technologies: ["React", "TypeScript", "TailwindCSS"]
    },
    {
      name: "Doodle Down the Lane",
      description: "A collaborative drawing application that allows users to draw together in real-time.",
      technologies: ["React", "TypeScript", "Socket.io"]
    }
  ]
  return (
    <div id="projects" className="scroll-mt-8 flex flex-col items-left justify-center mx-auto max-w-6xl p-6 md:p-8">
      <h1 className="section-head">PROJECTS</h1>
      <h3>Things I've built</h3>
      <div className="flex flex-row gap-4 mt-4">
        {projects.map((project) => (
          <div key={project.name}>
            <ProjectCard name={project.name} description={project.description} technologies={project.technologies} />
          </div>
        ))}
      </div>
    </div>
  );
}