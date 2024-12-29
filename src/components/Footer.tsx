import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Sami.co</h3>
          <p>Your premium shopping destination for quality products.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>123 Shopping Street, Retail City, 12345</p>
          <p>Email: samiqaimkhani43@gmail.com</p>
          <p>Phone: (+92) 333-3739199</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2025 Sami.co. All rights reserved.</p>
      </div>
    </footer>
  )
}

