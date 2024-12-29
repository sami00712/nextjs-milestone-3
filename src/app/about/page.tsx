import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Sami.co</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/products/ab.webp" alt="About Sami.co" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2024, Sami.co has grown from a small local shop to a leading online retailer. Our mission is to provide high-quality products and exceptional customer service to shoppers around the world.
          </p>
          <p className="mb-4">
            We believe in the power of e-commerce to connect people with the products they love. Our team works tirelessly to curate a selection of items that meet our strict standards for quality, value, and style.
          </p>
          <p>
            At Sami.co, we're not just selling products – we're building relationships. We're committed to creating a shopping experience that's enjoyable, reliable, and tailored to your needs.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-500 underline decoration-black">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p>We never compromise on the quality of our products. Each item is carefully selected and tested to ensure it meets our high standards.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
            <p>Our customers are at the heart of everything we do. We strive to exceed your expectations in every interaction.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>We're always looking for new ways to improve our products and services. Innovation is key to our growth and success.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

