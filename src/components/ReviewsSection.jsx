import { reviews } from "../data";

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-green-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-white mb-16">
          <h2 className="text-5xl font-bold">What Our Customers Say</h2>
          <p className="mt-5 text-gray-200 max-w-2xl mx-auto">
            Customers love our plants for their quality, packaging, and fast delivery.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-3xl bg-[#1B2316] p-8 shadow-xl">
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{review.name}</h3>
                  <p className="text-gray-400">{review.role}</p>
                </div>
              </div>
              <p className="mt-6 text-gray-300 leading-8">{review.quote}</p>
              <div className="mt-6 text-yellow-400">★★★★★</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
