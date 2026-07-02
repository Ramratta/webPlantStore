import { topSellingProducts } from "../data";

export default function TopSellingSection() {
  return (
    <section className="py-24 bg-[#1B2316]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-4 text-center sm:text-left">
          <h2 className="text-5xl font-bold text-white">Our Top Selling</h2>
          <p className="text-gray-400 max-w-2xl">
            Browse our best-selling indoor plants loved by thousands for their beauty and air-purifying benefits.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {topSellingProducts.map((product) => (
            <article key={product.title} className="rounded-3xl bg-[#1B2316] p-6 shadow-lg transition hover:shadow-2xl">
              <img src={product.image} alt={product.title} className="h-60 w-full rounded-2xl object-cover" />
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                <p className="text-sm text-gray-400">{product.subtitle}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-green-800">{product.price}</span>
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-green-800 text-white">+</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
