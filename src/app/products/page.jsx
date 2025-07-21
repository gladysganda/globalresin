export default function Products() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Product A</h2>
          <p>High-performance resin suitable for industrial coating.</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Product B</h2>
          <p>Eco-friendly resin designed for composite materials.</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Product C</h2>
          <p>Durable resin ideal for automotive and marine applications.</p>
        </div>
      </div>
    </section>
  );
}