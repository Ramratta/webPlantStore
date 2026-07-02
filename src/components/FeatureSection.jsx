export default function FeatureSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80"
              alt="Fresh oxygen plant"
              className="relative rounded-[40px] shadow-2xl"
            />
          </div>

          <div>
            <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">Best seller</span>
            <h2 className="mt-8 text-5xl font-bold text-green-900">Bring fresh oxygen into your home</h2>
            <p className="mt-8 max-w-xl text-gray-600 leading-8">
              Our indoor plants are chosen for air purification, style, and easy care. They work beautifully in living rooms, bedrooms, and workspaces.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#1B2316] p-6 shadow-lg">
                <h3 className="text-3xl font-bold text-green-700">98%</h3>
                <p className="mt-2 text-sm text-gray-500">Customer satisfaction</p>
              </div>
              <div className="rounded-3xl bg-[#1B2316] p-6 shadow-lg">
                <h3 className="text-3xl font-bold text-green-700">24h</h3>
                <p className="mt-2 text-sm text-gray-500">Fast delivery</p>
              </div>
            </div>

            <button className="mt-10 rounded-full bg-green-800 px-10 py-4 text-white transition hover:bg-green-900">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
