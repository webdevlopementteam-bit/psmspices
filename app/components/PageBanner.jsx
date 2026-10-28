export default function PageBanner({ title, image }) {
  return (
    <section
      className="relative flex min-h-[250px] items-center justify-center bg-cover bg-center md:min-h-[400px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <h1 className="relative font-[Helvetica,Arial,sans-serif] text-[40px] font-bold text-white md:text-[50px]">
        {title}
      </h1>
    </section>
  );
}
