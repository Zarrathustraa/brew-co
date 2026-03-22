import { Coffee, MapPin, Clock, Phone, Star } from 'lucide-react'

export function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header/Navigation */}
      <header className="bg-amber-900 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Brew & Co</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-amber-200 transition">About</a>
            <a href="#menu" className="hover:text-amber-200 transition">Menu</a>
            <a href="#location" className="hover:text-amber-200 transition">Visit Us</a>
            <a href="#contact" className="hover:text-amber-200 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Brew & Co</h2>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Crafted Coffee. Warm Vibes. Community.
          </p>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto mb-8">
            Specialty coffee roasted fresh daily. The perfect spot to work, relax, or catch up with friends.
          </p>
          <button className="bg-white text-amber-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-50 transition shadow-lg">
            Order Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-amber-900 mb-8 text-center">Our Story</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Brew & Co started as a passion project in 2018. We believed that a great cup of coffee should be accessible, 
                and that the experience around it matters just as much as the brew itself.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Today, we source our beans from ethical suppliers across three continents, roast them in-house, 
                and serve them in a space designed for connection and creativity.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're here for your daily espresso, a quiet morning with a book, or to collaborate with colleagues, 
                Brew & Co is your place.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg h-80 flex items-center justify-center shadow-xl">
              <Coffee className="w-40 h-40 text-amber-900 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-amber-900 mb-12 text-center">Featured Drinks</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'The Signature Blend',
                desc: 'Smooth, balanced, with notes of chocolate and caramel',
                price: '\$4.50'
              },
              {
                name: 'Golden Hour Latte',
                desc: 'Espresso + Honey + Oat Milk. Pure comfort in a cup.',
                price: '\$5.50'
              },
              {
                name: 'Cold Brew Iced',
                desc: '12-hour cold brew with vanilla cream. Perfect for hot days.',
                price: '\$4.75'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h4 className="text-2xl font-bold text-amber-900 mb-2">{item.name}</h4>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <p className="text-2xl font-bold text-amber-700">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-amber-900 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-800 transition">
              See Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-amber-900 mb-12 text-center">Why Choose Brew & Co?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '☕', title: 'Specialty Coffee', desc: 'Ethically sourced, freshly roasted daily' },
              { icon: '👥', title: 'Community', desc: 'A welcoming space for everyone' },
              { icon: '🌱', title: 'Sustainable', desc: 'Eco-friendly practices at our core' },
              { icon: '✨', title: 'Quality', desc: 'Premium ingredients, always' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-amber-900 mb-12 text-center">What People Love</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', review: 'Best coffee in the city. The atmosphere is perfect for working or catching up.', rating: 5 },
              { name: 'James T.', review: 'Friendly staff, excellent drinks, and the pastries are incredible!', rating: 5 },
              { name: 'Emma L.', review: 'Finally a coffee shop that takes sustainability seriously. Love this place!', rating: 5 }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex gap-1 mb-3">
                  {[...Array(item.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{item.review}"</p>
                <p className="font-bold text-amber-900">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-amber-900 mb-12 text-center">Visit Us</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-amber-50 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-amber-900 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-amber-900 text-lg">Location</h4>
                  <p className="text-gray-700">742 Coffee Lane</p>
                  <p className="text-gray-700">Portland, OR 97204</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-6 h-6 text-amber-900 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-amber-900 text-lg">Hours</h4>
                  <p className="text-gray-700">Monday - Friday: 6am - 8pm</p>
                  <p className="text-gray-700">Saturday - Sunday: 8am - 6pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-amber-900 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-amber-900 text-lg">Contact</h4>
                  <p className="text-gray-700">(555) 123-BREW</p>
                  <p className="text-gray-700">hello@brewandco.com</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg h-80 flex items-center justify-center shadow-xl">
              <MapPin className="w-40 h-40 text-amber-900 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-amber-900 to-amber-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-6">Ready for Your Next Coffee?</h3>
          <p className="text-xl text-amber-100 mb-8">
            Join us at Brew & Co for specialty coffee and great company.
          </p>
          <button className="bg-white text-amber-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-50 transition">
            Find Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Brew & Co. All rights reserved.</p>
          <p className="text-amber-200 mt-2">Crafted with ☕ and love</p>
        </div>
      </footer>
    </div>
  )
}
