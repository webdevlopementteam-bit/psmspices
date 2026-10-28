import AboutCompany from "../components/AboutCompany";
import Counter from "../components/Counter";
import PageBanner from "../components/PageBanner";
import WhyChooseUs from "../components/WhyChooseUs";

export const metadata = {
  title: "About Us – psmspices.com",
};

const stats = [
  { label: "Happy Customer", value: 5600 },
  { label: "Spices", value: 30 },
  { label: "Year of Expriences", value: 10 },
  { label: "Valuable Prices", value: 100 },
];

export default function AboutUsPage() {
  return (
    <>
      <PageBanner title="About Us" image="/images/banner-about.webp" />
      <AboutCompany />

      <section
        className="relative my-[60px] flex min-h-[480px] items-center bg-cover bg-center md:my-[100px]"
        style={{ backgroundImage: "url(/images/services-bg.webp)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto w-full max-w-[1140px] px-[20px] py-[40px] text-center text-white">
          <h1 className="mb-5 text-[32px] font-bold md:text-[40px]">About Services</h1>
          <p className="mx-auto mb-12 max-w-[900px] leading-[1.65]">
            As a leading spice manufacturer in India, our brand has always been driven by a singular
            passion to share the unique taste of our country with the world. We&apos;re grateful for
            the unwavering support of our fellow Indians, without whom our journey would not have
            been possible.
          </p>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map(({ label, value }) => (
              <div key={label}>
                <div className="text-[48px] leading-none font-semibold md:text-[69px]">
                  <Counter to={value} />+
                </div>
                <div className="mt-2 text-[19px]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
}
