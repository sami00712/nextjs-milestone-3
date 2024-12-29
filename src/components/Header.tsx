'use client'

import { useState } from 'react'
import { Snowflake, X } from 'lucide-react'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-6 relative mb-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Snowflake className="w-8 h-8 text-blue-200" />
          <div>
            <h2 className="text-2xl font-bold">Winter Sale: 50% OFF!</h2>
            <p className="text-blue-200">Limited time offer. Don't miss out!</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-blue-800 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300">
            Shop Now
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-blue-200 hover:text-white transition-colors duration-300"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
    <div>

    </div>
    </div>
    
  )
}

