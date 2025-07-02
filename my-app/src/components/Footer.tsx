import Link from 'next/link'
import { Instagram, Twitter, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🏑</span>
              </div>
              <h3 className="text-xl font-bold">Hockey en Contexto</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Donde el hockey se piensa distinto. Una comunidad de entrenadores 
              con más preguntas que certezas.
            </p>
            <p className="text-gray-400 text-sm">
              Hagamos una comunidad de personas de hockey para personas de hockey.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/posts" className="text-gray-400 hover:text-green-400 transition-colors">
                Todos los Posts
              </Link>
              <Link href="/habilidades" className="text-gray-400 hover:text-green-400 transition-colors">
                Habilidades
              </Link>
              <Link href="/entrenador" className="text-gray-400 hover:text-green-400 transition-colors">
                Para Entrenadores
              </Link>
              <Link href="/sobre-mi" className="text-gray-400 hover:text-green-400 transition-colors">
                Sobre Gabriel
              </Link>
              <Link href="/contacto" className="text-gray-400 hover:text-green-400 transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contacto y redes sociales */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Conectá conmigo</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.instagram.com/hockeyencontexto/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@hockeyencontexto</span>
              </a>
              <a
                href="https://x.com/gabilan17her"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>@gabilan17her</span>
              </a>
              <a
                href="mailto:gaseherrera@hotmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>gaseherrera@hotmail.com</span>
              </a>
              <a
                href="https://wa.me/+393285643148"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Hockey en Contexto. Hecho con 🏑 por Gabriel Herrera.
          </p>
        </div>
      </div>
    </footer>
  )
}
