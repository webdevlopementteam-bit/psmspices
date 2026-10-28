import Image from "next/image";

export default function AboutCompany() {
  return (
    <section className="p-[20px] md:p-[50px]">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-0">
        <div className="relative pr-[15%] pb-[60px]">
          <div className="border-2 border-brand p-[10px]">
            <Image
              src="/images/about-main.webp"
              alt="Variety of Indian spices"
              width={2560}
              height={1600}
              className="h-auto w-full"
            />
          </div>
          <Image
            src="/images/about-small.webp"
            alt="Colorful herbs and spices"
            width={300}
            height={200}
            className="absolute right-0 bottom-0 h-auto w-[42%]"
          />
        </div>

        <div className="md:pl-[57px]">
          <h4 className="mb-[10px] text-[20px] font-semibold text-heading">About Our Company</h4>
          <h2 className="mb-5 text-[30px] leading-[1.3] font-bold text-heading md:text-[35px]">
            Healthy Eating Begins with Whole Spices
          </h2>
          <p className="leading-[1.65]">
            In India, the concept of taste is deeply intertwined with the richness of spices. As one
            of the oldest civilizations, India was among the pioneers in unlocking the medicinal
            properties of spices. Pole Star Masala has emerged as a benchmark for showcasing the
            authentic flavor of India&apos;s exotic spices to the nation and the world. As a leading
            spice manufacturer in India, our brand has always been driven by a singular passion to
            share the unique taste of our country with the world. We&apos;re grateful for the
            unwavering support of our fellow Indians, without whom our journey would not have been
            possible.
          </p>
        </div>
      </div>
    </section>
  );
}
