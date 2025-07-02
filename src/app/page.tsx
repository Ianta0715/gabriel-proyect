<<<<<<< HEAD
import PostCard from "../components/PostCard";
import { getAllPosts, getFeaturedPosts } from "../lib/posts";
=======
import PostCard from "@/components/PostCard";
import { getAllPosts, getFeaturedPosts } from "@/lib/posts";
>>>>>>> cca40ab59172cd3464c54b2028437ba1aaf1bada
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Users, BookOpen } from "lucide-react";

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getAllPosts().slice(0, 4);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hockey en Contexto
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Donde el hockey se piensa distinto
            </p>
            <p className="text-lg mb-8 text-green-200 max-w-2xl mx-auto">
              Un espacio para entrenadores que buscan crecer, debatir y conectar. 
              Porque formar, pensar y debatir es tan importante como competir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/posts"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Explorar Posts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/sobre-mi"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
              >
                Conocé a Gabriel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Por qué un blog?</h2>
            <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
              <p>
                Hace tiempo que siento la necesidad de poner en palabras lo que pienso sobre el hockey. 
                No desde un lugar de certezas, sino desde la curiosidad, la experiencia compartida, 
                las preguntas que se repiten y los temas que muchas veces no tenemos tiempo de charlar 
                en una cancha o en un vestuario.
              </p>
              <p>
                Trabajo hace años como entrenador. He dirigido equipos, coordinado procesos, ganado campeonatos, 
                formado jugadores. Pero lo que más me marcó no fueron los resultados, sino las conversaciones 
                con colegas, los momentos en los que nos animamos a pensar distinto, a cuestionar lo que hacemos, 
                a abrirnos a otras miradas.
              </p>
              <p className="font-medium text-green-600">
                Este blog nace de ahí: de las ganas de crear un espacio para entrenadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Una comunidad para entrenadores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Conceptos y Técnica</h3>
              <p className="text-gray-600">
                Exploramos habilidades técnicas y conceptos tácticos desde una perspectiva práctica y reflexiva.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Formación de Entrenadores</h3>
              <p className="text-gray-600">
                Compartimos experiencias, desafíos y aprendizajes del día a día como formadores.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Debate y Reflexión</h3>
              <p className="text-gray-600">
                Un espacio para cuestionarnos, debatir ideas y crecer como comunidad de entrenadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-900">
            <Image
              src="/assets/service.jpg"
              alt="Hockey players training"
              fill
              className="object-cover object-center opacity-70"
              priority
            />
            </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white bg-opacity-50 px-4 py-2 rounded">Posts Destacados</h2>
              <Link
                href="/posts"
                className="text-white bg-opacity-50 px-3 py-1 rounded hover:bg-opacity-70 font-medium inline-flex items-center"
              >
                Ver todos
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16 mt-2 mb-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <Image
            src="/assets/player.jpg"
            alt="Hockey players training"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Posts Recientes</h2>
            <Link
              href="/posts"
              className="text-white hover:text-green-700 font-medium inline-flex items-center"
            >
              Ver todos
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hagamos una comunidad de personas de hockey para personas de hockey
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Si te gusta pensar el hockey, compartir lo que sabés y escuchar otras miradas, 
            este blog es para vos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Conectá conmigo
            </Link>
            <a
              href="https://www.instagram.com/hockeyencontexto/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
            >
              Seguinos en Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
