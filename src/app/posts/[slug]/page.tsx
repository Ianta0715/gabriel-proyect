import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import PostCard from '@/components/PostCard'

interface PostPageProps {
  params: {
    slug: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link
          href="/posts"
          className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a posts</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          {/* Category */}
          <div className="flex items-center justify-between mb-6">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
              ${post.category === 'habilidades' ? 'bg-blue-100 text-blue-800' : 
                post.category === 'entrenador' ? 'bg-green-100 text-green-800' : 
                'bg-gray-100 text-gray-800'}`}
            >
              {post.category}
            </span>
            <button className="p-2 text-gray-500 hover:text-green-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('es-AR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} de lectura</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-700 mt-6 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 md:p-12">
          <div 
            className="prose prose-lg max-w-none text-gray-900
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-900 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-black prose-strong:font-semibold
              prose-em:text-green-600 prose-em:font-medium
              prose-ul:my-6 prose-li:my-2 prose-li:text-gray-900
              prose-a:text-green-600 prose-a:font-medium hover:prose-a:text-green-700"
            dangerouslySetInnerHTML={{ 
              __html: post.content.replace(/\n/g, '<br>').replace(/\*([^*]+)\*/g, '<em>$1</em>') 
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-8">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-green-50 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gabriel Herrera</h3>
              <p className="text-gray-700 mb-4">
                Entrenador de hockey sobre césped con experiencia internacional. 
                Cree en un hockey con contexto: donde formar, pensar y debatir es tan importante como competir.
              </p>
              <Link
                href="/sobre-mi"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Conocé más sobre Gabriel →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gray-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Te gustó este post?</h3>
          <p className="text-gray-300 mb-6">
            Conectá conmigo en redes sociales y seguí la conversación. 
            Compartamos ideas y construyamos una comunidad de entrenadores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contactame
            </Link>
            <a
              href="https://www.instagram.com/hockeyencontexto/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Seguime en Instagram
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Posts relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
