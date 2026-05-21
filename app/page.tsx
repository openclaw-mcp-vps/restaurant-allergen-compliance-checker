export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Legal Compliance for Restaurants
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Ensure Menu{" "}
          <span className="text-[#58a6ff]">Allergen Compliance</span>{" "}
          Across All Locations
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload menus and recipes. Our engine scans for the 14 major allergens, flags violations, generates legally-required disclosure statements, and alerts you when ingredients change.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial — $19/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "OCR Menu Scanning", desc: "Upload PDFs or images. We extract and parse every ingredient automatically." },
            { icon: "⚠️", title: "Allergen Detection", desc: "Flags all 14 EU/FDA major allergens with severity levels and location context." },
            { icon: "📄", title: "Disclosure Generator", desc: "Auto-generate compliant allergen disclosure statements ready for print or web." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-bold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-24">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Pro Plan</span>
          <div className="text-5xl font-extrabold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-8">Everything you need for full compliance</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited menu uploads",
              "14 major allergen detection",
              "Auto disclosure statement generator",
              "Ingredient change tracking & alerts",
              "Multi-location dashboard",
              "PDF & CSV compliance reports",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which allergens does the system detect?",
              a: "We detect all 14 major allergens required by EU FIC regulations and the 9 major allergens under US FDA FASTER Act, including gluten, peanuts, tree nuts, milk, eggs, fish, shellfish, soy, sesame, and more."
            },
            {
              q: "What file formats can I upload?",
              a: "You can upload PDF menus, Word documents, plain text files, and images (JPG, PNG). Our OCR engine extracts ingredient data from scanned documents and photos of physical menus."
            },
            {
              q: "How does ingredient change tracking work?",
              a: "When you update a recipe or menu, AllergenGuard compares it against the previous version and immediately alerts you if any allergen status has changed, so your disclosures stay accurate and up to date."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} AllergenGuard. Built for restaurant compliance.
      </footer>
    </main>
  );
}
