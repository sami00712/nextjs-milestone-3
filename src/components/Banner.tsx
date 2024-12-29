import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="relative bg-blue-900 text-white overflow-hidden mb-7">
      <div className="absolute inset-0">
        <Image
          src="/products/bg.png"
          alt="Winter Sale Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Winter Wonderland Sale
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8">
          Enjoy up to 50% off on selected items!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/products" className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
            Shop Now
          </Link>
          <Link href="/sale-items" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-900 transition duration-300">
            View Sale Items
          </Link>
        </div>
      </div>
    </div>
  )
}

