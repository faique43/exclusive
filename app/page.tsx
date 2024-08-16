import ProductCard from "@/components/global/ProductCard";
import { allProducts } from "@/constants/products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Welcome to the store</h1>
      <section className="grid grid-cols-2 gap-4">
        {allProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
            discount={product.discount}
            numberOfReviews={product.numberOfReviews}
            new={product.new}
          />
        ))}
      </section>
    </main>
  );
}
