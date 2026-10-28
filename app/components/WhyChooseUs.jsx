import Image from "next/image";

const features = [
  {
    title: "Sustainable Practices",
    text: "We prioritize sustainability, sourcing responsibly to support both the environment and local communities.",
    image: "/images/why-1.webp",
    width: 768,
    height: 512,
  },
  {
    title: "Commitment ot quality",
    text: "We prioritize sustainability, sourcing responsibly to support both the environment and local communities.",
    image: "/images/why-2.webp",
    width: 612,
    height: 408,
  },
  {
    title: "Expertise in Spice Manufacturing",
    text: "With years of expertise, Pole Star Masala blends tradition with innovation for superior flavor profiles.",
    image: "/images/why-1.webp",
    width: 768,
    height: 512,
  },
  {
    title: "Authentic Culinary Experiences",
    text: "Pole Star Masala ensures each product delivers authentic flavors, enriching culinary creations worldwide.",
    image: "/images/why-2.webp",
    width: 612,
    height: 408,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="px-[20px] pb-[60px] md:px-[50px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h2 className="text-[30px] font-bold text-heading md:text-[35px]">Why Choose Us</h2>
        <h4 className="mb-4 text-[20px] font-semibold text-brand">
          How We Stand Out From the Crowd
        </h4>
        <p className="mx-auto mb-10 max-w-[900px] leading-[1.65]">
          &ldquo;Experience the Polestarmasala difference, built on a foundation of quality
          obsession, spice-making expertise, and a deep respect for the planet. Our dedication to
          sustainability and flavor perfection ensures that every meal is a culinary delight, every
          time&rdquo;
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group relative overflow-hidden">
            <Image
              src={f.image}
              alt={f.title}
              width={f.width}
              height={f.height}
              className="aspect-[3/2] h-auto w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#9F4103B5] p-5 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h4 className="mb-2 text-[20px] font-bold text-white">{f.title}</h4>
              <p className="text-[14px] leading-[1.5] text-white/80">{f.text}</p>
            </div>
            <h4 className="mt-3 text-center text-[18px] font-bold text-heading">{f.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
