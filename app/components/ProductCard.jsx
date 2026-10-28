import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="m-[15px] rounded-[3px] border border-[#C4C4C4] p-[10px] text-center">
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={327}
        height={388}
        className="mb-[15px] h-auto w-full"
      />
      <h5 className="mb-[10px] font-rubik text-[18px] font-semibold text-[#FF0000]">{product.name}</h5>
      <p className="text-[15px] leading-[1.7] font-medium text-heading">
        {product.price && (
          <>
            Price:- {product.price}
            <br />
          </>
        )}
        Available:- {product.available}
      </p>
    </div>
  );
}

export function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.image} product={product} />
      ))}
    </div>
  );
}
