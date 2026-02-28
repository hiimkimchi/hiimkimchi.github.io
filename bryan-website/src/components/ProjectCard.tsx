interface ProjectCardProps {
  title: string;
  repoUrl?: string;
  tagline?: string;
  description: string;
  techs: string[];
}

export default function ProjectCard({
  title,
  repoUrl,
  tagline,
  description,
  techs,
}: ProjectCardProps) {
  return (
    <section className="bg-white/40 backdrop-blur-sm rounded-xl px-5 py-4 sm:px-6 sm:py-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          {title}
        </h2>
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm font-semibold text-wii-ring hover:text-sky-600 underline underline-offset-2"
          >
            View on GitHub →
          </a>
        )}
      </div>
      {tagline && (
        <p className="text-sm font-medium text-amber-700/90 mb-2">
          {tagline}
        </p>
      )}
      <p className="text-gray-600 text-sm sm:text-base mb-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {techs.map((tech) => (
          <span
            key={tech}
            className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-gray-200/80 text-gray-700 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
