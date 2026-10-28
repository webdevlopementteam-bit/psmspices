import { products } from "../data";
import PageBanner from "../components/PageBanner";
import { ProductGrid } from "../components/ProductCard";

export const metadata = {
  title: "Products – psmspices.com",
};

export default function ProductPage() {
  return (
    <>
      <PageBanner title="Products" image="/images/banner-products.webp" />
      <section className="px-0 py-[50px] md:px-[50px]">
        <ProductGrid products={products} />
      </section>
    </>
  );
}
