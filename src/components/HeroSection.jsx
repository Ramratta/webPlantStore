export default function HeroSection() {
  return (
    <section className="bg-flower text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <div className="max-w-xl space-y-5">
            <h2 className="text-5xl font-extrabold leading-tight sm:text-6xl">Earth’s Exhale</h2>
            <p className="text-gray-200 leading-8">
              Earth Exhale brings natural calm to your home with carefully selected indoor plants that support health and style.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-green-700 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-green-800">
              Buy Now
            </button>
            <button className="rounded-full border border-green-700 px-8 py-4 text-sm text-green-700 transition hover:bg-green-100/20">
              Live Demo
            </button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-3xl bg-[#1B2316]/10 p-6">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80"
            alt="Flower hero"
            className="w-full rounded-3xl shadow-2xl"
          />
          <div className="mt-6 rounded-3xl bg-[#1B2316] p-5 shadow-inner">
            <h3 className="text-lg font-semibold text-white">Calathea Plant</h3>
            <p className="mt-2 text-sm text-gray-400">Indoor Plant</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-2xl font-bold text-green-700">$49</span>
              <button className="rounded-full bg-green-700 px-4 py-3 text-white">+</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
