import { Coffee, MapPin, Clock, Star, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { menuItems } from '@/data/menu'
import { reviews } from '@/data/reviews'

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-amber-950 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Coffee className="w-7 h-7" />
            <span>Brew & Co</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#menu" className="hover:text-amber-200 transition">Menu</a>
            <a href="#about" className="hover:text-amber-200 transition">About</a>
            <a href="#reviews" className="hover:text-amber-200 transition">Reviews</a>
            <a href="#contact" className="hover:text-amber-200 transition">Contact</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-amber-900 px-4 py-3 space-y-2">
            <a href="#menu" className="block hover:text-amber-200">Menu</a>
            <a href="#about" className="block hover:text-amber-200">About</a>
            <a href="#reviews" className="block hover:text-amber-200">Reviews</a>
            <a href="#contact" className="block hover:text-amber-200">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-100 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-950 mb-6">
            Brew & Co
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-8">
            Artisan Coffee Crafted with Passion
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the finest single-origin coffees and freshly baked pastries in a welcoming space designed for coffee lovers.
          </p>
          <button className="bg-amber-950 hover:bg-amber-900 text-white px-8 py-3 rounded-lg font-semibold transition">
            Reserve a Table
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-950 text-center mb-12">
            Our Menu
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Coffees */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">Coffee</h3>
              <div className="space-y-4">
                {menuItems.filter(m => m.category === 'coffee').map(item => (
                  <div key={item.id} className="border-b border-amber-200 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-amber-950">{item.name}</h4>
                      <span className="text-amber-700 font-bold">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pastries */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">Pastries</h3>
              <div className="space-y-4">
                {menuItems.filter(m => m.category === 'pastry').map(item => (
                  <div key={item.id} className="border-b border-amber-200 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-amber-950">{item.name}</h4>
                      <span className="text-amber-700 font-bold">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-950 text-center mb-12">
            About Brew & Co
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">Our Story</h3>
              <p className="text-gray-700 mb-4">
                Brew & Co was founded on the belief that great coffee brings people together. 
                We source our beans directly from sustainable farms around the world, ensuring 
                every cup tells a story of craftsmanship and care.
              </p>
              <p className="text-gray-700">
                From our expert baristas to our carefully curated pastry selection, everything 
                at Brew & Co is designed to create an unforgettable coffee experience.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-amber-950 mb-2">Visit Us</h4>
                  <p className="text-gray-700">123 Coffee Lane, Brew City, BC 12345</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-amber-950 mb-2">Hours</h4>
                  <p className="text-gray-700">Mon-Fri: 6am - 7pm</p>
                  <p className="text-gray-700">Sat-Sun: 7am - 8pm</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Coffee className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-amber-950 mb-2">Specialty</h4>
                  <p className="text-gray-700">Single-origin espresso & fresh pastries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-950 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map(review => (
              <div key={review.id} className="bg-amber-50 rounded-lg p-6">
                <div className="flex gap-1 mb-3">
                  {Array(review.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.content}"</p>
                <p className="font-semibold text-amber-950">{review.author}</p>
                <p className="text-sm text-gray-600">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-amber-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8 text-amber-100">
            Have a question? We'd love to hear from you.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div>
              <p className="text-amber-200">Phone</p>
              <p className="text-xl font-semibold">(555) 123-4567</p>
            </div>
            <div className="hidden md:block text-amber-200">•</div>
            <div>
              <p className="text-amber-200">Email</p>
              <p className="text-xl font-semibold">hello@brewandco.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 px-4 text-center">
        <p className="text-amber-100">
          © 2024 Brew & Co. Crafted with ☕ and passion.
        </p>
      </footer>
    </div>
  )
}
