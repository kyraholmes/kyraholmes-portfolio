
export default function Navbar() {
  const links = [
    { name: "Home", scrollTo: "home" },
    { name: "About", scrollTo: "about" },
    { name: "Projects", scrollTo: "projects" },
    { name: "Experience", scrollTo: "experience" },
    { name: "Contact", scrollTo: "contact" }
  ]

  return (
    <div className="sticky top-0 z-50 bg-cream mx-auto max-w-6xl px-6 md:px-8 h-16">
      <div className="flex flex-row justify-between items-center h-full">
        <h1>Kyra Holmes</h1>
        <div className="flex flex-row justify-center items-center gap-4">
          {links.map((link) => (
            <a key={link.name} href={`#${link.scrollTo}`} className="font-serif">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}