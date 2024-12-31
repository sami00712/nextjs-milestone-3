import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Star } from 'lucide-react'
import AddToCartButton from '@/components/AddToCartButton'
import WishlistButton from '@/components/WishlistButton'
import { Product } from '@/types'
import { useEffect } from 'react'

async function getProduct(): Promise<Product> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  const res = await fetch(`${apiUrl}/api/products`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}




export default async function ProductPage() {
  const product = await getProduct()

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image src={product.image} alt={product.name} width={500} height={500} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1">{product.reviews}</span>
          </div>
          <p className="mb-4">Color: {product.color}</p>
          <p className="mb-8">{product.description}</p>
          <div className="flex space-x-4">
            <AddToCartButton product={product} />
            <WishlistButton product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}

