
export default function Hero() {
  return (
    <div id="home" className="scroll-mt-8 flex flex-row items-center justify-left mx-auto max-w-6xl p-6 md:p-8">
      <div className="flex-1 flex flex-col gap-2">
        <p>HI, I'M</p>
        <h1>Kyra Holmes</h1>
        <h2>Full Stack Software Engineer</h2>
        <p>I build thoughtful, user-centered products at the intersection of technology, buisness, and people.</p>
        <div className="flex flex-row gap-4 mt-4">
          <a href="https://www.linkedin.com/in/kyraholmes/" target="_blank" rel="noopener noreferrer">
            {/* Insert LinkedIn Icon Here */}
            LinkedIn
          </a>
          <a href="https://github.com/kyraholmes" target="_blank" rel="noopener noreferrer">
            {/* Insert GitHub Icon Here */}
            GitHub
          </a>
        </div>
      </div>
      <div className="w-1/2">
        {/* Insert Hero Image Here */}
      </div>
    </div>
  );
}