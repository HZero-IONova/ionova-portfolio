import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Responsive",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-accent to-magenta -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-primary uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-primary -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
