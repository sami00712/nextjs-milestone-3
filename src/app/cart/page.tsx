'use client'

import { useCart } from '@/context/CartContext'
import { Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleRemove = (id: number) => {
    removeFromCart(id)
    toast.success('Item removed from cart')
  }

  const handleClearCart = () => {
    clearCart()
    toast.success('Cart cleared')
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty</p>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md mr-4" />
                        {item.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <button onClick={handleClearCart} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">
              Clear Cart
            </button>
            <div className="text-xl font-semibold">
              Total: ${total.toFixed(2)}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/checkout" className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors duration-300 text-lg font-semibold inline-block">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

