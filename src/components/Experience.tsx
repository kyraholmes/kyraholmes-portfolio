
export default function Experience() {
  const experiences = [
    {
      company: "Babel Street",
      role: "Software Engineer Co-op",
      duration: "July 2025 - December 2025",
      description: "Full stack software engineer working on a web application that provides data analytics and visualization tools for social media and news data."
    },
    {
      company: "Khoury College of Computer Sciences",
      role: "Computer Science II Teaching Assistant & Lab Lead",
      duration: "January 2025 - May 2025",
    }
  ]
  return (
    <div id="experience" className="scroll-mt-8 bg-warm-beige flex flex-col items-left justify-center mx-auto max-w-6xl p-6 md:p-8">
      <h1 className="section-head">EXPERIENCE</h1>
      <p>Where I've Worked</p>
      <div className="flex flex-col gap-4 mt-4">
        {experiences.map((experience) => (
          <div key={experience.company} className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-top">
              <div>
                <h2>{experience.company}</h2>
                <h3>{experience.role}</h3>
              </div>
              <h4>{experience.duration}</h4>
            </div>
            {experience.description && <p>{experience.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}