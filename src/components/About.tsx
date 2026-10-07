
export default function About() {
  return (
    <div id="about" className="scroll-mt-8 bg-sage-light flex flex-row justify-left items-center mx-auto max-w-6xl p-6 md:p-8">
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="section-head">ABOUT</h1>
        <h3>A little about me</h3>
        <p>I am a recent Computer Science Graduate from Northeastern University who's
          passsionate about building products that make people's lives better. lorem
          ipsum dolor sit amet consectetur adipiscing elit ut est et deserunt voluptas
          nulla ea tempore voluptas nihil commodo minus reprehenderit optio nostrud aut
          nisi nulla consectetur ad do cillum est fuga incididunt quibusdam pariatur
          qui cupiditate amet eos omnis et provident corrupti provident consequatur
          officia officia consectetur deleniti laboris
        </p>
      </div>
      <div className="w-1/2">
        {/* Insert About Image Here */}
      </div>
    </div>
  );
}