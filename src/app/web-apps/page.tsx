'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  colors: string[]
  category: string
  rating: number
  reviews: number
  inStock: boolean
  featured: boolean
}

interface CartItem extends Product {
  quantity: number
  selectedColor: string
}

const allProducts: Product[] = [
  {
    id: '1',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Industry-leading noise canceling with crystal clear hands-free calling. 30-hour battery life with quick charge.',
    price: 348.00,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=300&h=300&fit=crop&q=80',
    colors: ['Midnight Black', 'Smoky Pink'],
    category: 'Audio',
    rating: 4.8,
    reviews: 15847,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Samsung Galaxy Watch6 Classic',
    description: 'Premium smartwatch with rotating bezel, advanced health monitoring, and all-day battery life.',
    price: 329.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&q=80',
    colors: ['Graphite', 'Silver'],
    category: 'Wearables',
    rating: 4.6,
    reviews: 8234,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Samsung Galaxy S24 Ultra',
    description: '200MP camera, S Pen included, Titanium build, 6.8" Dynamic AMOLED display with 120Hz refresh rate.',
    price: 1199.99,
    originalPrice: 1299.99,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop&q=80',
    colors: ['Titanium Black', 'Titanium Gray', 'Titanium Violet'],
    category: 'Electronics',
    rating: 4.9,
    reviews: 12456,
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Apple iPhone 15 Pro Max',
    description: 'Titanium design, A17 Pro chip, 5x Telephoto camera, and Action Button. Available in 256GB, 512GB, and 1TB.',
    price: 1199.00,
    image: 'https://images.unsplash.com/photo-1696446700206-318470652bb2?w=300&h=300&fit=crop&q=80',
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    category: 'Electronics',
    rating: 4.8,
    reviews: 18934,
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Sony WH-1000XM6 Wireless Headphones',
    description: 'Next-gen noise canceling with QN3 HD chip, 7x faster ANC, foldable design, and 30-hour battery.',
    price: 449.00,
    image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=300&h=300&fit=crop&q=80',
    colors: ['Midnight Black', 'Platinum Silver'],
    category: 'Audio',
    rating: 4.9,
    reviews: 2847,
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Apple AirPods Pro (2nd generation)',
    description: 'Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio with MagSafe charging.',
    price: 229.00,
    originalPrice: 249.00,
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=300&h=300&fit=crop&q=80',
    colors: ['White'],
    category: 'Audio',
    rating: 4.7,
    reviews: 24891,
    inStock: true,
    featured: false
  },
  {
    id: '7',
    name: 'Google Pixel 8 Pro',
    description: 'AI-powered photography, Magic Eraser, 6.7" LTPO OLED display, and 7 years of OS updates.',
    price: 899.00,
    originalPrice: 999.00,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&q=80',
    colors: ['Obsidian', 'Porcelain', 'Bay'],
    category: 'Electronics',
    rating: 4.6,
    reviews: 7234,
    inStock: true,
    featured: false
  },
  {
    id: '8',
    name: 'Apple Watch Series 10',
    description: 'Thinnest Apple Watch ever, larger display, faster charging, and new health features.',
    price: 399.00,
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=300&h=300&fit=crop&q=80',
    colors: ['Aluminum', 'Stainless Steel', 'Titanium'],
    category: 'Wearables',
    rating: 4.8,
    reviews: 11567,
    inStock: true,
    featured: false
  },
  {
    id: '9',
    name: 'NVIDIA RTX 4080 SUPER Graphics Card',
    description: 'Ultimate gaming performance with DLSS 3, Ray Tracing, and AV1 encoding for 4K gaming.',
    price: 999.00,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=300&fit=crop&q=80',
    colors: ['Black'],
    category: 'Gaming',
    rating: 4.9,
    reviews: 3456,
    inStock: false,
    featured: false
  },
  {
    id: '10',
    name: 'Razer DeathAdder V3 Pro Gaming Mouse',
    description: 'Professional esports mouse with Focus Pro 30K sensor, 90-hour battery, and HyperSpeed wireless.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop&q=80',
    colors: ['Black', 'White'],
    category: 'Gaming',
    rating: 4.7,
    reviews: 5678,
    inStock: true,
    featured: false
  },
  {
    id: '11',
    name: 'Anker PowerCore 10000 Portable Charger',
    description: 'Ultra-compact power bank with PowerIQ and VoltageBoost technology for optimized charging.',
    price: 24.99,
    originalPrice: 35.99,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop&q=80',
    colors: ['Black', 'White', 'Blue'],
    category: 'Accessories',
    rating: 4.5,
    reviews: 18765,
    inStock: true,
    featured: false
  },
  {
    id: '12',
    name: 'Samsung Galaxy Buds3 Pro',
    description: 'Premium earbuds with Adaptive ANC, 360 Audio, and seamless Galaxy device integration.',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop&q=80',
    colors: ['Silver', 'White'],
    category: 'Audio',
    rating: 4.6,
    reviews: 6789,
    inStock: true,
    featured: false
  }
]

const categories = ['All', 'Audio', 'Wearables', 'Electronics', 'Gaming', 'Accessories']

export default function WebAppsPage() {
  const [products, setProducts] = useState<Product[]>(allProducts)
  const [cart, setCart] = useState<CartItem[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [sortBy, setSortBy] = useState<string>('featured')
  const [showCart, setShowCart] = useState<boolean>(false)
  const [showCheckout, setShowCheckout] = useState<boolean>(false)

  // Filter and sort products
  useEffect(() => {
    let filtered = allProducts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default: // featured
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    setProducts(filtered)
  }, [searchTerm, selectedCategory, sortBy])

  const addToCart = (product: Product, selectedColor: string = product.colors[0]) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.id === product.id && item.selectedColor === selectedColor
      )
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1, selectedColor }]
      }
    })
  }

  const removeFromCart = (productId: string, selectedColor: string) => {
    setCart(prevCart => prevCart.filter(item => 
      !(item.id === productId && item.selectedColor === selectedColor)
    ))
  }

  const updateQuantity = (productId: string, selectedColor: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, selectedColor)
      return
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.selectedColor === selectedColor
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0)
  const getTotalPrice = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0)

  const clearCart = () => setCart([])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-700 to-indigo-900 text-white">
      {/* Header */}
      <header className="sticky top-0 bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-yellow-300">
              TechHub Pro
            </h1>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <input
                type="text"
                placeholder="Search electronics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative text-lg hover:text-yellow-300 transition-colors"
              >
                🛒 Cart ({getTotalItems()})
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black font-semibold'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-white/60">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="w-full max-w-md bg-slate-900 h-full overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Shopping Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-2xl hover:text-red-400"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-center text-gray-400 py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <CartItemComponent
                        key={`${item.id}-${item.selectedColor}`}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeFromCart}
                      />
                    ))}
                  </div>

                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold">Total: ${getTotalPrice().toFixed(2)}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          setShowCheckout(true)
                          setShowCart(false)
                        }}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-colors"
                      >
                        Proceed to Checkout
                      </button>
                      <button
                        onClick={clearCart}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition-colors"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal
          total={getTotalPrice()}
          onClose={() => setShowCheckout(false)}
          onComplete={() => {
            clearCart()
            setShowCheckout(false)
            alert('Order placed successfully! 🎉')
          }}
        />
      )}

      <footer className="text-center py-10 border-t border-sky-600/50 text-sky-300">
        <p>&copy; {new Date().getFullYear()} TechHub Pro. Your trusted premium electronics retailer.</p>
        <p className="text-sm mt-2 text-sky-400">Free shipping on orders over $50 • 30-day returns • 1-year warranty</p>
      </footer>
    </div>
  )
}

// Product Card Component
function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: (product: Product, color: string) => void }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/30">
      <div className="relative w-full aspect-square overflow-hidden">
        {product.featured && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold z-10">
            FEATURED
          </div>
        )}
        {product.originalPrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
            SALE
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
            <span className="text-white font-bold text-lg">OUT OF STOCK</span>
          </div>
        )}
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-yellow-300">{product.name}</h3>
        <p className="text-sky-100 text-sm mb-3 flex-grow line-clamp-2">
          {product.description}
        </p>
        
        <div className="mb-3">
          <div className="flex items-center mb-1">
            <span className="text-yellow-400">{'★'.repeat(Math.floor(product.rating))}</span>
            <span className="text-gray-400 text-sm ml-2">({product.reviews})</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>

        {product.colors.length > 1 && (
          <div className="mb-3">
            <span className="text-xs text-gray-300 block mb-1">Color:</span>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-2 py-1 text-xs rounded border ${
                    selectedColor === color
                      ? 'border-yellow-400 bg-yellow-400/20 text-yellow-300'
                      : 'border-gray-500 text-gray-300'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => onAddToCart(product, selectedColor)}
          disabled={!product.inStock}
          className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-slate-900 font-bold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 disabled:transform-none"
        >
          {product.inStock ? 'Add to Cart 🛒' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}

// Cart Item Component
function CartItemComponent({ 
  item, 
  onUpdateQuantity, 
  onRemove 
}: { 
  item: CartItem
  onUpdateQuantity: (id: string, color: string, quantity: number) => void
  onRemove: (id: string, color: string) => void
}) {
  return (
    <div className="flex items-center space-x-3 bg-slate-800 p-3 rounded-lg">
      <Image src={item.image} alt={item.name} width={64} height={64} className="object-cover rounded" />
      <div className="flex-grow">
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-gray-400">{item.selectedColor}</p>
        <p className="text-sm font-bold">${item.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity - 1)}
          className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded flex items-center justify-center"
        >
          -
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity + 1)}
          className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded flex items-center justify-center"
        >
          +
        </button>
        <button
          onClick={() => onRemove(item.id, item.selectedColor)}
          className="ml-2 text-red-400 hover:text-red-300"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

// Checkout Modal Component
function CheckoutModal({ 
  total, 
  onClose, 
  onComplete 
}: { 
  total: number
  onClose: () => void
  onComplete: () => void
}) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate payment processing
    setTimeout(() => {
      onComplete()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Checkout</h2>
            <button onClick={onClose} className="text-2xl hover:text-red-400">✕</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="p-3 bg-slate-700 rounded-lg text-white"
                required
              />
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="p-3 bg-slate-700 rounded-lg text-white"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="w-full p-3 bg-slate-700 rounded-lg text-white"
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="p-3 bg-slate-700 rounded-lg text-white"
                required
              />
              <input
                type="text"
                placeholder="ZIP Code"
                value={formData.zipCode}
                onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                className="p-3 bg-slate-700 rounded-lg text-white"
                required
              />
            </div>

            <div className="border-t border-gray-600 pt-4">
              <h3 className="text-lg font-semibold mb-3">Payment Information</h3>
              <input
                type="text"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                className="w-full p-3 bg-slate-700 rounded-lg text-white mb-3"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                  className="p-3 bg-slate-700 rounded-lg text-white"
                  required
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                  className="p-3 bg-slate-700 rounded-lg text-white"
                  required
                />
              </div>
            </div>

            <div className="border-t border-gray-600 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-colors"
              >
                Complete Order 💳
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 