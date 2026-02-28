import BottomBar from "../components/BottomBar";
import BackToHome from "../components/BackToHome";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="wii-bg min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16 py-10">
        <div className="w-full max-w-3xl px-2 sm:px-4">
          <div className="text-center mb-8">
            <p className="text-s font-semibold tracking-[0.25em] text-wii-ring mb-1">
              PROJECTS CHANNEL
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Things I've built and shipped.
            </h1>
          </div>

          <div className="grid gap-4 sm:gap-5">
            <ProjectCard
              title="Sync.EQ"
              repoUrl="https://github.com/hiimkimchi/Sync.EQ-Prototype"
              tagline="Equalize Your Connections"
              description="A social platform for creatives — built with a Node/Express backend, Angular frontend, MongoDB, Auth0, and Azure Storage."
              techs={["Node.js", "Express", "Angular", "MongoDB", "Auth0", "Azure", "Docker"]}
            />
          </div>

          <BackToHome />
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
