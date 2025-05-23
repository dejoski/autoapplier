// This is a very simplified mock-up for UI demonstration.
// A real e-commerce platform would have much more complex state management, components, and data fetching.

const sampleProducts = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Experience immersive sound with our noise-cancelling headphones.',
    price: '199.99',
    image: 'https://via.placeholder.com/300x300.png?text=Headphones',
    colors: ['Black', 'White', 'Blue'],
  },
  {
    id: '2',
    name: 'Smart Fitness Tracker',
    description: 'Monitor your health and fitness goals with this sleek tracker.',
    price: '79.50',
    image: 'https://via.placeholder.com/300x300.png?text=Fitness+Tracker',
    colors: ['Black', 'Pink', 'Teal'],
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    description: 'Stay comfortable and productive with our ergonomic chair.',
    price: '249.00',
    image: 'https://via.placeholder.com/300x300.png?text=Office+Chair',
    colors: ['Gray', 'Black'],
  },
  {
    id: '4',
    name: 'Ultra HD 4K Monitor',
    description: 'Crisp visuals for work and play on this stunning 4K display.',
    price: '399.00',
    image: 'https://via.placeholder.com/300x300.png?text=4K+Monitor',
    colors: ['Black'],
  },
];

export default function WebAppsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-700 to-indigo-900 text-white p-4 sm:p-8">
      <header className="mb-12">
        <div className="container mx-auto flex justify-between items-center py-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-yellow-300">
            ElectroShop
          </h1>
          <nav className="space-x-6">
            {['Home', 'Products', 'Deals', 'Cart (0)'].map((item) => (
              <a key={item} href="#" className="text-lg hover:text-yellow-300 transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-sky-200 max-w-2xl mx-auto">
            Discover our latest collection of cutting-edge electronics and accessories.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sampleProducts.map((product) => (
            <div key={product.id} className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/30">
              <div className="relative w-full aspect-square overflow-hidden">
                {/* Using an img tag for placeholder, Next/Image would be used for real images */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-yellow-300">{product.name}</h3>
                <p className="text-sky-100 text-sm mb-4 flex-grow">
                  {product.description}
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">${product.price}</span>
                </div>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105">
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="text-center mt-20 py-10 border-t border-sky-600/50 text-sky-300">
        <p>&copy; {new Date().getFullYear()} ElectroShop. Your trusted tech store.</p>
      </footer>
    </div>
  );
} 