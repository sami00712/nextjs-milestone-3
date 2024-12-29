'use client'

import Link from 'next/link'
import { ShoppingCart, Heart, Menu } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()
  const { wishlist } = useWishlist()

  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Sami.co</Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="hover:text-blue-200">Home</Link>
          <Link href="/about" className="hover:text-blue-200">About</Link>
          <Link href="/contact" className="hover:text-blue-200">Contact</Link>
          <Link href="/cart" className="hover:text-blue-200 relative">
            <ShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </Link>
          <Link href="/wishlist" className="hover:text-blue-200 relative">
            <Heart />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {wishlist.length}
              </span>
            )}
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" className="block py-2 hover:text-blue-200">Home</Link>
          <Link href="/about" className="block py-2 hover:text-blue-200">About</Link>
          <Link href="/contact" className="block py-2 hover:text-blue-200">Contact</Link>
          <Link href="/cart" className="block py-2 hover:text-blue-200">Cart ({cart.length})</Link>
          <Link href="/wishlist" className="block py-2 hover:text-blue-200">Wishlist ({wishlist.length})</Link>
        </div>
      )}
    </nav>
  )
}

