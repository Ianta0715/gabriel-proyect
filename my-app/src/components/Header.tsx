'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🏑</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-900">Hockey en Contexto</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Donde el hockey se piensa distinto</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Inicio
            </Link>
            <Link href="/posts" className="text-gray-700 hover:text-green-600 transition-colors">
              Posts
            </Link>
            <Link href="/habilidades" className="text-gray-700 hover:text-green-600 transition-colors">
              Habilidades
            </Link>
            <Link href="/entrenador" className="text-gray-700 hover:text-green-600 transition-colors">
              Entrenador
    </Link>
            <Link href="/sobre-mi" className="text-gray-700 hover:text-green-600 transition-colors">
              Sobre mí
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-green-600 transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Inicio
              </Link>
              <Link href="/posts" className="text-gray-700 hover:text-green-600 transition-colors">
                Posts
              </Link>
              <Link href="/habilidades" className="text-gray-700 hover:text-green-600 transition-colors">
                Habilidades
              </Link>
              <Link href="/entrenador" className="text-gray-700 hover:text-green-600 transition-colors">
                Entrenador
              </Link>
              <Link href="/sobre-mi" className="text-gray-700 hover:text-green-600 transition-colors">
                Sobre mí
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-green-600 transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
