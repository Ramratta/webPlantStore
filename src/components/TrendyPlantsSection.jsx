export default function TrendyPlantsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">Our Trendy Plants</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 mb-16">
          <article className="rounded-3xl bg-[#1B2316] p-10 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=900&q=80"
              alt="Fresh plant"
              className="mx-auto mb-8 w-full max-w-sm rounded-3xl shadow-2xl"
            />
            <h3 className="text-4xl font-bold text-green-900">Green decor for small spaces</h3>
            <p className="mt-6 text-gray-400 leading-8">
              Compact indoor plants that add style and freshness without taking up too much room.
            </p>
            <p className="mt-8 text-4xl font-bold text-green-800">$39.99</p>
            <div className="mt-10 flex gap-4">
              <button className="rounded-full bg-green-800 px-8 py-4 text-white transition hover:bg-green-900">Explore</button>
              <button className="flex h-14 w-14 items-center justify-center rounded-full border border-green-800 text-green-800 text-2xl">→</button>
            </div>
          </article>

          <article className="rounded-3xl bg-[#1B2316] p-10 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80"
              alt="Decorative plant"
              className="mx-auto mb-8 w-full max-w-sm rounded-3xl shadow-2xl"
            />
            <h3 className="text-4xl font-bold text-green-900">Office plants with impact</h3>
            <p className="mt-6 text-gray-400 leading-8">
              Carefully selected plants that brighten workspaces and improve air quality.
            </p>
            <p className="mt-8 text-4xl font-bold text-green-800">$59.99</p>
            <div className="mt-10 flex gap-4">
              <button className="rounded-full bg-green-800 px-8 py-4 text-white transition hover:bg-green-900">Explore</button>
              <button className="flex h-14 w-14 items-center justify-center rounded-full border border-green-800 text-green-800 text-2xl">→</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
