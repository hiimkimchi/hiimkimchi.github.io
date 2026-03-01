import BottomBar from "../components/BottomBar";
import BackToHome from "../components/BackToHome";
import ProjectCard from "../components/ProjectCard";
import { ProjectCardType } from "../models/projects";

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
              Things I've Built
            </h1>
          </div>

          <div className="grid gap-4 sm:gap-5">
            <ProjectCard
              title="Sync.EQ"
              repoUrl="https://github.com/hiimkimchi/Sync.EQ-Prototype"
              tagline="Equalize Your Connections"
              type={ProjectCardType.REPO}
              description="A social platform for creatives specifically looking to connect with others interested in music, film, art, design, etc."
              techs={["Node.js", "Express", "Angular", "MongoDB", "Auth0", "Azure", "Docker"]}
            />
            <ProjectCard
              title="This Website"
              repoUrl="https://github.com/hiimkimchi/hiimkimchi.github.io"
              tagline="My Personal Website"
              type={ProjectCardType.REPO}
              description="This website you're currently on! Heavily inspired by the Nintendo Wii."
              techs={["React", "Tailwind", "Vite"]}
            />
            <ProjectCard
              title="VetRec"
              repoUrl="https://app.vetrec.io"
              tagline="Current Employer"
              type={ProjectCardType.WEBSITE}
              description="Contributed to user personalization and workflow features (style customization, templates refactor, etc.) and main workflow improvements pertaining to clinical accuracy and latency improvements."
              techs={[]}
            />
            <p className="text-gray-500 text-sm sm:text-base text-center">
              and more! will add them when i remember to come back and edit this website
            </p>
          </div>

          <BackToHome />
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
