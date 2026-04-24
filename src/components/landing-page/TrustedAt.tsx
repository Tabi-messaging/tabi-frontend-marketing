const teams = [
  "/images/teams/axia-hub.svg",
  "/images/teams/psirs.svg",
  "/images/teams/qeda.svg",
  "/images/teams/hectegy.svg",
];

function TrustedAt() {
  return (
    <section
      aria-label="Trusted by teams"
      className="flex w-full flex-col items-center px-4 pb-15 sm:px-11.25"
    >
      <h2 className="mb-8  text-center font-medium text-black leading-tight">
        Trusted by many
      </h2>
      <div className="flex items-center justify-center gap-10  max-w-5xl">
        {teams.map((team) => (
          <div key={team} className="mb-6 flex justify-center">
            <img
              src={team}
              alt={`Trusted by ${team.split("/").pop()?.split("-").join(" ")}`}
              className="h-auto w-full object-contain object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedAt;
