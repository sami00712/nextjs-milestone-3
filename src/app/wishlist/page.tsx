'use client'

import { useWishlist } from '@/context/WishlistContext'
import { useCart } from '@/context/CartContext'
import { Trash2, ShoppingCart } from 'lucide-react'
import toast from 'react-hot-toast'
import Image from 'next/image'

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleRemove = (id: number) => {
    removeFromWishlist(id)
    toast.success('Item removed from wishlist')
  }

  const handleAddToCart = (item: { id: number; name: string; price: number; image: string }) => {
    addToCart(item)
    removeFromWishlist(item.id)
    toast.success(`${item.name} added to cart!`)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-xl">Your wishlist is empty</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {wishlist.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md mr-4" />
                      {item.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => handleAddToCart(item)} className="text-blue-500 hover:text-blue-700 mr-4">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

