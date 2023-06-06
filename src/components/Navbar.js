import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-4xl mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          <li>
          <Link href="/" className='text-white hover:text-gray-300'>
            Home
            </Link>
          </li>
          <li>
            <Link href="/DisplayUser" className='text-white hover:text-gray-300'>
            Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
