// src/app/about-us/page.jsx
export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-center">About Us</h1>

      <section>
        <p className="text-gray-700 leading-relaxed text-lg">
          PT. Global Sejahtera Perkasa was founded with a mission to provide high-quality resin products...
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-gray-600">Founded in 2007, our journey has led us through rapid growth...</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-gray-600">Quality, safety, and sustainability are at the heart of our operations...</p>
        </div>
      </section>
    </div>
  );
}
