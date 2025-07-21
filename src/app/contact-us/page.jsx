export default function ContactUs() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4 max-w-xl">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32"></textarea>
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded">Send Message</button>
      </form>
    </section>
  );
}