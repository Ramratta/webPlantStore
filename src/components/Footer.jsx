export default function Footer() {
  return (
    <footer className="bg-[#102d18] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div>
          <h2 className="text-3xl font-bold">Plant Shop</h2>
          <p className="mt-6 leading-8 text-green-200">
            Premium indoor plants for every room and style.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold">Company</h3>
          <ul className="space-y-4 text-green-200">
            <li><a href="#" className="transition hover:text-white">About</a></li>
            <li><a href="#" className="transition hover:text-white">Shop</a></li>
            <li><a href="#" className="transition hover:text-white">Blog</a></li>
            <li><a href="#" className="transition hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold">Support</h3>
          <ul className="space-y-4 text-green-200">
            <li><a href="#" className="transition hover:text-white">Help Center</a></li>
            <li><a href="#" className="transition hover:text-white">Shipping</a></li>
            <li><a href="#" className="transition hover:text-white">Returns</a></li>
            <li><a href="#" className="transition hover:text-white">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 transition hover:bg-green-600">F</a>
            <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 transition hover:bg-green-600">I</a>
            <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 transition hover:bg-green-600">T</a>
          </div>
        </div>
      </div>
      <div className="border-t border-green-700">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-green-300">
          © 2025 Plant Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
