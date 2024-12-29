'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import toast from 'react-hot-toast'

export default function Checkout() {
  const { cart, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  })

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('Order submitted:', { ...formData, cart, total })
    toast.success('Order placed successfully!')
    clearCart()
    // Redirect to a thank you page or back to the home page
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center mb-4 bg-white p-4 rounded-lg shadow">
              <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md mr-4" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="text-xl font-semibold mt-4">
            Total: ${total.toFixed(2)}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="address" className="block mb-1">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="city" className="block mb-1">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="country" className="block mb-1">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

