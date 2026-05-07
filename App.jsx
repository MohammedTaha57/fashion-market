export default function FashionMarket() {
  const products = [
    {
      name: "Luxury Black Jacket",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Premium Streetwear",
      price: "$99",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Modern Fashion Fit",
      price: "$129",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/70">
        <h1 className="text-2xl md:text-3xl font-bold tracking-[0.3em] uppercase">
          Fashion Market
        </h1>

        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest text-white/70">
          <a href="#home" className="hover:text-white transition-all duration-300">
            Home
          </a>
          <a href="#collection" className="hover:text-white transition-all duration-300">
            Collection
          </a>
          <a href="#about" className="hover:text-white transition-all duration-300">
            About
          </a>
          <a href="#contact" className="hover:text-white transition-all duration-300">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center px-8 md:px-16"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1800&auto=format&fit=crop"
            alt="Fashion"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <p className="uppercase tracking-[0.5em] text-white/60 mb-6 text-sm">
            Premium Fashion Experience
          </p>

          <h2 className="text-5xl md:text-8xl font-black leading-tight uppercase">
            Modern Luxury
            <span className="block text-white/70">Fashion Store</span>
          </h2>

          <p className="mt-8 text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Elevating fashion with premium clothing, clean aesthetics, and
            modern design crafted for the next generation.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-300">
              Explore Collection
            </button>

            <button className="px-8 py-4 rounded-full border border-white/30 hover:bg-white hover:text-black transition-all duration-300">
              Watch Lookbook
            </button>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="px-8 md:px-16 py-24">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="uppercase tracking-[0.4em] text-white/50 text-sm mb-3">
              Featured Collection
            </p>
            <h3 className="text-4xl md:text-6xl font-bold">
              Trending Fashion
            </h3>
          </div>

          <p className="hidden md:block text-white/50 max-w-md">
            Carefully designed premium fashion products with elegant styling,
            luxurious aesthetics, and smooth experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[500px] w-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-semibold">{product.name}</h4>
                  <span className="text-white/70">{product.price}</span>
                </div>

                <button className="mt-6 w-full py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="px-8 md:px-16 py-10">
        <div className="rounded-[40px] border border-white/10 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1800&auto=format&fit=crop"
            alt="Luxury"
            className="w-full h-[500px] object-cover opacity-60"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/30">
            <p className="uppercase tracking-[0.4em] text-white/60 mb-5 text-sm">
              New Luxury Drop
            </p>

            <h3 className="text-4xl md:text-7xl font-black max-w-4xl leading-tight">
              Designed For The Bold Generation
            </h3>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-8 md:px-16 py-28"
      >
        <div>
          <p className="uppercase tracking-[0.4em] text-white/50 text-sm mb-4">
            About Brand
          </p>

          <h3 className="text-4xl md:text-6xl font-bold leading-tight">
            Minimal. Premium. Timeless.
          </h3>

          <p className="mt-8 text-white/70 text-lg leading-relaxed">
            Fashion Market combines premium aesthetics with modern streetwear
            culture to deliver an unforgettable luxury shopping experience.
            Every detail is crafted with clean UI, elegant visuals, and smooth
            interactions.
          </p>

          <div className="mt-10 flex gap-10">
            <div>
              <h4 className="text-4xl font-bold">10K+</h4>
              <p className="text-white/50 mt-2">Happy Customers</p>
            </div>

            <div>
              <h4 className="text-4xl font-bold">250+</h4>
              <p className="text-white/50 mt-2">Premium Products</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop"
            alt="Model"
            className="rounded-[40px] object-cover h-[700px] w-full border border-white/10"
          />
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-white/10 px-8 md:px-16 py-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold uppercase tracking-[0.3em]">
              Fashion Market
            </h4>
            <p className="text-white/50 mt-3">
              Premium Fashion Clothing Experience.
            </p>
          </div>

          <div className="flex gap-6 text-white/60 uppercase text-sm tracking-widest">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
