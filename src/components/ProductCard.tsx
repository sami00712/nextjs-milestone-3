'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { Product } from '../types'
import toast from 'react-hot-toast'

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(product.id))

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })
    toast.success(`${product.name} added to cart!`)
  }

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id)
      toast.success(`${product.name} removed from wishlist!`)
    } else {
      addToWishlist({ id: product.id, name: product.name, price: product.price, image: product.image })
      toast.success(`${product.name} added to wishlist!`)
    }
    setIsWishlisted(!isWishlisted)
  }

  return (
    <div className="border rounded-lg p-4 flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover mb-4 rounded" />
      </Link>
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
      <div className="flex items-center mb-2">
        <Star className="w-5 h-5 text-yellow-400 fill-current" />
        <span className="ml-1">{product.reviews}</span>
      </div>
      <div className="mt-auto flex justify-between items-center">
        <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
          <ShoppingCart className="w-5 h-5 inline mr-2" />
          Add to Cart
        </button>
        <button onClick={toggleWishlist} className={`p-2 rounded-full ${isWishlisted ? 'text-red-500' : 'text-gray-400'} hover:bg-gray-100 transition-colors duration-300`}>
          <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>
    </div>
  )
}

