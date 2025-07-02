import { MapPin, Award, Users, Heart } from "lucide-react";
import Link from "next/link";

export default function SobreMiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gabriel Herrera
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8">
            Entrenador de Hockey sobre Césped
          </p>
          <p className="text-lg text-green-200 max-w-2xl mx-auto">
            Creo en un hockey con contexto: donde formar, pensar y debatir 
            es tan importante como competir.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Experience Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Internacional</h3>
            <p className="text-sm text-gray-600">Argentina, España, Italia, Bélgica</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Experiencia</h3>
            <p className="text-sm text-gray-600">Múltiples campeonatos</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Formación</h3>
            <p className="text-sm text-gray-600">Jugadores y entrenadores</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <Heart className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Pasión</h3>
            <p className="text-sm text-gray-600">Hockey con contexto</p>
          </div>
        </div>

        {/* Biography */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mi Historia</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Soy entrenador de hockey sobre césped con experiencia internacional en 
              Argentina, España, Italia y Bélgica. Me formé en distintos países y niveles, 
              y trabajo tanto en la cancha como fuera de ella, acompañando procesos de 
              jugadores, entrenadores y estructuras deportivas.
            </p>
            <p>
              Mi carrera como entrenador me ha llevado por diferentes culturas del hockey, 
              cada una con sus propias metodologías, filosofías y enfoques. Esta diversidad 
              de experiencias me ha enseñado que no existe una única forma correcta de 
              enseñar o entrenar hockey, sino múltiples caminos que pueden llevar al éxito.
            </p>
            <p>
              He dirigido equipos, coordinado procesos, ganado campeonatos y formado jugadores. 
              Pero lo que más me marcó no fueron los resultados, sino las conversaciones con 
              colegas, los momentos en los que nos animamos a pensar distinto, a cuestionar 
              lo que hacemos, a abrirnos a otras miradas.
            </p>
            <p>
              <strong>Creo en un hockey con contexto:</strong> donde formar, pensar y debatir 
              es tan importante como competir. Donde los entrenadores somos formadores integrales, 
              no solo instructores técnicos.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mi Filosofía</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Contexto sobre técnica:</strong> La técnica perfecta no existe en abstracto. 
                Existe la técnica adecuada para cada situación.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Preguntas sobre certezas:</strong> Los mejores entrenadores son aquellos 
                que siguen haciéndose preguntas y cuestionando sus métodos.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Comunidad sobre individualidad:</strong> Crecemos más cuando compartimos 
                conocimientos y experiencias con otros entrenadores.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Formación integral:</strong> Nuestro rol va más allá de enseñar hockey; 
                somos formadores de personas.
              </p>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">En qué trabajo actualmente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">En la cancha</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Entrenamiento de equipos competitivos</li>
                <li>• Desarrollo de jóvenes talentos</li>
                <li>• Asesoramiento técnico-táctico</li>
                <li>• Programas de formación de entrenadores</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fuera de la cancha</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Creación de contenido educativo</li>
                <li>• Mentoría de entrenadores jóvenes</li>
                <li>• Investigación en metodologías</li>
                <li>• Construcción de esta comunidad</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Community Vision */}
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Una comunidad de entrenadores</h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Una comunidad de entrenadores con más preguntas que certezas.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Si te gusta pensar el hockey, compartir lo que sabés y escuchar otras miradas, 
            este blog es para vos. Hagamos una comunidad de personas de hockey para personas de hockey.
          </p>
          <Link
            href="/contacto"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
          >
            Conectemos
          </Link>
        </div>
      </div>
    </div>
  );
}
