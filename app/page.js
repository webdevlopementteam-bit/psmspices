import Image from "next/image";
import Link from "next/link";
import { homeProducts } from "./data";
import AboutCompany from "./components/AboutCompany";
import { preconnect } from "react-dom";
import { ProductGrid } from "./components/ProductCard";
import { PlusIcon } from "./components/Icons";

const HERO_VIDEO_ID = "LDa7YDig9SE";

const gallery = [
  { src: "/images/gallery-1.webp", width: 1522, height: 767 },
  { src: "/images/gallery-2.webp", width: 1589, height: 794 },
];

function Hero() {
  // Start connecting to YouTube while the page loads so the video begins sooner.
  preconnect("https://www.youtube.com");
  preconnect("https://i.ytimg.com");

  return (
    <section className="relative min-h-[280px] overflow-hidden bg-black md:min-h-[560px]">
      <iframe
        title="PSM Spices"
        src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1`}
        allow="autoplay; encrypted-media"
        className="pointer-events-none absolute top-1/2 left-1/2 aspect-video min-h-full w-[max(100%,177.78vh)] -translate-x-1/2 -translate-y-1/2 border-0"
      />
    </section>
  );
}

function Gallery() {
  return (
    <section className="mx-auto max-w-[1140px] px-[10px] pt-[50px]">
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
        {gallery.map((img) => (
          <a
            key={img.src}
            href={img.src}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden"
          >
            <Image
              src={img.src}
              alt=""
              width={img.width}
              height={img.height}
              className="h-auto w-full"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <PlusIcon className="h-8 w-8" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section
      className="relative my-[80px] flex min-h-[400px] items-center bg-cover bg-center"
      style={{ backgroundImage: "url(/images/offer-bg.webp)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative w-full p-[30px] md:w-[60%] md:p-[72px]">
        <p className="mb-[10px] text-[25px] font-medium text-white">PSM Spices</p>
        <h1 className="mb-2 text-[32px] leading-[1.2] font-extrabold text-[#F5B600] md:text-[40px]">
          Get 10% off
          <br />
          On all Spicy &amp; Herbs
        </h1>
        <div className="text-[18px] leading-[1.5] font-medium text-white">
          <p>Lorem ipsum has become the industry standard for design mockups and</p>
          <p>prototypes. By adding a little bit of Latin to a mockup.</p>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <>
      <section className="mx-auto max-w-[1140px] px-[30px] pt-[80px] pb-0 text-center md:pt-[20px]">
        <h2 className="text-[31px] font-bold text-heading">Products</h2>
        <div className="py-[15px]">
          <span className="mx-auto block w-[18%] border-t border-black" />
        </div>
      </section>

      <section className="px-0 pb-[50px] md:px-[50px]">
        <ProductGrid products={homeProducts} />
        <div className="pt-[20px] text-center">
          <Link
            href="/product"
            className="inline-block bg-[#DE0005] px-[20px] py-[15px] text-[18px] leading-none text-white transition-colors hover:bg-[#ECAF00]"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <AboutCompany />
      <Offer />
      <Products />
    </>
  );
}
