import type { Metadata } from 'next';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tech City Index',
  description: 'Find the best cities for tech workers based on salary and cost of living.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={GeistSans.className}>
        <div className='min-h-screen flex flex-col bg-gray-50'>
          <header className='bg-white shadow-sm'>
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex justify-between h-16 items-center'>
                <div className='flex'>
                  <Link href='/' className='flex items-center'>
                    <span className='text-xl font-bold text-gray-900'>Tech Cities Index</span>
                  </Link>
                </div>
                <div className='flex items-center space-x-4'>
                  <Link
                    href='/about'
                    className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
                  >
                    About
                  </Link>
                </div>
              </div>
            </nav>
          </header>

          <main className='flex-1'>{children}</main>

          <footer className='bg-white border-t border-gray-200'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
              <div className='flex flex-col items-center justify-center space-y-4'>
                <p className='text-gray-600 text-sm text-center'>
                  Built with ❤️ by{' '}
                  <Link
                    href='https://mohamed3on.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:text-blue-800 font-medium'
                  >
                    Mohamed Oun
                  </Link>
                </p>
                <div className='flex space-x-6'>
                  <Link href='/' className='text-gray-500 hover:text-gray-700'>
                    Home
                  </Link>
                  <Link
                    href='https://twitter.com/mohamed3on'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-500 hover:text-gray-700'
                  >
                    Twitter
                  </Link>
                  <Link
                    href='https://github.com/mohamed3on'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-500 hover:text-gray-700'
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
